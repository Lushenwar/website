const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// 1. Expand graph volume further
code = code.replace(/let targetCamZ = 1200;/g, 'let targetCamZ = 2000;'); // Default even further out
code = code.replace(/const R = 420;/g, 'const R = 800;'); // Massive radius
code = code.replace(/const K_REPEL   = 11000;/g, 'const K_REPEL   = 35000;'); // Stronger repulsion
code = code.replace(/if \(d > 350\) return;/g, 'if (d > 600) return;');

// 2. Adjust click focus logic
const showInfoRegex = /if \(idx < 0\) \{\s*clearSatellites\(\);\s*targetCamZ = 500;\s*focusNode = false;([\s\S]*?)targetCamZ = 270;\s*const nd = nodeData\[idx\];\s*const dist = Math\.sqrt\(nd\.x \* nd\.x \+ nd\.z \* nd\.z\);\s*targetRotY = -Math\.atan2\(nd\.x, nd\.z\);\s*targetRotX = Math\.atan2\(-nd\.y, dist > 1 \? dist : 1\);\s*focusNode = true;/g;

code = code.replace(showInfoRegex, 
`if (idx < 0) {
      clearSatellites();
      targetCamZ = 2000;
      focusNode = false;
$1targetCamZ = 750; // Pull camera neatly out to witness the orbit

    const nd = nodeData[idx];
    focusNode = false; // Disable group rotation snap, since physics pulls it to origin
    targetRotY = 0; targetRotX = 0; // smoothly rest manual rotation
`);

// 3. Inject Galaxy/Orbit physics logic
const physicsBlockRegex = /\/\/ Spring toward rest \(golden spiral\) position\s*let fx = \(nd\.rx - nd\.x\) \* K_SPRING;\s*let fy = \(nd\.ry - nd\.y\) \* K_SPRING;\s*let fz = \(nd\.rz - nd\.z\) \* K_SPRING;\s*\/\/ Repulsion from every other node\s*nodeData\.forEach\(\(other, j\) => \{[\s\S]*?\}\);\s*\/\/ Edge attraction — pull connected nodes toward each other\s*edges\.forEach\(e => \{[\s\S]*?\}\);/g;

const specializedPhysics = `   let fx = 0, fy = 0, fz = 0;
      
      if (activeIdx >= 0) {
        if (i === activeIdx) {
          // Pull the active node powerfully into the absolute center point
          fx = (0 - nd.x) * 0.08;
          fy = (0 - nd.y) * 0.08;
          fz = (0 - nd.z) * 0.08;
        } else {
          // Other nodes form an elegant orbiting galaxy around the active center
          const dist = Math.sqrt(nd.x*nd.x + nd.y*nd.y + nd.z*nd.z + 0.1);
          const targetR = 900; // Orbiting rim
          const radial = (targetR - dist) * 0.012;
          fx = (nd.x / dist) * radial;
          fy = (nd.y / dist) * radial;
          fz = (nd.z / dist) * radial;
          
          // Tangential orbital spin (calm animation)
          fx += nd.z * 0.0025;
          fz -= nd.x * 0.0025;
          
          // Micro-repulsion so orbiting nodes don't clump
          nodeData.forEach((other, j) => {
            if (i === j || j === activeIdx) return;
            const ox = nd.x - other.x, oy = nd.y - other.y, oz = nd.z - other.z;
            const d2 = ox*ox + oy*oy + oz*oz + 0.1;
            if (d2 < 60000) {
               const f = 10000 / d2;
               fx += ox * f; fy += oy * f; fz += oz * f;
            }
          });
        }
      } else {
        // Standard force-directed physics
        fx = (nd.rx - nd.x) * K_SPRING;
        fy = (nd.ry - nd.y) * K_SPRING;
        fz = (nd.rz - nd.z) * K_SPRING;

        // Repulsion
        nodeData.forEach((other, j) => {
          if (i === j) return;
          const ox = nd.x - other.x, oy = nd.y - other.y, oz = nd.z - other.z;
          const d2 = ox*ox + oy*oy + oz*oz + 0.01;
          const d  = Math.sqrt(d2);
          if (d > 600) return;
          const f = K_REPEL / d2;
          fx += (ox / d) * f; fy += (oy / d) * f; fz += (oz / d) * f;
        });

        // Edge attraction
        edges.forEach(e => {
          if (e.i !== i && e.j !== i) return;
          const oi = e.i === i ? e.j : e.i;
          const o  = nodeData[oi];
          fx += (o.x - nd.x) * K_EDGE * e.strength;
          fy += (o.y - nd.y) * K_EDGE * e.strength;
          fz += (o.z - nd.z) * K_EDGE * e.strength;
        });
      }`;

code = code.replace(physicsBlockRegex, specializedPhysics);

fs.writeFileSync('script.js', code);
console.log('Galaxy physics applied.');
