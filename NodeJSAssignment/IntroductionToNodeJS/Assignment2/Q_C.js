let fs = require('fs');
let colors = require('colors');

fileName = process.argv.slice(2).toString().replace(/,/g, "");
console.log("(Asynchronous Mode) The contents of the file are in yellow : \n".bold);
//Asynchronous Mode
fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.yellow);    
});

//Synchronous Mode
try {
    let data = fs.readFileSync(fileName, 'utf8');
    console.log("(Synchronous Mode) The contents of the file are in blue : \n".bold);
    console.log(data.blue);
} catch(e) {
    console.log('Error:', e.stack);
}