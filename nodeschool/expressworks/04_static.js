//   #####################################################################
//   ##                         ~~  STATIC  ~~                          ##
//   #####################################################################

// Apply static middleware to serve index.html file without any routes. Your solution must listen on the port number supplied by process.argv[2]. The index.html file is provided and usable via process.argv[3] value of the path to it. However,you can use your own file with this content:

//   <html>
//     <head>
//       <title>expressworks</title>
//     </head>
//     <body>
//       <p>I am red!</p>
//     </body>
//   </html>

// -----------------------------

// HINTS

// This is how you can call static middleware:

//   app.use(express.static(path.join(__dirname, 'public')));

// For this exercise ExpressWorks will pass you the path:

//   app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));


//  » To print these instructions again, run: `expressworks print`.
//  » To execute your program in a test environment, run:
//    `expressworks run program.js`.
//  » To verify your program, run: `expressworks verify program.js`.
//  » For help with this problem or with expressworks, run:
//    `expressworks help`.

// console.error(__dirname);
var path = require('path');
var express = require('express');

var app = express();
var dir = process.argv[3] || path.join(__dirname, 'public');
// console.error(dir);
app.use(express.static(dir));
app.listen(process.argv[2]);
