'use strict';

let http = require('http');
let async = require('async');

let urls = process.argv.slice(2);

async.series({
    requestOne: (cb) => {
        http.get(urls[0], (res) => {
            res.on('data', (data) => {
                cb(null, data.toString());
            });
            res.on('error', (err) => {
                cb(err);
            });
        });
    },
    requestTwo: (cb) => {
        http.get(urls[1], (res) => {
            res.on('data', (data) => {
                cb(null, data.toString());
            });
            res.on('error', (err) => {
                cb(err);
            });
        });
    }
}, (err, result) => {
    console.log(result);
})