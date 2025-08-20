const { processData } = require('@monorepo/package-a');
const axios = require('axios');

console.log('Package B is running!');
console.log('Node.js version:', process.version);

// Use functionality from package A
const data = [5, 10, 15];
const processed = processData(data);

console.log('Package B using Package A:', processed);
console.log('Axios available:', typeof axios === 'function');

console.log('Package B completed!');