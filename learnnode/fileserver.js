'use strict';

let http = require('http');
let fs = require('fs');
let port = process.argv[2];
let filePath = process.argv[3];

let server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});

    fs.createReadStream(filePath.pipe(res))
});

server.listen(port);