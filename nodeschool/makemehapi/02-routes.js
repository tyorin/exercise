//  REST WELL WITH HAPI
// ─────────────────────
//  ROUTES
//  Exercise 2 of 12

// Create a hapi server that listens on a port passed from the
// command line and outputs
// "Hello [name]" where [name] is replaced with the path parameter
// supplied to GET /{name}

// When you have completed your server, you can run it in the test
// environment with:

//   makemehapi run program.js

// And once you are ready to verify it then run:

//   makemehapi verify program.js

// -------------------------------------------------------------------------------

// ## HINTS

// Create a server that listens on port 8080, if none is passed from the
// command line,  with the following code:

//     var Hapi = require('hapi');
//     var server = new Hapi.Server();
//     server.connection({
//         host: 'localhost',
//         port: Number(process.argv[2] || 8080)
//     });

// Add a route handler similar to the following:

//     function handler (request, reply) {
//         reply('Hello ' + request.params.name);
//     }


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help

var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
  port: Number(process.argv[2] || 8080)
});
server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello ' + request.params.name);
  }
});
server.start();
