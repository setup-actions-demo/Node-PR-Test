import { map } from 'lodash-es';
import fetch from 'node-fetch';

console.log('ESM pnpm project is running!');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);

// Test ESM imports
console.log('ESM imports are working!');
console.log('Lodash-es map function:', typeof map);
console.log('Node-fetch:', typeof fetch);

// Test ESM functionality
const numbers = [1, 2, 3, 4, 5];
const doubled = map(numbers, n => n * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

// Test async/await with ESM
async function testFetch() {
  try {
    console.log('Testing fetch availability (no actual request)');
    console.log('Fetch function available:', typeof fetch === 'function');
  } catch (error) {
    console.error('Error:', error);
  }
}

testFetch().then(() => {
  console.log('ESM pnpm project test completed successfully!');
}).catch(console.error);