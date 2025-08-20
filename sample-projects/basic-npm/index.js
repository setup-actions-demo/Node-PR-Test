const _ = require('lodash');

console.log('Basic npm project is running!');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Lodash version:', _.VERSION);

// Simple functionality test
const numbers = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, n => n * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

console.log('Basic npm project test completed successfully!');