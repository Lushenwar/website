// ================================================================
// models.js — Cinematic 3D Model Viewer
// ================================================================

import * as THREE          from 'three';
import { OrbitControls }   from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }      from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader }     from 'three/addons/loaders/DRACOLoader.js';
import { RGBELoader }      from 'three/addons/loaders/RGBELoader.js';
import { EffectComposer }  from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass }      from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import gsap                from 'gsap';
import anime               from 'animejs';

// ── Model definitions ──────────────────────────────────────────
const MODELS = [
  { label: 'CHE',               file: 'glb/che.glb',
    hudCoords: 'X +1.337  Y +0.421  Z -2.718', hudSpec: 'SCULPT · PBR · HDRI LIT' },
  { label: 'CAT DISPENSER',     file: 'glb/cat_dispenser.glb',
    hudCoords: 'X -0.618  Y +1.141  Z +3.302', hudSpec: 'MECH · RIGGED · PBR'     },
  { label: 'PAINTERLY COTTAGE', file: 'glb/painterly_cottage.glb',
    hudCoords: 'X +2.718  Y +0.000  Z -1.337', hudSpec: 'ARCH · HANDPAINT · NPR'  },
];

// Site palette
const C_COBALT   = 0x60a5d4;
const C_LAVENDER = 0xc08fff;
const C_PENCIL   = 0xf5c430;

// ── Renderer / scene globals ────────────────────────────────────
let renderer     = null;
let composer     = null;
let scene        = null;
let camera       = null;
let controls     = null;
let animId       = null;
let activeObj    = null;
let inited       = false;
let isActive     = false;
let currentIndex = 0;

const mouseTgt = { x: 0, y: 0 };
const parallax = { x: 0, y: 0 };

// ── Hold-interaction state machine ─────────────────────────────
//  IDLE → PRESS_PENDING (200 ms still-hold) → HOLDING → RETURNING → IDLE
//
//  holdActive      : true only while a GSAP tween owns the camera.
//                    Tick must not call controls.update() during this.
//  holdMouseActive : true from the triggering mousedown until that
//                    same button is released — never cleared mid-tween.
//                    Guarantees mouseup always exits HOLDING.
const HoldState = {
  IDLE: 'IDLE', PRESS_PENDING: 'PRESS_PENDING',
  HOLDING: 'HOLDING', RETURNING: 'RETURNING',
};
let holdState       = HoldState.IDLE;
let holdTimer       = null;
let holdActive      = false;
let holdMouseActive = false;
let isMouseDown     = false;

const pressStart = { x: 0, y: 0 };

// Snapshot taken at hold-entry; the return tween goes back here
// so zoom-in and zoom-out follow the exact same arc.
let preHoldPos    = null;
let preHoldTarget = null;

// Previous mouse position — for delta-based manual orbit while held
let prevMouseX = 0;
let prevMouseY = 0;

// Canonical view stored per model-load (fallback only)
const defaultView = { pos: null, target: null };

// ── Effect state (rebuilt per model) ───────────────────────────
let effectsGroup    = null;
let idleParticleGeo = null;
let idleParticleVel = null;
let idleAnims       = [];   // anime instances for idle layer
let holdAnims       = [];   // anime instances for hold layer

// ── HUD overlay DOM elements (built once) ──────────────────────
let hudElements = null;

// ================================================================
// SCENE BOOTSTRAP
// ================================================================
function buildScene() {
  const canvas = document.getElementById('models-canvas');

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace    = THREE.SRGBColorSpace;
  renderer.toneMapping         = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled   = true;
  renderer.shadowMap.type      = THREE.PCFSoftShadowMap;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050505);
  // Lighter fog so the starfield stays readable in the distance
  scene.fog = new THREE.FogExp2(0x050505, 0.009);

  camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.01, 200);
  camera.position.set(0, 1.2, 8);

  // HDRI environment — drives all PBR reflections
  const pmremGen = new THREE.PMREMGenerator(renderer);
  pmremGen.compileEquirectangularShader();
  new RGBELoader().load(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/equirectangular/royal_esplanade_1k.hdr',
    tex => {
      const envMap = pmremGen.fromEquirectangular(tex).texture;
      scene.environment = envMap;
      tex.dispose();
      pmremGen.dispose();
    }
  );

  // ── Reflective floor disc ─────────────────────────────────────
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(14, 64),
    new THREE.MeshPhysicalMaterial({
      color: 0x111111, metalness: 0.85, roughness: 0.15, envMapIntensity: 1.0,
    })
  );
  ground.rotation.x   = -Math.PI / 2;
  ground.position.y   = -0.01;
  ground.receiveShadow = true;
  scene.add(ground);

  // ── Space starfield (anime.js-animated twinkling) ─────────────
  buildStarfield();

  // ── OrbitControls ─────────────────────────────────────────────
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping   = true;
  controls.dampingFactor   = 0.05;
  controls.autoRotate      = true;
  controls.autoRotateSpeed = 0.4;
  controls.enablePan       = false;
  controls.minDistance     = 1.2;
  controls.maxDistance     = 28;
  controls.minPolarAngle   = Math.PI * 0.12;
  controls.maxPolarAngle   = Math.PI * 0.44;  // ~79° — camera stays above the floor

  // ── Post-processing ───────────────────────────────────────────
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight), 0.45, 0.75, 0.85
  ));

  window.addEventListener('resize',    onResize);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mousedown', () => { isMouseDown = true;  });
  window.addEventListener('mouseup',   () => { isMouseDown = false; });
  canvas.addEventListener('mousedown', onCanvasMouseDown);
  window.addEventListener('mouseup',   onCanvasMouseUp);
  window.addEventListener('keydown',   e => {
    if (e.key === 'Escape' && holdState === HoldState.HOLDING) exitHolding();
  });
}

