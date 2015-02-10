var spawn = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    var ps = spawn(cmd, args);
    // joining together the stdin and stdout here
    return duplex(ps.stdin, ps.stdout);
};
