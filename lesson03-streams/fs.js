var fs = require('fs');

//create readable stream
var rs = fs.createReadStream('./file1.txt');
//create a writable stream to store data in anotherfile
var ws = fs.createWriteStream('./file2.txt');
//read from one source and write to another
rs.pipe(ws);
var data = "";
//interpret the data as utf8 and return as a string
rs.setEncoding('utf8');
//listen to data events
rs.on('data', function(chunk) {
	data += chunk;
	console.log(chunk);
});

//listen for end event
rs.on('end', function() {
	console.log(data);

});