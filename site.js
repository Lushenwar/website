document.querySelectorAll('.more').forEach(b => b.onclick = () => {
  const open = b.parentElement.classList.toggle('open');
  b.setAttribute('aria-expanded', open);
  b.textContent = open ? 'read less' : 'read more';
});

const tick = () => document.querySelectorAll('[data-tz]').forEach(el =>
  el.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: el.dataset.tz, hour: '2-digit', minute: '2-digit' }));
tick(); setInterval(tick, 10000);

// dot grid: a glow centred on the cursor that trails behind it and fades out slowly when the mouse stops
const cv = document.getElementById('bg'), ctx = cv.getContext('2d'), GAP = 22, R = 110;
let tx = -999, ty = -999, mx = -999, my = -999, glow = 0, last = -1e9, running = false;
const frame = now => {
  const dpr = devicePixelRatio || 1, w = innerWidth, h = innerHeight;
  if (cv.width !== Math.round(w * dpr) || cv.height !== Math.round(h * dpr)) { cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); }
  mx = tx; my = ty;
  glow = now - last < 120 ? Math.min(1, glow + .08) : glow * .965;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = getComputedStyle(document.body).color;
  for (let x = GAP / 2; x < w; x += GAP) for (let y = GAP / 2; y < h; y += GAP) {
    const d = Math.hypot(x - mx, y - my), k = d < R ? (1 - d / R) ** 2 * glow : 0;
    ctx.globalAlpha = .1 + .5 * k;
    ctx.beginPath(); ctx.arc(x, y, .9 + 1.1 * k, 0, 7); ctx.fill();
  }
  running = glow > .005 || Math.abs(tx - mx) + Math.abs(ty - my) > .5;
  if (running) requestAnimationFrame(frame);
};
const kick = () => { if (!running) { running = true; requestAnimationFrame(frame); } };
addEventListener('resize', kick);
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', kick);
if (!matchMedia('(prefers-reduced-motion: reduce)').matches)
  addEventListener('pointermove', e => {
    if (mx < -900) { mx = e.clientX; my = e.clientY; } // first move: start on the cursor, don't fly in
    tx = e.clientX; ty = e.clientY; last = performance.now(); kick();
  });
kick();

// ponytail: static screenshots, live iframes get blocked by most sites' X-Frame-Options
const pv = document.getElementById('pv');
if (pv && matchMedia('(hover: hover)').matches) document.querySelectorAll('[data-preview]').forEach(a => {
  const t = a.closest('.card') || a, img = pv.firstChild;
  t.onmouseenter = () => { img.src = a.dataset.preview; pv.classList.add('on'); };
  t.onmouseleave = () => pv.classList.remove('on');
  t.onmousemove = e => {
    const x = Math.min(e.clientX + 20, innerWidth - pv.offsetWidth - 12);
    const y = e.clientY + 24 + pv.offsetHeight > innerHeight ? e.clientY - pv.offsetHeight - 16 : e.clientY + 24;
    pv.style.left = x + 'px'; pv.style.top = y + 'px';
  };
});
