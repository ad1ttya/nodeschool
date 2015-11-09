//Use Async readFile to print the number of newLines(\n)

'use strict';

let fs = require('fs');
let contents = fs.readFile(process.argv[2], function(err, data){
    if(err) console.error(err);

    let Data = data.toString();
    console.log(Data.split('\n').length - 1);
});