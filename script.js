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
    devpost: null,
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
    devpost: null,
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
    devpost: null,
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
    hackathon: null,
    award: null,
    tech: ['TypeScript', 'FastAPI', 'Python', 'Supabase', 'Chrome Extension', 'Lava Models'],
    github: 'https://github.com/thejonathangu/FixMyFeed',
    devpost: null,
    demo: 'https://fix-my-feed.vercel.app',
    color: '#f0984e',
    type: 'hackathon',
  },
  {
    id: '008',
    name: 'SPOTLIGHT',
    tagline: 'Stop interrupting content. Be part of it.',
    description: 'AI platform that detects natural product placement opportunities inside video scenes — tables, shelves, billboards, handheld items — and seamlessly inserts brand products using Gemini + FFmpeg. Connects creators with brands through a dynamic marketplace with Backboard-powered persistent campaign memory.',
    hackathon: null,
    award: null,
    tech: ['TypeScript', 'Python', 'Gemini', 'FFmpeg', 'Backboard', 'FastAPI'],
    github: 'https://github.com/HetarthP/Spotlight',
    devpost: null,
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
    award: null,
    tech: ['JavaScript', 'HTML/CSS', 'OpenAI GPT-3.5', 'Web APIs'],
    github: 'https://github.com/Lushenwar/HealthAssistant',
    devpost: null,
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
        showMiniGate(p.id, p.name, () => {
          sessionStorage.setItem(`proj_${p.id}`, '1');
          toggleCard(card);
        });
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

  let curTop = 8, curLeft = -22, curAngle = -22;
  let scrollY = 0, prev = 0;

  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  (function loop() {
    requestAnimationFrame(loop);
    const vel = scrollY - prev; prev = scrollY;
    const prog = Math.min(scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1);

    // Sweeps dramatically from far left to far right as you scroll
    const tLeft  = -22 + prog * 144 + Math.sin(scrollY * 0.0028) * 18;
    const tTop   = 8 + prog * 75;
    const tAngle = -25 + prog * 62 + vel * 2.2;

    curLeft  += (tLeft  - curLeft)  * 0.06;
    curTop   += (tTop   - curTop)   * 0.07;
    curAngle += (tAngle - curAngle) * 0.09;

    faller.style.left      = `${curLeft}vw`;
    faller.style.top       = `${curTop}vh`;
    faller.style.transform = `translate(-50%, -50%) rotate(${curAngle}deg)`;
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

const GAMES = ['rps', 'tictactoe', 'math'];
const SELECTED_GAME = GAMES[Math.floor(Math.random() * GAMES.length)];

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

// ---- ROCK PAPER SCISSORS ----
function initRPS(container) {
  let you = 0, ai = 0;

  container.innerHTML = `
    <div class="game-label">challenge · rock paper scissors</div>
    <div class="game-title">Beat the Machine</div>
    <p class="game-desc">Best of 3 — win 2 rounds to enter.</p>
    <div class="score-display">
      <div><span class="score-you">${you}</span><span class="score-label">you</span></div>
      <span class="score-vs">vs</span>
      <div><span class="score-ai">${ai}</span><span class="score-label">AI</span></div>
    </div>
    <div class="rps-grid">
      <button class="rps-btn" data-choice="rock"><span class="rps-emoji">✊</span>Rock</button>
      <button class="rps-btn" data-choice="paper"><span class="rps-emoji">✋</span>Paper</button>
      <button class="rps-btn" data-choice="scissors"><span class="rps-emoji">✌️</span>Scissors</button>
    </div>
    <div class="round-result" id="rps-result">pick your move</div>
  `;

  const updateScore = () => {
    container.querySelector('.score-you').textContent = you;
    container.querySelector('.score-ai').textContent = ai;
  };

  container.querySelectorAll('.rps-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choices = ['rock', 'paper', 'scissors'];
      const player = btn.dataset.choice;
      const machine = choices[Math.floor(Math.random() * 3)];
      const res = container.querySelector('#rps-result');

      let outcome;
      if (player === machine) {
        outcome = 'tie'; res.textContent = `Tie! AI also picked ${machine}`; res.className = 'round-result tie';
      } else if (
        (player === 'rock' && machine === 'scissors') ||
        (player === 'paper' && machine === 'rock') ||
        (player === 'scissors' && machine === 'paper')
      ) {
        outcome = 'win'; you++; res.textContent = `You win! AI picked ${machine}`; res.className = 'round-result win';
      } else {
        outcome = 'lose'; ai++; res.textContent = `AI wins! It picked ${machine}`; res.className = 'round-result lose';
      }

      updateScore();

      if (you === 2) { setTimeout(unlockPortfolio, 500); }
      else if (ai === 2) {
        setTimeout(() => {
          you = 0; ai = 0; updateScore();
          res.textContent = 'AI wins the match! Try again.'; res.className = 'round-result lose';
        }, 800);
      }
    });
  });
}

