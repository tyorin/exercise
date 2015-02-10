//  REST WELL WITH HAPI
// ─────────────────────
//  VIEWS
//  Exercise 5 of 12

// Create a server which responds to requests to /?name=Handling using a template located at templates/index.html which outputs the following HTML:

//     <html>
//         <head><title>Hello Handling</title></head>
//         <body>
//             Hello Handling
//         </body>
//     </html>

// -------------------------------------------------------------------------------

// ## HINTS

// The view key can be used to define the template to be used to generate the
// response.

//     handler: {
//         view: "index.html"
//     }

// server.views() is the server method that we use to configure the templates
// used on our server. This method receives a configuration object in which we canset different engines based on file extension. This object can also set a
// directory path for your templates.

//     server.views({
//         engines: {
//             html: require('handlebars')
//         },
//         path: Path.join(__dirname, 'templates')
//     });

// In this exercise, we'll be using Handlebars. To install handlebars:

//     npm install handlebars

// With Handlebars templates, you can render a variable directly in HTML by
// surrounding the variable with curly braces, e.g. {{foo}}.

// The template receives some information from the request. For example, the queryparameters that were passed in via the URL are available in the query object.
// These parameters can then be used in the template.  Query params get automatically parsed and aren't declared in the route path.

//     <div>{{query.paramName}}</div>


//  » To print these instructions again, run: makemehapi print
//  » To execute your program in a test environment, run: makemehapi run program.js

//  » To verify your program, run: makemehapi verify program.js
//  » For help run: makemehapi help

var Hapi = require('hapi');
var Path = require('path');
var Util = require('util');

var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080
});
server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: '05-views.html'
  }
});
server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
})
server.start(function (err) {
  Util.debug(Util.inspect(server.info));
});
