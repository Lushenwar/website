const fs = require('fs');

let code = fs.readFileSync('script.js', 'utf8');

// 1. Zoom ability slightly stronger
code = code.replace(/e\.deltaY \* 1\.5/g, 'e.deltaY * 3.5');

// 2. Start closer out of the box (both variable and click dismissal reset)
code = code.replace(/let targetCamZ = 1350;/g, 'let targetCamZ = 1000;');
code = code.replace(/targetCamZ = 1350;/g, 'targetCamZ = 1000;'); 

// 3. Move health assistant node closer to everything else
// Find the Force Directed Physics inactive block (after "Standard force-directed physics")
// The fallback physics calculates:
// fx = (nd.rx - nd.x) * K_SPRING;
// fy = (nd.ry - nd.y) * K_SPRING;
// fz = (nd.rz - nd.z) * K_SPRING;

const springPhysicsRegex = /(fx = \(nd\.rx - nd\.x\) \* K_SPRING;\s*fy = \(nd\.ry - nd\.y\) \* K_SPRING;\s*fz = \(nd\.rz - nd\.z\) \* K_SPRING;)/g;

code = code.replace(springPhysicsRegex, 
`$1
        // Manually bias Health Assistant (010) closer to the cluster center
        if (nd.p.id === '010') {
           fx += (0 - nd.x) * 0.04;
           fy += (0 - nd.y) * 0.04;
           fz += (0 - nd.z) * 0.04;
        }
`);

fs.writeFileSync('script.js', code);
console.log('Finished tweaking graph tweaks.');
