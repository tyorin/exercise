var fs = require('fs')
var testfile = process.argv[2]

// var contents = fs.readFileSync(testfile).toString()
// var lines = str.split('\n').length - 1

var contents = fs.readFileSync(testfile, 'utf8')
var lines = contents.split('\n').length - 1

console.log(lines)
