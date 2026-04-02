'use strict';

// ================================================================
// PROJECT DATA
// ================================================================

const PROJECTS = [
  {
    id: '001',
    name: 'LOCATR',
    tagline: 'Intelligent activity planning. Find your perfect venue.',
    description: 'Multi-agent AI system built at DeerHacks V. A LangGraph workflow orchestrates five specialized agents — Commander, Scout, Vibe Matcher, Cost Analyst, and Critic — to discover, score, and validate perfect venues for any activity. Backed by Snowflake-powered memory and RAG.',
    hackathon: 'DeerHacks V',
    award: '★ Best Use of Auth0',
    tech: ['Python', 'FastAPI', 'LangGraph', 'Next.js', 'Snowflake', 'Redis'],
    github: 'https://github.com/Lushenwar/LOCATR',
    devpost: 'https://devpost.com/software/pathfinder-6h8y1v',
    demo: null,
    color: '#60a5d4',
    type: 'hackathon',
  },
  {
    id: '002',
    name: 'ECO-PULSE',
    tagline: 'Mapping heat. Planting relief.',
    description: 'AI-powered urban heat mitigation planner for Montreal. Visualizes ML-derived urban heat priority zones on an interactive map and generates Gemini-powered intervention blueprints — candidate planting sites, estimated tree counts, and full cost/benefit analysis. Built at GenAI Genesis.',
    hackathon: 'GenAI Genesis',
    award: '🏆 1st Place',
    tech: ['TypeScript', 'React', 'Python', 'FastAPI', 'Gemini', 'Leaflet', 'Google Maps'],
    github: 'https://github.com/Lushenwar/Eco-Pulse',
    devpost: 'https://devpost.com/software/eco-pulse-fpbo15',
    demo: null,
    color: '#7ab87a',
    type: 'hackathon',
  },
  {
    id: '003',
    name: 'INTERPREFY',
    tagline: 'Break the language barrier. In real time.',
    description: 'Desktop app that captures system audio via VB-Cable, transcribes it live with DeepGram + Whisper, translates via DeepL, and overlays dynamic subtitles on-screen. Supports multiple languages and logs full conversation history. Built at JAMHacks with Tony Tan.',
    hackathon: 'JAMHacks',
    award: null,
    tech: ['Python', 'PyQt5', 'DeepGram', 'Whisper', 'DeepL', 'VB-Audio'],
    github: 'https://github.com/Lushenwar/interprefy',
    devpost: null,
    demo: null,
    color: '#e05555',
    type: 'hackathon',
  },
  {
    id: '004',
    name: 'MASTERINGENZ',
    tagline: 'The AI that speaks fluent Gen-Z.',
    description: 'Full-stack app powered by a custom Sparse Graph Attention Network → GRU deep learning pipeline for real-time Gen-Z slang autocomplete. Gemini re-ranks suggestions by sentence context and generates human-like replies that naturally weave in slang.',
    hackathon: null,
    award: null,
    tech: ['PyTorch', 'PyTorch Geometric', 'FastAPI', 'React', 'Gemini', 'GAT + GRU'],
    github: 'https://github.com/Lushenwar/MasteringGenZ',
    devpost: null,
    demo: null,
    color: '#c08fff',
    type: 'personal',
  },
  {
    id: '005',
    name: 'IFYSHOP',
    tagline: 'Snap it. Find it. Buy it smarter.',
    description: 'AI-powered multi-agent shopping platform that takes a screenshot of any product and returns visual identification, scraped reviews, price comparisons, and AI-generated Eco Scores. Built with a Snowflake-backed vector search layer for intelligent product memory.',
    hackathon: 'CxC 2026',
    award: '★ Best Use of Snowflake',
    tech: ['Python', 'FastAPI', 'Gemini', 'Snowflake', 'Tavily', 'React', 'Auth0'],
    github: 'https://github.com/kyle-su1/ifyShop',
    devpost: 'https://devpost.com/software/ifyshop',
    demo: null,
    color: '#f5c430',
    type: 'hackathon',
  },
  {
    id: '006',
    name: 'OPENSCORE',
    tagline: 'Credit for people who actually pay their bills.',
    description: 'Fintech platform reimagining creditworthiness for the 3M+ credit-invisible Canadians. Uses Plaid to ingest real banking data, then scores across rent, income stability, cash flow, and education credentials using a weighted Gemini-powered model. Built at DeltaHacks 12.',
    hackathon: 'DeltaHacks 12',
    award: null,
    tech: ['JavaScript', 'Plaid API', 'Gemini', 'React', 'FastAPI'],
    github: 'https://github.com/aadya-khanna/OpenScore',
    devpost: 'https://devpost.com/software/openscore-i4caqp',
    demo: null,
    color: '#4ecdc4',
    type: 'hackathon',
  },
  {
    id: '007',
    name: 'FIXMYFEED',
    tagline: 'Your feed, rewired.',
    description: 'Behavior-aware social media filter that triages reels in real time — deciding SKIP, WAIT, or LIKE_AND_STAY via a multi-agent LLM pipeline. Uses grayscale as a friction budget, logs behavioral analytics, and provides AI coaching insights through a neural map dashboard.',
    hackathon: 'YHacks',
    award: '🏆 Finalist · 4 tracks',
    tech: ['TypeScript', 'FastAPI', 'Python', 'Supabase', 'Chrome Extension', 'Lava Models'],
    github: 'https://github.com/thejonathangu/FixMyFeed',
    devpost: 'https://devpost.com/software/fixmyfeed',
    demo: 'https://fix-my-feed.vercel.app',
    color: '#f0984e',
    type: 'hackathon',
  },
  {
    id: '008',
    name: 'SPOTLIGHT',
    tagline: 'Stop interrupting content. Be part of it.',
    description: 'AI platform that detects natural product placement opportunities inside video scenes — tables, shelves, billboards, handheld items — and seamlessly inserts brand products using Gemini + FFmpeg. Connects creators with brands through a dynamic marketplace with Backboard-powered persistent campaign memory.',
    hackathon: 'HackCanada',
    award: null,
    tech: ['TypeScript', 'Python', 'Gemini', 'FFmpeg', 'Backboard', 'FastAPI'],
    github: 'https://github.com/HetarthP/Spotlight',
    devpost: 'https://devpost.com/software/spotlight-akypow',
    demo: null,
    color: '#e05555',
    type: 'hackathon',
  },
  {
    id: '009',
    name: 'BWF PREDICTOR',
    tagline: 'For those who love sports analysis.',
    description: 'End-to-end ML pipeline predicting BWF World Tour badminton match outcomes at 75%+ accuracy. Uses Glicko-2 skill tracking, point-by-point momentum analysis, and LightGBM + XGBoost ensembles tuned with Optuna. Ships with a Streamlit dashboard and full tournament bracket simulator.',
    hackathon: null,
    award: null,
    tech: ['Python', 'LightGBM', 'XGBoost', 'SHAP', 'Streamlit', 'Optuna', 'Pandas'],
    github: 'https://github.com/Lushenwar/bwf',
    devpost: null,
    demo: null,
    color: '#f5c430',
    type: 'personal',
  },
  {
    id: '010',
    name: 'HEALTH ASSISTANT',
    tagline: 'Your AI-powered daily life companion.',
    description: 'Smart multi-tab web app combining GPT-3.5 mental health chat, customizable reminders with audio/browser alerts, and an interactive calendar. Features offline fallback responses, priority-based categorization, and persistent chat history. Built at Hack404.',
    hackathon: 'Hack404',
    award: '🥉 3rd Place · Beginner Stream',
    tech: ['JavaScript', 'HTML/CSS', 'OpenAI GPT-3.5', 'Web APIs'],
    github: 'https://github.com/Lushenwar/HealthAssistant',
    devpost: 'https://devpost.com/software/beginner-track-portfolio',
    demo: 'https://lushenwar.github.io/HealthAssistant/',
    color: '#7ab87a',
    type: 'hackathon',
  },
];

// ================================================================
// RENDER PROJECTS
// ================================================================

function renderProjects(filter = 'hackathon') {
  const list = document.getElementById('projects-list');
  list.innerHTML = '';

  const filtered = PROJECTS.filter(p => p.type === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.setProperty('--accent', p.color);
    card.style.transitionDelay = `${i * 0.05}s`;
    card.setAttribute('aria-expanded', 'false');
    card.dataset.projectId = p.id;

    const hackBadge = p.hackathon
      ? `<span class="hackathon-tag">${p.hackathon}</span>` : '';
    const awardBadge = p.award
      ? `<span class="award-tag">${p.award}</span>` : '';

    const ghLink = p.github
      ? `<a href="${p.github}" target="_blank" rel="noopener" class="card-link" onclick="event.stopPropagation()">GitHub ↗</a>` : '';
    const dpLink = p.devpost
      ? `<a href="${p.devpost}" target="_blank" rel="noopener" class="card-link" onclick="event.stopPropagation()">DevPost ↗</a>`
      : `<span class="card-link disabled">DevPost</span>`;
    const demoLink = p.demo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="card-link" onclick="event.stopPropagation()">Live Demo ↗</a>` : '';

    const pills = p.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');

    card.innerHTML = `
      <div class="card-collapsed">
        <div class="card-left">
          <span class="card-number">${p.id}</span>
          <div class="project-name">${p.name}</div>
          <div class="card-meta">${hackBadge}${awardBadge}</div>
        </div>
        <div class="card-toggle">+</div>
      </div>
      <div class="card-expanded">
        <div class="card-expanded-inner">
          <svg class="card-divider" width="100%" height="12" viewBox="0 0 400 12" preserveAspectRatio="none" fill="none">
            <path d="M 0 6 C 50 3, 100 9, 150 6 C 200 3, 250 9, 300 6 C 350 3, 380 8, 400 6"
                  stroke="rgba(240,232,213,0.1)" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <p class="card-tagline">${p.tagline}</p>
          <p class="card-description">${p.description}</p>
          <div class="tech-pills">${pills}</div>
          <div class="card-links">${ghLink}${dpLink}${demoLink}</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      if (card.classList.contains('open')) {
        toggleCard(card);
        return;
      }
      const beaten = sessionStorage.getItem(`proj_${p.id}`);
      if (beaten) {
        toggleCard(card);
      } else {
        AstronautGate.intercept(p.id, p.name, () => toggleCard(card));
      }
    });

    list.appendChild(card);
  });

  requestAnimationFrame(() => requestAnimationFrame(initCardReveal));
}

function toggleCard(card) {
  const isOpen = card.classList.toggle('open');
  card.setAttribute('aria-expanded', String(isOpen));
}

function initProjectTabs() {
  const tabs = document.querySelectorAll('.proj-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProjects(tab.dataset.filter);
    });
  });
}

// ================================================================
// INTERSECTION OBSERVER — card reveal
// ================================================================

function initCardReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
  );
  document.querySelectorAll('.project-card').forEach(c => observer.observe(c));
}

// ================================================================
// THREE.JS SCENE — interactive WebGL environment
// ================================================================

function initScene() {
  const canvas = document.getElementById('bg');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0d0c09, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 60;

  // ---- Custom shaders ----
  const dustVert = `
    attribute float aSize;
    attribute vec3  aColor;
    varying   vec3  vColor;
    void main() {
      vColor = aColor;
      vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = aSize * (280.0 / -mvPos.z);
      gl_Position  = projectionMatrix * mvPos;
    }
  `;
  const dustFrag = `
    varying vec3 vColor;
    void main() {
      float d = distance(gl_PointCoord, vec2(0.5));
      if (d > 0.5) discard;
      float a = 1.0 - smoothstep(0.0, 0.5, d);
      gl_FragColor = vec4(vColor, a * 0.85);
    }
  `;

  // ---- Background starfield (static) ----
  const N = 2800;
  const sPos = new Float32Array(N * 3);
  const sCol = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    sPos[i*3]   = (Math.random()-0.5)*340;
    sPos[i*3+1] = (Math.random()-0.5)*340;
    sPos[i*3+2] = (Math.random()-0.5)*200 - 60;
    const r = Math.random();
    if      (r < 0.50) { sCol[i*3]=0.90+Math.random()*0.10; sCol[i*3+1]=0.84+Math.random()*0.10; sCol[i*3+2]=0.70+Math.random()*0.15; }
    else if (r < 0.70) { sCol[i*3]=0.96; sCol[i*3+1]=0.77; sCol[i*3+2]=0.19; }
    else if (r < 0.84) { sCol[i*3]=0.38; sCol[i*3+1]=0.65; sCol[i*3+2]=0.83; }
    else if (r < 0.93) { sCol[i*3]=0.88; sCol[i*3+1]=0.33; sCol[i*3+2]=0.33; }
    else               { sCol[i*3]=0.48; sCol[i*3+1]=0.72; sCol[i*3+2]=0.48; }
  }
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute('color',    new THREE.BufferAttribute(sCol, 3));
  const stars = new THREE.Points(sGeo, new THREE.PointsMaterial({
    size: 0.22, vertexColors: true, transparent: true, opacity: 0.72, sizeAttenuation: true,
  }));
  scene.add(stars);

  // ---- Interactive dust particles (spring physics) ----
  const D = 140;
  const dPosArr = new Float32Array(D * 3);
  const dSizes  = new Float32Array(D);
  const dColors = new Float32Array(D * 3);

  const dustHome = [];
  const dustPos  = [];
  const dustVel  = [];

  const DUST_COLORS = [
    [0.96,0.77,0.19], [0.38,0.65,0.83], [0.88,0.33,0.33],
    [0.48,0.72,0.48], [0.75,0.56,1.00], [0.94,0.60,0.30],
  ];

  for (let i = 0; i < D; i++) {
    const x = (Math.random()-0.5)*70;
    const y = (Math.random()-0.5)*70;
    const z = (Math.random()-0.5)*15 - 5;
    dustHome.push(new THREE.Vector3(x, y, z));
    dustPos.push(new THREE.Vector3(x, y, z));
    dustVel.push(new THREE.Vector3(0, 0, 0));

    dPosArr[i*3]=x; dPosArr[i*3+1]=y; dPosArr[i*3+2]=z;
    dSizes[i]   = 0.8 + Math.random() * 2.2;

    const c = DUST_COLORS[Math.floor(Math.random()*DUST_COLORS.length)];
    dColors[i*3]=c[0]; dColors[i*3+1]=c[1]; dColors[i*3+2]=c[2];
  }

  const dGeo = new THREE.BufferGeometry();
  dGeo.setAttribute('position', new THREE.BufferAttribute(dPosArr, 3));
  dGeo.setAttribute('aSize',    new THREE.BufferAttribute(dSizes, 1));
  dGeo.setAttribute('aColor',   new THREE.BufferAttribute(dColors, 3));

  const dustMat = new THREE.ShaderMaterial({
    vertexShader: dustVert,
    fragmentShader: dustFrag,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const dustPoints = new THREE.Points(dGeo, dustMat);
  scene.add(dustPoints);

  // ---- Wireframe shapes ----
  const SHAPES = [
    { g: new THREE.IcosahedronGeometry(9,1),       p:[35,20,-44],   c:0xf5c430, s:0.0022, ax:new THREE.Vector3(0.5,1,0.3).normalize() },
    { g: new THREE.TorusGeometry(8,1.1,8,24),      p:[-40,-10,-55], c:0x60a5d4, s:0.0028, ax:new THREE.Vector3(0.3,0.5,1).normalize() },
    { g: new THREE.OctahedronGeometry(6,0),         p:[20,-35,-30],  c:0x7ab87a, s:0.004,  ax:new THREE.Vector3(1,0.2,0.6).normalize() },
    { g: new THREE.TorusKnotGeometry(4.5,1,80,8),  p:[-22,16,-62],  c:0xc08fff, s:0.0018, ax:new THREE.Vector3(0.2,1,0.5).normalize() },
    { g: new THREE.DodecahedronGeometry(7,0),       p:[6,-52,-72],   c:0xe05555, s:0.002,  ax:new THREE.Vector3(0.7,0.3,0.9).normalize() },
  ];
  const meshes = SHAPES.map(({g,p,c,s,ax}) => {
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({color:c,wireframe:true,transparent:true,opacity:0.09}));
    m.position.set(...p); m.userData={s,ax}; scene.add(m); return m;
  });

  // ---- Mouse tracking in world space ----
  let rawMx = window.innerWidth/2, rawMy = window.innerHeight/2;
  let mX=0, mY=0, tX=0, tY=0;
  let scrollY = 0;

  function screenToWorld(sx, sy) {
    const v = new THREE.Vector3(
      (sx/window.innerWidth)*2-1,
      -(sy/window.innerHeight)*2+1,
      0.5
    ).unproject(camera);
    const dir = v.sub(camera.position).normalize();
    const dist = (0 - camera.position.z) / dir.z;
    return camera.position.clone().add(dir.multiplyScalar(dist));
  }

  // ---- Click shockwaves ----
  const shockwaves = [];

  canvas.addEventListener('click', e => {
    const w = screenToWorld(e.clientX, e.clientY);
    shockwaves.push({ pos: w, age: 0 });
    // ripple: push wireframe shapes slightly
    meshes.forEach(m => {
      const d = m.position.distanceTo(w);
      if (d < 50) {
        const dir = m.position.clone().sub(w).normalize();
        m.userData.impulse = dir.multiplyScalar(1.5 / (d+1));
        m.userData.impulseDecay = 1;
      }
    });
  });

  document.addEventListener('mousemove', e => {
    rawMx = e.clientX; rawMy = e.clientY;
    tX = (e.clientX/window.innerWidth-0.5)*2;
    tY = (e.clientY/window.innerHeight-0.5)*2;
  });
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, {passive:true});
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ---- Animation loop ----
  (function animate() {
    requestAnimationFrame(animate);

    // Camera parallax
    mX += (tX-mX)*0.03; mY += (tY-mY)*0.03;
    camera.position.x += (mX*4 - camera.position.x)*0.025;
    camera.position.y += (-mY*4 - camera.position.y)*0.025;
    camera.position.z += (60 + scrollY*0.007 - camera.position.z)*0.04;

    // Stars drift
    stars.rotation.y += 0.00005; stars.rotation.x += 0.000025;

    // Wireframe shapes rotate + impulse
    meshes.forEach(m => {
      m.rotateOnAxis(m.userData.ax, m.userData.s);
      if (m.userData.impulse) {
        m.position.add(m.userData.impulse);
        m.userData.impulse.multiplyScalar(0.85);
        if (m.userData.impulse.length() < 0.01) m.userData.impulse = null;
      }
    });

    // Current mouse in world space
    const mouseW = screenToWorld(rawMx, rawMy);

    // Age & expire shockwaves
    for (let s = shockwaves.length-1; s >= 0; s--) {
      shockwaves[s].age += 0.018;
      if (shockwaves[s].age > 1) shockwaves.splice(s, 1);
    }

    // Update dust particle physics
    for (let i = 0; i < D; i++) {
      const p = dustPos[i];
      const v = dustVel[i];
      const h = dustHome[i];

      // Spring toward home
      v.x += (h.x - p.x) * 0.018;
      v.y += (h.y - p.y) * 0.018;
      v.z += (h.z - p.z) * 0.018;

      // Mouse repulsion
      const dx = p.x - mouseW.x, dy = p.y - mouseW.y;
      const md = Math.sqrt(dx*dx + dy*dy);
      if (md < 14 && md > 0) {
        const str = (14 - md) / 14 * 0.6;
        v.x += (dx/md) * str;
        v.y += (dy/md) * str;
      }

      // Shockwave forces
      shockwaves.forEach(sw => {
        const sx = p.x - sw.pos.x, sy = p.y - sw.pos.y;
        const sd = Math.sqrt(sx*sx + sy*sy);
        const ring = Math.abs(sd - sw.age * 38);
        if (ring < 4 && sd > 0) {
          const f = ((4 - ring) / 4) * 2.5;
          v.x += (sx/sd) * f;
          v.y += (sy/sd) * f;
        }
      });

      // Gentle drift noise (makes them feel alive)
      v.x += (Math.random()-0.5)*0.008;
      v.y += (Math.random()-0.5)*0.008;

      // Damping
      v.x *= 0.88; v.y *= 0.88; v.z *= 0.92;

      // Integrate
      p.x += v.x; p.y += v.y; p.z += v.z;

      dPosArr[i*3]=p.x; dPosArr[i*3+1]=p.y; dPosArr[i*3+2]=p.z;
    }
    dGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  })();
}

// ================================================================
// FALLING ASTRONAUT — sweeps full screen diagonally
// ================================================================

function initFaller() {
  const faller = document.getElementById('faller');
  if (!faller || window.innerWidth < 580) return;

  let scrollY = 0, prevScrollY = 0;
  let curY = 0, curAngle = -15, curSwayX = 0;

  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  (function loop() {
    requestAnimationFrame(loop);
    if (typeof AstronautGate !== 'undefined' && AstronautGate.isPaused()) return;

    const vel = scrollY - prevScrollY;
    prevScrollY = scrollY;

    // Falls with scroll at ~55% speed — classic parallax "falling through space" feel
    const targetY     = scrollY * 0.55;
    // Gentle sinusoidal horizontal drift
    const targetSwayX = Math.sin(scrollY * 0.0025) * 38;
    // Tilts with scroll velocity; slow continuous tumble based on distance travelled
    const targetAngle = -15 + scrollY * 0.03 + vel * 2.8;

    // Lerp — floaty, weightless lag
    curY      += (targetY     - curY)      * 0.09;
    curSwayX  += (targetSwayX - curSwayX)  * 0.06;
    curAngle  += (targetAngle - curAngle)  * 0.09;

    faller.style.transform = `translate(calc(-50% + ${curSwayX}px), ${curY}px) rotate(${curAngle}deg)`;
  })();
}

// ================================================================
// CUSTOM CURSOR
// ================================================================

function initCursor() {
  const ring = document.getElementById('cursor');
  if (!ring) return;
  let cx = 0, cy = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
  (function loop() {
    requestAnimationFrame(loop);
    rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12;
    ring.style.left = `${rx}px`; ring.style.top = `${ry}px`;
  })();
}

