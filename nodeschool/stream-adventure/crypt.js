var crypto = require('crypto');
var algorithm = 'aes256'
var password = process.argv[2];
var decipher = crypto.createDecipher(algorithm, password)

process.stdin.pipe(decipher).pipe(process.stdout);



// var crypto = require('crypto');
// var stream = crypto.createDecipher('RC4', 'robots');
// stream.pipe(process.stdout);
// stream.write(Buffer([ 135, 197, 164, 92, 129, 90, 215, 63, 92 ]));
// stream.end();
