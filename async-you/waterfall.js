'use strict';

let http = require('http');
let fs = require('fs');
let async = require('async');

async.waterfall([
    function (cb) {
        let url = fs.readFileSync(process.argv[2]).toString();
        if(url) return cb(null, url);
    },

    function(url, cb) {
        http.get(url, (res) => {
            res.on('data', (data) => {
                cb(null, data);
            });
        }).on('error', (err) => {
            cb(err);
        });
    }
], (err, result) => {
    if(err) console.error(err);
    console.log(result.toString());
});