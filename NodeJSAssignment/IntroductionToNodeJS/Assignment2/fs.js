const fs = require('fs');
var data = '';

var readStream = fs.createReadStream('sample.txt', 'utf8');

var writerStream = fs.createWriteStream("dummy.txt", 'utf8');
readStream.pipe(writerStream);

console.log("Program Ended");