// ================================================================
// GATE GAMES
// ================================================================

const GATEKEEPER_GAMES = ['mathlab', 'tictactoe', 'connect4', 'rps'];

function unlockPortfolio() {
  const win = document.getElementById('gate-win');
  win.classList.add('show');
  setTimeout(() => {
    const gate = document.getElementById('gate');
    const portfolio = document.getElementById('portfolio');
    gate.classList.add('unlocking');
    portfolio.classList.add('visible');
    sessionStorage.setItem('unlocked', '1');
    setTimeout(() => { gate.style.display = 'none'; }, 900);
  }, 1800);
}

// ================================================================
// ASTRONAUT GATE — unified gatekeeper state machine
// ================================================================

const AstronautGate = (() => {
  let state = 'idle';
  let fallerPaused = false;
  let currentCleanup = null;

  function closeModal() {
    const modal = document.getElementById('mini-gate');
    const container = document.getElementById('mini-game-container');
    if (modal) modal.style.display = 'none';
    if (container) container.innerHTML = '';
    if (currentCleanup) { currentCleanup(); currentCleanup = null; }
  }

  function setDefeated(onDone) {
    state = 'defeated';
    const f = document.getElementById('faller');
    if (f) {
      f.classList.remove('astro-intercepting');
      f.classList.add('astro-defeated');
      setTimeout(() => {
        f.classList.remove('astro-defeated');
        state = 'idle';
        fallerPaused = false;
        if (onDone) onDone();
      }, 700);
    } else {
      state = 'idle';
      fallerPaused = false;
      if (onDone) onDone();
    }
  }

  return {
    isPaused() { return fallerPaused; },

    unlock(mode, payload = {}) {
      if (mode === 'global') {
        unlockPortfolio();
      } else if (mode === 'project') {
        closeModal();
        setDefeated(() => {
          if (payload.projectId) sessionStorage.setItem(`proj_${payload.projectId}`, '1');
          if (payload.onProjectOpen) payload.onProjectOpen();
        });
      }
    },

    intercept(projectId, projectName, onProjectOpen) {
      state = 'intercepting';
      fallerPaused = true;
      const f = document.getElementById('faller');
      if (f) f.classList.add('astro-intercepting');

      const modal = document.getElementById('mini-gate');
      const container = document.getElementById('mini-game-container');
      const titleEl = document.getElementById('mini-gate-title');
      if (!modal || !container) return;

      if (titleEl) titleEl.textContent = `defeat the Astronaut to unlock "${projectName}"`;
      modal.style.display = 'flex';

      // refresh close button listener
      const oldBtn = modal.querySelector('.mini-gate-close');
      const newBtn = oldBtn.cloneNode(true);
      oldBtn.parentNode.replaceChild(newBtn, oldBtn);
      newBtn.addEventListener('click', () => {
        closeModal();
        if (f) f.classList.remove('astro-intercepting');
        state = 'idle'; fallerPaused = false;
      });
      modal.onclick = e => {
        if (e.target === modal) {
          closeModal();
          if (f) f.classList.remove('astro-intercepting');
          state = 'idle'; fallerPaused = false;
        }
      };

      const gameId = GATEKEEPER_GAMES[Math.floor(Math.random() * GATEKEEPER_GAMES.length)];
      const onWin = () => AstronautGate.unlock('project', { projectId, onProjectOpen });
      currentCleanup = GameRegistry[gameId](container, onWin);
    },
  };
})();

// ================================================================
// INIT GATE
// ================================================================

function initGate() {
  if (sessionStorage.getItem('unlocked') === '1') {
    document.getElementById('gate').style.display = 'none';
    document.getElementById('portfolio').classList.add('visible');
    return;
  }
  const container = document.getElementById('game-container');
  container.insertAdjacentHTML('afterend', `
    <div id="gate-win">
      <div style="font-size:3rem">🎉</div>
      <div class="win-text">you're in.</div>
      <div class="win-sub">welcome to the portfolio</div>
    </div>
  `);
  const gameId = GATEKEEPER_GAMES[Math.floor(Math.random() * GATEKEEPER_GAMES.length)];
  GameRegistry[gameId](container, () => AstronautGate.unlock('global'));
}

// ================================================================
// ORIGAMI — simulator + guides
// ================================================================

function initOrigami() {
  // ---- Guide tab switching (new two-column layout) ----
  document.querySelectorAll('.orig-guide-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.orig-guide-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.guide-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('guide-' + tab.dataset.guide)?.classList.add('active');
    });
  });

  initSimulator();
  initGuide('crane', CRANE_STEPS, 'crane-step-svg', 'crane-step-num', 'crane-step-total', 'crane-step-desc', 'crane-prev', 'crane-next');
  initGuide('lotus', LOTUS_STEPS, 'lotus-step-svg', 'lotus-step-num', 'lotus-step-total', 'lotus-step-desc', 'lotus-prev', 'lotus-next');
  initGuide('boat',  BOAT_STEPS,  'boat-step-svg',  'boat-step-num',  'boat-step-total',  'boat-step-desc',  'boat-prev',  'boat-next');
}

