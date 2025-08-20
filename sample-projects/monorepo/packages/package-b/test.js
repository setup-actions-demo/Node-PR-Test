console.log('Running tests for Package B...');

const { processData } = require('@monorepo/package-a');

// Test package B can use package A
const testInput = [2, 4, 6];
const result = processData(testInput);

if (result.length === 3 && result[0] === 20) {
  console.log('✓ Package B test passed (using Package A)');
  process.exit(0);
} else {
  console.log('✗ Package B test failed');
  process.exit(1);
}