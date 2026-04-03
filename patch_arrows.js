const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Declare globally (or update if already exists)
code = code.replace(/let satObjects = \[\];\s*let wfMeshes = \[\];/, 'let satObjects = [];\n  let wfMeshes = [];\n  let wfArrows = [];');

// 2. Clear inside clearSatellites()
code = code.replace(/satObjects = \[\]; wfMeshes = \[\];/g, 'satObjects = []; wfMeshes = []; wfArrows = [];');

// 3. Track arrows
const arrowCreation = /group\.add\(arrow\); satObjects\.push\(arrow\);\s*\}\);/g;
code = code.replace(arrowCreation, `group.add(arrow); satObjects.push(arrow);
      wfArrows.push({ arrow, fromId, toId });
    });`);

// 4. Update arrows in animate() loop
const afterWfMeshes = /if \(al\) \{\s*const posAttr = al\.geometry\.attributes\.position;\s*posAttr\.setXYZ\(0, nd\.x, nd\.y, nd\.z\);\s*posAttr\.setXYZ\(1, px, py, pz\);\s*posAttr\.needsUpdate = true;\s*\}\s*\}\);\s*/g;

// Instead of matching that complex block, I will just match `    // Hover transitions` which comes right AFTER the orbital planets loop.
// Let's verify `Hover transitions` exists:
code = code.replace(/\/\/ Hover transitions/g, `
    // Update Arrow positions and directions
    if (typeof wfArrows !== 'undefined' && wfArrows.length) {
      wfArrows.forEach(link => {
        const fromW = wfMeshes.find(w => w.wn.id === link.fromId);
        const toW = wfMeshes.find(w => w.wn.id === link.toId);
        if (!fromW || !toW) return;
        const fP = fromW.mesh.position;
        const tP = toW.mesh.position;
        const dir = new THREE.Vector3().subVectors(tP, fP);
        const dist = dir.length();
        if (dist < 4) { link.arrow.visible = false; return; }
        link.arrow.visible = true;
        dir.normalize();
        const arrowLen = dist - 9 - 12;
        if (arrowLen <= 4) { link.arrow.visible = false; return; }
        const origin = fP.clone().add(dir.clone().multiplyScalar(9));
        link.arrow.position.copy(origin);
        link.arrow.setDirection(dir);
        const headLen = Math.min(9, arrowLen * 0.22);
        link.arrow.setLength(arrowLen, headLen, headLen * 0.55);
      });
    }
    
    // Hover transitions`);

fs.writeFileSync('script.js', code);
console.log('Arrow animation tracking implemented.');
