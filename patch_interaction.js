const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Expand graph nodes further
code = code.replace(/let targetCamZ = 900;/g, 'let targetCamZ = 1200;');
code = code.replace(/const R = 320;/g, 'const R = 420;');
code = code.replace(/const K_REPEL\s*=\s*5500;/g, 'const K_REPEL   = 11000;');
code = code.replace(/if \(d > 240\) return;/g, 'if (d > 350) return;');

// 2. Faster zoom
code = code.replace(
  /targetCamZ = Math\.max\(250, Math\.min\(1800, targetCamZ \+ e\.deltaY \* 0\.5\)\);/g,
  'targetCamZ = Math.max(300, Math.min(2600, targetCamZ + e.deltaY * 1.5));'
);

// 3. Slower perspective change (mouse)
code = code.replace(/rotY \+= \(e\.clientX - lastX\) \* 0\.008;/g, 'rotY += (e.clientX - lastX) * 0.003;');
code = code.replace(/rotX \+= \(e\.clientY - lastY\) \* 0\.008;/g, 'rotX += (e.clientY - lastY) * 0.003;');

// 4. Slower perspective change (touch)
code = code.replace(/rotY \+= \(e\.touches\[0\]\.clientX - lastTouch\.clientX\) \* 0\.01;/g, 'rotY += (e.touches[0].clientX - lastTouch.clientX) * 0.004;');
code = code.replace(/rotX \+= \(e\.touches\[0\]\.clientY - lastTouch\.clientY\) \* 0\.01;/g, 'rotX += (e.touches[0].clientY - lastTouch.clientY) * 0.004;');

// 5. Prevent node close on drag holding
// We will introduce `hasDragged = false;` in the block initializing dragging
code = code.replace(
  /let isDragging = false, lastX = 0, lastY = 0;/g,
  'let isDragging = false, lastX = 0, lastY = 0, hasDragged = false;'
);

code = code.replace(
  /canvas\.addEventListener\('mousedown', e => \{/,
  'canvas.addEventListener(\'mousedown\', e => {\n    hasDragged = false;'
);

code = code.replace(
  /if \(isDragging\) \{[\s\n]*rotY \+=/g,
  `if (isDragging) {
      if (Math.abs(e.clientX - lastX) > 2 || Math.abs(e.clientY - lastY) > 2) hasDragged = true;
      rotY +=`
);

// touchstart and touchmove drag prevention just in case
code = code.replace(
  /canvas\.addEventListener\('touchstart', e => \{ lastTouch = e\.touches\[0\]; autoRot = false; \}, \{ passive: true \}\);/,
  'canvas.addEventListener(\'touchstart\', e => { lastTouch = e.touches[0]; autoRot = false; hasDragged = false; }, { passive: true });'
);
code = code.replace(
  /rotY \+= \(e\.touches\[0\]\.clientX - lastTouch\.clientX\) \* 0\.004;/g,
  'if (Math.abs(e.touches[0].clientX - lastTouch.clientX) > 2 || Math.abs(e.touches[0].clientY - lastTouch.clientY) > 2) hasDragged = true;\n    rotY += (e.touches[0].clientX - lastTouch.clientX) * 0.004;'
);

// Finally check inside click
code = code.replace(
  /canvas\.addEventListener\('click', e => \{/g,
  'canvas.addEventListener(\'click\', e => {\n    if (hasDragged) { hasDragged = false; return; }'
);

fs.writeFileSync('script.js', code);
console.log('Fixed interactions and logic!');
