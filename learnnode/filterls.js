//Return files in from a folder(arg1) with a given extension(arg2)

'use strict';

let fs = require('fs'),
    path = require('path');

fs.readdir(process.argv[2], function (err, list) {
    if(err) console.error(err);
    let ext = process.argv[3];
    let results = list.filter(x => path.extname(x) === `.${ext}`);
    console.log(results);
});