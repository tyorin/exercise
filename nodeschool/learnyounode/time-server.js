var net = require('net')
var portNumber = process.argv[2]

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var date = new Date()
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())
    // var y  = date.getFullYear()
    // var mo = ('00' + (date.getMonth() + 1)).substr(-2)
    // var d  = ('00' + date.getDate()).substr(-2)
    // var h  = ('00' + date.getHours()).substr(-2)
    // var mi = ('00' + date.getMinutes()).substr(-2)
    // return y + '-' + mo + '-' + d + ' ' + h + ':' + mi
    return date.getFullYear() + '-'
        + zeroFill(date.getMonth() + 1) + '-'
        + zeroFill(date.getDate()) + ' '
        + zeroFill(date.getHours()) + ':'
        + zeroFill(date.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})
server.listen(portNumber)
