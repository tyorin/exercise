//   #####################################################################
//   ##                       ~~  Multilevel  ~~                        ##
//   #####################################################################

// Write a program that uses multilevel to fetch a value from a server
// running on your computer.

// Create a TCP connection with the core `net` module to port 4545
// on localhost. Pipe this connection through a multilevel RPC stream and
// back to the connection. Your code should look like:

//   var db = multilevel.client()
//   var connection = net.connect(4545)
//   connection.pipe(db.createRpcStream()).pipe(connection)

// You will then have a `db` object that you can interact with like a
// LevelUP object.

// Fetch the value from the data store with the key 'multilevelmeup'
// and print it to the console.

// You must close the connection after you have fetched the value!

//   connection.end()

// ----------------------------------------------------------------------
// HINTS:

// Read more about multilevel here:
//   http://npm.im/multilevel
// Or off-line on your local filesystem:
//   /usr/lib/node_modules/levelmeup/docs/multilevel.html

// You will need to `npm install multilevel` to get started with this
// exercise.

// If you don't have an Internet connection, simply make a `node_modules`
// directory and copy the following directory into it:
//   /usr/lib/node_modules/levelmeup/node_modules/multilevel/

//  » To print these instructions again, run: `levelmeup print`.
//  » To execute your program in a test environment, run:
//    `levelmeup run program.js`.
//  » To verify your program, run: `levelmeup verify program.js`.
//  » For help with this problem or with levelmeup, run:
//    `levelmeup help`.

var multilevel = require('multilevel');
var net = require('net');

var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function (err, value) {
  if (err) throw err;
  console.log(value);
  connection.end();
});