// ---- Generic guide navigator ----
function initGuide(name, steps, svgId, numId, totalId, descId, prevId, nextId) {
  const svgEl   = document.getElementById(svgId);
  const numEl   = document.getElementById(numId);
  const totalEl = document.getElementById(totalId);
  const descEl  = document.getElementById(descId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (!svgEl) return;

  let step = 0;
  const total = steps.length;
  if (totalEl) totalEl.textContent = total;

  function render() {
    const s = steps[step];
    if (numEl)   numEl.textContent  = step + 1;
    if (descEl)  descEl.textContent = s.desc;
    if (svgEl)   svgEl.innerHTML    = `<svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">${s.svg}</svg>`;
    if (prevBtn) prevBtn.disabled   = step === 0;
    if (nextBtn) { nextBtn.disabled = step === total-1; nextBtn.textContent = step===total-1 ? 'done ✓' : 'next →'; }
  }

  prevBtn?.addEventListener('click', () => { if (step>0) { step--; render(); } });
  nextBtn?.addEventListener('click', () => { if (step<total-1) { step++; render(); } });
  render();
}

// ---- Simulator ----
function initSimulator() {
  const canvas = document.getElementById('origami-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ── Canvas setup ──────────────────────────────────────────────────
  const W = 460, H = 460;
  canvas.width = W; canvas.height = H;
  const CX = W / 2, CY = H / 2;
  const HALF = 196; // paper half-size

  // ── State ─────────────────────────────────────────────────────────
  let rotation  = 0;        // radians — paper rotation
  let foldMode  = 'valley'; // 'valley'|'mountain'|'crease'|'pleat'
  let foldAngle = 180;      // degrees — for partial folds
  let showRef   = true;     // reference points overlay
  let animating = false;
  let foldCount = 0;
  let pending   = null;     // first click point (world space)
  let mouse     = null;     // live mouse pos (world space)
  let snapPt    = null;     // current snap target

  const INIT_PAPER = () => [
    {x:CX-HALF, y:CY-HALF}, {x:CX+HALF, y:CY-HALF},
    {x:CX+HALF, y:CY+HALF}, {x:CX-HALF, y:CY+HALF},
  ];
  let paper   = INIT_PAPER();
  let layers  = [];
  let creases = [];
  let history = [];

  // ── Math helpers ──────────────────────────────────────────────────
  const dot = (a,b) => a.x*b.x + a.y*b.y;
  const sub = (a,b) => ({x:a.x-b.x, y:a.y-b.y});
  const add = (a,b) => ({x:a.x+b.x, y:a.y+b.y});
  const scl = (v,s) => ({x:v.x*s,   y:v.y*s});
  const nrm = v    => { const l=Math.hypot(v.x,v.y)||1; return {x:v.x/l,y:v.y/l}; };
  const crs = (a,b,p) => (b.x-a.x)*(p.y-a.y)-(b.y-a.y)*(p.x-a.x);

  // Rotate point around canvas centre
  function rotPt(p, ang) {
    const c=Math.cos(ang), s=Math.sin(ang), dx=p.x-CX, dy=p.y-CY;
    return {x: CX+dx*c-dy*s, y: CY+dx*s+dy*c};
  }

  // Screen event → world space (inverse-rotate)
  function toWorld(e) {
    const r = canvas.getBoundingClientRect();
    const sx = (e.clientX-r.left)*(W/r.width);
    const sy = (e.clientY-r.top)*(H/r.height);
    return rotPt({x:sx, y:sy}, -rotation);
  }

  function reflectPt(v, lp1, lp2) {
    const dir=nrm(sub(lp2,lp1)), d=sub(v,lp1);
    const foot=add(lp1, scl(dir, dot(d,dir)));
    return {x:2*foot.x-v.x, y:2*foot.y-v.y};
  }

  // Polygon clip: splits poly into {near, far} halves across line lp1→lp2
  function clipPoly(poly, lp1, lp2) {
    const near=[], far=[], n=poly.length;
    for (let i=0; i<n; i++) {
      const a=poly[i], b=poly[(i+1)%n];
      const ca=crs(lp1,lp2,a), cb=crs(lp1,lp2,b);
      if (ca<=0) near.push({...a}); else far.push({...a});
      if ((ca<0&&cb>0)||(ca>0&&cb<0)) {
        const t=ca/(ca-cb);
        const ix={x:a.x+t*(b.x-a.x), y:a.y+t*(b.y-a.y)};
        near.push({...ix}); far.push({...ix});
      }
    }
    return {near, far};
  }

  // Animated fold position for a vertex at angle theta (0→PI)
  function animPt(v, lp1, lp2, theta) {
    const dir=nrm(sub(lp2,lp1)), d=sub(v,lp1);
    const foot=add(lp1, scl(dir, dot(d,dir)));
    const perp=sub(v,foot), dAbs=Math.hypot(perp.x,perp.y);
    const pn=nrm(perp);
    return {
      x: foot.x + pn.x*dAbs*Math.cos(theta),
      y: foot.y + pn.y*dAbs*Math.cos(theta) - dAbs*Math.sin(theta)*0.28,
    };
  }

  // ── Snap system ───────────────────────────────────────────────────
  function getRefPoints() {
    const pts = [];
    const n = paper.length;
    // Corners (orange)
    paper.forEach(p => pts.push({...p, k:'corner'}));
    // Edge subdivisions (halves, quarters, thirds, eighths)
    for (let i=0; i<n; i++) {
      const a=paper[i], b=paper[(i+1)%n];
      [1/2,1/3,2/3,1/4,3/4,1/8,3/8,5/8,7/8].forEach(f => {
        const k = f===0.5?'mid':f===0.25||f===0.75?'quarter':'eighth';
        pts.push({x:a.x+f*(b.x-a.x), y:a.y+f*(b.y-a.y), k});
      });
    }
    // Center (purple)
    const cx=paper.reduce((s,p)=>s+p.x,0)/n, cy=paper.reduce((s,p)=>s+p.y,0)/n;
    pts.push({x:cx, y:cy, k:'center'});
    // Crease endpoints (blue)
    creases.forEach(c => { pts.push({...c.p1,k:'crease'}); pts.push({...c.p2,k:'crease'}); });
    // Crease-crease intersections inside paper (green)
    for (let i=0; i<creases.length; i++) {
      for (let j=i+1; j<creases.length; j++) {
        const ix = lineX(creases[i].p1, creases[i].p2, creases[j].p1, creases[j].p2);
        if (ix && inPoly(paper, ix)) pts.push({...ix, k:'xing'});
      }
    }
    return pts;
  }

  function lineX(p1,p2,p3,p4) {
    const dx1=p2.x-p1.x, dy1=p2.y-p1.y, dx2=p4.x-p3.x, dy2=p4.y-p3.y;
    const d=dx1*dy2-dy1*dx2;
    if (Math.abs(d)<1e-10) return null;
    const t=((p3.x-p1.x)*dy2-(p3.y-p1.y)*dx2)/d;
    return {x:p1.x+t*dx1, y:p1.y+t*dy1};
  }

  function inPoly(poly, pt) {
    let inside=false;
    for (let i=0,j=poly.length-1; i<poly.length; j=i++) {
      const xi=poly[i].x,yi=poly[i].y,xj=poly[j].x,yj=poly[j].y;
      if (((yi>pt.y)!==(yj>pt.y))&&pt.x<(xj-xi)*(pt.y-yi)/(yj-yi)+xi) inside=!inside;
    }
    return inside;
  }

  function findSnap(wp, R=22) {
    let best=null, bd=R;
    getRefPoints().forEach(p => {
      const d=Math.hypot(p.x-wp.x, p.y-wp.y);
      if (d<bd) { bd=d; best=p; }
    });
    return best;
  }

  // ── Rendering ─────────────────────────────────────────────────────
  // Draw polygon in world space, applying rotation transform to screen
  function drawPolyW(verts, fill, stroke, lw=1.5) {
    if (verts.length<2) return;
    ctx.beginPath();
    const s0=rotPt(verts[0], rotation);
    ctx.moveTo(s0.x, s0.y);
    for (let i=1; i<verts.length; i++) { const s=rotPt(verts[i],rotation); ctx.lineTo(s.x,s.y); }
    ctx.closePath();
    if (fill)   { ctx.fillStyle=fill;   ctx.fill(); }
    if (stroke) { ctx.strokeStyle=stroke; ctx.lineWidth=lw; ctx.stroke(); }
  }

  // Layer fill colors (slightly varying tones to show depth)
  const LAYER_FILLS   = ['rgba(240,232,213,0.10)','rgba(240,232,213,0.08)','rgba(220,218,205,0.07)','rgba(200,210,215,0.07)','rgba(210,200,220,0.06)'];
  const LAYER_STROKES = ['rgba(240,232,213,0.65)','rgba(240,232,213,0.55)','rgba(240,232,213,0.45)','rgba(240,232,213,0.38)','rgba(240,232,213,0.30)'];

  function render() {
    ctx.clearRect(0,0,W,H);
    ctx.setLineDash([]);

    // Faint grid (screen space, doesn't rotate)
    ctx.strokeStyle='rgba(240,232,213,0.022)'; ctx.lineWidth=0.5;
    for (let x=0; x<=W; x+=40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y=0; y<=H; y+=40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

    // Rotation indicator arc
    if (rotation % (2*Math.PI) !== 0) {
      ctx.save(); ctx.beginPath();
      ctx.arc(CX,CY, HALF+16, -Math.PI/2, -Math.PI/2+rotation, rotation<0);
      ctx.strokeStyle='rgba(240,152,78,0.25)'; ctx.lineWidth=2; ctx.setLineDash([4,4]); ctx.stroke();
      ctx.restore(); ctx.setLineDash([]);
    }

    // Base paper
    drawPolyW(paper, 'rgba(240,232,213,0.09)', 'rgba(240,232,213,0.65)', 2.0);

    // Folded layers (stacked, each with depth shadow)
    layers.forEach((layer, idx) => {
      const fi = Math.min(idx, LAYER_FILLS.length-1);
      ctx.save();
      ctx.shadowColor='rgba(0,0,0,0.9)'; ctx.shadowBlur=8; ctx.shadowOffsetY=3;
      drawPolyW(layer, LAYER_FILLS[fi], LAYER_STROKES[fi], 1.5);
      ctx.restore();
    });

    // Crease lines
    creases.forEach(c => {
      const s=rotPt(c.p1,rotation), e=rotPt(c.p2,rotation);
      ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(e.x,e.y);
      if      (c.type==='valley')      { ctx.strokeStyle='rgba(96,165,212,0.75)';  ctx.setLineDash([7,4]); }
      else if (c.type==='mountain')    { ctx.strokeStyle='rgba(224,85,85,0.75)';   ctx.setLineDash([2,4]); }
      else if (c.type==='inside-rev')  { ctx.strokeStyle='rgba(96,165,212,0.85)';  ctx.setLineDash([5,3,2,3]); }
      else if (c.type==='outside-rev') { ctx.strokeStyle='rgba(224,85,85,0.85)';   ctx.setLineDash([5,3,2,3]); }
      else if (c.type==='petal')       { ctx.strokeStyle='rgba(122,184,122,0.80)'; ctx.setLineDash([6,3]); }
      else if (c.type==='squash')      { ctx.strokeStyle='rgba(192,143,255,0.80)'; ctx.setLineDash([4,4]); }
      else if (c.type==='rabbit')      { ctx.strokeStyle='rgba(245,196,48,0.80)';  ctx.setLineDash([4,2]); }
      else if (c.type==='sink')        { ctx.strokeStyle='rgba(76,205,196,0.80)';  ctx.setLineDash([2,2]); }
      else                             { ctx.strokeStyle='rgba(240,232,213,0.35)'; ctx.setLineDash([3,7]); }
      ctx.lineWidth=1.5; ctx.stroke(); ctx.setLineDash([]);
    });

    // Reference points overlay
    if (showRef) {
      const REF_COLOR = {
        corner:'rgba(240,152,78,0.6)', center:'rgba(192,143,255,0.65)',
        mid:'rgba(245,196,48,0.55)', quarter:'rgba(245,196,48,0.35)',
        eighth:'rgba(240,232,213,0.18)', crease:'rgba(96,165,212,0.50)',
        xing:'rgba(122,184,122,0.65)',
      };
      const REF_R = {corner:4.5, center:5.5, mid:3.5, quarter:2.8, eighth:2.0, crease:2.5, xing:3.5};
      getRefPoints().forEach(p => {
        const ps=rotPt(p, rotation);
        ctx.beginPath();
        ctx.arc(ps.x, ps.y, REF_R[p.k]||2, 0, Math.PI*2);
        ctx.fillStyle=REF_COLOR[p.k]||'rgba(240,232,213,0.15)';
        ctx.fill();
      });
    }

    // Ghost fold preview (where paper will land)
    const target = snapPt || mouse;
    if (pending && target) {
      const p1s=rotPt(pending,rotation), p2s=rotPt(target,rotation);
      // Preview fold line
      const LC = foldMode==='valley'||foldMode==='inside-rev' ? 'rgba(96,165,212,0.95)' :
                 foldMode==='mountain'||foldMode==='outside-rev' ? 'rgba(224,85,85,0.95)' :
                 foldMode==='pleat'||foldMode==='petal' ? 'rgba(122,184,122,0.95)' :
                 foldMode==='squash' ? 'rgba(192,143,255,0.95)' :
                 foldMode==='rabbit' ? 'rgba(245,196,48,0.95)' :
                 foldMode==='sink'   ? 'rgba(76,205,196,0.95)' : 'rgba(240,232,213,0.7)';
      ctx.beginPath(); ctx.moveTo(p1s.x,p1s.y); ctx.lineTo(p2s.x,p2s.y);
      ctx.strokeStyle=LC; ctx.setLineDash([5,3]); ctx.lineWidth=2; ctx.stroke(); ctx.setLineDash([]);
      // Ghost paper (reflected position)
      if (foldMode!=='crease' && foldMode!=='rabbit' && foldMode!=='sink') {
        const {far} = clipPoly(paper, pending, target);
        if (far.length>=3) {
          const ghost=far.map(p=>reflectPt(p, pending, target));
          drawPolyW(ghost, 'rgba(245,196,48,0.07)', 'rgba(245,196,48,0.38)', 1.0);
        }
        // For pleat: show second parallel fold line
        if (foldMode==='pleat') {
          const dir=nrm(sub(target,pending)), perp={x:-dir.y,y:dir.x};
          const off=26;
          const q1=rotPt({x:pending.x+perp.x*off,y:pending.y+perp.y*off},rotation);
          const q2=rotPt({x:target.x+perp.x*off,y:target.y+perp.y*off},rotation);
          ctx.beginPath(); ctx.moveTo(q1.x,q1.y); ctx.lineTo(q2.x,q2.y);
          ctx.strokeStyle='rgba(224,85,85,0.6)'; ctx.setLineDash([2,4]); ctx.lineWidth=1.3; ctx.stroke(); ctx.setLineDash([]);
        }
      }
    }

    // First-click point indicator
    if (pending) {
      const ps=rotPt(pending,rotation);
      ctx.beginPath(); ctx.arc(ps.x,ps.y,5,0,Math.PI*2);
      ctx.fillStyle='rgba(245,196,48,0.95)'; ctx.fill();
      ctx.beginPath(); ctx.arc(ps.x,ps.y,10,0,Math.PI*2);
      ctx.strokeStyle='rgba(245,196,48,0.40)'; ctx.lineWidth=1.5; ctx.stroke();
    }

    // Snap ring
    if (snapPt) {
      const ps=rotPt(snapPt,rotation);
      ctx.beginPath(); ctx.arc(ps.x,ps.y,11,0,Math.PI*2);
      ctx.strokeStyle='rgba(245,196,48,0.85)'; ctx.lineWidth=2;
      ctx.setLineDash([3,3]); ctx.stroke(); ctx.setLineDash([]);
    }

    // Floating mouse dot (when nothing selected)
    if (mouse && !pending && !snapPt) {
      const ms=rotPt(mouse,rotation);
      ctx.beginPath(); ctx.arc(ms.x,ms.y,3,0,Math.PI*2);
      ctx.fillStyle='rgba(240,232,213,0.22)'; ctx.fill();
    }
  }

  // ── Helpers ───────────────────────────────────────────────────────
  function setHint(msg) { const el=document.getElementById('sim-hint'); if(el) el.textContent=msg; }
  function setCount(n)  { const el=document.getElementById('fold-count'); if(el) el.textContent=n; }

  // ── Fold execution ────────────────────────────────────────────────
  function performFold(lp1, lp2) {
    if (Math.hypot(lp2.x-lp1.x, lp2.y-lp1.y) < 6) return;
    const {near, far} = clipPoly(paper, lp1, lp2);
    if (near.length<3 || far.length<3) {
      setHint('Fold line must cross the paper edge to edge — try again'); render(); return;
    }
    const isCrease    = foldMode==='crease';
    const isPleat     = foldMode==='pleat';
    const isRabbit    = foldMode==='rabbit';
    const isSink      = foldMode==='sink';
    const isPetal     = foldMode==='petal';
    const isSquash    = foldMode==='squash';
    const isInsideRev = foldMode==='inside-rev';
    const isOutsideRev= foldMode==='outside-rev';
    const noFold      = isCrease || isRabbit || isSink;
    const targetTheta = (foldAngle/180)*Math.PI;
    const animTheta   = noFold ? Math.PI*0.36 : targetTheta;

    animating=true;
    setHint(noFold?'Marking crease — will fold and unfold…':'Folding…');

    let f=0; const F=58;
    (function step(){
      const t=f/F, e=t<0.5?2*t*t:-1+(4-2*t)*t;
      const theta=animTheta*e;

      ctx.clearRect(0,0,W,H);
      drawPolyW(paper,'rgba(240,232,213,0.09)','rgba(240,232,213,0.65)',2.0);
      layers.forEach((l,idx)=>{
        const fi=Math.min(idx,LAYER_FILLS.length-1);
        ctx.save();
        ctx.shadowColor='rgba(0,0,0,0.9)'; ctx.shadowBlur=7; ctx.shadowOffsetY=2;
        drawPolyW(l,LAYER_FILLS[fi],LAYER_STROKES[fi],1.5);
        ctx.restore();
      });
      creases.forEach(c=>{
        const s=rotPt(c.p1,rotation), e2=rotPt(c.p2,rotation);
        ctx.beginPath(); ctx.moveTo(s.x,s.y); ctx.lineTo(e2.x,e2.y);
        if      (c.type==='valley')      { ctx.strokeStyle='rgba(96,165,212,0.70)';  ctx.setLineDash([7,4]); }
        else if (c.type==='mountain')    { ctx.strokeStyle='rgba(224,85,85,0.70)';   ctx.setLineDash([2,4]); }
        else if (c.type==='inside-rev')  { ctx.strokeStyle='rgba(96,165,212,0.80)';  ctx.setLineDash([5,3,2,3]); }
        else if (c.type==='outside-rev') { ctx.strokeStyle='rgba(224,85,85,0.80)';   ctx.setLineDash([5,3,2,3]); }
        else if (c.type==='petal')       { ctx.strokeStyle='rgba(122,184,122,0.75)'; ctx.setLineDash([6,3]); }
        else if (c.type==='squash')      { ctx.strokeStyle='rgba(192,143,255,0.75)'; ctx.setLineDash([4,4]); }
        else if (c.type==='rabbit')      { ctx.strokeStyle='rgba(245,196,48,0.75)';  ctx.setLineDash([4,2]); }
        else if (c.type==='sink')        { ctx.strokeStyle='rgba(76,205,196,0.75)';  ctx.setLineDash([2,2]); }
        else                             { ctx.strokeStyle='rgba(240,232,213,0.30)'; ctx.setLineDash([3,7]); }
        ctx.lineWidth=1.4; ctx.stroke(); ctx.setLineDash([]);
      });

      // Animated folding flap
      const a=0.45+0.25*Math.cos(theta);
      const aFar=far.map(v=>rotPt(animPt(v,lp1,lp2,theta),rotation));
      ctx.save(); ctx.globalAlpha=a;
      ctx.beginPath(); ctx.moveTo(aFar[0].x,aFar[0].y);
      aFar.slice(1).forEach(p=>ctx.lineTo(p.x,p.y));
      ctx.closePath();
      ctx.fillStyle=`rgba(240,232,213,${a*0.20})`; ctx.fill();
      ctx.strokeStyle=`rgba(240,232,213,${a*0.75})`; ctx.lineWidth=1.7; ctx.stroke();
      ctx.restore();

      f++;
      if (f<=F) { requestAnimationFrame(step); return; }

      // ── Finalize fold ──
      animating=false;
      history.push({
        paper:  paper.map(v=>({...v})),
        layers: layers.map(l=>l.map(v=>({...v}))),
        creases:creases.map(c=>({...c,p1:{...c.p1},p2:{...c.p2}})),
        foldCount,
      });

      if (!noFold) {
        paper = near;
        layers.push(far.map(v=>reflectPt(v,lp1,lp2)));
        foldCount++; setCount(foldCount);
        if (isPleat) {
          const dir=nrm(sub(lp2,lp1)), perp={x:-dir.y,y:dir.x}, off=26;
          creases.push({p1:{x:lp1.x+perp.x*off,y:lp1.y+perp.y*off},p2:{x:lp2.x+perp.x*off,y:lp2.y+perp.y*off},type:'mountain'});
        }
        if (isPetal) {
          const dir=nrm(sub(lp2,lp1)), perp={x:-dir.y,y:dir.x};
          const fLen=Math.hypot(lp2.x-lp1.x,lp2.y-lp1.y), mid={x:(lp1.x+lp2.x)/2,y:(lp1.y+lp2.y)/2};
          const tip={x:mid.x+perp.x*fLen*0.5,y:mid.y+perp.y*fLen*0.5};
          creases.push({p1:{...lp1},p2:{...tip},type:'petal'});
          creases.push({p1:{...lp2},p2:{...tip},type:'petal'});
        }
        if (isSquash) {
          const dir=nrm(sub(lp2,lp1)), perp={x:-dir.y,y:dir.x};
          const mid={x:(lp1.x+lp2.x)/2,y:(lp1.y+lp2.y)/2};
          const off=Math.hypot(lp2.x-lp1.x,lp2.y-lp1.y)*0.45;
          creases.push({p1:{x:mid.x+perp.x*off,y:mid.y+perp.y*off},p2:{x:mid.x-perp.x*off,y:mid.y-perp.y*off},type:'squash'});
        }
      }
      if (isRabbit) {
        const dir=nrm(sub(lp2,lp1)), perp={x:-dir.y,y:dir.x};
        const fLen=Math.hypot(lp2.x-lp1.x,lp2.y-lp1.y), mid={x:(lp1.x+lp2.x)/2,y:(lp1.y+lp2.y)/2};
        const tip={x:mid.x+perp.x*fLen*0.5,y:mid.y+perp.y*fLen*0.5};
        creases.push({p1:{...lp1},p2:{...tip},type:'rabbit'});
        creases.push({p1:{...lp2},p2:{...tip},type:'rabbit'});
      }
      if (isSink) {
        const dir=nrm(sub(lp2,lp1)), perp={x:-dir.y,y:dir.x};
        const mid={x:(lp1.x+lp2.x)/2,y:(lp1.y+lp2.y)/2};
        const fLen=Math.hypot(lp2.x-lp1.x,lp2.y-lp1.y);
        const tip={x:mid.x+perp.x*fLen*0.3,y:mid.y+perp.y*fLen*0.3};
        creases.push({p1:{...lp1},p2:{...tip},type:'sink'});
        creases.push({p1:{...lp2},p2:{...tip},type:'sink'});
      }
      const creaseType = isCrease?'crease':isPleat?'valley':isInsideRev?'inside-rev':isOutsideRev?'outside-rev':isPetal?'petal':isSquash?'squash':isRabbit?'rabbit':isSink?'sink':foldMode;
      creases.push({p1:{...lp1},p2:{...lp2},type:creaseType});
      render();
      setHint(noFold
        ? 'Crease marked ✓  Now fold along it, or add more reference creases'
        : `Fold ${foldCount} done ✓  ↩ undo · ↺ reset · continue folding`);
    })();
  }

  // ── Inject extra controls (guard against double-init) ─────────────
  if (!document.getElementById('sim-extra-wrap')) {
    const wrap = document.createElement('div');
    wrap.id = 'sim-extra-wrap';
    wrap.className = 'sim-extra-controls';
    wrap.innerHTML = `
      <div class="sim-ctrl-row">
        <span class="sim-ctrl-lbl">rotate</span>
        <button class="sim-action-btn" id="rot-ccw" title="Rotate paper 45° counter-clockwise">↺ 45°</button>
        <button class="sim-action-btn" id="rot-cw"  title="Rotate paper 45° clockwise">↻ 45°</button>
        <button class="sim-action-btn" id="rot-180" title="Rotate paper 180°">↻ 180°</button>
        <span class="sim-rot-val" id="rot-val">0°</span>
      </div>
      <div class="sim-ctrl-row">
        <span class="sim-ctrl-lbl">tools</span>
        <button class="sim-action-btn" id="fold-flip" title="Mirror paper horizontally">⇄ flip</button>
        <span class="sim-ctrl-sep">·</span>
        <span class="sim-ctrl-lbl">angle</span>
        <input type="range" id="fold-angle-range" class="sim-angle-slider" min="10" max="180" value="180" step="5"/>
        <span class="sim-angle-val" id="fold-angle-val">180°</span>
      </div>
      <div class="sim-ctrl-row">
        <span class="sim-ctrl-lbl">presets</span>
        <button class="sim-action-btn sim-preset" id="pre-half-h"  title="Fold in half: top meets bottom">½ horiz</button>
        <button class="sim-action-btn sim-preset" id="pre-half-v"  title="Fold in half: left meets right">½ vert</button>
        <button class="sim-action-btn sim-preset" id="pre-diag1"   title="Fold diagonal ↘">⟋ diag</button>
        <button class="sim-action-btn sim-preset" id="pre-diag2"   title="Fold diagonal ↙">⟍ diag</button>
        <button class="sim-action-btn sim-preset" id="pre-qtr-h"   title="Fold to quarter — left ¼">¼ H</button>
        <button class="sim-action-btn sim-preset" id="pre-qtr-v"   title="Fold to quarter — top ¼">¼ V</button>
      </div>
      <div class="sim-ctrl-row">
        <label class="sim-ref-toggle">
          <input type="checkbox" id="show-ref-chk" checked/>
          <span>show reference points</span>
        </label>
        <span class="sim-ref-legend">
          <span style="color:#f0984e">●</span>corner
          <span style="color:#c08fff">●</span>center
          <span style="color:#f5c430">●</span>½ ¼
          <span style="color:#60a5d4">●</span>crease
          <span style="color:#7ab87a">●</span>crossing
        </span>
      </div>`;
    canvas.insertAdjacentElement('beforebegin', wrap);
  }

  // ── Canvas events ─────────────────────────────────────────────────
  canvas.addEventListener('mousemove', e => {
    if (animating) return;
    const wp=toWorld(e); mouse=wp; snapPt=findSnap(wp); render();
  });
  canvas.addEventListener('mouseleave', () => { mouse=null; snapPt=null; render(); });
  canvas.addEventListener('click', e => {
    if (animating) return;
    const wp=toWorld(e), eff=findSnap(wp)||wp;
    if (!pending) {
      pending=eff;
      setHint('Second point — snap dots help you hit exact references');
      render();
    } else {
      const lp1=pending; pending=null; snapPt=null; mouse=null;
      performFold(lp1, eff);
    }
  });

  // ── Fold-mode buttons ─────────────────────────────────────────────
  function setFoldMode(mode) {
    foldMode=mode;
    ['fold-valley','fold-mountain','fold-crease','fold-pleat','fold-inside-rev','fold-outside-rev','fold-petal','fold-squash','fold-rabbit','fold-sink'].forEach(id =>
      document.getElementById(id)?.classList.toggle('active', id==='fold-'+mode));
    pending=null; snapPt=null; render();
    const hints = {
      'valley':'Click two points to valley fold (toward you)','mountain':'Click two points to mountain fold (away from you)',
      'crease':'Click two points to mark a crease without folding','pleat':'Click two points to create a pleat (valley + mountain)',
      'inside-rev':'Click two points — reverses tip inward between layers','outside-rev':'Click two points — reverses tip outward over layers',
      'petal':'Click two points — folds + adds symmetric petal creases','squash':'Click two points — folds + adds squash crease pattern',
      'rabbit':'Click two points — marks rabbit ear creases (3 lines to tip)','sink':'Click two points — marks sink crease pattern at corner',
    };
    setHint(hints[mode]||'Click two points on the paper to draw a fold line');
  }
  document.getElementById('fold-valley')?.addEventListener('click',       ()=>setFoldMode('valley'));
  document.getElementById('fold-mountain')?.addEventListener('click',     ()=>setFoldMode('mountain'));
  document.getElementById('fold-crease')?.addEventListener('click',       ()=>setFoldMode('crease'));
  document.getElementById('fold-pleat')?.addEventListener('click',        ()=>setFoldMode('pleat'));
  document.getElementById('fold-inside-rev')?.addEventListener('click',   ()=>setFoldMode('inside-rev'));
  document.getElementById('fold-outside-rev')?.addEventListener('click',  ()=>setFoldMode('outside-rev'));
  document.getElementById('fold-petal')?.addEventListener('click',        ()=>setFoldMode('petal'));
  document.getElementById('fold-squash')?.addEventListener('click',       ()=>setFoldMode('squash'));
  document.getElementById('fold-rabbit')?.addEventListener('click',       ()=>setFoldMode('rabbit'));
  document.getElementById('fold-sink')?.addEventListener('click',         ()=>setFoldMode('sink'));

  document.getElementById('fold-undo')?.addEventListener('click', () => {
    if (!history.length) return;
    const prev=history.pop();
    paper=prev.paper; layers=prev.layers; foldCount=prev.foldCount;
    pending=null; snapPt=null; setCount(foldCount); render();
    setHint('Unfolded — crease lines remain visible');
  });

  document.getElementById('fold-reset')?.addEventListener('click', () => {
    paper=INIT_PAPER(); layers=[]; creases=[]; history=[];
    foldCount=0; rotation=0; pending=null; snapPt=null;
    const rv=document.getElementById('rot-val'); if(rv) rv.textContent='0°';
    setCount(0); render();
    setHint('Paper reset! Click two reference points (dots) to start folding');
  });

  // ── New control handlers ──────────────────────────────────────────
  function updateRotDisplay() {
    const rv=document.getElementById('rot-val');
    if (rv) rv.textContent = (Math.round(rotation*180/Math.PI)%360)+'°';
  }
  document.getElementById('rot-ccw')?.addEventListener('click',  ()=>{ rotation-=Math.PI/4; updateRotDisplay(); render(); });
  document.getElementById('rot-cw')?.addEventListener('click',   ()=>{ rotation+=Math.PI/4; updateRotDisplay(); render(); });
  document.getElementById('rot-180')?.addEventListener('click',  ()=>{ rotation+=Math.PI;   updateRotDisplay(); render(); });

  document.getElementById('fold-flip')?.addEventListener('click', () => {
    const cx=paper.reduce((s,p)=>s+p.x,0)/paper.length;
    const mx=p=>({...p, x:2*cx-p.x});
    paper=paper.map(mx);
    layers=layers.map(l=>l.map(mx));
    creases=creases.map(c=>({...c,p1:mx(c.p1),p2:mx(c.p2)}));
    render();
  });

  document.getElementById('fold-angle-range')?.addEventListener('input', e=>{
    foldAngle=parseInt(e.target.value);
    const av=document.getElementById('fold-angle-val'); if(av) av.textContent=foldAngle+'°';
  });

  document.getElementById('show-ref-chk')?.addEventListener('change', e=>{ showRef=e.target.checked; render(); });

  // Preset folds
  function getBounds() {
    const xs=paper.map(p=>p.x), ys=paper.map(p=>p.y);
    return {x1:Math.min(...xs),x2:Math.max(...xs),y1:Math.min(...ys),y2:Math.max(...ys),
            cx:(Math.min(...xs)+Math.max(...xs))/2, cy:(Math.min(...ys)+Math.max(...ys))/2};
  }
  function doPreset(lp1,lp2) { pending=null; snapPt=null; setTimeout(()=>performFold(lp1,lp2),40); }

  document.getElementById('pre-half-h')?.addEventListener('click',()=>{ const b=getBounds(); doPreset({x:b.x1,y:b.cy},{x:b.x2,y:b.cy}); });
  document.getElementById('pre-half-v')?.addEventListener('click',()=>{ const b=getBounds(); doPreset({x:b.cx,y:b.y1},{x:b.cx,y:b.y2}); });
  document.getElementById('pre-diag1')?.addEventListener('click', ()=>{ const b=getBounds(); doPreset({x:b.x1,y:b.y1},{x:b.x2,y:b.y2}); });
  document.getElementById('pre-diag2')?.addEventListener('click', ()=>{ const b=getBounds(); doPreset({x:b.x2,y:b.y1},{x:b.x1,y:b.y2}); });
  document.getElementById('pre-qtr-h')?.addEventListener('click', ()=>{ const b=getBounds(); doPreset({x:b.x1,y:(b.y1+b.cy)/2},{x:b.x2,y:(b.y1+b.cy)/2}); });
  document.getElementById('pre-qtr-v')?.addEventListener('click', ()=>{ const b=getBounds(); doPreset({x:(b.x1+b.cx)/2,y:b.y1},{x:(b.x1+b.cx)/2,y:b.y2}); });

  // Initial render
  setCount(0);
  setHint('Click two reference dots (or any two points) to draw a fold line');
  render();
}

// ---- Guide step data ----
const CRANE_STEPS = [
  {desc:"Start with a square sheet of paper, colored side facing down.",svg:`<rect x="35" y="35" width="150" height="150" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><text x="110" y="118" text-anchor="middle" font-family="Caveat,cursive" font-size="13" fill="var(--ink-muted)">colored side down</text>`},
  {desc:"Fold in half diagonally corner to corner. Crease sharply, then unfold.",svg:`<polygon points="35,185 185,185 185,35" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><line x1="35" y1="35" x2="185" y2="185" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.7"/><path d="M 40 40 L 44 34 L 50 38" stroke="var(--pencil)" stroke-width="1.5" fill="none" stroke-linecap="round"/>`},
  {desc:"Fold the other diagonal. Then fold in half both horizontally and vertically — crease all, unfold.",svg:`<rect x="35" y="35" width="150" height="150" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><line x1="35" y1="35" x2="185" y2="185" stroke="var(--pencil)" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.45"/><line x1="185" y1="35" x2="35" y2="185" stroke="var(--pencil)" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.45"/><line x1="110" y1="35" x2="110" y2="185" stroke="var(--cobalt)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.55"/><line x1="35" y1="110" x2="185" y2="110" stroke="var(--cobalt)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.55"/>`},
  {desc:"Collapse all creases inward — the paper folds into a small diamond. This is the preliminary base.",svg:`<polygon points="110,30 185,110 110,185 35,110" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><line x1="110" y1="30" x2="110" y2="185" stroke="var(--ink-muted)" stroke-width="1" opacity="0.35"/><line x1="35" y1="110" x2="185" y2="110" stroke="var(--ink-muted)" stroke-width="1" opacity="0.35"/><text x="110" y="108" text-anchor="middle" font-family="Caveat,cursive" font-size="12" fill="var(--ink-muted)">preliminary base</text>`},
  {desc:"Fold left and right edges of the front flap to the center line. Repeat on back. This forms the bird base.",svg:`<polygon points="110,35 165,110 110,180 55,110" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><polygon points="110,180 82,110 110,55 138,110" stroke="var(--sage)" stroke-width="1.5" fill="rgba(122,184,122,0.07)"/><line x1="55" y1="110" x2="165" y2="110" stroke="var(--ink-muted)" stroke-width="0.8" opacity="0.3"/>`},
  {desc:"Fold the top triangular flap downward. Crease well and repeat on the back side.",svg:`<polygon points="110,160 55,110 110,35 165,110" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><path d="M 55 110 C 40 95 28 80 20 68" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" fill="none"/><path d="M 165 110 C 180 95 192 80 200 68" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" fill="none"/><text x="110" y="195" text-anchor="middle" font-family="Caveat,cursive" font-size="12" fill="var(--ink-muted)">bird base</text>`},
  {desc:"Inside reverse fold the two narrow points upward to form the head and tail of the crane.",svg:`<path d="M 110 45 L 75 125 L 110 165 L 145 125 Z" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.05)"/><path d="M 75 125 C 58 108 38 90 22 74" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/><path d="M 145 125 C 162 108 182 90 198 74" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/><path d="M 16 68 C 20 72 24 72 28 68" stroke="var(--pencil)" stroke-width="1.5" fill="none" stroke-linecap="round"/>`},
  {desc:"Gently pull the wings apart. Blow into the body to puff it up. ✨ Your crane is complete!",svg:`<ellipse cx="110" cy="130" rx="30" ry="18" stroke="var(--ink)" stroke-width="2" fill="rgba(240,232,213,0.07)"/><path d="M 80 120 C 56 104 32 86 14 66" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/><path d="M 140 120 C 164 104 188 86 206 66" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/><path d="M 100 112 C 95 93 88 72 82 54" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"/><ellipse cx="81" cy="50" rx="8" ry="6" stroke="var(--ink)" stroke-width="1.8" fill="rgba(240,232,213,0.06)"/><path d="M 120 112 C 125 93 132 72 138 54" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"/><path d="M 73 60 L 81 48" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round"/><circle cx="69" cy="56" r="2" fill="var(--pencil)" opacity="0.8"/>` },
];

const LOTUS_STEPS = [
  {desc:"Start with a square sheet, colored side facing up.",svg:`<rect x="35" y="35" width="150" height="150" stroke="var(--ink)" stroke-width="2" fill="rgba(122,184,122,0.08)"/><text x="110" y="118" text-anchor="middle" font-family="Caveat,cursive" font-size="13" fill="var(--ink-muted)">colored side up</text>`},
  {desc:"Fold all four corners in to meet the center point. Crease each one well.",svg:`<rect x="35" y="35" width="150" height="150" stroke="var(--ink)" stroke-width="1.5" fill="rgba(240,232,213,0.03)" stroke-dasharray="4 4" opacity="0.5"/><polygon points="110,35 185,110 110,185 35,110" stroke="var(--ink)" stroke-width="2" fill="rgba(122,184,122,0.08)"/><line x1="110" y1="35" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><line x1="185" y1="110" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><line x1="110" y1="185" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><line x1="35" y1="110" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/>`},
  {desc:"Flip it over. Fold all four corners to the center again — you now have a smaller square.",svg:`<polygon points="110,55 155,110 110,165 65,110" stroke="var(--ink)" stroke-width="2" fill="rgba(122,184,122,0.08)"/><line x1="110" y1="55" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><line x1="155" y1="110" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><line x1="110" y1="165" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><line x1="65" y1="110" x2="110" y2="110" stroke="var(--pencil)" stroke-width="1" stroke-dasharray="4 3" opacity="0.5"/><text x="110" y="195" text-anchor="middle" font-family="Caveat,cursive" font-size="12" fill="var(--ink-muted)">flip and fold again</text>`},
  {desc:"Flip it back over. You'll see 4 square flaps — fold each one's corners to the center once more.",svg:`<rect x="72" y="72" width="76" height="76" stroke="var(--ink)" stroke-width="2" fill="rgba(122,184,122,0.06)"/><polygon points="110,72 148,110 110,148 72,110" stroke="var(--sage)" stroke-width="1.5" fill="rgba(122,184,122,0.08)" stroke-dasharray="4 3"/>`},
  {desc:"Gently pull the folded corners from underneath on each side — 4 large petals begin to emerge.",svg:`<ellipse cx="110" cy="90" rx="18" ry="28" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.1)" transform="rotate(-20 110 90)"/><ellipse cx="130" cy="110" rx="18" ry="28" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.1)" transform="rotate(70 130 110)"/><ellipse cx="110" cy="130" rx="18" ry="28" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.1)" transform="rotate(20 110 130)"/><ellipse cx="90" cy="110" rx="18" ry="28" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.1)" transform="rotate(-70 90 110)"/><circle cx="110" cy="110" r="12" stroke="var(--ink)" stroke-width="1.5" fill="rgba(240,232,213,0.04)"/>`},
  {desc:"Pull out the 4 hidden inner corners for the smaller petals. Shape gently. 🌸 Lotus complete!",svg:`<ellipse cx="110" cy="82" rx="22" ry="34" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.12)" transform="rotate(-15 110 82)"/><ellipse cx="138" cy="110" rx="22" ry="34" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.12)" transform="rotate(75 138 110)"/><ellipse cx="110" cy="138" rx="22" ry="34" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.12)" transform="rotate(15 110 138)"/><ellipse cx="82" cy="110" rx="22" ry="34" stroke="var(--sage)" stroke-width="2" fill="rgba(122,184,122,0.12)" transform="rotate(-75 82 110)"/><ellipse cx="110" cy="90" rx="12" ry="20" stroke="var(--pencil)" stroke-width="1.5" fill="rgba(245,196,48,0.08)" transform="rotate(-10 110 90)"/><ellipse cx="130" cy="110" rx="12" ry="20" stroke="var(--pencil)" stroke-width="1.5" fill="rgba(245,196,48,0.08)" transform="rotate(80 130 110)"/><ellipse cx="110" cy="130" rx="12" ry="20" stroke="var(--pencil)" stroke-width="1.5" fill="rgba(245,196,48,0.08)" transform="rotate(10 110 130)"/><ellipse cx="90" cy="110" rx="12" ry="20" stroke="var(--pencil)" stroke-width="1.5" fill="rgba(245,196,48,0.08)" transform="rotate(-80 90 110)"/><circle cx="110" cy="110" r="10" stroke="var(--pencil)" stroke-width="1.5" fill="rgba(245,196,48,0.12)"/>` },
];

const BOAT_STEPS = [
  {desc:"Start with a rectangular sheet of paper (A4 or letter works great).",svg:`<rect x="45" y="65" width="130" height="90" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.06)"/>`},
  {desc:"Fold in half lengthwise (hotdog fold). Crease and unfold. Now fold in half widthwise — keep folded.",svg:`<rect x="45" y="82" width="130" height="56" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.06)"/><line x1="45" y1="110" x2="175" y2="110" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.5"/>`},
  {desc:"Fold the top-left corner diagonally down to the center crease. Repeat on the top-right corner.",svg:`<rect x="45" y="82" width="130" height="56" stroke="var(--ink)" stroke-width="1.5" fill="rgba(240,232,213,0.03)" stroke-dasharray="4 4" opacity="0.4"/><polygon points="45,82 175,82 175,110 110,110 45,110" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.06)"/><polygon points="45,82 110,110 45,110" stroke="var(--cobalt)" stroke-width="1.5" fill="rgba(96,165,212,0.1)"/><polygon points="175,82 110,110 175,110" stroke="var(--cobalt)" stroke-width="1.5" fill="rgba(96,165,212,0.1)"/>`},
  {desc:"Fold the bottom strip up on the front. Flip and fold the other bottom strip up on the back.",svg:`<polygon points="45,82 175,82 175,110 110,110 45,110" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.06)"/><rect x="45" y="124" width="130" height="14" stroke="var(--cobalt)" stroke-width="1.5" fill="rgba(96,165,212,0.1)"/><path d="M 45 138 L 45 124 L 175 124 L 175 138" stroke="var(--cobalt)" stroke-width="1.5" fill="none"/>`},
  {desc:"Open the shape from the bottom center — press the two sides flat against each other to form a square/diamond.",svg:`<polygon points="110,55 175,110 110,165 45,110" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.08)"/><line x1="110" y1="55" x2="110" y2="165" stroke="var(--ink-muted)" stroke-width="1" opacity="0.3"/>`},
  {desc:"Fold the bottom point of the front flap upward to the top point. Flip and repeat on the back.",svg:`<polygon points="110,55 175,110 110,130 45,110" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.08)"/><polygon points="110,130 145,110 110,55 75,110" stroke="var(--cobalt)" stroke-width="1.5" fill="rgba(96,165,212,0.12)"/>`},
  {desc:"Gently pull the two top points apart and press the bottom flat. ⛵ Your boat is ready to sail!",svg:`<path d="M 40 155 L 40 100 L 110 60 L 180 100 L 180 155 Z" stroke="var(--ink)" stroke-width="2" fill="rgba(96,165,212,0.08)"/><path d="M 40 155 L 180 155" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round"/><path d="M 110 60 L 110 155" stroke="var(--ink-muted)" stroke-width="1" opacity="0.3"/><path d="M 30 165 C 50 160 70 168 90 163 C 110 158 130 166 150 161 C 170 156 185 162 200 158" stroke="var(--cobalt)" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/>`},
];

// ================================================================
// TOP NAV
// ================================================================

function initTopNav() {
  let graphInited = false;
  document.querySelectorAll('.top-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.top-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.top-section').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const sec = document.getElementById(tab.dataset.section);
      if (sec) sec.classList.add('active');
      window.scrollTo(0, 0);
      // Lazy-init graph when tab first becomes visible (canvas needs visible width)
      if (tab.dataset.section === 'sec-graph' && !graphInited) {
        graphInited = true;
        requestAnimationFrame(() => initProjectGraph());
      }
    });
  });
}

