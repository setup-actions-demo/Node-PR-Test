console.log('Running tests for Package A...');

const { processData } = require('./index.js');

// Test package A functionality
const testInput = [1, 2, 3];
const result = processData(testInput);

if (result.length === 3 && result[0] === 10) {
  console.log('✓ Package A test passed');
  process.exit(0);
} else {
  console.log('✗ Package A test failed');
  process.exit(1);
}