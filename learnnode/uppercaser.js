'use strict';

let http = require('http');
let map = require('through2-map');

let server = http.createServer((req, res) => {
    if(req.method != 'POST') return res.end('Only POST. \n');

    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(Number(process.argv[2]));

//To test:
//curl -F username=tony http://localhost:port/