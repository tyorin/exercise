//   #####################################################################
//   ##                          ~~  JADE  ~~                           ##
//   #####################################################################

// Create an Express.js app with a home page (/home) rendered by jade template engine, that shows current date (toDateString).

// -----------------------------

// HINTS

// Jade template file index.jade is already provided:

//   h1 Hello World
//   p Today is #{date}.

// This is how to specify path in a typical Express.js app considering that the folder is 'templates':

//   app.set('views', path.join(__dirname, 'templates'))

// However, to use our index.jade, the path to index.jade will be provided in the process.argv[3] value. You are welcome to use your own jade file!

// To tell Express.js app what template engine to use, apply this line to Express.js configuration:

//   app.set('view engine', 'jade')

// Instead of Hello World's res.end, the res.render function accepts filename and data:

//   res.render('index', {date: new Date().toDateString()})

// We use toDateString() to simply return the date in a human readable format sanstime.


// --------------------------------

// NOTE

// When creating your projects from scratch, install jade dependency with NPM.

// Again, the port to use is passed expressworks to the application as process.argv[2].

//  » To print these instructions again, run: `expressworks print`.
//  » To execute your program in a test environment, run:
//    `expressworks run program.js`.
//  » To verify your program, run: `expressworks verify program.js`.
//  » For help with this problem or with expressworks, run:
//    `expressworks help`.

// console.error(process.argv);
var express = require('express');
var app = express();
app.set('view engine', 'jade')
app.set('views', process.argv[3]);
app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
