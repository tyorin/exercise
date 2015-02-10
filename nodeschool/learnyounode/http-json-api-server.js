var http = require('http')
var url = require('url')

var port = process.argv[2]

function jsonApi (req, res) {
    // console.log(req.url)
    var parsedUrl = url.parse(req.url, true)
    var path = parsedUrl.pathname
    var time = Date.parse(parsedUrl.query.iso)

    var result
    if (Number.isFinite(time)) {
        var date = new Date(time)
        if (path === '/api/parsetime') {
            result = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        } else if (path === '/api/unixtime') {
            result = {unixtime: time}
        }
    }
    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(result))
    } else {
        res.write(404)
        res.end()
    }
}

http.createServer(jsonApi).listen(port)
