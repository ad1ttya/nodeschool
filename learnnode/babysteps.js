//Return the sum of inputs from the console

'use strict';

let input = process.argv.slice(2);
let result = [];

input.forEach(i => result.push(parseInt(i)));

console.log(result.reduce((x, y) => x + y));