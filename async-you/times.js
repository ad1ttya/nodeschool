'use strict';

let http = require('http')
  , async = require('async')
  , hostname = process.argv[2]
  , port = process.argv[3]
  , url = 'http://' +  hostname + ':' + port;

async.series({
  post: function(done){
    async.times(5, function(n, next){
      addUser(++n, (err) => {
        next(err);
      });
    }, (err) => {
      if (err) return done(err);
      done(null, 'saved');
    });
  },

  get: function(done){
    http.get(url + '/users', (res) => {
      var body = "";
      res.on('data', function(chunk){
        body += chunk.toString();
      });

      res.on('end', function(){
        done(null, body);
      });
    }).on('error', done);
  }

}, (err, result) => {
  if (err) return console.log(err);
  console.log(result.get);
});


function addUser(user_id, cb){
  var postdata = JSON.stringify({'user_id': user_id}),
  opts = {
    hostname: hostname,
    port: port,
    path: '/users/create',
    method: 'POST',
    headers: {
      'Content-Length': postdata.length
    }
  };

  var req = http.request(opts, function(res){
    res.on('data', function(chunk){})

    res.on('end', function(){
      cb();
    });
  });

  req.on('error', cb);

  req.write(postdata);
  req.end();
}