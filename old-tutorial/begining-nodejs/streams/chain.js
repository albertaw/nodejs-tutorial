var fs = require('fs');
var gzip = require('zlib').createGzip();
var inp = fs.createReadStream('example.txt');
var out = fs.createWriteStream('example.txt.gz');

inp.pipe(gzip).pipe(out);