// ---- TIC TAC TOE ----
function initTTT(container) {
  let board = Array(9).fill(null);
  let locked = false;
  let isFirstGame = true; // first game uses perfect minimax

  const WINS = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  const wins = (b, p) => WINS.some(([a,c,d]) => b[a]===p && b[c]===p && b[d]===p);

  // Perfect minimax — AI never loses
  function minimax(b, isMax, depth) {
    if (wins(b, 'O')) return 10 - depth;
    if (wins(b, 'X')) return depth - 10;
    const empty = b.map((v,i) => v===null?i:null).filter(v=>v!==null);
    if (!empty.length) return 0;
    let best = isMax ? -Infinity : Infinity;
    for (const i of empty) {
      b[i] = isMax ? 'O' : 'X';
      const score = minimax(b, !isMax, depth + 1);
      b[i] = null;
      best = isMax ? Math.max(best, score) : Math.min(best, score);
    }
    return best;
  }

  function perfectMove(b) {
    const empty = b.map((v,i) => v===null?i:null).filter(v=>v!==null);
    let best = -Infinity, move = empty[0];
    for (const i of empty) {
      b[i] = 'O';
      const score = minimax(b, false, 0);
      b[i] = null;
      if (score > best) { best = score; move = i; }
    }
    return move;
  }

  // Medium AI — 62% optimal, 38% random (beatable)
  function mediumMove(b) {
    const empty = b.map((v,i) => v===null?i:null).filter(v=>v!==null);
    if (!empty.length) return -1;
    if (Math.random() < 0.62) {
      for (const i of empty) { b[i]='O'; if (wins(b,'O')) { b[i]=null; return i; } b[i]=null; }
      for (const i of empty) { b[i]='X'; if (wins(b,'X')) { b[i]=null; return i; } b[i]=null; }
      if (b[4]===null) return 4;
      for (const i of [0,2,6,8]) if (b[i]===null) return i;
    }
    return empty[Math.floor(Math.random() * empty.length)];
  }

  function aiMove(b) {
    return isFirstGame ? perfectMove(b) : mediumMove(b);
  }

  function render() {
    const cells = container.querySelectorAll('.ttt-cell');
    cells.forEach((c, i) => {
      c.textContent = board[i] || '';
      c.dataset.val = board[i] || '';
      c.disabled = !!board[i] || locked;
    });
  }

  function setStatus(msg) {
    container.querySelector('.ttt-status').textContent = msg;
  }

  const firstGameNote = () => isFirstGame
    ? '<span style="color:var(--rouge);font-size:0.8rem"> — (the AI is unbeatable this round)</span>'
    : '';

  container.innerHTML = `
    <div class="game-label">challenge · tic tac toe</div>
    <div class="game-title">Beat the AI</div>
    <p class="game-desc">You're X. Win — draws don't count.</p>
    <div class="ttt-grid">
      ${Array(9).fill(0).map((_,i) => `<button class="ttt-cell" data-index="${i}"></button>`).join('')}
    </div>
    <div class="ttt-status">your turn${firstGameNote()}</div>
    <button class="game-reset">reset board</button>
  `;

  function reset() {
    isFirstGame = false; // subsequent games use medium AI
    board = Array(9).fill(null);
    locked = false;
    render();
    setStatus('your turn — good luck this time');
  }

  container.querySelector('.game-reset').addEventListener('click', reset);

  container.querySelectorAll('.ttt-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const i = +cell.dataset.index;
      if (board[i] || locked) return;

      board[i] = 'X';
      render();

      if (wins(board, 'X')) {
        locked = true;
        render();
        setStatus('🎉 You win!');
        setTimeout(unlockPortfolio, 600);
        return;
      }
      if (board.every(Boolean)) {
        setStatus('Draw! Try again.');
        setTimeout(reset, 1200);
        return;
      }

      locked = true;
      setStatus('AI thinking...');

      setTimeout(() => {
        const m = aiMove(board);
        if (m < 0) return;
        board[m] = 'O';

        if (wins(board, 'O')) {
          locked = true;
          render();
          setStatus('AI wins! Try again.');
          setTimeout(reset, 1400);
          return;
        }
        if (board.every(Boolean)) {
          locked = false;
          render();
          setStatus('Draw! Try again.');
          setTimeout(reset, 1200);
          return;
        }

        // Unlock BEFORE render so disabled state reflects correctly
        locked = false;
        render();
        setStatus('your turn');
      }, 450);
    });
  });
}

