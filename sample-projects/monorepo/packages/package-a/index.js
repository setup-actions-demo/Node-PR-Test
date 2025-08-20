const _ = require('lodash');

console.log('Package A is running!');
console.log('Node.js version:', process.version);

const data = [1, 2, 3, 4, 5];
const processed = _.map(data, n => n * 10);

console.log('Package A processed data:', processed);

// Export function for package B to use
function processData(input) {
  return _.map(input, n => n * 10);
}

module.exports = { processData };

console.log('Package A completed!');