var fs = require('fs')
var path = require('path')

// console.log(process.argv)
var dir = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(dir, function(err, list) {
  if (!err) {
    // console.log(list)
    var filtered = list.filter(function (file) {
      return path.extname(file) === ext
    })
    for (var i = 0; i < filtered.length; i++) {
      console.log(filtered[i])
    }
  }
})
