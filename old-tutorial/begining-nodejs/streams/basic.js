var fs = require('fs');
var readableStream = fs.createReadStream('./example.txt');
var ws = fs.createWriteStream('message.txt');
ws.write('foo bar');
ws.end('bas');
readableStream.pipe(process.stdout);