// ================================================================
// GAMES HUB
// ================================================================

const WORDLE_TARGETS = ['CRANE','BLOOM','PIXEL','STACK','FORGE','SWIPE','CRAFT','PHASE','GLIDE','BRAVE','STONE','SWIFT','PRIME','DELTA','SLOPE','BLEND','SPARK','GHOST','SHOUT','PLANK','CREST','KNACK','FLUTE','GRAZE','SHIFT','CHUNK','PROSE','FLAME','GROUT','SLICK','CRISP','SCALP','BRISK','DWARF','GLYPH','FLANK','QUIRK','SWIRL','CLUNG','BLUNT'];

function initWordle(arena) {
  const dayIndex = Math.floor(Date.now() / 86400000) % WORDLE_TARGETS.length;
  const TARGET = WORDLE_TARGETS[dayIndex];
  let guesses = [], currentGuess = '', gameOver = false;
  const MAX = 6, LEN = 5;

  arena.innerHTML = `<div class="wordle-wrap">
    <div class="wordle-msg"></div>
    <div class="wordle-board"></div>
    <div class="wordle-keyboard"></div>
  </div>`;

  const msgEl  = arena.querySelector('.wordle-msg');
  const boardEl = arena.querySelector('.wordle-board');
  const kbEl   = arena.querySelector('.wordle-keyboard');

  // Build tile grid using a 2D array of refs (no IDs needed)
  const tiles = [];
  for (let r = 0; r < MAX; r++) {
    const row = document.createElement('div');
    row.className = 'wordle-row';
    tiles[r] = [];
    for (let c = 0; c < LEN; c++) {
      const t = document.createElement('div');
      t.className = 'wordle-tile';
      tiles[r][c] = t;
      row.appendChild(t);
    }
    boardEl.appendChild(row);
  }

  const KB_ROWS = [['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['ENTER','Z','X','C','V','B','N','M','⌫']];
  const keyEls = {};
  KB_ROWS.forEach(row => {
    const el = document.createElement('div'); el.className = 'wordle-kb-row';
    row.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'wordle-key' + (k.length > 1 ? ' wide' : '');
      btn.textContent = k; btn.dataset.key = k;
      btn.addEventListener('click', () => handleKey(k));
      el.appendChild(btn); keyEls[k] = btn;
    });
    kbEl.appendChild(el);
  });

  function drawRow() {
    const r = guesses.length;
    for (let c = 0; c < LEN; c++) {
      const t = tiles[r]?.[c]; if (!t) continue;
      t.textContent = currentGuess[c] || '';
      t.className = 'wordle-tile' + (c < currentGuess.length ? ' active' : '');
    }
  }

  function score(guess) {
    const result = Array(LEN).fill('absent'), rem = TARGET.split('');
    for (let i = 0; i < LEN; i++) if (guess[i] === TARGET[i]) { result[i] = 'correct'; rem[i] = null; }
    for (let i = 0; i < LEN; i++) {
      if (result[i] === 'correct') continue;
      const idx = rem.indexOf(guess[i]);
      if (idx !== -1) { result[i] = 'present'; rem[idx] = null; }
    }
    return result;
  }

  function reveal(r, guess, result) {
    for (let c = 0; c < LEN; c++) {
      const t = tiles[r]?.[c]; if (!t) continue;
      setTimeout(() => {
        t.className = 'wordle-tile ' + result[c]; t.textContent = guess[c];
        const k = guess[c];
        if (keyEls[k]) {
          if (result[c] === 'correct') keyEls[k].className = 'wordle-key correct';
          else if (result[c] === 'present' && !keyEls[k].className.includes('correct')) keyEls[k].className = 'wordle-key present';
          else if (result[c] === 'absent' && keyEls[k].className === 'wordle-key') keyEls[k].className = 'wordle-key absent';
        }
      }, c * 110);
    }
  }

  function handleKey(k) {
    if (gameOver) return;
    if (k === '⌫' || k === 'BACKSPACE') { currentGuess = currentGuess.slice(0,-1); drawRow(); return; }
    if (k === 'ENTER') {
      if (currentGuess.length < LEN) { msgEl.textContent = 'Not enough letters'; return; }
      const g = currentGuess, res = score(g);
      guesses.push(g); reveal(guesses.length - 1, g, res);
      currentGuess = '';
      setTimeout(() => {
        if (g === TARGET) { gameOver = true; msgEl.textContent = ['Genius!','Magnificent!','Impressive!','Splendid!','Great!','Phew!'][guesses.length-1]||'Nice!'; }
        else if (guesses.length >= MAX) { gameOver = true; msgEl.textContent = `The word was ${TARGET}`; }
        else msgEl.textContent = '';
      }, LEN * 110 + 200);
      return;
    }
    if (/^[A-Z]$/.test(k) && currentGuess.length < LEN) { currentGuess += k; msgEl.textContent = ''; drawRow(); }
  }

  function onKey(e) {
    if (!document.getElementById('sec-games')?.classList.contains('active')) return;
    const k = e.key.toUpperCase();
    if (k === 'BACKSPACE') handleKey('⌫');
    else if (k === 'ENTER') handleKey('ENTER');
    else if (/^[A-Z]$/.test(k)) handleKey(k);
  }
  document.addEventListener('keydown', onKey);
  drawRow();
  return () => document.removeEventListener('keydown', onKey);
}

// ---- Connections ----
const CONN_PUZZLES = [
  { groups: [
    { name: 'Programming Languages', color: '#60a5d4', words: ['PYTHON', 'RUST', 'SWIFT', 'KOTLIN'] },
    { name: 'Coffee Drinks',          color: '#f5c430', words: ['LATTE', 'MOCHA', 'ESPRESSO', 'CORTADO'] },
    { name: 'ML Frameworks',          color: '#7ab87a', words: ['PYTORCH', 'KERAS', 'JAX', 'SKLEARN'] },
    { name: 'Hackathon Cities',       color: '#e05555', words: ['TORONTO', 'WATERLOO', 'MONTREAL', 'HAMILTON'] },
  ]},
  { groups: [
    { name: 'Web Frameworks',   color: '#60a5d4', words: ['REACT', 'SVELTE', 'NEXTJS', 'ASTRO'] },
    { name: 'Databases',        color: '#f5c430', words: ['POSTGRES', 'REDIS', 'MONGO', 'SQLITE'] },
    { name: 'Cloud Providers',  color: '#7ab87a', words: ['AWS', 'AZURE', 'GCP', 'VERCEL'] },
    { name: 'Data Structures',  color: '#c08fff', words: ['STACK', 'QUEUE', 'GRAPH', 'HEAP'] },
  ]},
];

function initConnections(arena, onWin = null) {
  const puzzle = CONN_PUZZLES[Math.floor(Date.now() / 86400000) % CONN_PUZZLES.length];
  let selected = [], solved = [], lives = 4;
  const allWords = puzzle.groups.flatMap(g => g.words).sort(() => Math.random() - 0.5);

  arena.innerHTML = `<div class="conn-wrap">
    <div class="conn-header">
      <div class="conn-lives">${Array(4).fill(0).map(()=>`<span class="conn-life"></span>`).join('')}</div>
      <div class="conn-msg">Select 4 words that share a connection</div>
    </div>
    <div class="conn-board"></div>
    <button class="crane-btn primary conn-submit" disabled>submit</button>
  </div>`;

  const boardEl  = arena.querySelector('.conn-board');
  const submitEl = arena.querySelector('.conn-submit');
  const msgEl    = arena.querySelector('.conn-msg');

  function solvedWords() { return solved.flatMap(g => g.words); }

  function updateLives() {
    arena.querySelectorAll('.conn-life').forEach((l,i) => {
      l.className = 'conn-life' + (i >= lives ? ' lost' : '');
    });
  }

  function renderBoard() {
    boardEl.innerHTML = '';
    solved.forEach(g => {
      const d = document.createElement('div');
      d.className = 'conn-solved-group';
      d.style.borderColor = g.color; d.style.background = g.color + '18';
      d.innerHTML = `<span class="conn-group-name" style="color:${g.color}">${g.name}</span><div class="conn-solved-words">${g.words.join(' · ')}</div>`;
      boardEl.appendChild(d);
    });
    const grid = document.createElement('div'); grid.className = 'conn-grid';
    allWords.filter(w => !solvedWords().includes(w)).forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'conn-word' + (selected.includes(w) ? ' selected' : '');
      btn.textContent = w;
      btn.addEventListener('click', () => {
        if (selected.includes(w)) selected = selected.filter(s => s !== w);
        else if (selected.length < 4) selected.push(w);
        submitEl.disabled = selected.length !== 4;
        renderBoard();
      });
      grid.appendChild(btn);
    });
    boardEl.appendChild(grid);
  }

  submitEl.addEventListener('click', () => {
    const match = puzzle.groups.find(g => !solved.includes(g) && g.words.every(w => selected.includes(w)) && selected.every(w => g.words.includes(w)));
    if (match) {
      solved.push(match); selected = [];
      const allSolved = solved.length === puzzle.groups.length;
      msgEl.textContent = allSolved ? '🎉 Solved them all!' : `✓ ${match.name}!`;
      if (allSolved && onWin) setTimeout(onWin, 800);
      submitEl.disabled = true;
    } else {
      lives--;
      const oneAway = puzzle.groups.some(g => !solved.includes(g) && g.words.filter(w => selected.includes(w)).length === 3);
      msgEl.textContent = oneAway ? 'One away...' : 'Not quite!';
      updateLives();
      if (lives <= 0) { msgEl.textContent = 'Game over!'; puzzle.groups.forEach(g => { if (!solved.includes(g)) solved.push(g); }); }
      selected = []; submitEl.disabled = true;
    }
    renderBoard();
  });

  renderBoard();
  return () => {};
}

// ---- Pinpoint ----
const PINPOINT_PUZZLES = [
  { category: 'HACKATHON', clues: ['CODE', 'SPRINT', 'BUILD', 'PITCH', 'DEMO'] },
  { category: 'ORIGAMI',   clues: ['FOLD', 'CRANE', 'PAPER', 'CREASE', 'LOTUS'] },
  { category: 'MACHINE LEARNING', clues: ['GRADIENT', 'TENSOR', 'EPOCH', 'WEIGHTS', 'LOSS'] },
  { category: 'COFFEE',    clues: ['ESPRESSO', 'FOAM', 'ROAST', 'GRIND', 'BARISTA'] },
  { category: 'SPACE',     clues: ['ORBIT', 'NEBULA', 'PULSAR', 'ROVER', 'GRAVITY'] },
  { category: 'TORONTO',   clues: ['CN TOWER', 'RAPTORS', 'UOFT', 'TTC', 'HARBOURFRONT'] },
];

function initPinpoint(arena) {
  const puzzle = PINPOINT_PUZZLES[Math.floor(Date.now() / 86400000) % PINPOINT_PUZZLES.length];
  let revealed = 1, guessed = false;

  arena.innerHTML = `<div class="pinpoint-wrap">
    <div class="pinpoint-header"><div class="pinpoint-eyebrow">What's the category?</div></div>
    <div class="pinpoint-clues"></div>
    <div class="pinpoint-input-row">
      <input class="pinpoint-input" type="text" placeholder="Type your guess…" autocomplete="off" spellcheck="false"/>
      <button class="crane-btn primary pp-sub-btn">Guess</button>
    </div>
    <div class="pinpoint-msg"></div>
    <button class="crane-btn pp-rev-btn" style="margin-top:0.5rem">Reveal next clue (<span class="pp-left">${puzzle.clues.length - 1}</span> left)</button>
  </div>`;

  function renderClues() {
    const el = arena.querySelector('.pinpoint-clues'); if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < revealed; i++) {
      const d = document.createElement('div');
      d.className = 'pinpoint-clue' + (i === revealed-1 ? ' new' : '');
      d.textContent = puzzle.clues[i]; el.appendChild(d);
    }
  }

  function check() {
    if (guessed) return;
    const inp = arena.querySelector('.pinpoint-input');
    const msg = arena.querySelector('.pinpoint-msg');
    const val = inp?.value.trim().toUpperCase();
    if (!val) return;
    if (val === puzzle.category.toUpperCase()) {
      guessed = true;
      msg.textContent = `✓ "${puzzle.category}" — ${revealed} clue${revealed>1?'s':''}!`;
      msg.className = 'pinpoint-msg win';
    } else {
      msg.textContent = 'Nope — try again or reveal another clue';
      msg.className = 'pinpoint-msg lose';
    }
    if (inp) inp.value = '';
  }

  arena.querySelector('.pp-sub-btn').addEventListener('click', check);
  arena.querySelector('.pinpoint-input').addEventListener('keydown', e => { if (e.key==='Enter') check(); });
  arena.querySelector('.pp-rev-btn').addEventListener('click', () => {
    if (revealed < puzzle.clues.length) {
      revealed++;
      renderClues();
      const left = puzzle.clues.length - revealed;
      const leftEl = arena.querySelector('.pp-left');
      if (leftEl) leftEl.textContent = left;
      const btn = arena.querySelector('.pp-rev-btn');
      if (!left && btn) { btn.disabled = true; btn.textContent = 'All clues revealed'; }
    }
  });

  renderClues();
  setTimeout(() => arena.querySelector('.pinpoint-input')?.focus(), 50);
  return () => {};
}

// ---- Queens ----
function initQueens(arena) {
  const N = 6;
  const REGIONS = [
    [0,0,1,1,2,2],
    [0,0,1,2,2,3],
    [0,4,4,2,3,3],
    [4,4,5,5,3,3],
    [4,5,5,5,3,3],
    [4,4,5,5,5,3],
  ];
  const HEX = ['#60a5d4','#7ab87a','#e05555','#f5c430','#c08fff','#f0984e'];
  const NAMES = ['Blue','Green','Red','Yellow','Purple','Orange'];
  let grid = Array.from({length:N}, () => Array(N).fill(0));

  arena.innerHTML = `<div class="queens-wrap">
    <div class="queens-header">
      <div class="queens-eyebrow">Place one ♛ in each color region</div>
      <div class="queens-rules">No two queens can touch — not even diagonally. Click once = ♛, again = dot, again = clear.</div>
    </div>
    <div class="queens-grid" style="display:grid;grid-template-columns:repeat(${N},50px);gap:3px;margin-bottom:1rem"></div>
    <div class="queens-msg"></div>
    <button class="crane-btn q-reset-btn">↺ reset</button>
    <div class="queens-legend">${NAMES.map((n,i)=>`<span class="queens-legend-item"><span style="background:${HEX[i]};display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:4px"></span>${n}</span>`).join('')}</div>
  </div>`;

  function validate() {
    const queens = [];
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (grid[r][c]===1) queens.push({r,c,reg:REGIONS[r][c]});
    if (queens.length !== N) return null;
    const rows=new Set(queens.map(q=>q.r)), cols=new Set(queens.map(q=>q.c)), regs=new Set(queens.map(q=>q.reg));
    if (rows.size!==N||cols.size!==N||regs.size!==N) return false;
    for (let i=0;i<queens.length;i++) for (let j=i+1;j<queens.length;j++) {
      if (Math.abs(queens[i].r-queens[j].r)<=1 && Math.abs(queens[i].c-queens[j].c)<=1) return false;
    }
    return true;
  }

  function renderGrid() {
    const g = arena.querySelector('.queens-grid'); if (!g) return;
    g.innerHTML = '';
    for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
      const cell = document.createElement('div');
      cell.className = 'queens-cell';
      const reg = REGIONS[r][c];
      cell.style.background = HEX[reg] + '28';
      cell.style.borderColor = HEX[reg] + '66';
      cell.style.borderWidth = '1.5px';
      cell.style.borderStyle = 'solid';
      if (grid[r][c]===1) { cell.textContent = '♛'; cell.style.color = HEX[reg]; cell.style.fontSize = '1.4rem'; }
      else if (grid[r][c]===-1) { cell.textContent = '·'; cell.style.color = 'rgba(240,232,213,0.3)'; cell.style.fontSize = '1.2rem'; }
      cell.dataset.r = r; cell.dataset.c = c;
      g.appendChild(cell);
    }
  }

  arena.querySelector('.queens-grid').addEventListener('click', e => {
    const cell = e.target.closest('.queens-cell'); if (!cell) return;
    const r = +cell.dataset.r, c = +cell.dataset.c;
    grid[r][c] = grid[r][c]===0 ? 1 : grid[r][c]===1 ? -1 : 0;
    const res = validate();
    const msg = arena.querySelector('.queens-msg');
    if (res===true) { msg.textContent='♛ Perfect placement!'; msg.className='queens-msg win'; }
    else if (res===false) { msg.textContent='✗ Conflict detected'; msg.className='queens-msg lose'; }
    else { msg.textContent=''; msg.className='queens-msg'; }
    renderGrid();
  });

  arena.querySelector('.q-reset-btn').addEventListener('click', () => {
    grid = Array.from({length:N}, ()=>Array(N).fill(0));
    const msg = arena.querySelector('.queens-msg'); if (msg) { msg.textContent=''; msg.className='queens-msg'; }
    renderGrid();
  });

  renderGrid();
  return () => {};
}

