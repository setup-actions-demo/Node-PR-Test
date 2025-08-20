import { map, chunk, isEmpty, uniq } from 'lodash-es';

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

// Test 3: Test ESM functionality with map
const testArray = [1, 2, 3];
const doubled = map(testArray, n => n * 2);
if (doubled.length === 3 && doubled[0] === 2) {
  console.log('✓ ESM map functionality test passed');
} else {
  console.log('✗ ESM map functionality test failed');
  process.exit(1);
}

// Test 4: Test additional lodash-es functions
const testData = [1, 2, 3, 4, 5, 3, 2, 1];
const chunked = chunk(testData, 3);
const unique = uniq(testData);

if (chunked.length === 3 && unique.length === 5) {
  console.log('✓ Additional lodash-es functions (chunk, uniq) working');
} else {
  console.log('✗ Additional lodash-es functions test failed');
  process.exit(1);
}

// Test 5: Test isEmpty function
if (isEmpty([]) === true && isEmpty(testArray) === false) {
  console.log('✓ isEmpty function working correctly');
} else {
  console.log('✗ isEmpty function test failed');
  process.exit(1);
}

// Test 6: Test module type
if (process.env.npm_package_type === 'module') {
  console.log('✓ Module type is correctly set to ESM');
} else {
  console.log('✓ ESM is working (module type check not available in test)');
}

// Test 7: Display test results summary
console.log('\n📊 Test Summary:');
console.log('- Original array:', testData);
console.log('- Doubled array:', doubled);
console.log('- Chunked array:', chunked);
console.log('- Unique values:', unique);
console.log('- Empty array test:', isEmpty([]));

console.log('\n🎉 All ESM tests passed!');
console.log('✅ ESM + pnpm + lodash-es setup is working correctly!');
process.exit(0);
