'use strict';

let http = require('http'),
    async = require('async');

async.map(process.argv.slice(2), (url, done) => {
    http.get(url, (res) => {
        res.on('data', (data) => {
            done(null, data.toString());
        });
    }).on('error', (err) => {
        done(err);
    });
}, (error, result) => {
    if(error) console.error(error);

    console.log(result);
});