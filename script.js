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
  },
];

// ================================================================
// RENDER PROJECTS
// ================================================================

function renderProjects() {
  const list = document.getElementById('projects-list');

  PROJECTS.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.setProperty('--accent', p.color);
    card.style.transitionDelay = `${i * 0.05}s`;
    card.setAttribute('aria-expanded', 'false');

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

    card.addEventListener('click', () => toggleCard(card));
    list.appendChild(card);
  });
}

function toggleCard(card) {
  const isOpen = card.classList.toggle('open');
  card.setAttribute('aria-expanded', String(isOpen));
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
// ORIGAMI SECTION
// ================================================================

function initOrigami() {
  // ---- Fortune Teller ----
  const FORTUNES = [
    "Your next commit message will be: 'fix stuff'. It will ship to prod.",
    "The bug you've been hunting for 6 hours is a missing semicolon. On line 1.",
    "A hackathon awaits. You'll build something incredible and demo it at 3am.",
    "Stack Overflow will fail you. Copilot will fail you. You'll solve it yourself.",
    "Three monitors await you in your future. You deserve all of them.",
    "Your side project goes viral — in a Discord server of 12 people. Still counts.",
    "rm -rf lurks in your near future. Back up your work. Now.",
    "A senior engineer will say 'that's actually clever'. Savor it. It happens once.",
  ];

  const sections = document.querySelectorAll('.fortune-section');
  const popup    = document.getElementById('fortune-popup');
  if (!sections.length || !popup) return;

  const popupText = popup.querySelector('.fortune-popup-text');
  const closeBtn  = popup.querySelector('.fortune-close');

  let shownIdx = -1;
  sections.forEach(section => {
    section.addEventListener('click', e => {
      e.stopPropagation();
      const idx = +section.dataset.idx;
      // Pick a fortune based on section + some randomness
      const fortune = FORTUNES[(idx * 2 + Math.floor(Math.random() * 2)) % FORTUNES.length];
      popupText.textContent = fortune;
      popup.style.display = 'block';
      shownIdx = idx;
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => { popup.style.display = 'none'; });
  popup.addEventListener('click', e => { if (e.target === popup) popup.style.display = 'none'; });

  // ---- Paper Crane Steps ----
  const CRANE_STEPS = [
    {
      desc: "Start with a square sheet of paper, colored side facing down.",
      svg: `<rect x="30" y="30" width="140" height="140" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)" stroke-linejoin="round"/>
            <text x="100" y="108" text-anchor="middle" font-family="Caveat,cursive" font-size="14" fill="var(--ink-muted)">colored side down</text>`
    },
    {
      desc: "Fold in half diagonally, corner to corner. Crease sharply, then unfold.",
      svg: `<polygon points="30,170 170,170 170,30" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)"/>
            <line x1="30" y1="30" x2="170" y2="170" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="6 5" opacity="0.7"/>
            <path d="M 36 36 L 40 30 L 46 34" stroke="var(--pencil)" stroke-width="1.5" fill="none" stroke-linecap="round"/>`
    },
    {
      desc: "Repeat on the other diagonal — fold, crease, unfold. Now fold in half horizontally and vertically.",
      svg: `<rect x="30" y="30" width="140" height="140" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)"/>
            <line x1="30" y1="30" x2="170" y2="170" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.5"/>
            <line x1="170" y1="30" x2="30" y2="170" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.5"/>
            <line x1="100" y1="30" x2="100" y2="170" stroke="var(--cobalt)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.6"/>
            <line x1="30" y1="100" x2="170" y2="100" stroke="var(--cobalt)" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.6"/>`
    },
    {
      desc: "Collapse all creases inward to make a small diamond — the 'preliminary base'.",
      svg: `<polygon points="100,25 175,100 100,175 25,100" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)"/>
            <line x1="100" y1="25" x2="100" y2="175" stroke="var(--ink-muted)" stroke-width="1" opacity="0.4"/>
            <line x1="25" y1="100" x2="175" y2="100" stroke="var(--ink-muted)" stroke-width="1" opacity="0.4"/>
            <text x="100" y="105" text-anchor="middle" font-family="Caveat,cursive" font-size="13" fill="var(--ink-muted)">preliminary base</text>`
    },
    {
      desc: "Fold the left and right edges of the front flap to the center line. Repeat on back.",
      svg: `<polygon points="100,30 160,100 100,170 40,100" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)"/>
            <line x1="40" y1="100" x2="100" y2="170" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.7"/>
            <line x1="160" y1="100" x2="100" y2="170" stroke="var(--pencil)" stroke-width="1.5" stroke-dasharray="4 5" opacity="0.7"/>
            <polygon points="100,170 68,100 100,50 132,100" stroke="var(--sage)" stroke-width="1.5" fill="rgba(122,184,122,0.06)"/>
            <path d="M 86 78 L 100 50 L 114 78" stroke="var(--sage)" stroke-width="1.5" fill="none"/>`
    },
    {
      desc: "Fold the top triangular flap down. Repeat on back. This makes the 'bird base'.",
      svg: `<polygon points="100,155 55,100 100,30 145,100" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)"/>
            <line x1="100" y1="155" x2="100" y2="30" stroke="var(--ink-muted)" stroke-width="1" opacity="0.3"/>
            <path d="M 55 100 C 42 88, 30 78, 22 70" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <path d="M 145 100 C 158 88, 170 78, 178 70" stroke="var(--ink)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <text x="100" y="190" text-anchor="middle" font-family="Caveat,cursive" font-size="13" fill="var(--ink-muted)">bird base</text>`
    },
    {
      desc: "Inside reverse fold the two narrow points upward to form the head and tail.",
      svg: `<path d="M 100 40 L 65 120 L 100 160 L 135 120 Z" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.04)"/>
            <path d="M 65 120 C 50 105, 30 88, 18 72" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
            <path d="M 135 120 C 150 105, 170 88, 182 72" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
            <path d="M 12 66 C 16 70, 20 70, 24 66" stroke="var(--pencil)" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <path d="M 176 66 C 180 70, 184 70, 188 66" stroke="var(--pencil)" stroke-width="1.5" fill="none" stroke-linecap="round"/>`
    },
    {
      desc: "Gently pull the wings apart. Blow into the body to puff it up. ✨ Your crane is done!",
      svg: `<ellipse cx="100" cy="120" rx="28" ry="18" stroke="var(--ink)" stroke-width="2.2" fill="rgba(240,232,213,0.06)"/>
            <path d="M 72 112 C 50 96, 28 80, 12 62" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
            <path d="M 128 112 C 150 96, 172 80, 188 62" stroke="var(--ink)" stroke-width="2.8" stroke-linecap="round" fill="none"/>
            <path d="M 92 103 C 88 85, 82 66, 77 50" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
            <ellipse cx="76" cy="46" rx="8" ry="6" stroke="var(--ink)" stroke-width="1.8" fill="rgba(240,232,213,0.05)"/>
            <path d="M 108 103 C 112 85, 118 66, 123 50" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round" fill="none"/>
            <path d="M 68 56 L 76 44" stroke="var(--ink)" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="64" cy="52" r="2" fill="var(--pencil)" opacity="0.8"/>
            <path d="M 8 58 L 14 48 M 192 58 L 186 48" stroke="var(--pencil)" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>`
    },
  ];

  const stepNumEl   = document.getElementById('crane-step-num');
  const stepTotalEl = document.getElementById('crane-step-total');
  const stepDescEl  = document.getElementById('crane-step-desc');
  const stepSvgEl   = document.getElementById('crane-step-svg');
  const prevBtn     = document.getElementById('crane-prev');
  const nextBtn     = document.getElementById('crane-next');

  if (!stepNumEl) return;

  let currentStep = 0;
  const total = CRANE_STEPS.length;
  if (stepTotalEl) stepTotalEl.textContent = total;

  function renderCraneStep() {
    const step = CRANE_STEPS[currentStep];
    if (stepNumEl)   stepNumEl.textContent   = currentStep + 1;
    if (stepDescEl)  stepDescEl.textContent  = step.desc;
    if (stepSvgEl)   stepSvgEl.innerHTML     = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">${step.svg}</svg>`;
    if (prevBtn) prevBtn.disabled = currentStep === 0;
    if (nextBtn) {
      nextBtn.disabled    = currentStep === total - 1;
      nextBtn.textContent = currentStep === total - 1 ? 'done ✓' : 'next →';
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { if (currentStep > 0) { currentStep--; renderCraneStep(); } });
  if (nextBtn) nextBtn.addEventListener('click', () => { if (currentStep < total - 1) { currentStep++; renderCraneStep(); } });

  renderCraneStep();
}

// ================================================================
// INIT ALL
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  initGate();
  renderProjects();

  // Delay reveal observer until cards are in DOM
  requestAnimationFrame(() => requestAnimationFrame(initCardReveal));

  initScene();
  initFaller();
  initCursor();
  initOrigami();
});
