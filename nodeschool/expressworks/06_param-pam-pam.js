//   #####################################################################
//   ##                      ~~  PARAM PAM PAM  ~~                      ##
//   #####################################################################

// Create an Express.js server that processes PUT '/message/:id' requests, e.g., PUT '/message/526aa677a8ceb64569c9d4fb'

// As the response of this request return id SHA1 hashed with a date:

//   require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + id)
//     .digest('hex')


// -----------------------------

// HINTS

// To handle PUT requests use:

//   app.put('/path/:NAME', function(req, res){...});

// To extract parameters from within the request handlers, use:

//   req.params.NAME

//  » To print these instructions again, run: `expressworks print`.
//  » To execute your program in a test environment, run:
//    `expressworks run program.js`.
//  » To verify your program, run: `expressworks verify program.js`.
//  » For help with this problem or with expressworks, run:
//    `expressworks help`.

// var express = require('express');
// var app = express();
// app.put('/message/:id', function (req, res) {
//   res.end(
//     require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString() + req.params.id)
//     .digest('hex')
//   );
// });
// app.listen(process.argv[2]);

var express = require('express')
var app = express()

app.put('/message/:id', function(req, res){
  var id = req.params.id
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(process.argv[2])
