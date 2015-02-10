var level = require('level');
var db = level(process.argv[2]);

var values = JSON.parse(process.argv[3]);
for (var key in values) {
  // console.error('%s = %s', key, values[key]);
  db.put(key, values[key]);
}
