const fs = require('fs')
const path = require('path')

let onlyFiles = 0;
let onlyFolder = 0;
//const folderPath = __dirname;
const folderPath = 'C:/Users/DuttaAni/Documents/NodeJSAssignment';
fs.readdir(folderPath, (error, files) => { 
    let totalFiles = files.length; 
    
    files.map( (x) => {
        
        if(path.extname(x)){
            onlyFiles++;
        }
        });
    //console.log(files);
    onlyFolder = totalFiles - onlyFiles;
    console.log("Total number of contents : " + totalFiles);
    console.log("Total number of contents : " + onlyFiles);
    console.log("Total number of contents : " + onlyFolder);
});

