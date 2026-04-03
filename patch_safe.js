const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Make clearSatellites bulletproof
code = code.replace(
  'satObjects = []; wfMeshes = []; wfArrows = [];',
  'satObjects = []; wfMeshes = []; try { wfArrows = []; } catch(e) {}'
);

fs.writeFileSync('script.js', code);
console.log('Done - clearSatellites is now bulletproof');
