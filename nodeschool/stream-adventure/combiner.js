module.exports = function () {
    var combine = require('stream-combiner');
    var split   = require('split');
    var through = require('through');
    var zlib    = require('zlib');

    var result;

    return combine(
        // read newline-separated json,
        split(),
        // group books into genres,
        through(function (chunk) {
            try {
                var attr = JSON.parse(chunk);
                if (attr.type === 'genre') {
                    if (result) {
                        var json = JSON.stringify(result)
                        this.queue(json + '\n');
                    }
                    result = {name: attr.name, books: []};
                } else if (attr.type === 'book') {
                    result.books.push(attr.name);
                }
            } catch (e) {
                var json = JSON.stringify(result)
                this.queue(json + '\n');
            }
        }),
        // then gzip the output
        zlib.createGzip()
    );
};
