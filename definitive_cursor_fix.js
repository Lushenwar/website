const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const newFunc = `function initCursor() {
  const ring = document.getElementById('cursor');
  if (!ring) return;
  let cx = 0, cy = 0, rx = 0, ry = 0;
  let moved = false;
  document.addEventListener('mousemove', e => {
    cx = e.clientX;
    cy = e.clientY;
    if (!moved) { rx = cx; ry = cy; moved = true; }
    ring.style.opacity = '1';
    ring.style.display = 'block';
  }, { passive: true });

  (function loop() {
    requestAnimationFrame(loop);
    rx += (cx - rx) * 0.18;
    ry += (cy - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    // Stay at absolute top of the stack (above overlays)
    ring.style.zIndex = '999999';
    ring.style.pointerEvents = 'none';
  })();
}`;

// Robust find/replace for initCursor
const startMarker = 'function initCursor() {';
const nextBlock = '// ================================================================';
const startIdx = code.indexOf(startMarker);
const endIdx = code.indexOf(nextBlock, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    code = code.slice(0, startIdx) + newFunc + '\n\n' + code.slice(endIdx);
    fs.writeFileSync('script.js', code);
    console.log('Successfully updated script.js');
} else {
    console.log('Markers not found');
}

// 2. Fix style.css
let styleCode = fs.readFileSync('style.css', 'utf8');

// Global cursor improvements and game overrides
const cExtra = `
/* GLOBAL CUSTOM CURSOR FORCED ON TOP */
#cursor {
  z-index: 999999 !important;
  pointer-events: none !important;
}
/* Ensure system cursor is hidden even over buttons on the gate screen */
.mini-gate *, #gate *, .c4-wrap *, .ttt-wrap *, .rps-grid *, .math-wrap * {
  cursor: none !important;
}
@media (max-width: 580px) {
  #cursor { display: block !important; opacity: 1 !important; }
}
`;
if (!styleCode.includes('GLOBAL CUSTOM CURSOR FORCED ON TOP')) {
    fs.writeFileSync('style.css', styleCode + cExtra);
    console.log('Successfully updated style.css');
}
