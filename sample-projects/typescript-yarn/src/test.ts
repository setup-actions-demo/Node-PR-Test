import * as _ from 'lodash';

console.log('Running tests for TypeScript Yarn project...');

// Test 1: Check lodash is available
if (_.VERSION) {
  console.log('✓ Lodash is available with TypeScript types');
} else {
  console.log('✗ Lodash is not available');
  process.exit(1);
}

// Test 2: Check Node.js version
const nodeVersion: string = process.version;
if (nodeVersion.startsWith('v')) {
  console.log('✓ Node.js version is valid:', nodeVersion);
} else {
  console.log('✗ Invalid Node.js version');
  process.exit(1);
}

// Test 3: Test TypeScript compilation worked
const testArray: number[] = [1, 2, 3];
const doubled: number[] = _.map(testArray, (n: number) => n * 2);
if (doubled.length === 3 && doubled[0] === 2) {
  console.log('✓ TypeScript functionality test passed');
} else {
  console.log('✗ TypeScript functionality test failed');
  process.exit(1);
}

console.log('All TypeScript tests passed!');
process.exit(0);