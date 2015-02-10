var http = require('http');
var through = require('through');
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(
            through(function (buf) {
                this.queue(buf.toString().toUpperCase());
            })
        ).pipe(res);
    } else {
        res.end('send me a POST\n');
    }
});
var port = parseInt(process.argv[2], 10);
server.listen(port);

// var http = require('http');
// var through = require('through');
// var port = process.argv[2];
// var server = http.createServer(function (req, res) {
//     var upper = function (buf) {
//         this.queue(buf.toString().toUpperCase());
//     };
//     req.pipe(through(upper)).pipe(res);
// });
// server.listen(port);



// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(fs.createWriteStream('post.txt'));
//     }
//     res.end('beep boop\n');
// });
// server.listen(process.argv[2]);

// $ node server.js 8000 &
// $ echo hack the planet | curl -d@- http://localhost:8000
// beep boop
// $ cat post.txt
// hack the planet



// var http = require('http');
// http.createServer(function (req, res) {
//     req.pipe(res);
// }).listen(8080);

// $ curl -d 'echo' http://localhost:8080/
// echo
