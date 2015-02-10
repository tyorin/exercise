//   #####################################################################
//   ##                         ~~  JSON ME  ~~                         ##
//   #####################################################################

// Write a server that reads a file (file name is passed in process.argv[3]), parses it to JSON and outputs the content to the user with res.json(object). Everything should match to the 'books' resource.


// -----------------------------

// HINTS

// For reading, there's an fs module, e.g.,

//   fs.readFile(filename, callback)

// While the parsing can be done with JSON.parse:

//   object = JSON.parse(string)


//  » To print these instructions again, run: `expressworks print`.
//  » To execute your program in a test environment, run:
//    `expressworks run program.js`.
//  » To verify your program, run: `expressworks verify program.js`.
//  » For help with this problem or with expressworks, run:
//    `expressworks help`.

// // console.error(process.argv);
// var fs = require('fs'), express = require('express');
// var port = process.argv[2], file = process.argv[3];

// fs.readFile(file, {encoding: 'utf-8'}, function (err, data) {
//   if (err) throw err;
//   // console.error(data);
//   var books = JSON.parse(data);
//   // console.error(books);
//   express().get('/books', function (req, res) {
//       // var util = require('util');
//       // util.debug(util.inspect(req));
//       res.json(books);
//     })
//     .listen(port);
// })

var express = require('express')
var app = express()
var fs = require('fs')

app.get('/books', function(req, res){
  var filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    if (e) return res.send(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.send(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