// ---- Math Lab ----
function initMathLab(arena, onWin = null) {
  let level = 0, score = 0;
  function ri(lo,hi){return Math.floor(Math.random()*(hi-lo+1))+lo;}

  const LEVELS = [
    {name:'Subtraction',   gen:()=>{const a=ri(50,200),b=ri(10,50);return{q:`${a} − ${b}`,a:a-b};}},
    {name:'Modulo',        gen:()=>{const a=ri(20,99),b=ri(3,12);return{q:`${a} mod ${b}`,a:a%b};}},
    {name:'Derivatives',   gen:()=>{const qs=[{q:'d/dx[x²] at x=3',a:6},{q:'d/dx[3x²+4x] at x=1',a:10},{q:'d/dx[x³] at x=2',a:12},{q:'d/dx[2x³] at x=2',a:24},{q:'d/dx[x⁴] at x=1',a:4}];return qs[ri(0,qs.length-1)];}},
  ];

  let current = null;

  arena.innerHTML = `<div class="mathlab-wrap">
    <div class="mathlab-levels"></div>
    <div class="mathlab-level-name"></div>
    <div class="mathlab-question"></div>
    <div class="mathlab-input-row">
      <input class="mathlab-input" type="number" placeholder="?" autocomplete="off" step="any"/>
      <button class="crane-btn primary ml-sub-btn">→</button>
    </div>
    <div class="mathlab-feedback"></div>
    <div class="mathlab-score">score: <span class="ml-score-val">0</span> / ${LEVELS.length}</div>
  </div>`;

  function renderLevels() {
    const el = arena.querySelector('.mathlab-levels'); if (!el) return;
    el.innerHTML = LEVELS.map((l,i) => `<div class="mathlab-level-pip ${i<level?'done':i===level?'active':''}" title="${l.name}">${i+1}</div>`).join('');
  }

  function newQ() {
    current = LEVELS[level].gen();
    const q = arena.querySelector('.mathlab-question');
    const n = arena.querySelector('.mathlab-level-name');
    const fb = arena.querySelector('.mathlab-feedback');
    const inp = arena.querySelector('.mathlab-input');
    if (q) q.textContent = current.q + ' = ?';
    if (n) n.textContent = `Level ${level+1} · ${LEVELS[level].name}`;
    if (fb) { fb.textContent=''; fb.className='mathlab-feedback'; }
    if (inp) { inp.value=''; setTimeout(()=>inp.focus(),50); }
  }

  function submit() {
    const inp = arena.querySelector('.mathlab-input');
    const fb = arena.querySelector('.mathlab-feedback');
    const val = parseFloat(inp?.value);
    if (isNaN(val)||!fb) return;
    if (Math.abs(val - current.a) < 0.01) {
      score++;
      const sc = arena.querySelector('.ml-score-val');
      if (sc) sc.textContent = score;
      fb.textContent = '✓ Correct!'; fb.className = 'mathlab-feedback win';
      if (level < LEVELS.length - 1) { level++; renderLevels(); setTimeout(newQ, 700); }
      else { fb.textContent = `🏆 All ${LEVELS.length} levels complete! Score: ${score}/${LEVELS.length}`; if (onWin) setTimeout(onWin, 900); }
    } else {
      fb.textContent = `✗ Answer was ${current.a}`; fb.className = 'mathlab-feedback lose';
      setTimeout(newQ, 1100);
    }
  }

  arena.querySelector('.ml-sub-btn').addEventListener('click', submit);
  arena.querySelector('.mathlab-input').addEventListener('keydown', e => { if(e.key==='Enter') submit(); });

  renderLevels(); newQ();
  return () => {};
}

// ---- RPS (standalone) ----
function initRPSGame(arena, onWin = null) {
  let you = 0, ai = 0, rounds = 0;
  const choices = ['rock','paper','scissors'];
  const emoji = {rock:'✊',paper:'✋',scissors:'✌️'};
  const beats = {rock:'scissors', paper:'rock', scissors:'paper'};

  arena.innerHTML = `<div class="rps-hub-wrap">
    <div class="rps-hub-score">
      <div class="rps-hub-side"><span class="rps-hub-num rps-you-num">0</span><span class="rps-hub-label">you</span></div>
      <div class="rps-hub-vs">vs</div>
      <div class="rps-hub-side"><span class="rps-hub-num rps-ai-num">0</span><span class="rps-hub-label">AI</span></div>
    </div>
    <div class="rps-hub-result">Pick your move</div>
    <div class="rps-hub-btns">
      ${choices.map(c=>`<button class="rps-hub-choice" data-c="${c}">${emoji[c]}<span>${c}</span></button>`).join('')}
    </div>
    <button class="crane-btn rps-hub-reset" style="margin-top:1rem">↺ new game</button>
  </div>`;

  function play(c) {
    if (rounds >= 3) return;
    const a = choices[Math.floor(Math.random()*3)];
    let res;
    if (c === a) { res = 'tie'; }
    else if (beats[c] === a) { you++; res = 'win'; arena.querySelector('.rps-you-num').textContent = you; }
    else { ai++; res = 'lose'; arena.querySelector('.rps-ai-num').textContent = ai; }
    rounds++;
    const resEl = arena.querySelector('.rps-hub-result');
    const msgs = { win:`${emoji[c]} beats ${emoji[a]} — you win this round!`, lose:`${emoji[a]} beats ${emoji[c]} — AI wins this round!`, tie:`${emoji[c]} vs ${emoji[a]} — tie!` };
    resEl.textContent = msgs[res];
    resEl.className = 'rps-hub-result ' + res;
    if (rounds >= 3) {
      setTimeout(() => {
        if (you > ai) { resEl.textContent = `🏆 You win ${you}–${ai}!`; if (onWin) onWin(); }
        else if (ai > you) resEl.textContent = `AI wins ${ai}–${you}. Try again!`;
        else resEl.textContent = `Draw ${you}–${ai}!`;
      }, 800);
    }
  }

  arena.querySelector('.rps-hub-btns').addEventListener('click', e => {
    const btn = e.target.closest('.rps-hub-choice'); if (!btn) return;
    play(btn.dataset.c);
  });
  arena.querySelector('.rps-hub-reset').addEventListener('click', () => {
    you = 0; ai = 0; rounds = 0;
    arena.querySelector('.rps-you-num').textContent = '0';
    arena.querySelector('.rps-ai-num').textContent = '0';
    arena.querySelector('.rps-hub-result').textContent = 'Pick your move';
    arena.querySelector('.rps-hub-result').className = 'rps-hub-result';
  });
  return () => {};
}

// ---- Tic Tac Toe (standalone) ----
function initTTTGame(arena, onWin = null) {
  let board = Array(9).fill('');
  let over = false;

  arena.innerHTML = `<div class="ttt-hub-wrap">
    <div class="ttt-hub-status">Your turn (X)</div>
    <div class="ttt-hub-grid">${Array(9).fill(0).map((_,i)=>`<button class="ttt-hub-cell" data-i="${i}"></button>`).join('')}</div>
    <button class="crane-btn ttt-hub-reset" style="margin-top:1rem">↺ reset</button>
  </div>`;

  const WINS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  function winner(b) { for (const [a,c,d] of WINS) if (b[a]&&b[a]===b[c]&&b[a]===b[d]) return b[a]; return null; }
  function minimax(b, isMax, depth) {
    const w = winner(b); if (w==='O') return 10-depth; if (w==='X') return depth-10;
    if (b.every(c=>c)) return 0;
    let best = isMax ? -Infinity : Infinity;
    for (let i=0;i<9;i++) { if (!b[i]) { b[i]=isMax?'O':'X'; const s=minimax(b,!isMax,depth+1); b[i]=''; best=isMax?Math.max(best,s):Math.min(best,s); } }
    return best;
  }
  function aiMove() {
    if (Math.random() < 0.25) {
      let empty = [];
      for (let i=0;i<9;i++) if (!board[i]) empty.push(i);
      if (empty.length > 0) return empty[Math.floor(Math.random() * empty.length)];
    }
    let best=-Infinity, move=null;
    for (let i=0;i<9;i++) { if (!board[i]) { board[i]='O'; const s=minimax(board,false,0); board[i]=''; if(s>best){best=s;move=i;} } }
    return move;
  }

  function render() {
    arena.querySelectorAll('.ttt-hub-cell').forEach((cell,i) => {
      cell.textContent = board[i];
      cell.dataset.val = board[i];
      cell.disabled = !!board[i] || over;
    });
  }

  function setStatus(msg) { arena.querySelector('.ttt-hub-status').textContent = msg; }

  function reset() {
    board = Array(9).fill(''); over = false;
    setStatus('Your turn (X)'); render();
  }

  arena.querySelector('.ttt-hub-grid').addEventListener('click', e => {
    const cell = e.target.closest('.ttt-hub-cell'); if (!cell || over) return;
    const i = +cell.dataset.i; if (board[i]) return;
    board[i] = 'X'; render();
    const w = winner(board);
    if (w) {
      over = true;
      if (w === 'X') { setStatus('You win! 🎉'); if (onWin) setTimeout(onWin, 700); }
      else setStatus('AI wins!');
      return;
    }
    if (board.every(c=>c)) { setStatus("It's a draw!"); over=true; return; }
    setStatus('AI thinking…');
    setTimeout(() => {
      const m = aiMove(); if (m!==null) board[m]='O';
      render();
      const w2 = winner(board);
      if (w2) { setStatus(w2==='X'?'You win! 🎉':'AI wins!'); over=true; }
      else if (board.every(c=>c)) { setStatus("It's a draw!"); over=true; }
      else setStatus('Your turn (X)');
    }, 300);
  });

  arena.querySelector('.ttt-hub-reset').addEventListener('click', reset);
  render();
  return () => {};
}

// ---- Connect 4 ----
function initConnect4(arena, onWin = null) {
  const ROWS=6, COLS=7;
  let grid = Array.from({length:ROWS},()=>Array(COLS).fill(0)); // 0=empty 1=player 2=ai
  let over = false;

  arena.innerHTML = `<div class="c4-wrap">
    <div class="c4-status">Your turn (🔴)</div>
    <div class="c4-col-btns">${Array.from({length:COLS},(_,c)=>`<button class="c4-col-btn" data-c="${c}">↓</button>`).join('')}</div>
    <div class="c4-board" style="display:grid;grid-template-columns:repeat(${COLS},1fr);gap:4px"></div>
    <button class="crane-btn c4-reset" style="margin-top:1rem">↺ reset</button>
  </div>`;

  function checkWin(g, p) {
    const dirs=[[0,1],[1,0],[1,1],[1,-1]];
    for (let r=0;r<ROWS;r++) for (let c=0;c<COLS;c++) {
      if (g[r][c]!==p) continue;
      for (const [dr,dc] of dirs) {
        let cnt=1;
        for (let k=1;k<4;k++) { const nr=r+dr*k,nc=c+dc*k; if(nr<0||nr>=ROWS||nc<0||nc>=COLS||g[nr][nc]!==p) break; cnt++; }
        if (cnt>=4) return true;
      }
    }
    return false;
  }

  function drop(g, col, p) {
    for (let r=ROWS-1;r>=0;r--) { if (!g[r][col]) { g[r][col]=p; return true; } }
    return false;
  }

  function aiPick() {
    const pref=[3,2,4,1,5,0,6];
    // win
    for (const c of pref) { const g=grid.map(r=>[...r]); if(drop(g,c,2)&&checkWin(g,2)) return c; }
    // block
    for (const c of pref) { const g=grid.map(r=>[...r]); if(drop(g,c,1)&&checkWin(g,1)) return c; }
    // prefer center
    for (const c of pref) { if (grid[0][c]===0) return c; }
    return null;
  }

  function render() {
    const board = arena.querySelector('.c4-board'); board.innerHTML='';
    for (let r=0;r<ROWS;r++) for (let c=0;c<COLS;c++) {
      const cell=document.createElement('div'); cell.className='c4-cell';
      if (grid[r][c]===1) { cell.classList.add('p1'); cell.textContent='🔴'; }
      else if (grid[r][c]===2) { cell.classList.add('p2'); cell.textContent='🟡'; }
      board.appendChild(cell);
    }
    arena.querySelectorAll('.c4-col-btn').forEach(btn => { btn.disabled = over || grid[0][+btn.dataset.c]!==0; });
  }

  function setStatus(msg) { arena.querySelector('.c4-status').textContent = msg; }

  function reset() {
    grid=Array.from({length:ROWS},()=>Array(COLS).fill(0)); over=false;
    setStatus('Your turn (🔴)'); render();
  }

  function handlePlay(col) {
    if (over || !drop(grid,col,1)) return;
    render();
    if (checkWin(grid,1)) { setStatus('You win! 🎉'); over=true; render(); if (onWin) setTimeout(onWin, 700); return; }
    if (grid[0].every(c=>c)) { setStatus("Draw!"); over=true; return; }
    setStatus('AI thinking…');
    setTimeout(() => {
      const m=aiPick(); if(m!==null) drop(grid,m,2);
      render();
      if (checkWin(grid,2)) { setStatus('AI wins! 🟡'); over=true; }
      else if (grid[0].every(c=>c)) { setStatus("Draw!"); over=true; }
      else setStatus('Your turn (🔴)');
    }, 400);
  }

  arena.querySelector('.c4-col-btns').addEventListener('click', e => {
    const btn=e.target.closest('.c4-col-btn'); if(!btn) return;
    handlePlay(+btn.dataset.c);
  });

  arena.querySelector('.c4-board').addEventListener('click', e => {
    const cell = e.target.closest('.c4-cell'); if(!cell) return;
    const cells = Array.from(arena.querySelectorAll('.c4-cell'));
    const index = cells.indexOf(cell);
    if (index !== -1) handlePlay(index % COLS);
  });

  arena.querySelector('.c4-reset').addEventListener('click', reset);
  render();
  return () => {};
}

