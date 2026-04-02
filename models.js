// ================================================================
// models.js — Cinematic 3D Model Viewer
// Upgrades: IBL/HDRI · EffectComposer + UnrealBloom · Parallax
//           Reflective floor · Hold-to-inspect · HUD overlay
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

const MODELS = [
  {
    label:    'CHE',
    file:     'glb/che.glb',
    hudCoords: 'X +1.337  Y +0.421  Z -2.718',
    hudSpec:   'SCULPT · PBR · HDRI LIT',
  },
  {
    label:    'CAT DISPENSER',
    file:     'glb/cat_dispenser.glb',
    hudCoords: 'X -0.618  Y +1.141  Z +3.302',
    hudSpec:   'MECH · RIGGED · PBR',
  },
  {
    label:    'PAINTERLY COTTAGE',
    file:     'glb/painterly_cottage.glb',
    hudCoords: 'X +2.718  Y +0.000  Z -1.337',
    hudSpec:   'ARCH · HANDPAINT · NPR',
  },
];

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

// Mouse parallax state
const mouseTgt  = { x: 0, y: 0 };
const parallax  = { x: 0, y: 0 };

// ----------------------------------------------------------------
// Hold-interaction state machine
// IDLE → PRESS_PENDING → HOLDING → RETURNING → IDLE
// ----------------------------------------------------------------
const HoldState = { IDLE: 'IDLE', PRESS_PENDING: 'PRESS_PENDING', HOLDING: 'HOLDING', RETURNING: 'RETURNING' };
let holdState   = HoldState.IDLE;
let holdTimer   = null;
let holdActive  = false;   // true while HOLDING or RETURNING (suppresses parallax/controls.update)

// Canonical camera view stored when each model loads
const defaultView = { pos: null, target: null };

// HUD overlay elements (created once, reused)
let hudElements = null;

// ----------------------------------------------------------------
// Scene bootstrap
// ----------------------------------------------------------------
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
  scene.fog = new THREE.FogExp2(0x050505, 0.018);

  camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.01, 200);
  camera.position.set(0, 1.2, 8);

  // ---- IBL: HDRI environment (replaces all manual lights) ----
  const pmremGen = new THREE.PMREMGenerator(renderer);
  pmremGen.compileEquirectangularShader();

  new RGBELoader().load(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/equirectangular/royal_esplanade_1k.hdr',
    texture => {
      const envMap = pmremGen.fromEquirectangular(texture).texture;
      scene.environment = envMap;
      texture.dispose();
      pmremGen.dispose();
    }
  );

  // ---- Task 1: Reflective floor disc ----
  // MeshPhysicalMaterial disc — HDRI drives reflections automatically
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(14, 64),
    new THREE.MeshPhysicalMaterial({
      color:           0x111111,
      metalness:       0.85,
      roughness:       0.15,
      envMapIntensity: 1.0,
    })
  );
  ground.rotation.x  = -Math.PI / 2;
  ground.position.y  = -0.01;   // hair below model base — avoids z-fighting
  ground.receiveShadow = true;
  scene.add(ground);

  // ---- OrbitControls with heavy damping ----
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping   = true;
  controls.dampingFactor   = 0.05;
  controls.autoRotate      = true;
  controls.autoRotateSpeed = 0.4;
  controls.enablePan       = false;
  controls.minDistance     = 1.2;
  controls.maxDistance     = 28;
  controls.minPolarAngle   = Math.PI * 0.12;
  controls.maxPolarAngle   = Math.PI * 0.82;

  // ---- Post-processing: RenderPass → UnrealBloom ----
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.45,
    0.75,
    0.85
  );
  composer.addPass(bloom);

  window.addEventListener('resize',    onResize);
  window.addEventListener('mousemove', onMouseMove);

  // ---- Task 2: Hold-interaction mouse listeners (canvas only) ----
  canvas.addEventListener('mousedown', onCanvasMouseDown);
  window.addEventListener('mouseup',   onCanvasMouseUp);
}

// ----------------------------------------------------------------
// Mouse parallax tracker
// ----------------------------------------------------------------
function onMouseMove(e) {
  mouseTgt.x =  (e.clientX / window.innerWidth  - 0.5) * 2;
  mouseTgt.y = -(e.clientY / window.innerHeight - 0.5) * 2;
}