// ── Space starfield ────────────────────────────────────────────
// Three layers of points (white, cobalt, pencil-gold) distributed on
// a sphere at r ≈ 60–70. fog:false keeps them crisp against the dark.
// anime.js drives slow independent twinkling on each layer.
function buildStarfield() {
  function makeLayer(count, color, size, opacity, rMin, rMax) {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = rMin + Math.random() * (rMax - rMin);
      pos[i*3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i*3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i*3 + 2] = r * Math.cos(phi);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({
      color, size, transparent: true, opacity,
      sizeAttenuation: true, fog: false, depthWrite: false,
    });
    return { points: new THREE.Points(geo, mat), mat, opacity };
  }

  const layers = [
    makeLayer(2200, 0xddeeff, 0.08, 0.60, 58, 72),  // blue-white field
    makeLayer( 350, C_COBALT, 0.15, 0.55, 58, 72),  // cobalt accents
    makeLayer(  90, C_PENCIL, 0.24, 0.80, 60, 68),  // gold brightest stars
  ];

  const group = new THREE.Group();
  layers.forEach(l => group.add(l.points));
  scene.add(group);

  // anime.js: each layer twinkles at its own rhythm
  layers.forEach((l, i) => {
    const lo = l.opacity * 0.35;
    const hi = l.opacity;
    anime({
      targets: l.mat,
      opacity: [lo, hi],
      duration: 2200 + i * 850,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      delay: i * 550,
    });
  });

  // Very slow starfield drift — barely perceptible, adds life
  anime({
    targets: group.rotation,
    y: Math.PI * 2,
    duration: 200000,
    easing: 'linear',
    loop: true,
  });
}

