const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

const anchorReplacement = /\} \/\/\s*if \(al\).*?\}\);\s*\}\s*\/\/ ── Burst ring animation/gs;

code = code.replace(
  /\}\s*\}\);\s*\}\s*\/\/ ── Burst ring animation/,
  `}
      });
      
      // Update Arrow positions and directions dynamically
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
    }

    // ── Burst ring animation`
);

fs.writeFileSync('script.js', code);
console.log('Arrow animation successfully bound.');
