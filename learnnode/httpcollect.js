'use strict';

let http = require('http'),
    BufferList = require('bl');

http.get(process.argv[2], (response) => {
    response.on('data', (data) => {
        let bl = new BufferList();
        let content = bl.append(new Buffer(data));
        console.log(parseInt(content.toString().length));
        console.log(content.toString());
    });
    response.on('error', console.error);
});