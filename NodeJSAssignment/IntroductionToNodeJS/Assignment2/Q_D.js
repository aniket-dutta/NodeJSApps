
const fs = require('fs');
const colors = require('colors');
const { strict } = require('assert');

let input = "";
let file1 = [];
let d1 = "sample.txt";
let d2 = "dummy.txt";

console.log("Enter the names of txt files seperated by space: \n");


process.stdin.on("data", (chunk) => {
    input += chunk;
    file = input.split(" ");
    console.log("copying from "+file[0].toString()+ " to "+file[1].toString());
    var readStream = fs.createReadStream(d1, 'utf8');
    var writerStream = fs.createWriteStream(d2, { flags: 'a' } ,'utf8');
    readStream.pipe(writerStream);
    console.log("write complete");  
});
process.stdin.on("end", () => {
    writerStream.end();
    process.exit();
});