// ---- MATH QUIZ ----
function initMath(container) {
  let correct = 0, total = 0, answered = 0, answer = 0;
  const ROUNDS = 3, NEEDED = 2;

  const ops = [
    () => { const a = ri(15,60), b = ri(10,50); return { q: `${a} + ${b}`, a: a+b }; },
    () => { const a = ri(30,80), b = ri(5,30);  return { q: `${a} − ${b}`, a: a-b }; },
    () => { const a = ri(2,12),  b = ri(2,12);  return { q: `${a} × ${b}`, a: a*b }; },
  ];

  function ri(lo, hi) { return Math.floor(Math.random() * (hi - lo + 1)) + lo; }

  function newQ() {
    const o = ops[Math.floor(Math.random() * ops.length)]();
    answer = o.a;
    container.querySelector('.math-problem').textContent = `${o.q} = ?`;
    container.querySelector('.math-input').value = '';
    container.querySelector('.math-input').focus();
    container.querySelector('.math-feedback').textContent = '';
    container.querySelector('.math-feedback').className = 'math-feedback';
  }

  function updateDots() {
    const dots = container.querySelectorAll('.math-dot');
    dots.forEach((d, i) => {
      d.className = 'math-dot';
      if (i < answered) d.classList.add(i < correct ? 'correct' : 'wrong');
    });
  }

  container.innerHTML = `
    <div class="game-label">challenge · math quiz</div>
    <div class="game-title">Solve ${ROUNDS}, Win ${NEEDED}</div>
    <p class="game-desc">Get ${NEEDED} out of ${ROUNDS} correct to enter.</p>
    <div class="math-progress">
      ${Array(ROUNDS).fill(0).map(() => '<div class="math-dot"></div>').join('')}
    </div>
    <div class="math-problem">loading...</div>
    <div class="math-input-row">
      <div class="math-input-wrap">
        <input class="math-input" type="number" placeholder="?" autocomplete="off"/>
      </div>
      <button class="math-submit">→</button>
    </div>
    <div class="math-feedback"></div>
  `;

  newQ();

  function submit() {
    if (answered >= ROUNDS) return;
    const val = parseInt(container.querySelector('.math-input').value, 10);
    if (isNaN(val)) return;

    const fb = container.querySelector('.math-feedback');
    answered++;
    total++;

    if (val === answer) {
      correct++;
      fb.textContent = 'Correct! ✓';
      fb.className = 'math-feedback correct';
    } else {
      fb.textContent = `Not quite — answer was ${answer}`;
      fb.className = 'math-feedback wrong';
    }

    updateDots();

    if (answered === ROUNDS) {
      setTimeout(() => {
        if (correct >= NEEDED) {
          unlockPortfolio();
        } else {
          // Reset
          correct = 0; total = 0; answered = 0;
          updateDots();
          fb.textContent = `${correct}/${ROUNDS} — not enough. Try again!`;
          fb.className = 'math-feedback wrong';
          setTimeout(newQ, 1000);
        }
      }, 800);
    } else {
      setTimeout(newQ, 700);
    }
  }

  container.querySelector('.math-submit').addEventListener('click', submit);
  container.querySelector('.math-input').addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
}

// ================================================================
// INIT GATE
// ================================================================

function initGate() {
  // Check session
  if (sessionStorage.getItem('unlocked') === '1') {
    document.getElementById('gate').style.display = 'none';
    document.getElementById('portfolio').classList.add('visible');
    return;
  }

  const container = document.getElementById('game-container');

  // Add win overlay
  container.insertAdjacentHTML('afterend', `
    <div id="gate-win">
      <div style="font-size:3rem">🎉</div>
      <div class="win-text">you're in.</div>
      <div class="win-sub">welcome to the portfolio</div>
    </div>
  `);

  if (SELECTED_GAME === 'rps') initRPS(container);
  else if (SELECTED_GAME === 'tictactoe') initTTT(container);
  else initMath(container);
}

// ================================================================
// MINI GATE — per-project challenge
// ================================================================

function showMiniGate(projectId, projectName, onWin) {
  const modal = document.getElementById('mini-gate');
  const container = document.getElementById('mini-game-container');
  const titleEl = document.getElementById('mini-gate-title');
  if (!modal || !container) return;

  if (titleEl) titleEl.textContent = `unlock "${projectName}"`;
  modal.style.display = 'flex';

  const games = ['rps', 'math'];
  const game = games[Math.floor(Math.random() * games.length)];

  function close() {
    modal.style.display = 'none';
    container.innerHTML = '';
  }

  function win() {
    close();
    onWin();
  }

  const closeBtn = modal.querySelector('.mini-gate-close');
  const newCloseBtn = closeBtn.cloneNode(true);
  closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
  newCloseBtn.addEventListener('click', close);

  function backdropClose(e) { if (e.target === modal) { close(); modal.removeEventListener('click', backdropClose); } }
  modal.addEventListener('click', backdropClose);

  if (game === 'rps') initMiniRPS(container, win);
  else initMiniMath(container, win);
}

function initMiniRPS(container, onWin) {
  container.innerHTML = `
    <p class="mini-game-desc">Win one round of rock paper scissors.</p>
    <div class="mini-rps-grid">
      <button class="mini-rps-btn" data-choice="rock"><span>✊</span>rock</button>
      <button class="mini-rps-btn" data-choice="paper"><span>✋</span>paper</button>
      <button class="mini-rps-btn" data-choice="scissors"><span>✌️</span>scissors</button>
    </div>
    <div class="mini-result" id="mini-result"></div>
  `;

  container.querySelectorAll('.mini-rps-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choices = ['rock','paper','scissors'];
      const player = btn.dataset.choice;
      const ai = choices[Math.floor(Math.random()*3)];
      const result = document.getElementById('mini-result');
      if (player === ai) {
        result.textContent = `Tie — AI also picked ${ai}. Try again.`;
        result.className = 'mini-result tie';
      } else if ((player==='rock'&&ai==='scissors')||(player==='paper'&&ai==='rock')||(player==='scissors'&&ai==='paper')) {
        result.textContent = `You win! AI picked ${ai}. Unlocking…`;
        result.className = 'mini-result win';
        setTimeout(onWin, 700);
      } else {
        result.textContent = `AI picked ${ai} — you lose. Try again.`;
        result.className = 'mini-result lose';
      }
    });
  });
}

