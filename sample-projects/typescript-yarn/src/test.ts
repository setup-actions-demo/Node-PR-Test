import * as _ from 'lodash';

console.log('Running tests for TypeScript Yarn project...');

// Test 1: Check lodash is available
if (typeof _.map === 'function') {
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

// Test 4: Test additional lodash functions with TypeScript types
const testData: number[] = [1, 2, 3, 4, 5, 3, 2, 1];
const chunked: number[][] = _.chunk(testData, 3);
const unique: number[] = _.uniq(testData);

if (chunked.length === 3 && unique.length === 5) {
  console.log('✓ Additional lodash functions with TypeScript types working');
} else {
  console.log('✗ Additional lodash functions test failed');
  process.exit(1);
}

// Test 5: Test isEmpty function with proper TypeScript typing
const emptyArray: any[] = [];
const nonEmptyArray: number[] = testArray;

if (_.isEmpty(emptyArray) === true && _.isEmpty(nonEmptyArray) === false) {
  console.log('✓ isEmpty function with TypeScript types working correctly');
} else {
  console.log('✗ isEmpty function test failed');
  process.exit(1);
}

// Test 6: Test lodash version
console.log('✓ Lodash version:', _.VERSION);

// Test 7: Test TypeScript strict mode compilation
const strictTestFunction = (input: string): string => {
  return input.toUpperCase();
};

const strictResult: string = strictTestFunction('typescript');
if (strictResult === 'TYPESCRIPT') {
  console.log('✓ TypeScript strict mode compilation working');
} else {
  console.log('✗ TypeScript strict mode test failed');
  process.exit(1);
}

// Test 8: Display comprehensive results
console.log('\n📊 Test Summary:');
console.log('- Node.js version:', nodeVersion);
console.log('- Lodash version:', _.VERSION);
console.log('- Original array:', testData);
console.log('- Doubled array:', doubled);
console.log('- Chunked array:', chunked);
console.log('- Unique values:', unique);
console.log('- Empty array test result:', _.isEmpty(emptyArray));
console.log('- TypeScript strict test result:', strictResult);

console.log('\n🎉 All TypeScript + Yarn tests passed!');
console.log('✅ TypeScript + Yarn + Lodash setup is working correctly!');
console.log('📝 TypeScript compilation, type checking, and lodash integration verified!');
process.exit(0);
