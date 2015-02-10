//  REST WELL WITH HAPI
// ─────────────────────
//  HANDLING
//  Exercise 3 of 12

// Create a server which responds to requests to / with a static HTML file named
// index.html containing the following:

//     <html>
//         <head><title>Hello Handling</title></head>
//         <body>
//             Hello Handling
//         </body>
//     </html>

// -------------------------------------------------------------------------------

// ## HINTS

// You can declare handlers as objects instead of functions. The object must
// contain one of the following: file, directory, proxy, or view.

// For example, handler can be assigned an object with the file key:

//     handler: {
//         file: "index.html"
//     }


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help

// // console.dir(process.argv);
// var Hapi = require('hapi');
// var server = new Hapi.Server();
// server.connection({port: process.argv[2]});
// server.route({method: 'GET', path: '/', handler: {file: 'index.html'}});
// server.start();

var Hapi = require('hapi');
var Path = require('path');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: Path.join(__dirname, '03-handling.html')
    }
});

server.start();
