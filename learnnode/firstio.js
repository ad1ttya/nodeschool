//Program to Read a file and print th number of newLines(\n)

'use strict';

let fs = require('fs');
let contents = fs.readFileSync(process.argv[2]).toString();
console.log(contents.split('\n').length - 1);
