//  REST WELL WITH HAPI
// ─────────────────────
//  PROXIES
//  Exercise 6 of 12

// A proxy lets you relay requests from one one server/service to another.

// Create a server which listens on the port given by the
// second command-line argument, takes any requests to
// the path /proxy and proxies them
// to http://localhost:65535/proxy.

// -------------------------------------------------------------------------------

// ## HINTS

// The proxy key can be used to generate a reverse proxy handler.

//     handler: {
//         proxy: {
//             host: '127.0.0.1',
//             port: 65535
//         }
//     }

// -------------------------------------------------------------------------------
// Background info: en.wikipedia.org/wiki/Proxy_server


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help

var Util = require('util');
var Hapi = require('hapi');

console.dir(process.argv);
var server = new Hapi.Server();
var port = process.argv[2] || 8080;
server.connection({
  host: 'localhost',
  port: port
});
server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: '127.0.0.1',
      port: 65535
    }
  }
});
server.start();