// ================================================================
// INPUT HANDLERS
// ================================================================
function onResize() {
  if (!renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  composer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(e) {
  // Delta from last frame — used for manual orbit while zoomed
  const dx = e.clientX - prevMouseX;
  const dy = e.clientY - prevMouseY;
  prevMouseX = e.clientX;
  prevMouseY = e.clientY;

  mouseTgt.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
  mouseTgt.y = -(e.clientY / window.innerHeight - 0.5) * 2;

  // Cancel hold if the user starts dragging during the 200 ms window
  if (holdState === HoldState.PRESS_PENDING) {
    const ddx = e.clientX - pressStart.x;
    const ddy = e.clientY - pressStart.y;
    if (ddx * ddx + ddy * ddy > 25) {  // 5 px threshold²
      clearTimeout(holdTimer);
      holdTimer       = null;
      holdMouseActive = false;
      holdState       = HoldState.IDLE;
    }
    return;
  }

  // Manual orbit while the mouse button is physically held during HOLDING.
  // OrbitControls is disabled at this point so we drive rotation ourselves
  // via spherical coordinates around controls.target.
  if (holdState === HoldState.HOLDING && !holdActive && isMouseDown) {
    const offset   = camera.position.clone().sub(controls.target);
    const sph      = new THREE.Spherical().setFromVector3(offset);
    sph.theta     -= dx * 0.008;
    sph.phi       -= dy * 0.008;
    sph.phi        = THREE.MathUtils.clamp(
      sph.phi, controls.minPolarAngle, controls.maxPolarAngle
    );
    offset.setFromSpherical(sph);
    camera.position.copy(controls.target).add(offset);
    camera.lookAt(controls.target);
  }
}

// ================================================================
// HOLD STATE MACHINE
// ================================================================
function onCanvasMouseDown(e) {
  if (holdState !== HoldState.IDLE) return;
  pressStart.x    = e.clientX;
  pressStart.y    = e.clientY;
  holdMouseActive = true;
  holdState       = HoldState.PRESS_PENDING;
  holdTimer       = setTimeout(() => {
    if (holdState === HoldState.PRESS_PENDING) enterHolding();
  }, 200);
}

function onCanvasMouseUp() {
  // Only act on the mousedown that our machine owns
  if (!holdMouseActive) return;
  holdMouseActive = false;

  if (holdState === HoldState.PRESS_PENDING) {
    clearTimeout(holdTimer);
    holdTimer = null;
    holdState = HoldState.IDLE;
    return;
  }

  // Release while zooming in or while fully zoomed → always exit
  if (holdState === HoldState.HOLDING) {
    exitHolding();
  }
}

// ── Camera view helpers ────────────────────────────────────────
// getHoldingView: zooms along the CURRENT orbit direction so there
// is no teleporting — the camera just moves closer on its existing
// arc around the model.
function getHoldingView() {
  if (!activeObj) return { pos: { x: 0, y: 2, z: 5 }, target: { x: 0, y: 1, z: 0 } };
  const box    = new THREE.Box3().setFromObject(activeObj);
  const center = box.getCenter(new THREE.Vector3());
  const size   = box.getSize(new THREE.Vector3());
  const fov    = camera.fov * (Math.PI / 180);

  // Distance to frame the model height at ~80 % of vertical FOV
  const holdDist = (size.y * 0.5) / Math.tan(fov / 2) * 1.4;

  // Model center in world space (X and Z are ~0 after normalisation)
  const tgt = new THREE.Vector3(0, center.y, 0);

  // Direction the camera currently faces toward the target
  const dir    = camera.position.clone().sub(tgt).normalize();
  const newPos = tgt.clone().add(dir.multiplyScalar(holdDist));
  // Prevent the camera from diving below the floor
  newPos.y = Math.max(center.y * 0.25, newPos.y);

  return {
    pos:    { x: newPos.x, y: newPos.y, z: newPos.z },
    target: { x: tgt.x,   y: tgt.y,   z: tgt.z    },
  };
}

// ── Enter HOLDING ──────────────────────────────────────────────
function enterHolding() {
  holdState  = HoldState.HOLDING;
  holdActive = true;                // GSAP owns camera; tick pauses controls
  controls.enabled    = false;
  controls.autoRotate = false;
  parallax.x = 0;
  parallax.y = 0;

  // Snapshot the camera's current position and orbit target.
  // exitHolding returns to these exactly so zoom-in and zoom-out
  // follow the same arc — no jump to a canonical "front" view.
  preHoldPos    = camera.position.clone();
  preHoldTarget = controls.target.clone();

  setHint('hold · drag to orbit · esc to exit');
  showHudElements();
  transitionEffectsToHold();

  const hv = getHoldingView();
  gsap.killTweensOf(camera.position);
  gsap.killTweensOf(controls.target);

  gsap.to(camera.position, { x: hv.pos.x, y: hv.pos.y, z: hv.pos.z,
    duration: 1.5, ease: 'power3.inOut' });

  gsap.to(controls.target, { x: hv.target.x, y: hv.target.y, z: hv.target.z,
    duration: 1.5, ease: 'power3.inOut',
    onComplete: () => {
      // Tween done — release tick but keep controls disabled.
      // holdMouseActive is INTENTIONALLY left true so the eventual
      // mouseup still triggers exitHolding.
      holdActive = false;
      controls.update();  // sync internal spherical coords
    },
  });
}

// ── Exit HOLDING ───────────────────────────────────────────────
function exitHolding() {
  if (holdState === HoldState.RETURNING) return;
  holdState  = HoldState.RETURNING;
  holdActive = true;
  controls.enabled = false;

  transitionEffectsToIdle();
  hideHudElements(() => {
    if (!preHoldPos) { resetHoldState(); return; }

    // Zoom out along the CURRENT camera direction (the angle the user
    // ended up at after orbiting while held), but restore the pre-hold
    // distance so the framing matches what it was before zooming in.
    const tgt     = controls.target.clone();
    const dir     = camera.position.clone().sub(tgt).normalize();
    const origDist = preHoldPos.distanceTo(preHoldTarget ?? tgt);
    const retPos   = tgt.clone().add(dir.multiplyScalar(origDist));
    // Prevent camera from going below floor
    retPos.y = Math.max(0.05, retPos.y);

    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);

    gsap.to(camera.position, {
      x: retPos.x, y: retPos.y, z: retPos.z,
      duration: 1.5, ease: 'power3.inOut',
    });
    gsap.to(controls.target, {
      x: tgt.x, y: tgt.y, z: tgt.z,
      duration: 1.5, ease: 'power3.inOut',
      onComplete: resetHoldState,
    });
  });
}

function resetHoldState() {
  holdActive      = false;
  holdMouseActive = false;
  holdState       = HoldState.IDLE;
  controls.enabled    = true;
  controls.autoRotate = true;
  controls.update();
  setHint('hold · drag · scroll');
}

// ================================================================
// VISUAL EFFECTS — idle ambience + hold scanner
// Rebuilt from the live bounding box on each model load so ring
// sizes and positions are always correct for every model.
// anime.js drives all effect animations.
// ================================================================

function buildEffects() {
  disposeEffects();
  if (!activeObj) return;

  const box    = new THREE.Box3().setFromObject(activeObj);
  const center = box.getCenter(new THREE.Vector3());
  const size   = box.getSize(new THREE.Vector3());

  // Circumscribed footprint radius (wraps all four corners) + 15 % breathing room
  const halfW = size.x / 2;
  const halfD = size.z / 2;
  const footR = Math.sqrt(halfW * halfW + halfD * halfD) * 1.15;

  effectsGroup = new THREE.Group();

  // ── IDLE LAYER ─────────────────────────────────────────────────
  const idleLayer = new THREE.Group();
  idleLayer.name  = 'idle';

  // Pulsing base ring — cobalt glow at ground level
  const baseRingGeo = new THREE.RingGeometry(footR * 0.90, footR * 1.00, 80);
  const baseRingMat = new THREE.MeshBasicMaterial({
    color: C_COBALT, transparent: true, opacity: 0.13,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const baseRing = new THREE.Mesh(baseRingGeo, baseRingMat);
  baseRing.rotation.x = -Math.PI / 2;
  baseRing.position.y =  0.006;
  idleLayer.add(baseRing);

  // Floating particles — drift upward, wrap at top (updated in tick)
  const pCount = 55;
  const pPos   = new Float32Array(pCount * 3);
  idleParticleVel = new Float32Array(pCount);
  for (let i = 0; i < pCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r     = footR * (0.6 + Math.random() * 0.8);
    pPos[i*3]     = Math.cos(angle) * r;
    pPos[i*3 + 1] = Math.random() * size.y * 1.1;
    pPos[i*3 + 2] = Math.sin(angle) * r;
    idleParticleVel[i] = 0.004 + Math.random() * 0.007;
  }
  idleParticleGeo = new THREE.BufferGeometry();
  idleParticleGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0xffffff, size: 0.028, transparent: true, opacity: 0.22,
    sizeAttenuation: true, depthWrite: false,
  });
  idleLayer.add(new THREE.Points(idleParticleGeo, pMat));

  effectsGroup.userData.idleLayer   = idleLayer;
  effectsGroup.userData.baseRingMat = baseRingMat;
  effectsGroup.userData.baseRing    = baseRing;
  effectsGroup.userData.idleMaxY    = size.y * 1.3;
  effectsGroup.add(idleLayer);

  // Start idle animations
  startIdleAnims(baseRingMat, baseRing);

  // ── HOLD LAYER ─────────────────────────────────────────────────
  const holdLayer = new THREE.Group();
  holdLayer.name    = 'hold';
  holdLayer.visible = false;

  // Scan ring — sweeps bottom-to-top
  const scanInner = footR * 0.95;
  const scanOuter = footR * 1.02;
  const scanGeo   = new THREE.RingGeometry(scanInner, scanOuter, 80);
  const scanMat   = new THREE.MeshBasicMaterial({
    color: C_COBALT, transparent: true, opacity: 0.0,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const scanRing = new THREE.Mesh(scanGeo, scanMat);
  scanRing.rotation.x = -Math.PI / 2;
  scanRing.position.y =  0;
  holdLayer.add(scanRing);

  // Wider glow halo on the scan plane (child so it follows scanRing)
  const glowGeo = new THREE.RingGeometry(scanOuter, scanOuter + footR * 0.10, 80);
  const glowMat = new THREE.MeshBasicMaterial({
    color: C_COBALT, transparent: true, opacity: 0.0,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const glowRing = new THREE.Mesh(glowGeo, glowMat);
  scanRing.add(glowRing);  // moves with scan ring

  // Orbit ring A — lavender, gentle positive tilt
  const orbitInnerA = footR * 1.28;
  const orbitGeoA   = new THREE.RingGeometry(orbitInnerA, orbitInnerA + 0.018, 80);
  const orbitMatA   = new THREE.MeshBasicMaterial({
    color: C_LAVENDER, transparent: true, opacity: 0.0,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const orbitA = new THREE.Mesh(orbitGeoA, orbitMatA);
  orbitA.rotation.x = -Math.PI / 2 + 0.42;
  orbitA.rotation.z =  0.18;
  orbitA.position.y = center.y;
  holdLayer.add(orbitA);

  // Orbit ring B — cobalt, opposing tilt, wider
  const orbitInnerB = footR * 1.62;
  const orbitGeoB   = new THREE.RingGeometry(orbitInnerB, orbitInnerB + 0.018, 80);
  const orbitMatB   = new THREE.MeshBasicMaterial({
    color: C_COBALT, transparent: true, opacity: 0.0,
    side: THREE.DoubleSide, depthWrite: false,
  });
  const orbitB = new THREE.Mesh(orbitGeoB, orbitMatB);
  orbitB.rotation.x = -Math.PI / 2 - 0.36;
  orbitB.rotation.z = -0.28;
  orbitB.position.y = center.y;
  holdLayer.add(orbitB);

  // Accent dot cluster — 8 pencil-gold points circling at mid-height
  const dotCount = 8;
  const dotPos   = new Float32Array(dotCount * 3);
  for (let i = 0; i < dotCount; i++) {
    const a = (i / dotCount) * Math.PI * 2;
    dotPos[i*3]     = Math.cos(a) * footR * 1.08;
    dotPos[i*3 + 1] = center.y + Math.sin(a * 1.5) * size.y * 0.18;
    dotPos[i*3 + 2] = Math.sin(a) * footR * 1.08;
  }
  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPos, 3));
  const dotMat = new THREE.PointsMaterial({
    color: C_PENCIL, size: 0.07, transparent: true, opacity: 0.0,
    sizeAttenuation: true, depthWrite: false,
  });
  const accentDots = new THREE.Points(dotGeo, dotMat);
  holdLayer.add(accentDots);

  // Burst rings — 3 flat shockwave rings that expand out from model center
  const burstColors = [C_PENCIL, C_COBALT, C_LAVENDER];
  const burstRings  = [];
  for (let i = 0; i < 3; i++) {
    const bGeo = new THREE.RingGeometry(footR * 0.26, footR * 0.34, 64);
    const bMat = new THREE.MeshBasicMaterial({
      color: burstColors[i], transparent: true, opacity: 0,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const bRing = new THREE.Mesh(bGeo, bMat);
    bRing.rotation.x = -Math.PI / 2;
    bRing.position.y = center.y * (0.12 + i * 0.38);
    bRing.scale.set(0.01, 0.01, 0.01);
    holdLayer.add(bRing);
    burstRings.push({ mesh: bRing, mat: bMat });
  }

  // Sparkles — 10 small spheres that shoot outward from model center
  const sparkColorsSeq = [C_PENCIL, C_COBALT, C_LAVENDER, C_PENCIL, C_COBALT,
                           C_LAVENDER, C_PENCIL, C_COBALT, C_LAVENDER, C_PENCIL];
  const sparkles = [];
  for (let i = 0; i < 10; i++) {
    const sGeo  = new THREE.SphereGeometry(0.035, 5, 5);
    const sMat  = new THREE.MeshBasicMaterial({
      color: sparkColorsSeq[i], transparent: true, opacity: 0,
    });
    const sMesh = new THREE.Mesh(sGeo, sMat);
    const angle = (i / 10) * Math.PI * 2;
    sMesh.position.set(0, center.y * 0.5, 0);
    sMesh.userData.angle    = angle;
    sMesh.userData.sparkMat = sMat;
    sMesh.userData.destR    = footR * (1.05 + (i % 3) * 0.22);
    holdLayer.add(sMesh);
    sparkles.push(sMesh);
  }

  holdLayer.userData = { scanRing, scanMat, glowMat, orbitA, orbitMatA,
                          orbitB, orbitMatB, dotMat, accentDots,
                          burstRings, sparkles, centerY: center.y,
                          scanMax: size.y + 0.15 };
  effectsGroup.userData.holdLayer = holdLayer;
  effectsGroup.add(holdLayer);

  scene.add(effectsGroup);
}

function disposeEffects() {
  stopIdleAnims();
  stopHoldAnims();
  if (!effectsGroup) return;
  effectsGroup.traverse(obj => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
      else obj.material.dispose();
    }
  });
  scene.remove(effectsGroup);
  effectsGroup    = null;
  idleParticleGeo = null;
  idleParticleVel = null;
}

// ── Idle animation (anime.js) ──────────────────────────────────
function startIdleAnims(mat, ring) {
  stopIdleAnims();
  idleAnims.push(
    anime({ targets: mat, opacity: [0.13, 0.03],
      duration: 2800, direction: 'alternate', loop: true, easing: 'easeInOutSine' }),
    anime({ targets: ring.scale, x: [1, 1.06], z: [1, 1.06],
      duration: 3600, direction: 'alternate', loop: true,
      easing: 'easeInOutSine', delay: 400 })
  );
}
function stopIdleAnims() {
  idleAnims.forEach(a => a.pause());
  idleAnims = [];
}

// ── Hold animation (anime.js) — cartoon celebration style ──────
function startHoldAnims(hl) {
  stopHoldAnims();
  const { scanRing, scanMat, glowMat, orbitA, orbitMatA,
          orbitB, orbitMatB, dotMat, accentDots,
          burstRings, sparkles, centerY, scanMax } = hl.userData;

  // Reset everything to initial state before replaying
  scanRing.position.y = 0;
  orbitA.scale.set(0.05, 0.05, 0.05);
  orbitB.scale.set(0.05, 0.05, 0.05);
  burstRings.forEach(({ mesh, mat }) => {
    mesh.scale.set(0.01, 0.01, 0.01);
    mat.opacity = 0;
  });
  sparkles.forEach(sp => {
    sp.position.set(0, centerY * 0.5, 0);
    sp.userData.sparkMat.opacity = 0;
  });

  // ── Burst rings: shockwave expand then fade — game reward feel ─
  burstRings.forEach(({ mesh, mat }, i) => {
    holdAnims.push(
      anime({ targets: mat, opacity: [0, 0.88, 0],
        delay: i * 90, duration: 750, easing: 'easeOutCubic' }),
      anime({ targets: mesh.scale, x: [0.01, 3.2], z: [0.01, 3.2],
        delay: i * 90, duration: 950, easing: 'easeOutElastic' })
    );
  });

  // ── Sparkles: shoot outward from model center ───────────────────
  sparkles.forEach((sp, i) => {
    const angle = sp.userData.angle;
    const destR = sp.userData.destR;
    holdAnims.push(
      anime({ targets: sp.position,
        x: Math.cos(angle) * destR,
        z: Math.sin(angle) * destR,
        delay: 60 + i * 35, duration: 600, easing: 'easeOutCubic' }),
      anime({ targets: sp.userData.sparkMat, opacity: [0, 1, 0],
        delay: 60 + i * 35, duration: 700, easing: 'easeOutCubic' })
    );
  });

  holdAnims.push(
    // ── Scan ring: bounce in then sweep ──────────────────────────
    anime({ targets: scanMat, opacity: [0, 0.80],
      duration: 380, easing: 'easeOutBounce', delay: 180 }),
    anime({ targets: glowMat, opacity: [0, 0.28],
      duration: 550, easing: 'easeOutCubic', delay: 220 }),
    anime({ targets: scanRing.position, y: [0, scanMax],
      duration: 2000, easing: 'linear', loop: true, delay: 480 }),

    // ── Orbit A: elastic pop + continuous spin ────────────────────
    anime({ targets: orbitMatA, opacity: [0, 0.30],
      duration: 600, easing: 'easeOutElastic', delay: 140 }),
    anime({ targets: orbitA.scale, x: [0.05, 1], z: [0.05, 1],
      duration: 700, easing: 'easeOutElastic', delay: 140 }),
    anime({ targets: orbitA.rotation, y: [0, Math.PI * 2],
      duration: 7000, easing: 'linear', loop: true }),

    // ── Orbit B: elastic pop + counter-spin ──────────────────────
    anime({ targets: orbitMatB, opacity: [0, 0.18],
      duration: 700, easing: 'easeOutElastic', delay: 260 }),
    anime({ targets: orbitB.scale, x: [0.05, 1], z: [0.05, 1],
      duration: 800, easing: 'easeOutElastic', delay: 260 }),
    anime({ targets: orbitB.rotation, y: [0, -Math.PI * 2],
      duration: 11000, easing: 'linear', loop: true }),

    // ── Accent dots: bounce pop + orbit ──────────────────────────
    anime({ targets: dotMat, opacity: [0, 0.90],
      duration: 460, easing: 'easeOutBounce', delay: 170 }),
    anime({ targets: accentDots.rotation, y: [0, Math.PI * 2],
      duration: 9000, easing: 'linear', loop: true })
  );
}

function stopHoldAnims() {
  holdAnims.forEach(a => a.pause());
  holdAnims = [];
}

// ── Transitions between layers ────────────────────────────────
function transitionEffectsToHold() {
  if (!effectsGroup) return;
  const idleLayer = effectsGroup.userData.idleLayer;
  const holdLayer = effectsGroup.userData.holdLayer;
  const baseRingMat = effectsGroup.userData.baseRingMat;

  stopIdleAnims();
  anime({ targets: baseRingMat, opacity: 0,
    duration: 350, easing: 'easeOutCubic',
    complete: () => { idleLayer.visible = false; } });

  holdLayer.visible = true;
  startHoldAnims(holdLayer);
}

function transitionEffectsToIdle() {
  if (!effectsGroup) return;
  const idleLayer   = effectsGroup.userData.idleLayer;
  const holdLayer   = effectsGroup.userData.holdLayer;
  const baseRingMat = effectsGroup.userData.baseRingMat;
  const baseRing    = effectsGroup.userData.baseRing;
  const { scanMat, glowMat, orbitMatA, orbitMatB, dotMat } = holdLayer.userData;

  stopHoldAnims();

  // Fade hold elements to zero (incl. burst rings and sparkles if still visible)
  const burstMats   = holdLayer.userData.burstRings.map(({ mat }) => mat);
  const sparkleMats = holdLayer.userData.sparkles.map(sp => sp.userData.sparkMat);
  anime({ targets: [scanMat, glowMat, orbitMatA, orbitMatB, dotMat, ...burstMats, ...sparkleMats],
    opacity: 0, duration: 300, easing: 'easeOutCubic',
    complete: () => { holdLayer.visible = false; } });

  // Restore idle
  idleLayer.visible = true;
  baseRingMat.opacity = 0;
  anime({ targets: baseRingMat, opacity: 0.13,
    duration: 500, easing: 'easeOutCubic',
    complete: () => startIdleAnims(baseRingMat, baseRing) });
}

// ================================================================
// HUD OVERLAY DOM
// ================================================================
function buildOverlayElements() {
  const ui = document.querySelector('.models-ui');

  const coordEl = document.createElement('div');
  coordEl.id = 'hud-coords';
  coordEl.setAttribute('aria-hidden', 'true');
  coordEl.textContent = MODELS[currentIndex].hudCoords;
  ui.appendChild(coordEl);

  const specEl = document.createElement('div');
  specEl.id = 'hud-spec';
  specEl.setAttribute('aria-hidden', 'true');
  specEl.innerHTML = '<div class="hud-rule"></div><span class="hud-spec-text">'
    + MODELS[currentIndex].hudSpec + '</span>';
  ui.appendChild(specEl);

  const reticleEl = document.createElement('div');
  reticleEl.id = 'hud-reticle';
  reticleEl.setAttribute('aria-hidden', 'true');
  reticleEl.textContent = '+';
  ui.appendChild(reticleEl);

  const bracketTl = document.createElement('div');
  bracketTl.id = 'hud-bracket-tl';
  bracketTl.setAttribute('aria-hidden', 'true');
  bracketTl.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">'
    + '<path d="M10 2H2V10" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"'
    + ' stroke-linecap="round" stroke-linejoin="round"/></svg>';
  ui.appendChild(bracketTl);

  const bracketBr = document.createElement('div');
  bracketBr.id = 'hud-bracket-br';
  bracketBr.setAttribute('aria-hidden', 'true');
  bracketBr.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none">'
    + '<path d="M14 22H22V14" stroke="rgba(255,255,255,0.4)" stroke-width="1.2"'
    + ' stroke-linecap="round" stroke-linejoin="round"/></svg>';
  ui.appendChild(bracketBr);

  gsap.set(coordEl,   { opacity: 0, scale: 0, transformOrigin: 'right center'  });
  gsap.set(specEl,    { opacity: 0, scale: 0, transformOrigin: 'left bottom'   });
  gsap.set(reticleEl, { opacity: 0, scale: 0, transformOrigin: 'center center' });
  gsap.set(bracketTl, { opacity: 0, scale: 0, transformOrigin: 'left top'      });
  gsap.set(bracketBr, { opacity: 0, scale: 0, transformOrigin: 'right bottom'  });

  return [coordEl, specEl, reticleEl, bracketTl, bracketBr];
}

function showHudElements() {
  if (!hudElements) hudElements = buildOverlayElements();
  hudElements[0].textContent = MODELS[currentIndex].hudCoords;
  hudElements[1].querySelector('.hud-spec-text').textContent = MODELS[currentIndex].hudSpec;
  gsap.to(hudElements, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out', stagger: 0.08 });
}

function hideHudElements(onDone) {
  if (!hudElements) { if (onDone) onDone(); return; }
  gsap.to(hudElements, {
    opacity: 0, scale: 0, duration: 0.25, ease: 'power2.in', stagger: 0.05,
    onComplete: onDone,
  });
}

// ================================================================
// HELPERS
// ================================================================
function setHint(text) {
  const el = document.querySelector('.models-hint');
  if (el) el.textContent = text;
}

function setActiveTab(index) {
  document.querySelectorAll('.model-tab').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
    btn.setAttribute('aria-pressed', String(i === index));
  });
}

// ================================================================
// MODEL LOADING
// ================================================================
function loadModel(index) {
  // Abort any in-flight hold interaction
  if (holdState !== HoldState.IDLE) {
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);
    if (hudElements) gsap.set(hudElements, { opacity: 0, scale: 0 });
    holdActive = holdMouseActive = false;
    holdState  = HoldState.IDLE;
    controls.enabled    = true;
    controls.autoRotate = true;
    setHint('hold · drag · scroll');
  }

  currentIndex = index;
  const def     = MODELS[index];
  const labelEl = document.getElementById('models-label');
  const dotEl   = document.getElementById('models-loading');

  if (labelEl) labelEl.textContent = def.label;
  if (dotEl)   dotEl.classList.add('visible');

  if (activeObj) {
    scene.remove(activeObj);
    activeObj.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) [].concat(obj.material).forEach(m => m.dispose());
    });
    activeObj = null;
  }

  const draco = new DRACOLoader();
  draco.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/libs/draco/');
  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  loader.load(def.file, gltf => {
    const model = gltf.scene;
    model.traverse(obj => {
      if (obj.isMesh) { obj.castShadow = true; obj.receiveShadow = true; }
    });

    // Fit largest dimension to baseSize world units; 2× for che.glb
    const isChe    = def.file.endsWith('che.glb');
    const baseSize = 2.8;
    {
      const b  = new THREE.Box3().setFromObject(model);
      const s  = b.getSize(new THREE.Vector3());
      const mx = Math.max(s.x, s.y, s.z);
      if (mx > 0) model.scale.setScalar((baseSize / mx) * (isChe ? 2 : 1));
    }

    // Centre on XZ, sit bottom on y = 0
    {
      const b = new THREE.Box3().setFromObject(model);
      const c = b.getCenter(new THREE.Vector3());
      model.position.x -= c.x;
      model.position.z -= c.z;
      const b2 = new THREE.Box3().setFromObject(model);
      model.position.y -= b2.min.y;
    }

    scene.add(model);
    activeObj = model;

    // Frame camera from the final bounding box
    const finalBox    = new THREE.Box3().setFromObject(model);
    const finalCenter = finalBox.getCenter(new THREE.Vector3());
    const finalSize   = finalBox.getSize(new THREE.Vector3());
    const fov         = camera.fov * (Math.PI / 180);
    const maxDim      = Math.max(finalSize.x, finalSize.y, finalSize.z);
    const dist        = (maxDim / 2) / Math.tan(fov / 2) * 2.2;

    camera.position.set(0, finalCenter.y, dist);
    controls.target.set(0, finalCenter.y, 0);
    controls.update();

    defaultView.pos    = { x: 0, y: finalCenter.y, z: dist };
    defaultView.target = { x: 0, y: finalCenter.y, z: 0   };

    // Build effects sized to this model
    buildEffects();

    if (dotEl) dotEl.classList.remove('visible');
    draco.dispose();
  }, undefined, err => {
    console.error('[Models] load failed:', def.file, err);
    if (labelEl) labelEl.textContent = def.label + ' — load failed';
    if (dotEl)   dotEl.classList.remove('visible');
  });
}

