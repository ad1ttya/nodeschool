'use strict';

let http = require('http');
let bl = require('bl');
let result = [];
let args = process.argv.slice(2);

function printResult() {
    for(let i = 0; i < args.length; i++) {
        console.log(result[i])
    }
}

for(let i = 0; i < args.length; i++) {
    http.get(args[i], (response) => {
        response.pipe(bl((err, data) => {
            if(err) console.error(err);

            result[i] = data.toString();

            if(i === 2) console.log(printResult());
        }))
    })
}