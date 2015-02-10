var request = require('request');
var url = 'http://localhost:8000';

var req = request.post(url);
process.stdin.pipe(req).pipe(process.stdout);