// ================================================================
// RENDER LOOP
// ================================================================
function tick() {
  if (!isActive) return;
  animId = requestAnimationFrame(tick);

  if (holdActive) {
    // GSAP owns camera — do not touch it
  } else if (holdState === HoldState.IDLE) {
    controls.update();
    parallax.x = THREE.MathUtils.lerp(parallax.x, mouseTgt.x * 0.25, 0.04);
    parallax.y = THREE.MathUtils.lerp(parallax.y, mouseTgt.y * 0.15, 0.04);
    camera.position.x += parallax.x;
    camera.position.y  = Math.max(0.05, camera.position.y + parallax.y);

    // Drift idle particles upward, wrap at top
    if (idleParticleGeo && idleParticleVel) {
      const pos  = idleParticleGeo.attributes.position.array;
      const maxY = effectsGroup?.userData.idleMaxY ?? 5;
      for (let i = 0, n = idleParticleVel.length; i < n; i++) {
        pos[i * 3 + 1] += idleParticleVel[i];
        if (pos[i * 3 + 1] > maxY) pos[i * 3 + 1] = -0.1;
      }
      idleParticleGeo.attributes.position.needsUpdate = true;
    }
  } else if (holdState === HoldState.HOLDING && !holdActive) {
    // Fully zoomed, tween done — keep camera aimed at target
    camera.lookAt(controls.target);
  }

  composer.render();
}

function deactivate() {
  isActive = false;
  if (animId !== null) { cancelAnimationFrame(animId); animId = null; }
}

// ================================================================
// ACTIVATE
// ================================================================
function activate() {
  if (!inited) {
    inited = true;
    buildScene();
    setActiveTab(0);
    loadModel(0);
  } else {
    onResize();
  }
  isActive = true;
  if (animId === null) tick();
}

// ================================================================
// TOP-LEVEL EVENT LISTENERS
// ================================================================
document.querySelectorAll('.top-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.dataset.section === 'sec-models') requestAnimationFrame(activate);
    else deactivate();
  });
});

document.querySelectorAll('.model-tab').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (!inited || i === currentIndex) return;
    setActiveTab(i);
    loadModel(i);
  });
});
