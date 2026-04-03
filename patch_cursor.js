const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const oldCursor = `  document.addEventListener('mousemove', e => { cx = e.clientX; cy = e.clientY; });
  (function loop() {
    requestAnimationFrame(loop);
    rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12;
    ring.style.left = \`\${rx}px\`; ring.style.top = \`\${ry}px\`;
  })();`;

const newCursor = `  let moved = false;
  document.addEventListener('mousemove', e => {
    cx = e.clientX;
    cy = e.clientY;
    if (!moved) { rx = cx; ry = cy; moved = true; }
    ring.style.opacity = '1';
    ring.style.display = 'block';
  });
  (function loop() {
    requestAnimationFrame(loop);
    rx += (cx - rx) * 0.12;
    ry += (cy - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    ring.style.zIndex = '99999';
  })();`;

code = code.replace(oldCursor, newCursor);
fs.writeFileSync('script.js', code);
console.log('Cursor always-on-top patched.');
