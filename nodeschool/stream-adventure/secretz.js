var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var algorithm = process.argv[2];
var password  = process.argv[3];
var decipher = crypto.createDecipher(algorithm, password);

var gunzip = zlib.createGunzip();

// var tar = require('tar');
// var parser = tar.Parse();
// parser.on('entry', function (e) {
//     console.dir(e);
// });
// var fs = require('fs');
// fs.createReadStream('file.tar').pipe(parser);
var parser = tar.Parse();
parser.on('entry', function (e) {
    if (e.type !== 'File') return;

    var hash = crypto.createHash('md5', {encoding: 'hex'});
    // e.on('data', function (c) {
    //     hash.write(c);
    // });
    // e.on('end', function () {
    //     hash.end();
    //     console.log(hash.read() + ' ' + e.path);
    // })
    e.pipe(hash).pipe(through(null, function () {
        this.queue(' ' + e.path + '\n');
    })).pipe(process.stdout);
});

process.stdin.pipe(decipher).pipe(gunzip).pipe(parser);
