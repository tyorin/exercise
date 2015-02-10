var Writable = require('stream').Writable;
var duplex = require('duplexer');

module.exports = function (counter) {
    // return a duplex stream to capture countries on the writable side
    // and pass through `counter` on the readable side
    // console.log(counter);
    var countries = {};
    var capture = new Writable({objectMode: true});
    capture._write = function (chunk, encoding, callback) {
        // console.log(chunk);
        if (countries[chunk.country]) {
            countries[chunk.country]++;
        } else {
            countries[chunk.country] = 1;
        }
        callback();
    }
    capture.on('finish', function () {
        counter.setCounts(countries);
    })
    return duplex(capture, counter);
};

// var duplexer = require('duplexer');
// var Writable = require('stream').Writable;

// module.exports = function(counter) {
//     var countries = {};
//     var capturer = Writable({objectMode: true});
//     capturer._write = function(chunk, enc, next) {
//         countries[chunk.country] = (countries[chunk.country] || 0) + 1;
//         next();
//     }
//     capturer.on('finish', function() { counter.setCounts(countries); })
//     return duplexer(capturer, counter);
// };
