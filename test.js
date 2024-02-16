const assert = require('assert');
const { addNumbers } = require('./app');

// Test the addNumbers function
assert.strictEqual(addNumbers(2, 3), 5);
assert.strictEqual(addNumbers(-1, 1), 0);
assert.strictEqual(addNumbers(0, 0), 0);

console.log('All tests passed!');