function initMiniMath(container, onWin) {
  function ri(lo,hi) { return Math.floor(Math.random()*(hi-lo+1))+lo; }
  const ops = [
    () => { const a=ri(10,60),b=ri(5,40); return {q:`${a} + ${b}`,a:a+b}; },
    () => { const a=ri(20,80),b=ri(5,30); return {q:`${a} − ${b}`,a:a-b}; },
    () => { const a=ri(2,9), b=ri(2,9);  return {q:`${a} × ${b}`,a:a*b}; },
  ];
  let current = ops[Math.floor(Math.random()*ops.length)]();

  container.innerHTML = `
    <p class="mini-game-desc">Solve the equation to unlock.</p>
    <div class="mini-math-problem" id="mini-math-q">${current.q} = ?</div>
    <div class="mini-math-row">
      <input class="mini-math-input" id="mini-math-in" type="number" placeholder="?" autocomplete="off"/>
      <button class="mini-math-submit" id="mini-math-btn">→</button>
    </div>
    <div class="mini-result" id="mini-result"></div>
  `;

  setTimeout(() => document.getElementById('mini-math-in')?.focus(), 50);

  function newQ() {
    current = ops[Math.floor(Math.random()*ops.length)]();
    const q = document.getElementById('mini-math-q');
    const inp = document.getElementById('mini-math-in');
    const res = document.getElementById('mini-result');
    if (q) q.textContent = `${current.q} = ?`;
    if (inp) inp.value = '';
    if (res) res.textContent = '';
    setTimeout(() => inp?.focus(), 50);
  }

  function submit() {
    const val = parseInt(document.getElementById('mini-math-in')?.value, 10);
    const result = document.getElementById('mini-result');
    if (isNaN(val) || !result) return;
    if (val === current.a) {
      result.textContent = 'Correct! ✓ Unlocking…';
      result.className = 'mini-result win';
      setTimeout(onWin, 700);
    } else {
      result.textContent = `Not quite — answer was ${current.a}. New question!`;
      result.className = 'mini-result lose';
      setTimeout(newQ, 1300);
    }
  }

  document.getElementById('mini-math-btn')?.addEventListener('click', submit);
  document.getElementById('mini-math-in')?.addEventListener('keydown', e => { if(e.key==='Enter') submit(); });
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
  const W = 340, H = 340;
  canvas.width = W; canvas.height = H;

  const PS = 250, PX = (W-PS)/2, PY = (H-PS)/2;
  const INIT = () => [
    {x:PX,y:PY},{x:PX+PS,y:PY},{x:PX+PS,y:PY+PS},{x:PX,y:PY+PS}
  ];

  let paper = INIT(), layers = [], creases = [], history = [];
  let foldMode = 'valley', pending = null, mouse = null, animating = false, foldCount = 0;

  const dot=(a,b)=>a.x*b.x+a.y*b.y;
  const sub=(a,b)=>({x:a.x-b.x,y:a.y-b.y});
  const add=(a,b)=>({x:a.x+b.x,y:a.y+b.y});
  const scl=(v,s)=>({x:v.x*s,y:v.y*s});
  const nrm=v=>{const l=Math.hypot(v.x,v.y)||1;return{x:v.x/l,y:v.y/l};};
  const prp=v=>({x:-v.y,y:v.x});
  const crs=(a,b,p)=>(b.x-a.x)*(p.y-a.y)-(b.y-a.y)*(p.x-a.x);

  function clipPoly(poly,lp1,lp2) {
    const near=[],far=[],n=poly.length;
    for(let i=0;i<n;i++){
      const c=poly[i],nx=poly[(i+1)%n];
      const sc=crs(lp1,lp2,c),sn=crs(lp1,lp2,nx);
      if(sc<=0) near.push({...c}); else far.push({...c});
      if((sc<0&&sn>0)||(sc>0&&sn<0)){
        const t=sc/(sc-sn);
        const ip={x:c.x+t*(nx.x-c.x),y:c.y+t*(nx.y-c.y)};
        near.push({...ip});far.push({...ip});
      }
    }
    return{near,far};
  }

  function reflectPt(v,lp1,lp2){
    const dir=nrm(sub(lp2,lp1)),d=sub(v,lp1),t=dot(d,dir),foot=add(lp1,scl(dir,t));
    return{x:2*foot.x-v.x,y:2*foot.y-v.y};
  }

  function foldPt(v,lp1,lp2,theta){
    const dir=nrm(sub(lp2,lp1)),pp=prp(dir),d=sub(v,lp1);
    const t=dot(d,dir),foot=add(lp1,scl(dir,t));
    const dPerp=dot(d,pp),dAbs=Math.abs(dPerp);
    return{
      x:foot.x+pp.x*dPerp*Math.cos(theta),
      y:foot.y+pp.y*dPerp*Math.cos(theta)-dAbs*Math.sin(theta)*0.3
    };
  }

  function drawPoly(verts,fill,stroke,lw=1.5){
    if(verts.length<2)return;
    ctx.beginPath();ctx.moveTo(verts[0].x,verts[0].y);
    for(let i=1;i<verts.length;i++)ctx.lineTo(verts[i].x,verts[i].y);
    ctx.closePath();
    if(fill){ctx.fillStyle=fill;ctx.fill();}
    if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();}
  }

  function render(anim){
    ctx.clearRect(0,0,W,H);
    ctx.save();ctx.strokeStyle='rgba(240,232,213,0.03)';ctx.lineWidth=0.5;
    for(let i=0;i<=8;i++){
      const x=PX+PS/8*i,y=PY+PS/8*i;
      ctx.beginPath();ctx.moveTo(x,PY);ctx.lineTo(x,PY+PS);ctx.stroke();
      ctx.beginPath();ctx.moveTo(PX,y);ctx.lineTo(PX+PS,y);ctx.stroke();
    }
    ctx.restore();
    drawPoly(paper,'rgba(240,232,213,0.07)','rgba(240,232,213,0.55)',1.8);
    layers.forEach((l)=>{
      drawPoly(l,'rgba(240,232,213,0.06)','rgba(240,232,213,0.45)',1.4);
      ctx.save();ctx.globalAlpha=0.1;
      ctx.shadowColor='rgba(0,0,0,1)';ctx.shadowBlur=8;ctx.shadowOffsetY=3;
      drawPoly(l,'rgba(0,0,0,1)',null);
      ctx.restore();
    });
    creases.forEach(c=>{
      ctx.save();ctx.beginPath();ctx.moveTo(c.p1.x,c.p1.y);ctx.lineTo(c.p2.x,c.p2.y);
      ctx.strokeStyle=c.type==='valley'?'rgba(96,165,212,0.65)':'rgba(224,85,85,0.65)';
      ctx.setLineDash(c.type==='valley'?[7,5]:[2,4]);ctx.lineWidth=1.3;ctx.stroke();ctx.restore();
    });
    if(anim){
      const av=anim.far.map(v=>foldPt(v,anim.p1,anim.p2,anim.theta));
      const a=0.45+0.25*Math.cos(anim.theta);
      drawPoly(av,`rgba(240,232,213,${a*0.18})`,`rgba(240,232,213,${a*0.72})`,1.6);
    }
    if(pending){
      ctx.save();
      ctx.beginPath();ctx.arc(pending.x,pending.y,5,0,Math.PI*2);
      ctx.fillStyle='rgba(245,196,48,0.9)';ctx.fill();
      ctx.beginPath();ctx.arc(pending.x,pending.y,9,0,Math.PI*2);
      ctx.strokeStyle='rgba(245,196,48,0.35)';ctx.lineWidth=1;ctx.stroke();
      if(mouse){
        ctx.beginPath();ctx.moveTo(pending.x,pending.y);ctx.lineTo(mouse.x,mouse.y);
        ctx.strokeStyle=foldMode==='valley'?'rgba(96,165,212,0.5)':'rgba(224,85,85,0.5)';
        ctx.lineWidth=1.5;ctx.setLineDash([8,6]);ctx.stroke();
      }
      ctx.restore();
    } else if(mouse){
      ctx.save();ctx.beginPath();ctx.arc(mouse.x,mouse.y,3,0,Math.PI*2);
      ctx.fillStyle='rgba(240,232,213,0.18)';ctx.fill();ctx.restore();
    }
  }

  function setHint(msg){const el=document.getElementById('sim-hint');if(el)el.textContent=msg;}
  function setCount(n){const el=document.getElementById('fold-count');if(el)el.textContent=n;}

  function performFold(lp1,lp2){
    const{near,far}=clipPoly(paper,lp1,lp2);
    if(near.length<3||far.length<3){setHint('Line must cross the paper edge to edge — try again');return;}
    const isCrease=foldMode==='crease';
    animating=true;setHint(isCrease?'Marking crease…':'Folding…');
    let f=0;const F=55;
    (function step(){
      const t=f/F,e=t<0.5?2*t*t:-1+(4-2*t)*t;
      render({theta:Math.PI*e*(isCrease?0.42:1),p1:lp1,p2:lp2,far});
      f++;
      if(f<=F)requestAnimationFrame(step);
      else{
        if(!isCrease){
          history.push({paper:paper.map(v=>({...v})),layers:layers.map(l=>l.map(v=>({...v}))),creases:[...creases],foldCount});
          paper=near;
          layers.push(far.map(v=>reflectPt(v,lp1,lp2)));
          foldCount++;setCount(foldCount);
        }
        creases.push({p1:lp1,p2:lp2,type:isCrease?'valley':foldMode});
        animating=false;render(null);
        setHint(isCrease?'Crease marked! Click two more points':'Nice fold! Click two more points to continue');
      }
    })();
  }

  function getPt(e){
    const r=canvas.getBoundingClientRect(),sx=W/r.width,sy=H/r.height;
    return{x:(e.clientX-r.left)*sx,y:(e.clientY-r.top)*sy};
  }

  canvas.addEventListener('click',e=>{
    if(animating)return;
    const pt=getPt(e);
    if(!pending){pending=pt;setHint('Now click a second point to complete the fold line');}
    else{const p1=pending;pending=null;mouse=null;performFold(p1,pt);}
  });
  canvas.addEventListener('mousemove',e=>{mouse=getPt(e);if(!animating)render(null);});
  canvas.addEventListener('mouseleave',()=>{mouse=null;if(!animating)render(null);});

  function setFoldMode(mode) {
    foldMode = mode;
    ['fold-valley','fold-mountain','fold-crease'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.toggle('active', id === 'fold-' + mode);
    });
  }
  document.getElementById('fold-valley')?.addEventListener('click', () => setFoldMode('valley'));
  document.getElementById('fold-mountain')?.addEventListener('click', () => setFoldMode('mountain'));
  document.getElementById('fold-crease')?.addEventListener('click', () => setFoldMode('crease'));
  document.getElementById('fold-reset')?.addEventListener('click',()=>{
    paper=INIT();layers=[];creases=[];history=[];pending=null;foldCount=0;setCount(0);
    render(null);setHint('Click two points on the paper to place a fold line');
  });
  document.getElementById('fold-undo')?.addEventListener('click',()=>{
    if(!history.length)return;
    const prev=history.pop();paper=prev.paper;layers=prev.layers;creases=prev.creases;foldCount=prev.foldCount;
    pending=null;setCount(foldCount);render(null);
  });

  render(null);
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
  document.querySelectorAll('.top-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.top-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.top-section').forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const sec = document.getElementById(tab.dataset.section);
      if (sec) sec.classList.add('active');
      window.scrollTo(0, 0);
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
    <div class="wordle-msg" id="w-msg"></div>
    <div class="wordle-board" id="w-board"></div>
    <div class="wordle-keyboard" id="w-kb"></div>
  </div>`;

  const board = document.getElementById('w-board');
  const kb    = document.getElementById('w-kb');
  const msg   = document.getElementById('w-msg');

  for (let r = 0; r < MAX; r++) {
    const row = document.createElement('div');
    row.className = 'wordle-row';
    for (let c = 0; c < LEN; c++) {
      const t = document.createElement('div');
      t.className = 'wordle-tile'; t.id = `wt-${r}-${c}`;
      row.appendChild(t);
    }
    board.appendChild(row);
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
    kb.appendChild(el);
  });

  function drawRow() {
    const r = guesses.length;
    for (let c = 0; c < LEN; c++) {
      const t = document.getElementById(`wt-${r}-${c}`);
      if (!t) continue;
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
      const t = document.getElementById(`wt-${r}-${c}`);
      if (!t) continue;
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
      if (currentGuess.length < LEN) { msg.textContent = 'Not enough letters'; return; }
      const g = currentGuess, res = score(g);
      guesses.push(g); reveal(guesses.length - 1, g, res);
      currentGuess = '';
      setTimeout(() => {
        if (g === TARGET) { gameOver = true; msg.textContent = ['Genius!','Magnificent!','Impressive!','Splendid!','Great!','Phew!'][guesses.length-1]||'Nice!'; }
        else if (guesses.length >= MAX) { gameOver = true; msg.textContent = `The word was ${TARGET}`; }
        else msg.textContent = '';
      }, LEN * 110 + 200);
      return;
    }
    if (/^[A-Z]$/.test(k) && currentGuess.length < LEN) { currentGuess += k; msg.textContent = ''; drawRow(); }
  }

  function onKey(e) {
    if (!document.getElementById('sec-games')?.classList.contains('active')) return;
    const k = e.key.toUpperCase();
    if (k === 'BACKSPACE') handleKey('⌫');
    else if (k === 'ENTER') handleKey('ENTER');
    else if (/^[A-Z]$/.test(k)) handleKey(k);
  }
  document.addEventListener('keydown', onKey);
  arena._cleanup = () => document.removeEventListener('keydown', onKey);
  drawRow();
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

function initConnections(arena) {
  const puzzle = CONN_PUZZLES[Math.floor(Date.now() / 86400000) % CONN_PUZZLES.length];
  let selected = [], solved = [], lives = 4;
  const allWords = puzzle.groups.flatMap(g => g.words).sort(() => Math.random() - 0.5);

  arena.innerHTML = `<div class="conn-wrap">
    <div class="conn-header">
      <div class="conn-lives">${Array(4).fill(0).map((_,i)=>`<span class="conn-life" id="cl-${i}"></span>`).join('')}</div>
      <div class="conn-msg" id="c-msg">Select 4 words that share a connection</div>
    </div>
    <div class="conn-board" id="c-board"></div>
    <button class="crane-btn primary conn-submit" id="c-submit" disabled>submit</button>
  </div>`;

  function solvedWords() { return solved.flatMap(g => g.words); }

  function renderBoard() {
    const b = document.getElementById('c-board'); if (!b) return;
    b.innerHTML = '';
    solved.forEach(g => {
      const d = document.createElement('div');
      d.className = 'conn-solved-group';
      d.style.borderColor = g.color; d.style.background = g.color + '18';
      d.innerHTML = `<span class="conn-group-name" style="color:${g.color}">${g.name}</span><div class="conn-solved-words">${g.words.join(' · ')}</div>`;
      b.appendChild(d);
    });
    const grid = document.createElement('div'); grid.className = 'conn-grid';
    allWords.filter(w => !solvedWords().includes(w)).forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'conn-word' + (selected.includes(w) ? ' selected' : '');
      btn.textContent = w;
      btn.addEventListener('click', () => {
        if (selected.includes(w)) selected = selected.filter(s => s !== w);
        else if (selected.length < 4) selected.push(w);
        document.getElementById('c-submit').disabled = selected.length !== 4;
        renderBoard();
      });
      grid.appendChild(btn);
    });
    b.appendChild(grid);
  }

  document.getElementById('c-submit')?.addEventListener('click', () => {
    const msgEl = document.getElementById('c-msg');
    const match = puzzle.groups.find(g => !solved.includes(g) && g.words.every(w => selected.includes(w)) && selected.every(w => g.words.includes(w)));
    if (match) {
      solved.push(match); selected = [];
      msgEl.textContent = solved.length === puzzle.groups.length ? '🎉 Solved them all!' : `✓ ${match.name}!`;
      document.getElementById('c-submit').disabled = true;
    } else {
      lives--;
      const oneAway = puzzle.groups.some(g => !solved.includes(g) && g.words.filter(w => selected.includes(w)).length === 3);
      msgEl.textContent = oneAway ? 'One away...' : 'Not quite!';
      document.querySelectorAll('.conn-life').forEach((l,i) => { l.className = 'conn-life' + (i >= lives ? ' lost' : ''); });
      if (lives <= 0) { msgEl.textContent = 'Game over!'; puzzle.groups.forEach(g => { if (!solved.includes(g)) solved.push(g); }); }
      selected = []; document.getElementById('c-submit').disabled = true;
    }
    renderBoard();
  });

  renderBoard();
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
    <div class="pinpoint-clues" id="pp-clues"></div>
    <div class="pinpoint-input-row">
      <input class="pinpoint-input" id="pp-in" type="text" placeholder="Type your guess…" autocomplete="off"/>
      <button class="crane-btn primary" id="pp-sub">Guess</button>
    </div>
    <div class="pinpoint-msg" id="pp-msg"></div>
    <button class="crane-btn" id="pp-rev" style="margin-top:0.5rem">Reveal next clue (${puzzle.clues.length - 1} left)</button>
  </div>`;

  function renderClues() {
    const el = document.getElementById('pp-clues'); if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < revealed; i++) {
      const d = document.createElement('div');
      d.className = 'pinpoint-clue' + (i === revealed-1 ? ' new' : '');
      d.textContent = puzzle.clues[i]; el.appendChild(d);
    }
  }

  function check() {
    if (guessed) return;
    const val = document.getElementById('pp-in')?.value.trim().toUpperCase();
    const msg = document.getElementById('pp-msg');
    if (!val) return;
    if (val === puzzle.category.toUpperCase()) {
      guessed = true;
      msg.textContent = `✓ "${puzzle.category}" — ${revealed} clue${revealed>1?'s':''}!`;
      msg.className = 'pinpoint-msg win';
    } else {
      msg.textContent = 'Nope — try again or reveal another clue';
      msg.className = 'pinpoint-msg lose';
    }
    document.getElementById('pp-in').value = '';
  }

  document.getElementById('pp-sub')?.addEventListener('click', check);
  document.getElementById('pp-in')?.addEventListener('keydown', e => { if (e.key==='Enter') check(); });
  document.getElementById('pp-rev')?.addEventListener('click', () => {
    if (revealed < puzzle.clues.length) {
      revealed++;
      renderClues();
      const btn = document.getElementById('pp-rev');
      const left = puzzle.clues.length - revealed;
      if (btn) btn.textContent = left ? `Reveal next clue (${left} left)` : 'All clues revealed';
      if (!left && btn) btn.disabled = true;
    }
  });

  renderClues();
  setTimeout(() => document.getElementById('pp-in')?.focus(), 50);
}

