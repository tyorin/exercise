var through = require('through');

var tr = through(
    function (buf) {
        this.queue(buf.toString().toUpperCase());
    },
    function () {
        this.queue(null);
    }
);

process.stdin.pipe(tr).pipe(process.stdout);
