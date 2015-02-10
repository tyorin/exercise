// console.log(process.argv)
var http = require('http')
var url = process.argv[2]
http.get(url, function (response) {
    // console.log(response)
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
})
