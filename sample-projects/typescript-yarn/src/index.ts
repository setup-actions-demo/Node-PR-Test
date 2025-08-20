import * as _ from 'lodash';
import axios from 'axios';

interface Project {
  name: string;
  version: string;
  type: string;
}

const project: Project = {
  name: 'TypeScript Yarn Project',
  version: '1.0.0',
  type: 'setup-node-test'
};

console.log('TypeScript Yarn project is running!');
console.log('Project info:', project);
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);

// Test lodash functionality
const numbers: number[] = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, (n: number) => n * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubled);

// Test axios is available
console.log('Axios available:', typeof axios === 'function');

console.log('TypeScript Yarn project test completed successfully!');