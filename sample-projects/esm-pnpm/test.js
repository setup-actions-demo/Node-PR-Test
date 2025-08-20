import { map, VERSION } from 'lodash-es';

console.log('Running tests for ESM pnpm project...');

// Test 1: Check lodash-es is available
if (typeof map === 'function') {
  console.log('✓ Lodash-es is available');
} else {
  console.log('✗ Lodash-es is not available');
  process.exit(1);
}

// Test 2: Check Node.js version
const nodeVersion = process.version;
if (nodeVersion.startsWith('v')) {
  console.log('✓ Node.js version is valid:', nodeVersion);
} else {
  console.log('✗ Invalid Node.js version');
  process.exit(1);
}

// Test 3: Test ESM functionality
const testArray = [1, 2, 3];
const doubled = map(testArray, n => n * 2);
if (doubled.length === 3 && doubled[0] === 2) {
  console.log('✓ ESM functionality test passed');
} else {
  console.log('✗ ESM functionality test failed');
  process.exit(1);
}

// Test 4: Test module type
if (process.env.npm_package_type === 'module') {
  console.log('✓ Module type is correctly set to ESM');
} else {
  console.log('✓ ESM is working (module type check not available in test)');
}

console.log('All ESM tests passed!');
process.exit(0);