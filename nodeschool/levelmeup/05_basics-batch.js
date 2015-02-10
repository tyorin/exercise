//   #####################################################################
//   ##                      ~~  Basics: BATCH  ~~                      ##
//   #####################################################################

// Write a program that opens a LevelDB data-store using `level`.

// The full path to the data-store will be provided to your program as
// the first command-line argument.

// The second command-line argument will be a full path to a file
// containing some data you must load in to the data-store. Each line
// of the file will contain two or three strings separated by commas. The
// first string will either be "put" or "del", the second string will be
// a key and in the case of a "put", the third string will be a value.

// For example:

//   put,@izs,Isaac Z. Schlueter
//   put,@tmpvar,Elijah Insua
//   put,@mrbruning,Max Bruning
//   del,@darachennis

// In this case, you have 3 new entries to add, mapping twitter handles
// to real names, and one entry to remove.

// You are encouraged to use the `batch()` method for this exercise. A
// batch operation is an atomic, and efficient mechanism for performing
// multiple writes (put and delete).

// ----------------------------------------------------------------------
// HINTS:

// The `batch()` method has two forms:

//  * The `Array` form lets you provide an array containing your
//    operations followed by an optional callback. The array must contain
//    objects of the form:

//      { type: 'put', key: 'foo', value: 'bar' }
//      or:
//      { type: 'del', key: 'foo' }

//  * The chained form is closer to the way that LevelDB exposes its
//    batch operation. Calling `batch()` with no arguments returns a
//    `Batch` object that you can use to build your complete set of
//    writes and then submit when ready. It has the following methods:

//      - batch.put('key', 'value')
//      - batch.del('key')
//      - batch.write(callback)

//    You can't use the chained form of batch until the LevelUP instance
//    is "ready", you can determine this by either providing a callback
//    to the main `level()` function or by listening to a "ready" event
//    on the resulting LevelUP object. See the LevelUP documentation for
//    more details.

// Batch writes are "atomic" in that either all writes succeed or they
// all fail. If you receive an error on your callback then you can safely
// assume that your whole batch failed.

// The lines in the file can be safely split with:

//   var arr = line.split(',')

// To get output for debugging when running `levelmeup run program.js`
// you should use console.error instead of console.log.


//  » To print these instructions again, run: `levelmeup print`.
//  » To execute your program in a test environment, run:
//    `levelmeup run program.js`.
//  » To verify your program, run: `levelmeup verify program.js`.
//  » For help with this problem or with levelmeup, run:
//    `levelmeup help`.

// var util = require('util');
// console.error(process.argv);

// var level = require('level');
// var db = level(process.argv[2]);
// var batch = db.batch();

// var fs = require('fs');
// var lines = fs.readFileSync(process.argv[3], 'utf8').split('\n');
// for (var i = 0; i < lines.length; i++) {
//   var line = lines[i].split(',');
//   if (line[0] == 'put') {
//     batch.put(line[1], line[2]);
//   } else if (line[0] == 'del') {
//     batch.del(line[1]);
//   }
// }
// batch.write();

var fs = require('fs')
var level = require('level')

// read file and split into an array of lines
var data = fs.readFileSync(process.argv[3], 'utf8').split('\n')

level(process.argv[2], function (err, db) {
  if (err)
    throw err

  // chained batch object
  var batch = db.batch()
  data.forEach(function (line) {
    var d = line.split(',')
    if (d[0] == 'del')
      return batch.del(d[1])
    batch.put(d[1], d[2])
  })
  // commit the batch
  batch.write()
})

/* Alternative method:

  var operations = data.map(function (line) {
    var d = line.split(',')
    // 'value' is ignored for del
    return { type: d[0], key: d[1], value: d[2] }
  })

  db.batch(operations, function (err) {
    if (err)
      throw err
    db.close()
  })

*/