// ---- Queens ----
function initQueens(arena) {
  const N = 6;
  const REGIONS = [
    [0,0,0,1,1,1],[0,0,0,1,1,1],[0,2,2,2,1,1],
    [3,2,2,2,4,4],[3,3,2,4,4,4],[3,3,5,5,4,4],
  ];
  const COLORS = ['#60a5d4','#7ab87a','#e05555','#f5c430','#c08fff','#f0984e'];
  const NAMES  = ['Blue','Green','Red','Yellow','Purple','Orange'];
  let grid = Array.from({length:N}, () => Array(N).fill(0));

  arena.innerHTML = `<div class="queens-wrap">
    <div class="queens-header">
      <div class="queens-eyebrow">Place one ♛ in each color region</div>
      <div class="queens-rules">No two queens can touch — not even diagonally.</div>
    </div>
    <div class="queens-grid" id="q-grid"></div>
    <div class="queens-msg" id="q-msg"></div>
    <button class="crane-btn" id="q-reset">↺ reset</button>
    <div class="queens-legend">${NAMES.map((n,i)=>`<span class="queens-legend-item"><span style="background:${COLORS[i]};display:inline-block;width:10px;height:10px;border-radius:2px"></span> ${n}</span>`).join('')}</div>
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
    const g = document.getElementById('q-grid'); if (!g) return;
    g.innerHTML = ''; g.style.gridTemplateColumns = `repeat(${N},1fr)`;
    for (let r=0;r<N;r++) for (let c=0;c<N;c++) {
      const cell = document.createElement('div');
      cell.className = 'queens-cell';
      const reg = REGIONS[r][c];
      cell.style.background = COLORS[reg] + '22';
      cell.style.borderColor = COLORS[reg] + '88';
      if (grid[r][c]===1) cell.textContent = '♛';
      else if (grid[r][c]===-1) cell.textContent = '·';
      cell.addEventListener('click', () => {
        grid[r][c] = grid[r][c]===0 ? 1 : grid[r][c]===1 ? -1 : 0;
        const res = validate(); const msg = document.getElementById('q-msg');
        if (msg) {
          if (res===true) { msg.textContent='♛ All queens placed correctly!'; msg.className='queens-msg win'; }
          else if (res===false) { msg.textContent='✗ Conflict detected'; msg.className='queens-msg lose'; }
          else { msg.textContent=''; msg.className='queens-msg'; }
        }
        renderGrid();
      });
      g.appendChild(cell);
    }
  }

  document.getElementById('q-reset')?.addEventListener('click', () => {
    grid = Array.from({length:N}, ()=>Array(N).fill(0));
    const msg = document.getElementById('q-msg'); if (msg) { msg.textContent=''; msg.className='queens-msg'; }
    renderGrid();
  });

  renderGrid();
}

// ---- Math Lab ----
function initMathLab(arena) {
  let level = 0, score = 0;
  function ri(lo,hi){return Math.floor(Math.random()*(hi-lo+1))+lo;}
  const fact=n=>n<=1?1:n*fact(n-1);

  const LEVELS = [
    {name:'Addition',      gen:()=>{const a=ri(5,99),b=ri(5,99);return{q:`${a} + ${b}`,a:a+b};}},
    {name:'Subtraction',   gen:()=>{const a=ri(50,200),b=ri(10,50);return{q:`${a} − ${b}`,a:a-b};}},
    {name:'Multiplication',gen:()=>{const a=ri(2,15),b=ri(2,15);return{q:`${a} × ${b}`,a:a*b};}},
    {name:'Division',      gen:()=>{const b=ri(2,12),a=b*ri(2,10);return{q:`${a} ÷ ${b}`,a:a/b};}},
    {name:'Exponents',     gen:()=>{const b=ri(2,9),e=ri(2,4);return{q:`${b}^${e}`,a:Math.pow(b,e)};}},
    {name:'Modulo',        gen:()=>{const a=ri(20,99),b=ri(3,12);return{q:`${a} mod ${b}`,a:a%b};}},
    {name:'Square Roots',  gen:()=>{const ns=[4,9,16,25,36,49,64,81,100,121,144];const n=ns[ri(0,ns.length-1)];return{q:`√${n}`,a:Math.round(Math.sqrt(n))};}},
    {name:'Derivatives',   gen:()=>{const qs=[{q:'d/dx[x²] at x=3',a:6},{q:'d/dx[3x²+4x] at x=1',a:10},{q:'d/dx[x³] at x=2',a:12},{q:'d/dx[2x³] at x=2',a:24}];return qs[ri(0,qs.length-1)];}},
  ];

  let current = null;

  arena.innerHTML = `<div class="mathlab-wrap">
    <div class="mathlab-levels" id="ml-lvls"></div>
    <div class="mathlab-level-name" id="ml-name"></div>
    <div class="mathlab-question" id="ml-q"></div>
    <div class="mathlab-input-row">
      <input class="mathlab-input" id="ml-in" type="number" placeholder="?" autocomplete="off"/>
      <button class="crane-btn primary" id="ml-sub">→</button>
    </div>
    <div class="mathlab-feedback" id="ml-fb"></div>
    <div class="mathlab-score">score: <span id="ml-sc">0</span></div>
  </div>`;

  function renderLevels() {
    const el = document.getElementById('ml-lvls'); if (!el) return;
    el.innerHTML = LEVELS.map((l,i) => `<div class="mathlab-level-pip ${i<level?'done':i===level?'active':''}">${i+1}</div>`).join('');
  }

  function newQ() {
    current = LEVELS[level].gen();
    const q=document.getElementById('ml-q'), n=document.getElementById('ml-name'), fb=document.getElementById('ml-fb'), inp=document.getElementById('ml-in');
    if (q) q.textContent = current.q + ' = ?';
    if (n) n.textContent = `Level ${level+1} · ${LEVELS[level].name}`;
    if (fb) { fb.textContent=''; fb.className='mathlab-feedback'; }
    if (inp) { inp.value=''; setTimeout(()=>inp.focus(),50); }
  }

  function submit() {
    const val = parseFloat(document.getElementById('ml-in')?.value);
    const fb = document.getElementById('ml-fb');
    if (isNaN(val)||!fb) return;
    if (Math.abs(val - current.a) < 0.01) {
      score++; document.getElementById('ml-sc').textContent = score;
      fb.textContent = '✓ Correct!'; fb.className = 'mathlab-feedback win';
      if (level < LEVELS.length - 1) { level++; renderLevels(); setTimeout(newQ, 700); }
      else { fb.textContent = `🏆 All 8 levels complete! Score: ${score}`; }
    } else {
      fb.textContent = `✗ Answer was ${current.a}`; fb.className = 'mathlab-feedback lose';
      setTimeout(newQ, 1100);
    }
  }

  document.getElementById('ml-sub')?.addEventListener('click', submit);
  document.getElementById('ml-in')?.addEventListener('keydown', e => { if(e.key==='Enter') submit(); });

  renderLevels(); newQ();
}

function initGamesHub() {
  const arena = document.getElementById('games-arena');
  if (!arena) return;

  const INIT_MAP = { wordle:initWordle, connections:initConnections, pinpoint:initPinpoint, queens:initQueens, mathlab:initMathLab };
  let current = 'wordle';

  INIT_MAP[current](arena);

  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      const g = card.dataset.game;
      if (g === current) return;
      current = g;
      document.querySelectorAll('.game-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      if (typeof arena._cleanup === 'function') { arena._cleanup(); arena._cleanup = null; }
      arena.innerHTML = '';
      INIT_MAP[g](arena);
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

  initScene();
  initFaller();
  initCursor();
  initOrigami();
});