// ---- Sudoku ----
function initSudoku(arena) {
  const PUZZLE = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9],
  ];
  const SOLUTION = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9],
  ];
  let grid = PUZZLE.map(r=>[...r]);
  let selected = null;

  arena.innerHTML = `<div class="su-wrap">
    <div class="su-eyebrow">Classic Sudoku — fill every row, column, and 3×3 box</div>
    <div class="su-board" style="display:grid;grid-template-columns:repeat(9,1fr);gap:1px"></div>
    <div class="su-numpad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="su-num" data-n="${n}">${n}</button>`).join('')}<button class="su-num su-clr" data-n="0">⌫</button></div>
    <div class="su-actions"><button class="crane-btn su-check">Check</button><button class="crane-btn su-reset">↺ reset</button></div>
    <div class="su-msg"></div>
  </div>`;

  function render() {
    const board = arena.querySelector('.su-board'); board.innerHTML='';
    for (let r=0;r<9;r++) for (let c=0;c<9;c++) {
      const cell=document.createElement('div'); cell.className='su-cell';
      const locked=PUZZLE[r][c]!==0;
      if (locked) cell.classList.add('locked');
      if (selected&&selected[0]===r&&selected[1]===c) cell.classList.add('selected');
      cell.textContent = grid[r][c] || '';
      if (!locked&&grid[r][c]&&grid[r][c]!==SOLUTION[r][c]) cell.classList.add('wrong');
      // thick borders for 3x3 boxes
      if (c%3===0&&c>0) cell.style.borderLeft='2px solid rgba(240,232,213,0.4)';
      if (r%3===0&&r>0) cell.style.borderTop='2px solid rgba(240,232,213,0.4)';
      cell.dataset.r=r; cell.dataset.c=c;
      board.appendChild(cell);
    }
  }

  arena.querySelector('.su-board').addEventListener('click', e => {
    const cell=e.target.closest('.su-cell'); if(!cell) return;
    const r=+cell.dataset.r, c=+cell.dataset.c;
    if (PUZZLE[r][c]!==0) { selected=null; render(); return; }
    selected=[r,c]; render();
  });

  arena.querySelector('.su-numpad').addEventListener('click', e => {
    const btn=e.target.closest('.su-num'); if(!btn||!selected) return;
    const n=+btn.dataset.n;
    grid[selected[0]][selected[1]]=n;
    render();
  });

  arena.querySelector('.su-check').addEventListener('click', () => {
    const msg=arena.querySelector('.su-msg');
    const solved=grid.every((row,r)=>row.every((v,c)=>v===SOLUTION[r][c]));
    if (solved) { msg.textContent='🏆 Solved!'; msg.className='su-msg win'; }
    else { msg.textContent='Not quite — check highlighted cells'; msg.className='su-msg lose'; render(); }
  });

  arena.querySelector('.su-reset').addEventListener('click', () => {
    grid=PUZZLE.map(r=>[...r]); selected=null;
    arena.querySelector('.su-msg').textContent='';
    arena.querySelector('.su-msg').className='su-msg';
    render();
  });

  const keyHandler = e => {
    if (!selected) return;
    const n=parseInt(e.key);
    if (n>=1&&n<=9) { grid[selected[0]][selected[1]]=n; render(); }
    else if (e.key==='Backspace'||e.key==='Delete'||e.key==='0') { grid[selected[0]][selected[1]]=0; render(); }
  };
  document.addEventListener('keydown', keyHandler);
  render();
  return () => document.removeEventListener('keydown', keyHandler);
}

// ---- Spelling Bee ----
function initSpelling(arena) {
  const PUZZLES = [
    { center:'A', outer:['P','C','E','H','T','R'], pangram:'TEACHER', words:['TEACHER','TEACH','REACH','EACH','RACE','PACE','CARE','TEAR','HEAR','HEAT','HATE','RATE','TRACE','CHART','CHEAT','ACHE','ARCH','CART','TRAP','TARP'] },
    { center:'I', outer:['N','G','H','T','L','S'], words:['NIGHTS','NIGHT','LIGHT','SIGHT','THING','STING','SLING','LINT','HINT','GILT','GIST','THIN','SHIN','LING','NILS'], pangram:'NIGHTS' },
    { center:'O', outer:['C','K','R','B','A','T'], words:['CORBAT','TRACK','CROAK','BLOCK','CLOCK','BARK','BOAT','COAT','ROCK','TACK','CORK','CART','CRAB','BACK','BRAT'], pangram:'CORBAT' },
  ];
  const p = PUZZLES[Math.floor(Date.now() / 86400000) % PUZZLES.length];
  let found = [], word = '';

  arena.innerHTML = `<div class="sb-wrap">
    <div class="sb-eyebrow">Make words using the letters — center letter required!</div>
    <div class="sb-word-display"></div>
    <div class="sb-hive">
      <div class="sb-hive-row sb-row-top">
        ${[0,1].map(i=>`<button class="sb-hex sb-outer" data-l="${p.outer[i]}">${p.outer[i]}</button>`).join('')}
      </div>
      <div class="sb-hive-row sb-row-mid">
        <button class="sb-hex sb-outer" data-l="${p.outer[2]}">${p.outer[2]}</button>
        <button class="sb-hex sb-center" data-l="${p.center}">${p.center}</button>
        <button class="sb-hex sb-outer" data-l="${p.outer[3]}">${p.outer[3]}</button>
      </div>
      <div class="sb-hive-row sb-row-bot">
        <button class="sb-hex sb-outer" data-l="${p.outer[4]}">${p.outer[4]}</button>
        <button class="sb-hex sb-outer" data-l="${p.outer[5]}">${p.outer[5]}</button>
      </div>
    </div>
    <div class="sb-controls">
      <button class="crane-btn sb-del">⌫</button>
      <button class="crane-btn primary sb-enter">Enter</button>
      <button class="crane-btn sb-shuffle">⇌</button>
    </div>
    <div class="sb-msg"></div>
    <div class="sb-found-header">Found: <span class="sb-count">0</span></div>
    <div class="sb-found-list"></div>
  </div>`;

  const allLetters = [p.center, ...p.outer];

  function renderWord() { arena.querySelector('.sb-word-display').textContent = word || '–'; }
  function setMsg(m, cls='') { const el=arena.querySelector('.sb-msg'); el.textContent=m; el.className='sb-msg '+cls; setTimeout(()=>{el.textContent='';el.className='sb-msg';},1400); }

  function enter() {
    const w = word.toUpperCase();
    if (w.length < 4) { setMsg('Too short!', 'lose'); word=''; renderWord(); return; }
    if (!w.includes(p.center)) { setMsg(`Must use ${p.center}!`, 'lose'); word=''; renderWord(); return; }
    if (!w.split('').every(l=>allLetters.includes(l))) { setMsg('Bad letter!', 'lose'); word=''; renderWord(); return; }
    if (found.includes(w)) { setMsg('Already found!', ''); word=''; renderWord(); return; }
    if (!p.words.includes(w)) { setMsg('Not in word list', 'lose'); word=''; renderWord(); return; }
    found.push(w);
    const isPangram = w === p.pangram;
    setMsg(isPangram ? '🌟 Pangram!' : '✓ Nice!', 'win');
    word=''; renderWord();
    arena.querySelector('.sb-count').textContent = found.length;
    const list=arena.querySelector('.sb-found-list');
    const chip=document.createElement('span'); chip.className='sb-chip'+(isPangram?' pangram':''); chip.textContent=w;
    list.prepend(chip);
  }

  arena.querySelector('.sb-hive').addEventListener('click', e => {
    const btn=e.target.closest('.sb-hex'); if(!btn||!btn.dataset.l) return;
    word += btn.dataset.l; renderWord();
  });
  arena.querySelector('.sb-del').addEventListener('click', () => { word=word.slice(0,-1); renderWord(); });
  arena.querySelector('.sb-enter').addEventListener('click', enter);
  arena.querySelector('.sb-shuffle').addEventListener('click', () => {
    // shuffle outer letters display only
    const btns = [...arena.querySelectorAll('.sb-outer')];
    const letters = [...p.outer].sort(()=>Math.random()-0.5);
    btns.forEach((b,i) => { b.dataset.l=letters[i]; b.textContent=letters[i]; });
  });

  const keyH = e => {
    if (e.key==='Enter') { enter(); return; }
    if (e.key==='Backspace') { word=word.slice(0,-1); renderWord(); return; }
    const l=e.key.toUpperCase();
    if (allLetters.includes(l)) { word+=l; renderWord(); }
  };
  document.addEventListener('keydown', keyH);
  renderWord();
  return () => document.removeEventListener('keydown', keyH);
}

// ---- Mini Crossword ----
function initCrossword(arena) {
  // Grid: BOOKS/OPERA/KNEEL across; BROOK/OBESE/SNAIL down
  const GRID = [
    ['B','O','O','K','S'],
    ['R','#','B','#','N'],
    ['O','P','E','R','A'],
    ['O','#','S','#','I'],
    ['K','N','E','E','L'],
  ];
  const ANSWERS = GRID.map(r=>r.map(c=>c==='#'?null:c));
  const NUMS = {'0,0':1,'0,2':2,'0,4':3,'2,0':4,'4,0':5};
  const CLUES = {
    across: ['1. Library items (5)','4. Grand ___ musical venue (5)','5. Get down on one knee (5)'],
    down:   ['1. Babbling waterway (5)','2. Overweight (5)','3. Slimy garden creature (5)'],
  };

  let userGrid = ANSWERS.map(r=>r.map(c=>c===null?null:''));
  let dir = 'across';
  let sel = null;

  arena.innerHTML = `<div class="cw-wrap">
    <div class="cw-dir-btns">
      <button class="crane-btn cw-across active">→ Across</button>
      <button class="crane-btn cw-down">↓ Down</button>
    </div>
    <div class="cw-body">
      <div class="cw-board" style="display:grid;grid-template-columns:repeat(5,1fr);gap:2px"></div>
      <div class="cw-clues">
        <div class="cw-clue-group"><div class="cw-clue-head">Across</div>${CLUES.across.map(c=>`<div class="cw-clue">${c}</div>`).join('')}</div>
        <div class="cw-clue-group"><div class="cw-clue-head">Down</div>${CLUES.down.map(c=>`<div class="cw-clue">${c}</div>`).join('')}</div>
      </div>
    </div>
    <div class="cw-actions"><button class="crane-btn primary cw-check">Check</button><button class="crane-btn cw-reset">↺ reset</button></div>
    <div class="cw-msg"></div>
  </div>`;

  function render() {
    const board=arena.querySelector('.cw-board'); board.innerHTML='';
    for (let r=0;r<5;r++) for (let c=0;c<5;c++) {
      const cell=document.createElement('div');
      if (ANSWERS[r][c]===null) { cell.className='cw-cell cw-black'; board.appendChild(cell); continue; }
      cell.className='cw-cell';
      if (sel&&sel[0]===r&&sel[1]===c) cell.classList.add('selected');
      const n=NUMS[`${r},${c}`];
      if (n) { const ns=document.createElement('span'); ns.className='cw-cell-num'; ns.textContent=n; cell.appendChild(ns); }
      if (userGrid[r][c]) {
        const ls=document.createElement('span'); ls.textContent=userGrid[r][c]; cell.appendChild(ls);
        if(userGrid[r][c]!==ANSWERS[r][c]) cell.classList.add('wrong');
      }
      cell.dataset.r=r; cell.dataset.c=c;
      board.appendChild(cell);
    }
  }

  arena.querySelector('.cw-board').addEventListener('click', e => {
    const cell=e.target.closest('.cw-cell'); if(!cell||cell.classList.contains('cw-black')) return;
    const r=+cell.dataset.r, c=+cell.dataset.c;
    if (sel&&sel[0]===r&&sel[1]===c) { dir=dir==='across'?'down':'across'; updateDirBtns(); }
    sel=[r,c]; render();
  });

  function updateDirBtns() {
    arena.querySelector('.cw-across').classList.toggle('active', dir==='across');
    arena.querySelector('.cw-down').classList.toggle('active', dir==='down');
  }

  arena.querySelector('.cw-across').addEventListener('click', () => { dir='across'; updateDirBtns(); });
  arena.querySelector('.cw-down').addEventListener('click', () => { dir='down'; updateDirBtns(); });

  const keyH = e => {
    if (!sel) return;
    const [r,c]=sel;
    if (e.key==='Backspace') { userGrid[r][c]=''; e.preventDefault(); render(); return; }
    if (e.key==='ArrowRight') { sel=[r,Math.min(4,c+1)]; dir='across'; updateDirBtns(); render(); return; }
    if (e.key==='ArrowLeft') { sel=[r,Math.max(0,c-1)]; dir='across'; updateDirBtns(); render(); return; }
    if (e.key==='ArrowDown') { sel=[Math.min(4,r+1),c]; dir='down'; updateDirBtns(); render(); return; }
    if (e.key==='ArrowUp') { sel=[Math.max(0,r-1),c]; dir='down'; updateDirBtns(); render(); return; }
    const l=e.key.toUpperCase();
    if (!/^[A-Z]$/.test(l)) return;
    e.preventDefault();
    userGrid[r][c]=l;
    if (dir==='across') { let nc=c+1; while(nc<5&&ANSWERS[r][nc]===null) nc++; if(nc<5) sel=[r,nc]; }
    else { let nr=r+1; while(nr<5&&ANSWERS[nr][c]===null) nr++; if(nr<5) sel=[nr,c]; }
    render();
  };
  document.addEventListener('keydown', keyH);

  arena.querySelector('.cw-check').addEventListener('click', () => {
    const msg=arena.querySelector('.cw-msg');
    const solved=ANSWERS.every((row,r)=>row.every((v,c)=>v===null||userGrid[r][c]===v));
    if (solved) { msg.textContent='🏆 Solved!'; msg.className='cw-msg win'; }
    else { msg.textContent='Some letters are wrong — check highlighted cells'; msg.className='cw-msg lose'; render(); }
  });

  arena.querySelector('.cw-reset').addEventListener('click', () => {
    userGrid=ANSWERS.map(r=>r.map(c=>c===null?null:'')); sel=null;
    arena.querySelector('.cw-msg').textContent='';
    arena.querySelector('.cw-msg').className='cw-msg';
    render();
  });

  render();
  return () => document.removeEventListener('keydown', keyH);
}

// ---- Tango ----
function initTango(arena) {
  const N=6;
  // 0=empty 1=sun☀️ 2=moon🌙; valid 6x6 solution: 3 of each per row/col, no 3-in-a-row
  const SOL = [
    [1,2,1,2,1,2],
    [2,1,2,1,2,1],
    [1,2,2,1,2,1],
    [2,1,1,2,1,2],
    [1,2,1,2,2,1],
    [2,1,2,1,1,2],
  ];
  const LOCK_POS = [[0,1],[0,4],[2,0],[2,5],[3,0],[3,5],[5,1],[5,4]];
  let grid = Array.from({length:N},()=>Array(N).fill(0));
  LOCK_POS.forEach(([r,c])=>grid[r][c]=SOL[r][c]);
  const locked = Array.from({length:N},(_,r)=>Array.from({length:N},(_,c)=>LOCK_POS.some(([lr,lc])=>lr===r&&lc===c)));

  const SYM = ['','☀️','🌙'];

  arena.innerHTML = `<div class="tg-wrap">
    <div class="tg-eyebrow">Fill the grid — 3 suns ☀️ and 3 moons 🌙 per row & column, no 3 in a row</div>
    <div class="tg-board" style="display:grid;grid-template-columns:repeat(${N},50px);gap:3px"></div>
    <div class="tg-msg"></div>
    <button class="crane-btn tg-reset" style="margin-top:0.75rem">↺ reset</button>
  </div>`;

  function validate() {
    for (let r=0;r<N;r++) {
      const row=grid[r]; if (row.some(v=>!v)) return null;
      const suns=row.filter(v=>v===1).length; if(suns!==3) return false;
      for (let c=0;c<N-2;c++) if(row[c]&&row[c]===row[c+1]&&row[c]===row[c+2]) return false;
    }
    for (let c=0;c<N;c++) {
      const col=grid.map(r=>r[c]); if(col.some(v=>!v)) return null;
      const suns=col.filter(v=>v===1).length; if(suns!==3) return false;
      for (let r=0;r<N-2;r++) if(col[r]&&col[r]===col[r+1]&&col[r]===col[r+2]) return false;
    }
    return true;
  }

  function render() {
    const board=arena.querySelector('.tg-board'); board.innerHTML='';
    for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
      const cell=document.createElement('div'); cell.className='tg-cell';
      if (locked[r][c]) cell.classList.add('locked');
      cell.textContent=SYM[grid[r][c]];
      cell.dataset.r=r; cell.dataset.c=c;
      board.appendChild(cell);
    }
  }

  arena.querySelector('.tg-board').addEventListener('click', e => {
    const cell=e.target.closest('.tg-cell'); if(!cell) return;
    const r=+cell.dataset.r, c=+cell.dataset.c;
    if (locked[r][c]) return;
    grid[r][c]=(grid[r][c]+1)%3;
    const res=validate();
    const msg=arena.querySelector('.tg-msg');
    if (res===true) { msg.textContent='🏆 Solved! Perfect balance!'; msg.className='tg-msg win'; }
    else if (res===false) { msg.textContent='✗ Conflict — check row/column balance'; msg.className='tg-msg lose'; }
    else { msg.textContent=''; msg.className='tg-msg'; }
    render();
  });

  arena.querySelector('.tg-reset').addEventListener('click', () => {
    grid=Array.from({length:N},()=>Array(N).fill(0));
    LOCK_POS.forEach(([r,c])=>grid[r][c]=SOL[r][c]);
    arena.querySelector('.tg-msg').textContent='';
    arena.querySelector('.tg-msg').className='tg-msg';
    render();
  });

  render();
  return () => {};
}

// ---- Numberlink ----
function initNumberlink(arena) {
  const N=6;
  // Number pairs: [r1,c1,r2,c2,color]
  const PAIRS = [
    [0,0, 3,3, '#60a5d4'],
    [0,5, 2,3, '#7ab87a'],
    [1,0, 4,5, '#e05555'],
    [2,0, 5,2, '#f5c430'],
    [0,2, 5,5, '#c08fff'],
  ];
  const NUM_GRID = Array.from({length:N},()=>Array(N).fill(0));
  PAIRS.forEach(([r1,c1,r2,c2,],i)=>{ NUM_GRID[r1][c1]=i+1; NUM_GRID[r2][c2]=i+1; });
  const COLORS = PAIRS.map(p=>p[4]);

  let paths = Array.from({length:PAIRS.length},()=>[]); // array of [r,c] arrays
  let drawing = null; // {num, path}
  let pathGrid = Array.from({length:N},()=>Array(N).fill(-1)); // which path index fills each cell

  arena.innerHTML = `<div class="nl-wrap">
    <div class="nl-eyebrow">Connect matching numbers with a path — fill every cell!</div>
    <div class="nl-board" style="display:grid;grid-template-columns:repeat(${N},50px);gap:2px;user-select:none"></div>
    <div class="nl-msg"></div>
    <button class="crane-btn nl-reset" style="margin-top:0.75rem">↺ reset</button>
  </div>`;

  function render() {
    const board=arena.querySelector('.nl-board'); board.innerHTML='';
    for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
      const cell=document.createElement('div'); cell.className='nl-cell';
      const num=NUM_GRID[r][c];
      const pathIdx=pathGrid[r][c];
      if (pathIdx>=0) { cell.style.background=COLORS[pathIdx]+'55'; }
      if (num>0) {
        cell.textContent=num; cell.classList.add('nl-endpoint');
        cell.style.color=COLORS[num-1]; cell.style.borderColor=COLORS[num-1];
        cell.style.background=COLORS[num-1]+'22';
      }
      cell.dataset.r=r; cell.dataset.c=c;
      board.appendChild(cell);
    }
  }

  function startPath(r,c) {
    const num=NUM_GRID[r][c]; if(!num) return;
    const idx=num-1;
    // clear this path
    paths[idx]=[];
    pathGrid=pathGrid.map(row=>row.map(v=>v===idx?-1:v));
    drawing={idx,path:[[r,c]]};
    pathGrid[r][c]=idx;
    render();
  }

  function extendPath(r,c) {
    if(!drawing) return;
    const {idx,path}=drawing;
    const [lr,lc]=path[path.length-1];
    if (Math.abs(r-lr)+Math.abs(c-lc)!==1) return; // must be adjacent
    // If we step back, trim path
    if (path.length>=2&&path[path.length-2][0]===r&&path[path.length-2][1]===c) {
      pathGrid[lr][lc]=-1; path.pop(); render(); return;
    }
    if (pathGrid[r][c]>=0&&pathGrid[r][c]!==idx) return; // occupied by another path
    // If endpoint of same number, complete
    const num=NUM_GRID[r][c];
    if (num&&num!==idx+1) return;
    pathGrid[r][c]=idx; path.push([r,c]);
    if (num===idx+1&&path.length>1) { paths[idx]=[...path]; drawing=null; checkComplete(); }
    render();
  }

  function checkComplete() {
    const allFilled=pathGrid.every(row=>row.every(v=>v>=0));
    const allConnected=paths.every((p,i)=>{
      if(p.length<2) return false;
      const [r1,c1]=PAIRS[i]; const [r2,c2]=[PAIRS[i][2],PAIRS[i][3]];
      const s=p[0],e=p[p.length-1];
      return (s[0]===r1&&s[1]===c1&&e[0]===r2&&e[1]===c2)||(s[0]===r2&&s[1]===c2&&e[0]===r1&&e[1]===c1);
    });
    const msg=arena.querySelector('.nl-msg');
    if (allFilled&&allConnected) { msg.textContent='🏆 Solved!'; msg.className='nl-msg win'; }
  }

  const board=arena.querySelector('.nl-board');
  let mouseDown=false;
  board.addEventListener('mousedown', e=>{
    const cell=e.target.closest('.nl-cell'); if(!cell) return;
    mouseDown=true; startPath(+cell.dataset.r,+cell.dataset.c);
  });
  board.addEventListener('mouseover', e=>{
    if(!mouseDown||!drawing) return;
    const cell=e.target.closest('.nl-cell'); if(!cell) return;
    extendPath(+cell.dataset.r,+cell.dataset.c);
  });
  const onMouseUp = ()=>{ mouseDown=false; if(drawing){paths[drawing.idx]=[...drawing.path];drawing=null;} };
  document.addEventListener('mouseup', onMouseUp);

  arena.querySelector('.nl-reset').addEventListener('click', ()=>{
    paths=Array.from({length:PAIRS.length},()=>[]);
    pathGrid=Array.from({length:N},()=>Array(N).fill(-1));
    drawing=null; mouseDown=false;
    arena.querySelector('.nl-msg').textContent='';
    arena.querySelector('.nl-msg').className='nl-msg';
    render();
  });

  render();
  return () => document.removeEventListener('mouseup', onMouseUp);
}

// ================================================================
// 3D PROJECT GRAPH
// ================================================================

const PROJECT_KB = {
  '001': {
    stack_detail: 'LOCATR uses LangGraph at its core — five specialized agents (Commander, Scout, Vibe Matcher, Cost Analyst, Critic) communicate via a shared graph state. FastAPI serves the backend, Next.js the frontend. Snowflake powers persistent memory with RAG; Redis caches short-term agent context.',
    architecture: 'Multi-agent LangGraph workflow: Commander decomposes the user request, Scout fetches venue candidates, Vibe Matcher scores cultural fit, Cost Analyst evaluates pricing, Critic synthesizes a final ranked list. All agents share a Snowflake-backed memory layer for cross-session context.',
    challenge: 'Coordinating five agents without them talking over each other was the core problem. LangGraph\'s graph state made messaging deterministic, but tuning the Critic\'s weighting function to balance vibe vs. cost required iterative prompt engineering under hackathon time pressure.',
  },
  '002': {
    stack_detail: 'Python ML pipeline generates heat priority zones from satellite data; FastAPI exposes them; React + Leaflet + Google Maps renders the interactive map; Gemini generates the intervention blueprints including candidate planting sites and cost/benefit breakdowns.',
    architecture: 'Two-phase pipeline: offline (train ML model on Montreal urban heat data, store zone predictions) and online (user request → FastAPI → Gemini blueprint generation → Leaflet map overlay). The Gemini prompt includes zone priority score, neighborhood context, and cost constraints.',
    challenge: 'Aligning ML-predicted heat zones with real map coordinates required careful CRS (coordinate reference system) transforms. Getting Gemini to produce structured JSON blueprints reliably needed a detailed system prompt with an explicit output schema.',
  },
  '003': {
    stack_detail: 'VB-Cable creates a virtual audio device capturing system output. Python reads the audio stream, sends chunks to DeepGram for streaming transcription, Whisper cross-checks accuracy. DeepL translates on the fly. PyQt5 renders the always-on-top subtitle overlay.',
    architecture: 'Real-time pipeline: audio capture (VB-Cable) → chunked streaming to DeepGram → DeepL translation → PyQt5 overlay rendering. Whisper runs as a periodic accuracy validator on longer segments. Full conversation is logged to a local SQLite file.',
    challenge: 'Audio latency was the core challenge — VB-Cable introduces ~80ms buffer delay. Tuning DeepGram\'s endpointing sensitivity to avoid cutting off sentences mid-word while keeping the overlay snappy required extensive testing across audio sources and languages.',
  },
  '004': {
    stack_detail: 'Custom Sparse Graph Attention Network (GAT) + GRU pipeline in PyTorch and PyTorch Geometric for slang autocomplete. FastAPI serves predictions. Gemini re-ranks top-k suggestions by sentence context and generates full Gen-Z replies. React handles the frontend.',
    architecture: 'Input token → GAT encodes semantic neighborhood graph → GRU decodes sequence → top-k autocomplete candidates → Gemini context re-ranking → final suggestion + full reply. The GAT is trained on a custom slang co-occurrence graph built from scraped Twitter/Reddit data.',
    challenge: 'Building the slang co-occurrence graph required heavy deduplication and normalization of scraped data. The GAT attention heads needed careful regularization to avoid overfitting on rare slang terms that appeared only a few times in training.',
  },
  '005': {
    stack_detail: 'Gemini Vision identifies products from screenshots. Tavily scrapes live reviews and prices in parallel. Snowflake vector search stores product embeddings for similarity lookup. FastAPI backend, React frontend, Auth0 handles authentication.',
    architecture: 'Screenshot → Gemini Vision identification → parallel Tavily scraping (reviews + prices) → Snowflake vector search for similar past products → Eco Score generation via Gemini → unified product card returned to React UI. Hybrid exact-match + embedding similarity for known vs. novel products.',
    challenge: 'Making Snowflake vector search return useful results for novel products required a hybrid approach: exact-match for known items, embedding similarity for unknowns. Eco Score calculation needed a rubric that Gemini could apply consistently across very different product categories.',
  },
  '006': {
    stack_detail: 'Plaid API ingests real banking transaction history. FastAPI processes it through a scoring pipeline. Gemini evaluates a weighted score across rent regularity, income stability, cash flow, and education credentials. React + JavaScript frontend.',
    architecture: 'Plaid webhook → transaction normalization → four parallel feature extractors (rent, income, cashflow, education) → Gemini-powered weighted scoring → credit score output with plain-language explanation. No traditional credit bureau data used at any step.',
    challenge: 'Normalizing transactions across different banks was the hardest problem — merchant names, categories, and amounts vary wildly. Plaid\'s category taxonomy helped but custom heuristics were still needed to reliably distinguish rent payments from other large recurring transfers.',
  },
  '007': {
    stack_detail: 'Chrome Extension intercepts Instagram reels in real time. TypeScript applies grayscale as a friction mechanism. A multi-agent LLM pipeline (Lava Models) triages each reel. FastAPI + Python backend logs behavioral analytics to Supabase.',
    architecture: 'Reel detected → Lava LLM pipeline scores content quality vs. user goals → decision: SKIP (auto-scroll), WAIT (grayscale delay), or LIKE_AND_STAY (full color). Analytics dashboard shows a neural map of behavioral patterns. Users set intention goals that inform the scoring.',
    challenge: 'Getting reliable LLM decisions on video content in real time was the main challenge. Lava models run inference on extracted frames, introducing latency. Batching frames and caching decisions for repeated content got response time under 200ms.',
  },
  '008': {
    stack_detail: 'Gemini Vision detects natural placement surfaces in video frames (tables, shelves, billboards, handheld items). FFmpeg composites the product insertion. TypeScript + FastAPI handle the pipeline. Backboard provides persistent campaign memory for brand-creator matching.',
    architecture: 'Video upload → FFmpeg frame extraction → Gemini Vision scene analysis → placement candidate detection → brand asset compositing with FFmpeg → reconstructed video output. Backboard stores brand campaign briefs and matches them semantically to creator content.',
    challenge: 'Seamless compositing was the hardest part — inserted products need to look naturally lit. The team estimated scene lighting from surrounding pixel values and applied a simple color grade. Getting Gemini to return consistent bounding box coordinates across frames required extensive prompt tuning.',
  },
  '009': {
    stack_detail: 'Python data pipeline parses BWF match CSVs. Glicko-2 skill ratings and point-by-point momentum features are computed per match. LightGBM and XGBoost ensembles are trained and tuned with Optuna. SHAP explains feature importance. Streamlit dashboard visualizes predictions and tournament brackets.',
    architecture: 'Raw match data → feature engineering (Glicko-2 ratings, momentum, surface, fatigue index) → LightGBM + XGBoost stacked ensemble (logistic regression meta-learner) → prediction with calibrated confidence → Streamlit visualization. SHAP values highlight which features drove each individual prediction.',
    challenge: 'Glicko-2 initialization was tricky — early-career players had high uncertainty intervals that inflated ensemble variance. Using world ranking as a prior for initial ratings stabilized predictions for new players within ~5 matches.',
  },
  '010': {
    stack_detail: 'Plain JavaScript frontend with multi-tab UI. OpenAI GPT-3.5 API powers the mental health chat with a mood-aware system prompt and offline fallback responses. Web APIs (Notifications API, Audio API) handle reminders and alerts. localStorage persists chat history and reminders across sessions.',
    architecture: 'Three tabs: Chat (GPT-3.5 with offline fallback), Reminders (priority queue with Notifications API alerts), Calendar (event grid with audio cues). Fully client-side — no backend. Built as a first hackathon project at Hack404.',
    challenge: 'The offline fallback system was the most thoughtful part — when the API is unavailable, a curated set of pattern-matched responses handles common mental health check-ins without any API call. Ensuring these fallback responses felt empathetic rather than clinical took careful writing.',
  },
};

// Per-project workflow graphs: nodes = components, edges = directed data flow
const PROJECT_WORKFLOW = {
  '001': { // LOCATR — multi-agent AI
    nodes: [
      { id:0, name:'Next.js',   role:'Frontend',      ox:-50, oy: 35, desc:'Chat UI — user enters trip preferences' },
      { id:1, name:'FastAPI',   role:'Backend',        ox:  0, oy: 52, desc:'REST orchestrator routing tasks to agents' },
      { id:2, name:'LangGraph', role:'AI_ML',          ox: 48, oy: 20, desc:'Multi-agent graph coordinating hotel/flight/activity planners' },
      { id:3, name:'Snowflake', role:'Data',           ox: 52, oy:-25, desc:'Structured itinerary storage and retrieval' },
      { id:4, name:'Redis',     role:'Data',           ox: -8, oy:-52, desc:'Session cache for in-progress planning state' },
    ],
    edges:[[0,1],[1,2],[2,3],[3,2],[2,4],[4,2],[2,1],[1,0]],
  },
  '002': { // ECO-PULSE — heat mapping
    nodes: [
      { id:0, name:'React',     role:'Frontend',      ox:-48, oy: 28, desc:'Interactive dashboard with real-time heatmap layer' },
      { id:1, name:'FastAPI',   role:'Backend',        ox:  0, oy: 52, desc:'API ingesting environmental sensor data' },
      { id:2, name:'Python ML', role:'AI_ML',          ox: 48, oy: 28, desc:'LightGBM + XGBoost ensemble heat-risk models' },
      { id:3, name:'Gemini',    role:'AI_ML',          ox: 52, oy:-18, desc:'LLM generating natural-language health advisories' },
      { id:4, name:'Leaflet',   role:'Infrastructure', ox:-15, oy:-52, desc:'Map tiles rendering choropleth overlays' },
    ],
    edges:[[0,1],[1,2],[2,3],[3,1],[1,0],[0,4]],
  },
  '003': { // INTERPREFY — real-time translation
    nodes: [
      { id:0, name:'VB-Cable',  role:'Infrastructure', ox:-52, oy: 10, desc:'Virtual audio cable capturing system audio stream' },
      { id:1, name:'Python',    role:'Backend',        ox:-25, oy: 48, desc:'Core pipeline orchestrating audio capture and routing' },
      { id:2, name:'DeepGram',  role:'AI_ML',          ox: 25, oy: 48, desc:'ASR converting audio chunks to text in real time' },
      { id:3, name:'DeepL',     role:'AI_ML',          ox: 52, oy: 10, desc:'Neural MT translating transcribed text' },
      { id:4, name:'PyQt5',     role:'Frontend',       ox:  0, oy:-52, desc:'Desktop overlay displaying translated subtitles' },
    ],
    edges:[[0,1],[1,2],[2,3],[3,4],[1,4]],
  },
  '004': { // MASTERINGENZ — slang autocomplete
    nodes: [
      { id:0, name:'React',     role:'Frontend',      ox:-52, oy: 18, desc:'Editor UI with inline autocomplete suggestions' },
      { id:1, name:'FastAPI',   role:'Backend',        ox:-15, oy: 52, desc:'API coordinating model inference and context retrieval' },
      { id:2, name:'GAT',       role:'AI_ML',          ox: 40, oy: 35, desc:'Graph Attention Network encoding slang relationships' },
      { id:3, name:'GRU',       role:'AI_ML',          ox: 52, oy:-15, desc:'Recurrent model predicting next-token completions' },
      { id:4, name:'Gemini',    role:'AI_ML',          ox: 15, oy:-52, desc:'LLM reranking and explaining completions in context' },
    ],
    edges:[[0,1],[1,2],[2,3],[3,4],[4,1],[1,0]],
  },
  '005': { // IFYSHOP — shopping AI
    nodes: [
      { id:0, name:'React',     role:'Frontend',      ox:-52, oy: 18, desc:'Conversational shopping UI with product carousel' },
      { id:1, name:'FastAPI',   role:'Backend',        ox:  0, oy: 52, desc:'Agentic API routing queries to retrieval and AI' },
      { id:2, name:'Gemini',    role:'AI_ML',          ox: 52, oy: 18, desc:'Vision + language model for product understanding' },
      { id:3, name:'Snowflake', role:'Data',           ox: 38, oy:-40, desc:'Product catalog and purchase history store' },
      { id:4, name:'Tavily',    role:'Infrastructure', ox:-20, oy:-52, desc:'Web search grounding product queries in live data' },
    ],
    edges:[[0,1],[1,2],[1,3],[3,2],[1,4],[4,1],[2,1],[1,0]],
  },
  '006': { // OPENSCORE — credit scoring
    nodes: [
      { id:0, name:'React',     role:'Frontend',      ox:-52, oy: 20, desc:'Dashboard visualising alternative credit score factors' },
      { id:1, name:'FastAPI',   role:'Backend',        ox:  0, oy: 52, desc:'API orchestrating Plaid ingestion and model scoring' },
      { id:2, name:'Plaid API', role:'Infrastructure', ox:-32, oy:-45, desc:'Bank connection layer fetching transaction history' },
      { id:3, name:'Extractors',role:'AI_ML',          ox: 45, oy: 30, desc:'Feature engineers extracting spending pattern signals' },
      { id:4, name:'Gemini',    role:'AI_ML',          ox: 52, oy:-20, desc:'LLM generating human-readable score explanations' },
    ],
    edges:[[0,1],[1,2],[2,1],[1,3],[3,4],[4,1],[1,0]],
  },
  '007': { // FIXMYFEED — social media filter
    nodes: [
      { id:0, name:'Extension', role:'Infrastructure', ox:-52, oy: 20, desc:'Chrome extension injecting filter hooks into social feeds' },
      { id:1, name:'TypeScript',role:'Frontend',       ox:-20, oy: 52, desc:'Content-script UI controls rendered in-page' },
      { id:2, name:'Lava LLM',  role:'AI_ML',          ox: 45, oy: 28, desc:'On-device LLM classifying post sentiment/toxicity' },
      { id:3, name:'FastAPI',   role:'Backend',        ox: 52, oy:-20, desc:'Cloud endpoint for heavy re-ranking tasks' },
      { id:4, name:'Supabase',  role:'Data',           ox:  0, oy:-52, desc:'User preferences and filter rule persistence' },
    ],
    edges:[[0,1],[1,2],[2,3],[3,4],[4,3],[3,1],[1,0]],
  },
  '008': { // SPOTLIGHT — product placement
    nodes: [
      { id:0, name:'TypeScript',role:'Frontend',       ox:-52, oy: 20, desc:'Upload UI for video ingestion and results gallery' },
      { id:1, name:'FastAPI',   role:'Backend',        ox:  0, oy: 52, desc:'Video processing pipeline coordinator' },
      { id:2, name:'Gemini',    role:'AI_ML',          ox: 48, oy: 25, desc:'Vision model detecting and annotating product regions' },
      { id:3, name:'FFmpeg',    role:'Infrastructure', ox: 52, oy:-20, desc:'Frame extraction and video re-encoding' },
      { id:4, name:'Backboard', role:'Data',           ox:-15, oy:-52, desc:'Annotation store with bounding box metadata' },
    ],
    edges:[[0,1],[1,3],[3,2],[2,3],[3,1],[1,4],[4,1],[1,0]],
  },
  '009': { // BWF PREDICTOR — ML pipeline
    nodes: [
      { id:0, name:'Streamlit', role:'Frontend',      ox:-52, oy: 15, desc:'Interactive dashboard for prediction inputs and result visualization' },
      { id:1, name:'Pandas',    role:'Backend',        ox:-15, oy: 52, desc:'Feature engineering pipeline cleaning and transforming match data' },
      { id:2, name:'LightGBM',  role:'AI_ML',          ox: 45, oy: 30, desc:'Gradient boosting model trained on historical BWF rankings' },
      { id:3, name:'XGBoost',   role:'AI_ML',          ox: 52, oy:-15, desc:'Ensemble member providing complementary prediction signal' },
      { id:4, name:'SHAP',      role:'AI_ML',          ox: 15, oy:-52, desc:'Shapley values explaining which features drove each prediction' },
    ],
    edges:[[1,2],[1,3],[2,4],[3,4],[4,0],[0,1]],
  },
  '010': { // HEALTH ASSISTANT
    nodes: [
      { id:0, name:'HTML/CSS',  role:'Frontend',      ox:-50, oy: 35, desc:'Responsive web UI for health queries and daily reminders' },
      { id:1, name:'GPT-3.5',   role:'AI_ML',          ox: 35, oy: 45, desc:'LLM interpreting health questions and generating safe advice' },
      { id:2, name:'localStorage',role:'Data',         ox: 52, oy:-15, desc:'Client-side storage for user preferences and symptom history' },
      { id:3, name:'Notify API',role:'Infrastructure', ox:  0, oy:-52, desc:'Browser notifications for medication and wellness reminders' },
    ],
    edges:[[0,1],[1,0],[0,2],[2,0],[0,3]],
  },
};

function initProjectGraph() {
  const canvas = document.getElementById('graph-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const W = canvas.clientWidth || 700, H = canvas.clientHeight || 500;
  canvas.width = W; canvas.height = H;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setClearColor(0x05040e, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, W/H, 0.1, 2000);
  camera.position.set(0, 0, 500);
  let targetCamZ = 900;

  scene.add(new THREE.AmbientLight(0x111133, 0.7));
  const dLight = new THREE.DirectionalLight(0xffffff, 0.9);
  dLight.position.set(2, 1, 2);
  scene.add(dLight);

  // ── Node positions — golden spiral on sphere, with physics state ──
  const nodeData = PROJECTS.map((p, i) => {
    const phi   = Math.acos(-1 + (2 * i) / PROJECTS.length);
    const theta = Math.sqrt(PROJECTS.length * Math.PI) * phi;
    const R = 320;
    const rx = R * Math.sin(phi) * Math.cos(theta);
    const ry = R * Math.sin(phi) * Math.sin(theta);
    const rz = R * Math.cos(phi);
    return {
      p,
      x: rx, y: ry, z: rz,   // live position (physics moves this)
      rx, ry, rz,              // rest position (spring target)
      vx: 0, vy: 0, vz: 0,   // velocity
      pulse: Math.random() * Math.PI * 2, // per-node breathing phase
    };
  });

  // ── Edges: shared tech ────────────────────────────────────────
  const edges = [];
  for (let i = 0; i < PROJECTS.length; i++) {
    for (let j = i+1; j < PROJECTS.length; j++) {
      const shared = PROJECTS[i].tech.filter(t => PROJECTS[j].tech.includes(t));
      if (shared.length >= 1) edges.push({ i, j, strength: shared.length, shared });
    }
  }

  // ── Star node meshes + glow halos ────────────────────────────
  const spheres = nodeData.map(nd => {
    const geo = new THREE.SphereGeometry(10, 22, 22);
    const mat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(nd.p.color),
      emissive: new THREE.Color(nd.p.color),
      emissiveIntensity: 0.55,
      shininess: 140,
      transparent: true, opacity: 1,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(nd.x, nd.y, nd.z);
    mesh.userData = { nd, idx: nodeData.indexOf(nd) };
    return mesh;
  });

  // Soft glow halo — rendered from inside (BackSide) so it blooms outward
  const halos = nodeData.map(nd => {
    const geo = new THREE.SphereGeometry(22, 12, 12);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(nd.p.color),
      transparent: true, opacity: 0.07,
      side: THREE.BackSide, depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(nd.x, nd.y, nd.z);
    return mesh;
  });

  // ── Selection torus ───────────────────────────────────────────
  const ringGeo = new THREE.TorusGeometry(14, 1.5, 8, 40);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xf5c430, transparent: true, opacity: 0.9 });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.visible = false;

  // ── Edge lines (geometry rebuilt each frame as nodes move) ────
  const edgeMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.35 });
  const edgeLines = edges.map(e => {
    const pts = [
      new THREE.Vector3(nodeData[e.i].x, nodeData[e.i].y, nodeData[e.i].z),
      new THREE.Vector3(nodeData[e.j].x, nodeData[e.j].y, nodeData[e.j].z),
    ];
    const c1 = new THREE.Color(PROJECTS[e.i].color);
    const c2 = new THREE.Color(PROJECTS[e.j].color);
    const colors = [c1.r, c1.g, c1.b, c2.r, c2.g, c2.b];
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return new THREE.Line(geo, edgeMat);
  });

  // ── Edge pulse dots — travel from node i → node j, looping ───
  const edgePulses = edges.map(e => {
    const col = new THREE.Color(PROJECTS[e.i].color)
      .lerp(new THREE.Color(PROJECTS[e.j].color), 0.5);
    const geo = new THREE.SphereGeometry(2, 5, 5);
    const mat = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.88 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.userData = {
      t: Math.random(),
      speed: 0.0007 + Math.random() * 0.0006,
      edge: e,
    };
    return mesh;
  });

  // ── Click burst rings (3 shockwave rings per click) ──────────
  const burstPool = Array.from({ length: 3 }, (_, i) => {
    const geo = new THREE.RingGeometry(11, 15, 48);
    const mat = new THREE.MeshBasicMaterial({
      color: [0xf5c430, 0x60a5d4, 0xc08fff][i],
      transparent: true, opacity: 0,
      side: THREE.DoubleSide, depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.visible = false;
    return { mesh, mat, active: false, t: 0, delay: i * 75 };
  });

  function fireBurst(pos) {
    burstPool.forEach(b => {
      b.mesh.position.copy(pos);
      b.mesh.scale.setScalar(0.08);
      b.mesh.visible = true;
      b.active = true;
      b.t = 0;
    });
  }

  // ── Labels ────────────────────────────────────────────────────
  function makeLabel(text, color, fontSize = 24) {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const ctx = c.getContext('2d');
    ctx.font = `bold ${fontSize}px Caveat, cursive`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);
    const tex = new THREE.CanvasTexture(c);
    return new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
  }

  const labels = nodeData.map(nd => {
    const s = makeLabel(nd.p.name, nd.p.color);
    s.scale.set(80, 20, 1);
    s.position.set(nd.x, nd.y + 18, nd.z);
    return s;
  });

  // ── Tech layer colours ────────────────────────────────────────
  const LAYER_COLORS = {
    Frontend: '#60a5d4', Backend: '#f0984e', AI_ML: '#c08fff',
    Data: '#4ecdc4', Infrastructure: '#7ab87a',
  };
  const TECH_LAYER_MAP = {
    'React':'Frontend','Next.js':'Frontend','TypeScript':'Frontend',
    'JavaScript':'Frontend','HTML/CSS':'Frontend','PyQt5':'Frontend','Streamlit':'Frontend',
    'FastAPI':'Backend','Python':'Backend',
    'LangGraph':'AI_ML','Gemini':'AI_ML','OpenAI GPT-3.5':'AI_ML','DeepGram':'AI_ML',
    'Whisper':'AI_ML','DeepL':'AI_ML','LightGBM':'AI_ML','XGBoost':'AI_ML',
    'PyTorch':'AI_ML','PyTorch Geometric':'AI_ML','GAT + GRU':'AI_ML',
    'SHAP':'AI_ML','Optuna':'AI_ML','Lava Models':'AI_ML',
    'Snowflake':'Data','Redis':'Data','Supabase':'Data','Pandas':'Data',
  };

  // ── Satellite / workflow ──────────────────────────────────────
  let satObjects  = [];
  let wfMeshes    = [];
  let wfAnimStart = 0;

  function clearSatellites() {
    satObjects.forEach(o => group.remove(o));
    satObjects = []; wfMeshes = [];
  }

  // Each workflow node orbits the parent project node in 3D.
  function showWorkflow(nd) {
    clearSatellites();
    const wf = PROJECT_WORKFLOW[nd.p.id];
    if (!wf) return;
    wfAnimStart = Date.now();

    const pPos = new THREE.Vector3(nd.x, nd.y, nd.z);
    const nodeCount = wf.nodes.length;
    const wfPos = {};
    const xAxis = new THREE.Vector3(1, 0, 0);
    const zAxis = new THREE.Vector3(0, 0, 1);

    wf.nodes.forEach((wn, wIdx) => {
      const color  = LAYER_COLORS[wn.role] || '#7ab87a';
      const orbitR = 36 + wIdx * 11;
      // Alternate direction so planets cross each other
      const orbitSpeed = (0.0005 + wIdx * 0.00014) * (wIdx % 2 === 0 ? 1 : -1);
      const orbitAngle0 = (wIdx / nodeCount) * Math.PI * 2;
      // Tilted orbital plane — each planet lives in its own inclined orbit
      const tiltX = (wIdx % 3 - 1) * 0.55 + (Math.random() - 0.5) * 0.2;
      const tiltZ = (wIdx % 2 === 0 ? 0.3 : -0.3) + (Math.random() - 0.5) * 0.15;

      // Faint orbit guide ring
      const orbRGeo = new THREE.RingGeometry(orbitR - 0.4, orbitR + 0.4, 64);
      const orbRMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(color), transparent: true, opacity: 0.09,
        side: THREE.DoubleSide, depthWrite: false,
      });
      const orbRMesh = new THREE.Mesh(orbRGeo, orbRMat);
      orbRMesh.position.copy(pPos);
      // Tilt the ring to match the orbital plane
      orbRMesh.rotation.x = -Math.PI / 2 + tiltX;
      orbRMesh.rotation.z = tiltZ;
      group.add(orbRMesh); satObjects.push(orbRMesh);

      // Dynamic anchor line (start = parent, end = planet — updated per frame)
      const lGeo = new THREE.BufferGeometry().setFromPoints([pPos.clone(), pPos.clone()]);
      const lLine = new THREE.Line(lGeo, new THREE.LineBasicMaterial({
        color: new THREE.Color(color), transparent: true, opacity: 0.15,
      }));
      group.add(lLine); satObjects.push(lLine);

      // Planet sphere
      const sGeo = new THREE.SphereGeometry(6.5, 14, 14);
      const sMat = new THREE.MeshPhongMaterial({
        color: new THREE.Color(color), shininess: 100,
        transparent: true, opacity: 0.95,
        emissive: new THREE.Color(color), emissiveIntensity: 0.25,
      });
      const sMesh = new THREE.Mesh(sGeo, sMat);
      sMesh.scale.setScalar(0); // scale-in on reveal
      sMesh.userData = {
        wfIdx: wIdx, orbitR, orbitSpeed, orbitAngle: orbitAngle0,
        tiltX, tiltZ, parentNd: nd, anchorLine: lLine, label: null,
      };
      group.add(sMesh); satObjects.push(sMesh);
      wfMeshes.push({ mesh: sMesh, wn, nd, stagger: wIdx * 80 });

      // Label follows planet
      const lbl = makeLabel(wn.name, color, 17);
      lbl.scale.set(66, 16, 1);
      lbl.position.copy(pPos);
      group.add(lbl); satObjects.push(lbl);
      sMesh.userData.label = lbl;

      // Initial static position for arrows (first frame approximation)
      const rawX = Math.cos(orbitAngle0) * orbitR;
      const rawZ = Math.sin(orbitAngle0) * orbitR;
      const initialPos = pPos.clone().add(
        new THREE.Vector3(rawX, rawX * Math.sin(tiltX) * 0.5, rawZ)
      );
      wfPos[wn.id] = { pos: initialPos, color };
    });

    // Directed arrows between workflow nodes (drawn once at initial orbit positions)
    wf.edges.forEach(([fromId, toId]) => {
      const from = wfPos[fromId]; const to = wfPos[toId];
      if (!from || !to) return;
      const dir = to.pos.clone().sub(from.pos);
      const dist = dir.length();
      if (dist < 4) return;
      dir.normalize();
      const arrowLen = dist - 9 - 12;
      if (arrowLen <= 4) return;
      const origin = from.pos.clone().add(dir.clone().multiplyScalar(9));
      const midColor = new THREE.Color(from.color).lerp(new THREE.Color(to.color), 0.5);
      const headLen = Math.min(9, arrowLen * 0.22);
      const arrow = new THREE.ArrowHelper(dir, origin, arrowLen, midColor.getHex(), headLen, headLen * 0.55);
      arrow.line.material.transparent = true; arrow.line.material.opacity = 0.55;
      group.add(arrow); satObjects.push(arrow);
    });
  }

  // ── Node dimming ──────────────────────────────────────────────
  function dimNodes(activeIdx) {
    spheres.forEach((s, i) => {
      s.material.opacity = (activeIdx < 0 || i === activeIdx) ? 1.0 : 0.15;
    });
    halos.forEach((h, i) => {
      h.material.opacity = (activeIdx < 0 || i === activeIdx) ? 0.07 : 0.01;
    });
    labels.forEach((l, i) => {
      l.material.opacity = (activeIdx < 0 || i === activeIdx) ? 1.0 : 0.10;
    });
    edgeMat.opacity = activeIdx < 0 ? 0.35 : 0.06;
    edgePulses.forEach(p => {
      p.material.opacity = activeIdx < 0 ? 0.88 : 0.0;
    });
  }

  const infoEl = document.getElementById('graph-info');
  const raycaster = new THREE.Raycaster();
  const mouse2D = new THREE.Vector2();
  let activeIdx  = -1;
  let hoveredIdx = -1; // for gravity well

  // ── Workflow component detail ──────────────────────────────────
  function showWorkflowDetail(wfItem) {
    if (!infoEl) return;
    const { wn, nd } = wfItem;
    const color = LAYER_COLORS[wn.role] || '#7ab87a';
    const p = nd.p;
    const wf = PROJECT_WORKFLOW[p.id];
    const inbound  = wf?.edges.filter(([, t]) => t === wn.id).map(([f]) => f) ?? [];
    const outbound = wf?.edges.filter(([f]) => f === wn.id).map(([, t]) => t) ?? [];
    const edgeNodes = wf?.nodes ?? [];
    const nameOf = id => edgeNodes.find(n => n.id === id)?.name ?? id;
    infoEl.innerHTML = `
      <div class="gi-header" style="border-left-color:${color};margin-bottom:0.5rem">
        <span class="gi-name" style="color:${color}">${wn.name}</span>
        <span class="gi-award">${wn.role}</span>
      </div>
      <p class="gi-tagline">${wn.desc || 'Component of ' + p.name}</p>
      ${inbound.length  ? `<div class="gi-conns-label" style="margin-top:0.75rem">receives from</div><div class="gi-conns">${inbound.map(id=>`<div class="gi-conn-row"><span class="gi-conn-name">${nameOf(id)}</span></div>`).join('')}</div>` : ''}
      ${outbound.length ? `<div class="gi-conns-label" style="margin-top:0.5rem">sends to</div><div class="gi-conns">${outbound.map(id=>`<div class="gi-conn-row"><span class="gi-conn-name">${nameOf(id)}</span></div>`).join('')}</div>` : ''}
      <div style="margin-top:1rem"><button class="gi-link" id="gi-back-btn">← ${p.name}</button></div>`;
    document.getElementById('gi-back-btn')?.addEventListener('click', () => showInfo(activeIdx));
  }

  function showInfo(idx) {
    if (!infoEl) return;
    activeIdx = idx;
    ring.visible = idx >= 0;
    dimNodes(idx);

    if (idx < 0) {
      clearSatellites();
      targetCamZ = 500;
      focusNode = false;
      infoEl.innerHTML = '<p class="gi-hint">Click a node to explore a project</p>';
      window._graphChatDeactivate?.();
      return;
    }

    showWorkflow(nodeData[idx]);
    targetCamZ = 270;

    const nd = nodeData[idx];
    const dist = Math.sqrt(nd.x * nd.x + nd.z * nd.z);
    targetRotY = -Math.atan2(nd.x, nd.z);
    targetRotX = Math.atan2(-nd.y, dist > 1 ? dist : 1);
    focusNode = true;

    const p = PROJECTS[idx];
    const connNames = edges.filter(e => e.i===idx||e.j===idx).map(e => {
      const other = e.i===idx ? e.j : e.i;
      return `<span class="gi-conn-name">${PROJECTS[other].name}</span><span class="gi-conn-shared">${e.shared.join(', ')}</span>`;
    });
    infoEl.innerHTML = `
      <div class="gi-header" style="border-left-color:${p.color}">
        <span class="gi-name">${p.name}</span>
        ${p.award ? `<span class="gi-award">${p.award}</span>` : ''}
        ${p.hackathon ? `<span class="gi-hack">${p.hackathon}</span>` : ''}
      </div>
      <p class="gi-tagline">${p.tagline}</p>
      <div class="gi-tech">${p.tech.map(t=>`<span class="gi-pill" style="border-color:${p.color}44">${t}</span>`).join('')}</div>
      ${connNames.length ? `<div class="gi-conns"><div class="gi-conns-label">connects to</div>${connNames.map(c=>`<div class="gi-conn-row">${c}</div>`).join('')}</div>` : ''}
      <div class="gi-links">
        ${p.github ? `<a href="${p.github}" target="_blank" class="gi-link">GitHub ↗</a>` : ''}
        ${p.devpost ? `<a href="${p.devpost}" target="_blank" class="gi-link">DevPost ↗</a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" class="gi-link">Demo ↗</a>` : ''}
      </div>`;
    window._graphChatActivate?.(p.id, p.name);
  }

  // ── Orbit controls ────────────────────────────────────────────
  let isDragging = false, lastX = 0, lastY = 0;
  let rotX = 0, rotY = 0, autoRot = true;
  let targetRotX = 0, targetRotY = 0, focusNode = false;

  canvas.addEventListener('mousedown', e => {
    isDragging = true; lastX = e.clientX; lastY = e.clientY;
    autoRot = false; focusNode = false;
  });
  window.addEventListener('mouseup', () => { isDragging = false; });

  canvas.addEventListener('mousemove', e => {
    if (isDragging) {
      rotY += (e.clientX - lastX) * 0.008;
      rotX += (e.clientY - lastY) * 0.008;
      lastX = e.clientX; lastY = e.clientY;
    }
    const rect = canvas.getBoundingClientRect();
    mouse2D.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse2D.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse2D, camera);
    const hits = raycaster.intersectObjects(spheres);
    hoveredIdx = hits.length ? hits[0].object.userData.idx : -1;
    const wfHover = !hits.length && raycaster.intersectObjects(wfMeshes.map(w => w.mesh)).length;
    canvas.style.cursor = (hits.length || wfHover) ? 'pointer' : 'grab';
  });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    mouse2D.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
    mouse2D.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse2D, camera);

    const hits = raycaster.intersectObjects(spheres);
    if (hits.length) {
      const idx = hits[0].object.userData.idx;
      ring.position.copy(hits[0].object.position);
      fireBurst(hits[0].object.position.clone());
      showInfo(idx);
      return;
    }

    const wfHits = raycaster.intersectObjects(wfMeshes.map(w => w.mesh));
    if (wfHits.length) {
      const hit = wfMeshes.find(w => w.mesh === wfHits[0].object);
      if (hit) showWorkflowDetail(hit);
      return;
    }

    showInfo(-1);
  });

  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    targetCamZ = Math.max(250, Math.min(1800, targetCamZ + e.deltaY * 0.5));
  }, { passive: false });

  let lastTouch = null;
  canvas.addEventListener('touchstart', e => { lastTouch = e.touches[0]; autoRot = false; }, { passive: true });
  canvas.addEventListener('touchmove', e => {
    if (!lastTouch) return;
    rotY += (e.touches[0].clientX - lastTouch.clientX) * 0.01;
    rotX += (e.touches[0].clientY - lastTouch.clientY) * 0.01;
    lastTouch = e.touches[0];
  }, { passive: true });

  // ── Group (all scene objects rotate together) ─────────────────
  const group = new THREE.Group();
  spheres.forEach(s => group.add(s));
  halos.forEach(h => group.add(h));
  labels.forEach(l => group.add(l));
  edgeLines.forEach(l => group.add(l));
  edgePulses.forEach(p => group.add(p));
  burstPool.forEach(b => group.add(b.mesh));
  group.add(ring);
  scene.add(group);

  // ── Layered starfield (3 depths, different tints) ─────────────
  function makeStarLayer(count, radius, color, size, opacity) {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random(), v = Math.random();
      const th = 2 * Math.PI * u;
      const ph = Math.acos(2 * v - 1);
      pos[i*3]   = radius * Math.sin(ph) * Math.cos(th);
      pos[i*3+1] = radius * Math.sin(ph) * Math.sin(th);
      pos[i*3+2] = radius * Math.cos(ph);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    scene.add(new THREE.Points(geo, new THREE.PointsMaterial({
      color, size, transparent: true, opacity, sizeAttenuation: true,
    })));
  }
  makeStarLayer(2200, 900, 0xddeeff, 1.6, 0.55);
  makeStarLayer(420,  860, 0x60a5d4, 2.4, 0.50);
  makeStarLayer(110,  830, 0xf5c430, 3.2, 0.65);

  showInfo(-1);
  initGraphChatbot();

  // ── Physics constants ─────────────────────────────────────────
  const K_SPRING  = 0.014;  // pull toward rest position
  const K_REPEL   = 5500;   // node-node repulsion
  const K_EDGE    = 0.005;  // edge spring attraction
  const K_GRAVITY = 0.005;  // hover gravity well strength
  const DAMPING   = 0.80;   // velocity damping per frame

  let clock = 0;

  // ── Animation loop ────────────────────────────────────────────
  function animate() {
    requestAnimationFrame(animate);
    clock += 0.016;

    if (autoRot) rotY += 0.003;
    if (focusNode) {
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;
    }
    group.rotation.x = rotX;
    group.rotation.y = rotY;
    camera.position.z += (targetCamZ - camera.position.z) * 0.06;

    // ── Force-directed physics ─────────────────────────────────
    nodeData.forEach((nd, i) => {
      // Spring toward rest (golden spiral) position
      let fx = (nd.rx - nd.x) * K_SPRING;
      let fy = (nd.ry - nd.y) * K_SPRING;
      let fz = (nd.rz - nd.z) * K_SPRING;

      // Repulsion from every other node
      nodeData.forEach((other, j) => {
        if (i === j) return;
        const dx = nd.x - other.x, dy = nd.y - other.y, dz = nd.z - other.z;
        const d2 = dx*dx + dy*dy + dz*dz + 0.01;
        const d  = Math.sqrt(d2);
        if (d > 240) return;
        const f = K_REPEL / d2;
        fx += (dx / d) * f; fy += (dy / d) * f; fz += (dz / d) * f;
      });

      // Edge attraction — pull connected nodes toward each other
      edges.forEach(e => {
        if (e.i !== i && e.j !== i) return;
        const oi = e.i === i ? e.j : e.i;
        const o  = nodeData[oi];
        const dx = o.x - nd.x, dy = o.y - nd.y, dz = o.z - nd.z;
        fx += dx * K_EDGE * e.strength;
        fy += dy * K_EDGE * e.strength;
        fz += dz * K_EDGE * e.strength;
      });

      // Hover gravity well — hovered node gently attracts neighbours
      if (hoveredIdx >= 0 && hoveredIdx !== i) {
        const hov = nodeData[hoveredIdx];
        const dx = hov.x - nd.x, dy = hov.y - nd.y, dz = hov.z - nd.z;
        const d  = Math.sqrt(dx*dx + dy*dy + dz*dz + 0.01);
        if (d < 200) {
          const gf = K_GRAVITY * (1 - d / 200);
          fx += dx * gf; fy += dy * gf; fz += dz * gf;
        }
      }

      nd.vx = (nd.vx + fx) * DAMPING;
      nd.vy = (nd.vy + fy) * DAMPING;
      nd.vz = (nd.vz + fz) * DAMPING;
      nd.x += nd.vx; nd.y += nd.vy; nd.z += nd.vz;

      // Node breathing — gentle scale + emissive pulse
      const breath = 1 + Math.sin(clock * 1.8 + nd.pulse) * 0.045;
      spheres[i].position.set(nd.x, nd.y, nd.z);
      spheres[i].scale.setScalar(breath);
      // Boost hovered node
      const isHov = i === hoveredIdx;
      halos[i].position.set(nd.x, nd.y, nd.z);
      halos[i].scale.setScalar((isHov ? 1.6 : 1.0) + Math.sin(clock * 1.2 + nd.pulse) * 0.1);
      halos[i].material.opacity = isHov ? 0.18 : (activeIdx < 0 ? 0.07 : (activeIdx === i ? 0.07 : 0.01));
      labels[i].position.set(nd.x, nd.y + 18, nd.z);
    });

    // Update edge line geometry to follow nodes
    edgeLines.forEach((line, ei) => {
      const e = edges[ei], a = nodeData[e.i], b = nodeData[e.j];
      const pa = line.geometry.attributes.position;
      pa.setXYZ(0, a.x, a.y, a.z);
      pa.setXYZ(1, b.x, b.y, b.z);
      pa.needsUpdate = true;
    });

    // Edge pulse dots
    edgePulses.forEach(dot => {
      const { edge } = dot.userData;
      dot.userData.t = (dot.userData.t + dot.userData.speed) % 1;
      const tt = dot.userData.t;
      const a = nodeData[edge.i], b = nodeData[edge.j];
      dot.position.set(
        a.x + (b.x - a.x) * tt,
        a.y + (b.y - a.y) * tt,
        a.z + (b.z - a.z) * tt,
      );
    });

    // Follow selected node with torus ring
    if (activeIdx >= 0 && ring.visible) {
      const nd = nodeData[activeIdx];
      ring.position.set(nd.x, nd.y, nd.z);
      ring.rotation.y += 0.02; // spin the ring
    }

    // ── Orbital planets (workflow nodes) ──────────────────────
    if (wfMeshes.length) {
      const elapsed = Date.now() - wfAnimStart;
      wfMeshes.forEach(({ mesh, stagger }) => {
        // Scale-in pop
        const scaleT = Math.min(1, Math.max(0, (elapsed - stagger) / 340));
        const s = 1 - Math.pow(1 - scaleT, 3);
        mesh.scale.setScalar(s);

        // Advance orbital angle
        mesh.userData.orbitAngle += mesh.userData.orbitSpeed;
        const angle = mesh.userData.orbitAngle;
        const r     = mesh.userData.orbitR;
        const nd    = mesh.userData.parentNd;
        const tx    = mesh.userData.tiltX;
        const tz    = mesh.userData.tiltZ;

        // Position in tilted orbital plane using axis-angle rotation
        const rawX = Math.cos(angle) * r;
        const rawZ = Math.sin(angle) * r;
        // Apply tilt: mix Y from both axes
        const px = nd.x + rawX;
        const py = nd.y + rawX * Math.sin(tx) * 0.6 + rawZ * Math.sin(tz) * 0.4;
        const pz = nd.z + rawZ;

        mesh.position.set(px, py, pz);

        // Label follows planet
        if (mesh.userData.label) {
          mesh.userData.label.position.set(px, py + 12, pz);
        }

        // Update dynamic anchor line
        const al = mesh.userData.anchorLine;
        if (al) {
          const lp = al.geometry.attributes.position;
          lp.setXYZ(0, nd.x, nd.y, nd.z);
          lp.setXYZ(1, px, py, pz);
          lp.needsUpdate = true;
        }
      });
    }

    // ── Burst ring animation ──────────────────────────────────
    burstPool.forEach(b => {
      if (!b.active) return;
      b.t += 0.022;
      const delay = b.delay / 1000 * 60; // convert ms delay to frame-ticks
      const ft = Math.max(0, b.t - b.delay * 0.001);
      if (ft <= 0) return;
      if (ft >= 1) { b.mesh.visible = false; b.mat.opacity = 0; b.active = false; return; }
      const eased = 1 - Math.pow(1 - ft, 2.2);
      b.mesh.scale.setScalar(0.08 + eased * 5.0);
      b.mat.opacity = ft < 0.25 ? (ft / 0.25) * 0.85 : 0.85 * (1 - (ft - 0.25) / 0.75);
      // Billboard: ring always faces camera
      b.mesh.lookAt(group.worldToLocal(camera.position.clone()));
    });

    renderer.render(scene, camera);
  }
  animate();
}

// ================================================================
// GRAPH CHATBOT
// ================================================================

function initGraphChatbot() {
  const chatEl  = document.getElementById('graph-chat');
  const msgsEl  = document.getElementById('gc-messages');
  const inputEl = document.getElementById('gc-input');
  const sendBtn = document.getElementById('gc-send');
  if (!chatEl || !msgsEl || !inputEl || !sendBtn) return;

  let currentProjectId = null;

  function addMsg(text, role) {
    const div = document.createElement('div');
    div.className = `gc-msg gc-${role}`;
    div.textContent = text;
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function respond(query) {
    const kb = PROJECT_KB[currentProjectId];
    if (!kb) { addMsg('No data for this project yet.', 'bot'); return; }
    const q = query.toLowerCase();
    let response;
    if (/stack|tech|built|language|framework|tool|use|library/.test(q)) {
      response = kb.stack_detail;
    } else if (/architect|system|how does|how do|work|flow|pipeline|design|structure/.test(q)) {
      response = kb.architecture;
    } else if (/challenge|hard|difficult|problem|issue|tricky|struggle|fix/.test(q)) {
      response = kb.challenge;
    } else if (/link|github|demo|devpost|code|repo|project page/.test(q)) {
      const p = PROJECTS.find(pr => pr.id === currentProjectId);
      const links = [
        p.github  && `GitHub: ${p.github}`,
        p.devpost && `DevPost: ${p.devpost}`,
        p.demo    && `Demo: ${p.demo}`,
      ].filter(Boolean);
      response = links.length ? links.join('\n') : 'No external links for this project.';
    } else if (/what|about|describe|tell|overview|summary|explain/.test(q)) {
      response = PROJECTS.find(pr => pr.id === currentProjectId)?.description || '';
    } else {
      response = 'Try asking about the tech stack, architecture, challenges, or links.';
    }
    addMsg(response, 'bot');
  }

  function onSend() {
    const val = inputEl.value.trim();
    if (!val || !currentProjectId) return;
    addMsg(val, 'user');
    inputEl.value = '';
    respond(val);
  }

  sendBtn.addEventListener('click', onSend);
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') onSend(); });

  window._graphChatActivate = (projectId, projectName) => {
    currentProjectId = projectId;
    chatEl.hidden = false;
    msgsEl.innerHTML = '';
    addMsg(`${projectName} loaded — ask about the stack, architecture, or challenges.`, 'bot');
  };

  window._graphChatDeactivate = () => {
    currentProjectId = null;
    chatEl.hidden = true;
  };
}

// ================================================================
// GAME REGISTRY — single source of truth for all 13 games
// ================================================================

const GameRegistry = {
  wordle:      (c, w) => initWordle(c, w),
  connections: (c, w) => initConnections(c, w),
  spelling:    (c, w) => initSpelling(c, w),
  crossword:   (c, w) => initCrossword(c, w),
  pinpoint:    (c, w) => initPinpoint(c, w),
  tango:       (c, w) => initTango(c, w),
  numberlink:  (c, w) => initNumberlink(c, w),
  queens:      (c, w) => initQueens(c, w),
  sudoku:      (c, w) => initSudoku(c, w),
  mathlab:     (c, w) => initMathLab(c, w),
  rps:         (c, w) => initRPSGame(c, w),
  tictactoe:   (c, w) => initTTTGame(c, w),
  connect4:    (c, w) => initConnect4(c, w),
};

function initGamesHub() {
  const arena = document.getElementById('games-arena');
  if (!arena) return;

  let current = 'wordle';
  let currentCleanup = null;
  let hubInited = false;

  function loadGame(g) {
    if (currentCleanup) { currentCleanup(); currentCleanup = null; }
    arena.innerHTML = '';
    try {
      currentCleanup = GameRegistry[g]?.(arena) ?? null;
    } catch (err) {
      arena.innerHTML = `<div style="padding:2rem;font-family:var(--font-sketch);color:var(--rouge)">⚠ ${g} failed to load.</div>`;
      console.error('[Game] load error:', g, err);
    }
  }

  // Lazy init — only when games tab becomes active
  document.querySelectorAll('.top-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.dataset.section === 'sec-games' && !hubInited) {
        hubInited = true;
        loadGame(current);
      }
    });
  });

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const g = card.dataset.game;
      if (g === current && hubInited) return;
      current = g;
      hubInited = true;
      document.querySelectorAll('.game-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      loadGame(g);
    });
  });
}

// ================================================================
// INIT ALL
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  initGate();
  renderProjects();
  initProjectTabs();
  initTopNav();
  initGamesHub();
  initWipProgress();

  initScene();
  initFaller();
  initCursor();
  initOrigami();
});

// ================================================================
// GAMES WIP — animated fake progress bar
// ================================================================
function initWipProgress() {
  const fill  = document.getElementById('wip-fill');
  const label = document.getElementById('wip-pct');
  if (!fill || !label) return;

  // Targets the bar crawls toward before resetting — comedically stuck
  const STOPS = [11, 23, 37, 37, 37, 42, 37, 37];
  let stopIdx = 0;
  let current = 0;
  let target  = STOPS[0];

  function step() {
    const diff = target - current;
    if (Math.abs(diff) < 0.5) {
      current = target;
      label.textContent = Math.round(current) + '%';
      fill.style.width  = current + '%';

      stopIdx = (stopIdx + 1) % STOPS.length;
      const next = STOPS[stopIdx];
      // If next target is lower, flash to 0 and restart
      if (next < current) {
        setTimeout(() => {
          fill.style.transition = 'none';
          current = 0;
          fill.style.width = '0%';
          label.textContent = '0%';
          target = STOPS[0];
          stopIdx = 1;
          requestAnimationFrame(() => { fill.style.transition = ''; });
          setTimeout(step, 400);
        }, 2200);
        return;
      }
      target = next;
      setTimeout(step, 900);
    } else {
      current += diff * 0.04;
      label.textContent = Math.round(current) + '%';
      fill.style.width  = current + '%';
      requestAnimationFrame(step);
    }
  }

  setTimeout(step, 600);
}
