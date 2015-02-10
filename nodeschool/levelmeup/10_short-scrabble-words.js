/*
  #####################################################################
  ##                  ~~  Short Scrabble Words  ~~                   ##
  #####################################################################

Write a module that stores valid 2, 3 and 4 character Scrabble words
and is able to retrieve them according to basic prefix-queries.

Your module should export an `init()` function that accepts 3
arguments: a LevelUP `db` object for an empty database, an array of
2, 3 and 4 character Scrabble words and callback that you must call
once you have finished initialising the database.

Your module should also export a `query()` method that also accepts
3 arguments: a LevelUP `db` object (the same store that you
initialised with `init()`), a `word` string containing the query, and
a callback that you must call with two arguments. The first argument
should be null, or an error object if one occurred. The second
argument should be an array of all the words in the database which
match the query.

Here is a boilerplate module that you can extend for your solution:

    module.exports.init = function (db, words, callback) {
      // insert each word in the words array here
      // then call `callback()` when you are done inserting words
    }

    module.exports.query = function (db, word, callback) {
      // `word` may have '*' chars to denote single-letter wildcards
      // call callback(err, results) with an array of matching words
    }

The `word` query may be a complete word, e.g. 'RUN', or a prefix of a
word with '*' characters filling in the blanks, e.g. 'RU*' or 'R**'.
The `.length` will tell you how long the word should be, your results
should only include words of that length. The '*' characters are
wild-cards that can match any character.

For simplicity, the wild-cards will only be on the end of a query.
You will always be given either a complete word or a word prefix. You
must limit your results to words of the same length and with the same
prefix.

Your solution will be tested against the official solution, you must
use a ReadStream that only returns the exact words that your query
needs to match, and no more.

---------------------------------------------------------------------
HINTS:

This exercise is about coming up with a key schema that is going to be
useful for retrieving results according to the queries you can expect.
You will need to come up with a key structure that will let you limit
your search to only words of the correct number of characters without
including words that have a different number of characters.

Your `init()` function should translate words into appropriate keys,
and your `query()` function should be able to translate a query into
a `start` and `end` for your ReadStream.


 » To print these instructions again, run: `levelmeup print`.
 » To execute your program in a test environment, run:
   `levelmeup run program.js`.
 » To verify your program, run: `levelmeup verify program.js`.
 » For help with this problem or with levelmeup, run:
   `levelmeup help`.
*/

// var util = require('util');
// module.exports.init = function (db, words, callback) {
//   // util.debug(util.inspect(words));
//   words.forEach(function(word) {
//     db.put(word.length + '!' + word, word);
//   });
//   callback();
// };
// module.exports.query = function (db, word, callback) {
//   // util.debug(word);
//   // var len = word.length;
//   // var aster = word.indexOf('*');
//   // if (aster > 0) {
//   //   word = word.substr(0, aster);
//   // }
//   // util.debug(word);
//   var key = word.length + '!' + word.replace(/\*/g, '');
//   var words = [];
//   db.createValueStream({'gte': key, 'lte': key + '\xff'})
//     .on('data', function(data) {
//       // if (data.length === len) {
//       //   words.push(data);
//       // }
//       words.push(data);
//     })
//     .on('error', function(err) {
//       callback(err);
//     })
//     .on('end', function() {
//       // util.debug(util.inspect(words));
//       callback(null, words);
//     });
// };

module.exports.init = function (db, words, callback) {
  var batch = words.map(function (word) {
    // length-prefixed keys, separated by a '!' so we
    // can query by length
    var key = word.length + '!' + word
    return { type: 'put', key: key, value: word }
  })
  db.batch(batch, callback)
}

module.exports.query = function (db, word, callback) {
  var words = []
  var key = word.length + '!' + word.replace(/\*/g, '')
  db.createReadStream({ start: key, end: key + '\xff' })
    .on('data', function (data) {
      words.push(data.value)
    })
    .on('error', function (err) {
      if (callback)
        callback(err)
      callback = null
    })
    .on('end', function () {
      if (callback)
        callback(null, words)
      callback = null
    })
}
