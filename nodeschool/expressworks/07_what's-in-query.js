//   #####################################################################
//   ##                     ~~  WHAT'S IN QUERY  ~~                     ##
//   #####################################################################

// Write a route that extracts data from query string in the GET '/search' URL route, e.g.,
// ?results=recent&include_tabs=true, and then outputs it back to the user in JSONformat.

// -----------------------------

// HINTS

// In Express.js to extract query string parameters, we can use:

//   req.query.NAME

// To output json we can use, res.send(object).

//  » To print these instructions again, run: `expressworks print`.
//  » To execute your program in a test environment, run:
//    `expressworks run program.js`.
//  » To verify your program, run: `expressworks verify program.js`.
//  » For help with this problem or with expressworks, run:
//    `expressworks help`.

// console.error(process.argv);
var express = require('express');
var app = express();
app.get('/search', function (req, res) {
  // console.error(req.query);
  res.send(req.query);
  res.end();
})
app.listen(process.argv[2]);
