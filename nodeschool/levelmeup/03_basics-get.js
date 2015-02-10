var level = require('level');
var db = level(process.argv[2]);

// var get = function(db, key) {
//     db.get(key, function (err, value) {
//         if (err) {
//             return;
//         }
//         console.log(key + '=' + value);
//     })
// }

// for (var i = 0; i <= 100; i++) {
//     get(db, 'key' + i);
// }

function fetchNext (i) {
  var key = 'key' + i
  db.get(key, function (err, data) {
    if (err) {
      if (!err.notFound)
        throw err
    } else
      console.log(key + '=' + data)

    if (i < 100)
      fetchNext(i + 1)
  })
}

fetchNext(0)
