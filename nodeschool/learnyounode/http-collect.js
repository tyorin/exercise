var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function (response) {
    // datas = ''
    // response.setEncoding('utf8')
    // response.on('data', function (data) {
    //     datas += data
    // })
    // response.on('error', console.error)
    // response.on('end', function () {
    //     console.log(datas.length)
    //     console.log(datas)
    // })

    // console.log(bl(function (err, data) {}))
    response.pipe(bl(function (err, data) {
        // console.log(err, data)
        if (err)
            return cosole.error(err)

        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})
