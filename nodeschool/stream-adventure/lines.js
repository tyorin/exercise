var through = require('through');
var line = 0;
var tr = through(function (buf) {
    line++;
    var str = buf.toString();
    if (line % 2) {
        str = str.toLowerCase(); // odd numbered
    } else {
        str = str.toUpperCase(); // even numbered
    }
    str += '\n';
    this.queue(str);
});

var split = require('split');
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);

// var split = require('split');
// var through = require('through');
// var line = 1;
// process.stdin.pipe(split()).pipe(through(function (buf) {
//     if (line % 2) {
//         str = buf.toString().toLowerCase(); // odd numbered
//     } else {
//         str = buf.toString().toUpperCase(); // even numbered
//     }
//     line++;
//     console.log(str);
// }));
