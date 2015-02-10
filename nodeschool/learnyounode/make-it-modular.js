var rfd = require('./read-filtering-dir.js')
var dir = process.argv[2]
var ext = process.argv[3]

rfd(dir, ext, function (err, list) {
    if (err) return console.error(err)

    list.forEach(function (file) {
        console.log(file)
    })
})