// ----------------------------------------------------------------
// Resize handler
// ----------------------------------------------------------------
function onResize() {
  if (!renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  composer.setSize(window.innerWidth, window.innerHeight);
}

// ----------------------------------------------------------------
// Task 2: Hold-interaction — state machine handlers
// ----------------------------------------------------------------
function onCanvasMouseDown() {
  if (holdState !== HoldState.IDLE) return;
  holdState = HoldState.PRESS_PENDING;
  holdTimer = setTimeout(() => {
    if (holdState === HoldState.PRESS_PENDING) {
      enterHolding();
    }
  }, 200);
}

function onCanvasMouseUp() {
  if (holdState === HoldState.PRESS_PENDING) {
    clearTimeout(holdTimer);
    holdTimer = null;
    holdState = HoldState.IDLE;
    return;
  }
  if (holdState === HoldState.HOLDING) {
    exitHolding();
  }
}

// Compute a close-up camera view relative to the active model's bounding box
function getHoldingView() {
  if (!activeObj) return { pos: { x: 0, y: 2, z: 5 }, target: { x: 0, y: 1, z: 0 } };
  const box    = new THREE.Box3().setFromObject(activeObj);
  const center = box.getCenter(new THREE.Vector3());
  const size   = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  return {
    pos:    { x: maxDim * 0.35, y: center.y + maxDim * 0.6, z: maxDim * 0.9 },
    target: { x: 0, y: center.y + size.y * 0.3, z: 0 },
  };
}

function enterHolding() {
  holdState  = HoldState.HOLDING;
  holdActive = true;
  controls.enabled    = false;
  controls.autoRotate = false;

  // Kill any residual parallax so GSAP starts from a clean position
  parallax.x = 0;
  parallax.y = 0;

  showHudElements();

  const hv = getHoldingView();
  gsap.killTweensOf(camera.position);
  gsap.killTweensOf(controls.target);

  gsap.to(camera.position, {
    x: hv.pos.x, y: hv.pos.y, z: hv.pos.z,
    duration: 1.5, ease: 'power3.inOut',
  });
  gsap.to(controls.target, {
    x: hv.target.x, y: hv.target.y, z: hv.target.z,
    duration: 1.5, ease: 'power3.inOut',
  });
}

function exitHolding() {
  holdState = HoldState.RETURNING;

  // Overlay reverses first, camera returns in its onComplete
  hideHudElements(() => {
    if (!defaultView.pos) {
      // Safety fallback
      holdActive  = false;
      holdState   = HoldState.IDLE;
      controls.enabled    = true;
      controls.autoRotate = true;
      return;
    }

    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);

    gsap.to(camera.position, {
      x: defaultView.pos.x, y: defaultView.pos.y, z: defaultView.pos.z,
      duration: 1.5, ease: 'power3.inOut',
    });
    gsap.to(controls.target, {
      x: defaultView.target.x, y: defaultView.target.y, z: defaultView.target.z,
      duration: 1.5, ease: 'power3.inOut',
      onComplete: () => {
        holdActive  = false;
        holdState   = HoldState.IDLE;
        controls.enabled    = true;
        controls.autoRotate = true;
        controls.update();   // sync OrbitControls internal spherical coords
      },
    });
  });
}

// ----------------------------------------------------------------
// Task 3: HUD overlay — build, show, hide
// ----------------------------------------------------------------
function buildOverlayElements() {
  const ui = document.querySelector('.models-ui');

  // 1. Coord readout — top-right, below loading dot
  const coordEl = document.createElement('div');
  coordEl.id = 'hud-coords';
  coordEl.setAttribute('aria-hidden', 'true');
  coordEl.textContent = MODELS[currentIndex].hudCoords;
  ui.appendChild(coordEl);

  // 2. Technical spec line — bottom-left
  const specEl = document.createElement('div');
  specEl.id = 'hud-spec';
  specEl.setAttribute('aria-hidden', 'true');
  specEl.innerHTML = '<div class="hud-rule"></div><span class="hud-spec-text">' + MODELS[currentIndex].hudSpec + '</span>';
  ui.appendChild(specEl);

  // 3. Centre reticle
  const reticleEl = document.createElement('div');
  reticleEl.id = 'hud-reticle';
  reticleEl.setAttribute('aria-hidden', 'true');
  reticleEl.textContent = '+';
  ui.appendChild(reticleEl);

  // 4a. Corner bracket — top-left
  const bracketTl = document.createElement('div');
  bracketTl.id = 'hud-bracket-tl';
  bracketTl.setAttribute('aria-hidden', 'true');
  bracketTl.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10 2H2V10" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  ui.appendChild(bracketTl);

  // 4b. Corner bracket — bottom-right
  const bracketBr = document.createElement('div');
  bracketBr.id = 'hud-bracket-br';
  bracketBr.setAttribute('aria-hidden', 'true');
  bracketBr.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 22H22V14" stroke="rgba(255,255,255,0.4)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  ui.appendChild(bracketBr);

  // Set initial state — GSAP manages transforms so no CSS transform on these elements
  gsap.set(coordEl,   { opacity: 0, scale: 0, transformOrigin: 'right center' });
  gsap.set(specEl,    { opacity: 0, scale: 0, transformOrigin: 'left bottom'  });
  gsap.set(reticleEl, { opacity: 0, scale: 0, transformOrigin: 'center center' });
  gsap.set(bracketTl, { opacity: 0, scale: 0, transformOrigin: 'left top'     });
  gsap.set(bracketBr, { opacity: 0, scale: 0, transformOrigin: 'right bottom' });

  return [coordEl, specEl, reticleEl, bracketTl, bracketBr];
}

