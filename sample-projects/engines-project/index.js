const semver = require('semver');
const fs = require('fs');
const path = require('path');

console.log('Engines project is running!');
console.log('Node.js version:', process.version);
console.log('npm version:', process.env.npm_version || 'unknown');

// Read package.json to check engines
const packagePath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const engines = packageJson.engines;

console.log('Engine requirements:', engines);

// Verify Node.js version against engines
const nodeVersion = process.version;
const nodeRequirement = engines.node;

if (semver.satisfies(nodeVersion, nodeRequirement)) {
  console.log('✓ Node.js version satisfies engine requirement');
} else {
  console.log('✗ Node.js version does not satisfy engine requirement');
}

console.log('Engines project test completed successfully!');