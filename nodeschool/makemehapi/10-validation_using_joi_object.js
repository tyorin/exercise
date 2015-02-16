//  REST WELL WITH HAPI
// ─────────────────────
//  VALIDATION USING JOI OBJECT
//  Exercise 10 of 12

// By using a Joi object we can specify highly customizable validation rules in paths, request payloads, and responses.

// Create a server exposing a login endpoint and reply with "login successful" when an HTTP POST request is sent to /login.

// The endpoint will accept following payload variables:

// isGuest       (boolean)
// username      (string)
// accessToken   (alphanumeric)
// password      (alphanumeric)

// Validation should consist of following conditions:

// i)   if isGuest is false, a username is required.
// ii)  password cannot appear together with accessToken.
// iii) if any other parameters than specified above are sent, they should pass the validation.

// -------------------------------------------------------------------------------

// ## HINTS

// Create a server that listens on port 8080 with the following code:


//     var routeConfig = {
//         path: '/a/path/',
//         method: 'POST',
//         handler: myHandler,
//         config: {
//             validate: {
//                payload: Joi.object({
//                     username: Joi.string(),
//                     password: Joi.string().alphanum(),
//                     accessToken: Joi.string().alphanum(),
//                     birthyear: Joi.number().integer().min(1900).max(2013),
//                     email: Joi.string().email()
//                })
//                .options({allowUnknown: true})
//                .with('username', 'birthyear')
//                .without('password', 'accessToken')
//             }
//         }
//     }

// Route information can be found in the Hapi directory
// node_modules/hapi/API.md#route-configuration

// Joi information can be found in
// node_modules/hapi/node_modules/joi/README.md


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help



// var util = require('util');
// var Hapi = require('hapi');
// var Joi = require('joi');
// var server = new Hapi.Server();

// server.connection({
//     host: 'localhost',
//     port: Number(process.argv[2] || 8080)
// });

// server.route({
//   method: 'POST',
//   path: '/login',
//   handler: function(require, reply) {
//     // reply(util.inspect(require.payload));
//     reply('login successful');
//   },
//   config: {
//     validate: {
//       payload: Joi.object({
//         isGuest: Joi.boolean(),
//         username: Joi.string().when('isGuest', {is: false, then: Joi.required()}),
//         accessToken: Joi.string().alphanum(),
//         password: Joi.string().alphanum(),
//       })
//       .without('password', 'accessToken')
//     }
//   }
// });

// server.start();

var Hapi = require('hapi');
var Joi = require('joi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'POST',
    path: '/login',
    config: {
        handler: function (request, reply) {
            reply('login successful');
        },
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean().required(),
                username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum()
            }).options({ allowUnknown: true }).without('password', 'accessToken')
        }
    }
});

server.start();

