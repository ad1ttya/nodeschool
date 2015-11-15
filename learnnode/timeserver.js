// listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time
'use strict';

let net = require('net');
let port = process.argv[2];

let server = net.createServer((socket) => {
    let date = new Date();
    let data = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    socket.write(data);
    socket.end();
});

server.listen(port);