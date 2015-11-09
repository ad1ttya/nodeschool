'use strict';

let fs = require('fs');
let path = require('path');

module.exports = function(dir, extname, cb) {
    fs.readdir(dir, function(err, list) {
        if(err) console.error(err);

        let result = list.filter(x => path.extname(x) === `.${extname}`);

        cb(null, result);
    });
};