const fs = require('fs');

// 1. Fix script.js initCursor
let scriptCode = fs.readFileSync('script.js', 'utf8');
const oldCursorFunction = `function initCursor() {
  const ring = document.getElementById('cursor');
  if (!ring) return;
  let cx = 0, cy = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
  (function loop() {
    requestAnimationFrame(loop);
    rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12;
    ring.style.left = \`\${rx}px\`; ring.style.top = \`\${ry}px\`;
  })();
}`;

const newCursorFunction = `function initCursor() {
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
    // Use an massive z-index to stay above ALL overlays
    ring.style.zIndex = '999999';
    ring.style.pointerEvents = 'none';
  })();
}`;

scriptCode = scriptCode.replace(oldCursorFunction, newCursorFunction);
fs.writeFileSync('script.js', scriptCode);

// 2. Fix style.css for Connect 4 and global cursor
let styleCode = fs.readFileSync('style.css', 'utf8');

// Ensure all interactive game elements have cursor: none to stop system cursor popping up
styleCode += `
/* Force custom cursor across all game elements */
.mini-gate *, .c4-wrap *, .ttt-wrap *, .math-wrap *, #gate * {
  cursor: none !important;
}
#cursor {
  z-index: 999999 !important;
}
`;

fs.writeFileSync('style.css', styleCode);

console.log('Cursor fixes applied.');
