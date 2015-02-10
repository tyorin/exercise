//  REST WELL WITH HAPI
// ─────────────────────
//  DIRECTORIES
//  Exercise 4 of 12

// Create a server which routes requests to the path /foo/bar/baz/file.html to a
// file in a directory, e.g. public/file.html, which contains the following:

//     <html>
//         <head><title>Hello Directories</title></head>
//         <body>
//             Hello Directories
//         </body>
//     </html>

// -------------------------------------------------------------------------------

// ## HINTS

// Handlers can be declared as an object with a directory path:

//     handler: {
//         directory: { path: './public' }
//     }

// Routes using the directory handler must include a path parameter at the end of the path string. The path defined for the route does not need to correspond to the file system directory structure, and the parameter name does not matter.

//     path: "/path/to/somewhere/{param}"


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help

// console.dir(process.argv);
var util = require('util');
var hapi = require('hapi');
var path = require('path');

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  method: 'GET',
  path: '/foo/bar/baz/{file}',
  handler: {
    directory: {
      path: path.join(__dirname, 'public')
    }
  }
});

server.start(function (err) {
  util.debug(util.inspect(err));
});
