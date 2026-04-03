const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// After nodeData is built (after the closing }); of PROJECTS.map), 
// inject a mutation that halves the rest position of Health Assistant so
// it's pulled into the cluster center.
code = code.replace(
  `  // ── Edges: shared tech ────────────────────────────────────────`,
  `  // ── Adjust rest positions for Health Assistant ─────────────────\n  nodeData.forEach(nd => {\n    if (nd.p.id === '010') {\n      // Pull Health Assistant's rest position much closer to origin\n      nd.rx *= 0.25;\n      nd.ry *= 0.25;\n      nd.rz *= 0.25;\n      // Also snap live position closer so it doesn't have to travel far\n      nd.x = nd.rx; nd.y = nd.ry; nd.z = nd.rz;\n    }\n  });\n\n  // ── Edges: shared tech ────────────────────────────────────────`
);

fs.writeFileSync('script.js', code);
console.log('Health Assistant rest position adjusted.');
