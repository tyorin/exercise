var fs = require('fs')
var testfile = process.argv[2]

fs.readFile(testfile, 'utf8', function (err, data) {
  if (!err) {
    var lines = data.split('\n').length - 1
    console.log(lines)
  }
})