function showHudElements() {
  if (!hudElements) hudElements = buildOverlayElements();

  // Refresh text for the active model
  hudElements[0].textContent = MODELS[currentIndex].hudCoords;
  hudElements[1].querySelector('.hud-spec-text').textContent = MODELS[currentIndex].hudSpec;

  gsap.to(hudElements, {
    opacity: 1, scale: 1,
    duration: 0.35, ease: 'power2.out', stagger: 0.08,
  });
}

function hideHudElements(onDone) {
  if (!hudElements) { if (onDone) onDone(); return; }
  gsap.to(hudElements, {
    opacity: 0, scale: 0,
    duration: 0.25, ease: 'power2.in', stagger: 0.05,
    onComplete: onDone,
  });
}

// ----------------------------------------------------------------
// Model selector UI helper
// ----------------------------------------------------------------
function setActiveTab(index) {
  document.querySelectorAll('.model-tab').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
    btn.setAttribute('aria-pressed', String(i === index));
  });
}

// ----------------------------------------------------------------
// Model loading
// ----------------------------------------------------------------
function loadModel(index) {
  // If mid-hold, abort gracefully
  if (holdActive) {
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(controls.target);
    if (hudElements) gsap.set(hudElements, { opacity: 0, scale: 0 });
    holdActive  = false;
    holdState   = HoldState.IDLE;
    controls.enabled    = true;
    controls.autoRotate = true;
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

  loader.load(
    def.file,
    gltf => {
      const model = gltf.scene;

      model.traverse(obj => {
        if (obj.isMesh) {
          obj.castShadow    = true;
          obj.receiveShadow = true;
        }
      });

      // Normalise to consistent bounding box; 2× scale for che.glb
      const isChe    = def.file.endsWith('che.glb');
      const baseSize = 2.8;
      const box      = new THREE.Box3().setFromObject(model);
      const size     = box.getSize(new THREE.Vector3());
      const maxDim   = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const scalar = (baseSize / maxDim) * (isChe ? 2 : 1);
        model.scale.setScalar(scalar);
      }

      // Centre horizontally, sit on y = 0
      const box2   = new THREE.Box3().setFromObject(model);
      const center = box2.getCenter(new THREE.Vector3());
      model.position.x -= center.x;
      model.position.z -= center.z;
      const box3 = new THREE.Box3().setFromObject(model);
      model.position.y -= box3.min.y;

      scene.add(model);
      activeObj = model;

      // Frame camera to the bounding box
      const displaySize = baseSize * (isChe ? 2 : 1);
      const fov  = camera.fov * (Math.PI / 180);
      const dist = (displaySize / 2) / Math.tan(fov / 2) * 2.4;
      camera.position.set(0, 1.0, dist);
      controls.target.set(0, 1.0, 0);
      controls.update();

      // Store as canonical default view for the return trip
      defaultView.pos    = { x: 0, y: 1.0, z: dist };
      defaultView.target = { x: 0, y: 1.0, z: 0 };

      if (dotEl) dotEl.classList.remove('visible');
      draco.dispose();
    },
    undefined,
    err => {
      console.error('[Models] Failed to load:', def.file, err);
      if (labelEl) labelEl.textContent = def.label + ' — load failed (check console)';
      if (dotEl)   dotEl.classList.remove('visible');
    }
  );
}

// ----------------------------------------------------------------
// Render loop — parallax + composer
// ----------------------------------------------------------------
function tick() {
  if (!isActive) return;
  animId = requestAnimationFrame(tick);

  if (!holdActive) {
    // Normal mode: parallax + orbit controls
    parallax.x = THREE.MathUtils.lerp(parallax.x, mouseTgt.x * 0.25, 0.04);
    parallax.y = THREE.MathUtils.lerp(parallax.y, mouseTgt.y * 0.15, 0.04);
    controls.update();
    camera.position.x += parallax.x;
    camera.position.y += parallax.y;
  }
  // During hold/return: GSAP owns camera.position; we just render

  composer.render();
}

function deactivate() {
  isActive = false;
  if (animId !== null) { cancelAnimationFrame(animId); animId = null; }
}

// ----------------------------------------------------------------
// Activate viewer (called when models tab becomes visible)
// ----------------------------------------------------------------
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
    if (tab.dataset.section === 'sec-models') {
      requestAnimationFrame(activate);
    } else {
      deactivate();
    }
  });
});

document.querySelectorAll('.model-tab').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    if (!inited) return;
    if (i === currentIndex) return;
    setActiveTab(i);
    loadModel(i);
  });
});
