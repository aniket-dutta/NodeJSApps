const fs = require('fs');
let colors = require('colors');

let dir = process.argv.slice(2).toString().replace(/,/g, ""); // handling, if there is space in any folder name

console.log( `\nDirectory Given is : "${dir.blue}"`.grey);
fs. readdir( dir, (err, items) => {
    if (err) throw err;
    console.log(items);
});

