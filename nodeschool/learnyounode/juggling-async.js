// console.log(process.argv)
var http = require('http')
var bl = require('bl')

// var urls = [process.argv[2], process.argv[3], process.argv[4]]
// urls.forEach(function (url) {
//     http.get(url, function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err)
//                 return cosole.error(err)

//             data = data.toString()
//             console.log(data)
//         }))
//     })
// })

// function httpgets (urls) {
//     if (!urls.length) {
//         return
//     }

//     var url = urls[0]
//     // console.log(url)
//     http.get(url, function (response) {
//         response.pipe(bl(function (err, data) {
//             if (err) {
//                 return console.error(err)
//             }
//             data = data.toString()
//             console.log(data)
//             httpgets(urls.slice(1))
//         }))
//     })
// }
// httpgets(process.argv.slice(2))

var urls = process.argv.slice(2)
var results = []
var count = 0

function printResults () {
    if (urls.length === count) {
        results.forEach(function (result) {
            console.log(result)
        })
    }
}

function httpGet (index) {
    var url = urls[index]
    http.get(url, function (res) {
        res.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            results[index] = data.toString()
            count++

            printResults()
        }))
    })
}

for (var i = 0; i < urls.length; i++) {
    httpGet(i)
}
