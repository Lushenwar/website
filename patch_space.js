const fs = require('fs');
let text = fs.readFileSync('script.js', 'utf8');

text = text.replace(/let targetCamZ = 500;/g, 'let targetCamZ = 900;');
text = text.replace(/const R = 180;/g, 'const R = 320;');
text = text.replace(/const K_REPEL\s*=\s*1600;/g, 'const K_REPEL   = 5500;');
text = text.replace(/if \(d > 130\) return;/g, 'if (d > 240) return;');

text = text.replace(
  /targetCamZ = Math\.max\(200, Math\.min\(800, targetCamZ \+ e\.deltaY \* 0\.5\)\);/g,
  'targetCamZ = Math.max(250, Math.min(1800, targetCamZ + e.deltaY * 0.5));'
);

text = text.replace(
  /canvas\.addEventListener\('wheel',\s*e\s*=>\s*\{/g,
  'canvas.addEventListener(\'wheel\', e => {'
);
// In case they didn't have passive false:
text = text.replace(
  /targetCamZ = Math\.max\(250, Math\.min\(1800, targetCamZ \+ e\.deltaY \* 0\.5\)\);\s*\}\);/g,
  'targetCamZ = Math.max(250, Math.min(1800, targetCamZ + e.deltaY * 0.5));\n  }, { passive: false });'
);

fs.writeFileSync('script.js', text);
console.log('Spaced out nodes and bound zooming fixed!');
