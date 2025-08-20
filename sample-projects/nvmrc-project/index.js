const _ = require('lodash');
const fs = require('fs');
const path = require('path');

console.log('.nvmrc project is running!');
console.log('Node.js version:', process.version);

// Read and verify .nvmrc file
const nvmrcPath = path.join(__dirname, '.nvmrc');
const nvmrcContent = fs.readFileSync(nvmrcPath, 'utf8').trim();
console.log('.nvmrc specifies version:', nvmrcContent);

// Check if current version matches .nvmrc
const currentVersion = process.version.slice(1); // Remove 'v' prefix
console.log('Current Node.js version (without v):', currentVersion);

// Test basic functionality
const numbers = [1, 2, 3];
const doubled = _.map(numbers, n => n * 2);
console.log('Lodash test:', doubled);

console.log('.nvmrc project test completed successfully!');