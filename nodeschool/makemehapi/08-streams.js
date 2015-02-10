//  REST WELL WITH HAPI
// ─────────────────────
//  STREAMS
//  Exercise 8 of 12

// Create a Hapi server which responds to GET requests to / by streaming a ROT13'dversion of a file that contains:

//     The Pursuit of Hapi-ness

// Output should look like:

//     Gur Chefhvg bs Uncv-arff

// -------------------------------------------------------------------------------

// ## HINTS

// ### Stream

// The Hapi handler reply function can accept a stream as an argument.

// ### File

// The fs module has a createReadStream(pathToFile) function that would be useful.

// ### Simple ROT13

// In this exercise, we'll be using rot13-transform. To install rot13-transform:

//     npm install rot13-transform


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help

// console.dir(process.argv);

var hapi = require('hapi');
var path = require('path');
var fs = require('fs');
var rot13 = require('rot13-transform');

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});
server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
      var file = fs.createReadStream(path.join(__dirname, '08-streams.txt'));
      reply(file.pipe(rot13()));
  }
});
server.start();
