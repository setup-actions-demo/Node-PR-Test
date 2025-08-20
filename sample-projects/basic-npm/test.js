const _ = require('lodash');

// Simple test
console.log('Running tests for basic npm project...');

// Test 1: Check lodash is available
if (_.VERSION) {
  console.log('✓ Lodash is available');
} else {
  console.log('✗ Lodash is not available');
  process.exit(1);
}

// Test 2: Check Node.js version is as expected
const nodeVersion = process.version;
if (nodeVersion.startsWith('v')) {
  console.log('✓ Node.js version is valid:', nodeVersion);
} else {
  console.log('✗ Invalid Node.js version');
  process.exit(1);
}

// Test 3: Test basic functionality
const testArray = [1, 2, 3];
const doubled = _.map(testArray, n => n * 2);
if (doubled.length === 3 && doubled[0] === 2) {
  console.log('✓ Basic functionality test passed');
} else {
  console.log('✗ Basic functionality test failed');
  process.exit(1);
}

console.log('All tests passed!');
process.exit(0);