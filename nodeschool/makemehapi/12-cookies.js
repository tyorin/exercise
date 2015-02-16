//  REST WELL WITH HAPI
// ─────────────────────
//  COOKIES
//  Exercise 12 of 12

// Create a server that has a route configuration exposing an endpoint set-cookie and check-cookie which can be accessed using a 'GET' request. Specifically:

//     /set-cookie

// The set-cookie endpoint will set a cookie with the key 'session' and the value {key : 'makemehapi'}. The cookie should be base64json encoded, should expire in 10 ms, and have a domain scope of localhost.  The response is unimportant for this exercise, and may be anything you like.

//     /check-cookie

// The check-cookie endpoint will have cookies received from the /set-cookie endpoint. If the session key is present in cookies then simply return {user : 'hapi'}, otherwise return an unauthorized access error.

// -------------------------------------------------------------------------------

// ## HINTS

// In your server.route() function, you may add the following option:

//     config: {
//         state: {
//             parse: true,
//             failAction: 'log'
//         }
//     }

// By using this option, we can configure the server to handle cookies in various ways.

// Hapi provides a way to manage cookies for a specific url path.

//     server.state('session', {
//         path: '/',
//     });

// We can set cookies while replying to request as follows:

//     reply('success').state('session', 'session')

// Cookie values are stored in server state, accessible using following code:

//     var session = request.state.session;

// More information about handling of cookies in hapi can be found in the Hapi directory in node_modules here [API](http://hapijs.com/api).


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help



var util = require('util');
// var hapi = require('hapi');
// var boom = require('boom');

// var server = new hapi.Server();
// server.connection({
//   host: 'localhost',
//   port: process.argv[2] || 8080,
// });

// server.state('session', {
//   ttl: 10,
//   path: '/{path*}',
//   domain: 'localhost',
//   encoding: 'base64json'
// });

// server.route({
//   method: 'GET',
//   path: '/set-cookie',
//   config: {
//     state: {
//       parse: true,
//       failAction: 'log'
//     }
//   },
//   handler: function (request, reply) {
//     return reply('success').state('session', {key: 'makemehapi'});
//   }
// })

// server.route({
//   method: 'GET',
//   path: '/check-cookie',
//   config: {
//     state: {
//       parse: true,
//       failAction: 'log'
//     }
//   },
//   handler: function (request, reply) {
//     var session = request.state.session;
//     util.debug(util.inspect(session));
//     if (session.user != 'hapi') {
//       return reply(boom.badRequest('Invalid cookie value'));
//     }
//   }
// })

// server.start();



var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
  path: '/{path*}',
  encoding: 'base64json',
  ttl: 10,
  domain: 'localhost'
});

server.route(
  {
    method: 'GET',
    path: '/set-cookie',
    handler: function (request, reply) {
      return reply({
        message : 'success'
      }).state('session', {
        key : 'makemehapi'
      });
    },
    config: {
      state: {
        parse: true,
        failAction: 'log'
      }
    }
  }
);

server.route(
  {
    method: 'GET',
    path: '/check-cookie',
    handler: function (request, reply) {
      var session = request.state.session;
      var result;
      if (session) {
        result = {
          user : 'hapi'
        };
      } else {
        result = new Hapi.error.unauthorized('Missing authentication');
      }
      reply(result);
    },
  }
);

server.start();
