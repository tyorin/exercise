var concat = require('concat-stream');
process.stdin.pipe(concat(function (buf) {
    console.log(buf.toString().split('').reverse().join(''));
}))




// var concat = require('concat-stream');
// process.stdin.pipe(concat(function (buf) {
//     console.dir(buf.toString());
// }))

// $ stream-adventure run concat.js
// '\n.selcitrap\ncirtemoidar yticolev-hgih\ndeppilf ylitsez ognid\nybraen a ,ylgnittiwnU .ecruos\nyhtrowtsurtnu eht etacol\not epocsirep latigid sih\ndereets nilknarF elbatsnoC\n,ecnatsid eht otni ylirev\ngnikooL .erauqs nwot eht morf\nromalc lufplehnu eht draeh\negalliv eht ni refinoc yrevE'



// process.stdin.pipe(require('through')(function (buf) {
//     console.dir(buf.toString());
// }));

// $ stream-adventure run concat.js
// '\n.s'
// 'el'
// 'cit'
// 'rap\nlatigid'
// ' yticolev-hgih\ndettime ylirev ognid ybraen a\n,ylgnittiwnU .ecruos gnizinoi\neht etacol ot epocsirep\nlufplehnu sih '
// 'demusnoc\n'
// 'nilknarF elbatsnoC ,ecnatsid\neht otni yllacixodarapnu\ngnikooL .erauqs nwot eht morf\nromalc cirtemoidar eht draeh\negalliv eht ni refinoc yrevE'



// process.stdin.pipe(process.stdout);

// $ stream-adventure run concat.js

// .selcitrap
// gnicreip yticolev-hgih
// demusnoc yllacixodarapnu
// epotosi ybraen a ,ylgnittiwnU
// .ecruos lufplehnu eht etacol
// ot epocsirep latigid sih
// dettime nilknarF elbatsnoC
// ,ecnatsid eht otni ylirev
// gnikooL .erauqs nwot eht morf
// romalc gnisufnoc eht draeh
// egalliv eht ni yar-x yrevE



// var concat = require('concat-stream');
// var http = require('http');

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(concat(function (body) {
//             var obj = JSON.parse(body);
//             res.end(Object.keys(obj).join('\n'));
//         }));
//     }
//     else res.end();
// });
// server.listen(5000);

// $ curl -d '{"a":"b","c":"d"}' http://localhost:5000
// a
// c
