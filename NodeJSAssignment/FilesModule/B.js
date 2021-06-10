var fs = require('fs');
var path = require('path');

var dirPath = 'C:/Users/DuttaAni/Documents/NodeJSAssignment';
var filesList;
var countFiles =0 ;
var countDir = 0;
var findFiles = fs.readdir(dirPath, function(err, files){
  filesList = files.filter(function(e){
	//console.log(path.extname(e).toLowerCase());
    //return (path.extname(e).toLowerCase() === '.js');
	if(path.extname(e).toLowerCase()){
		countFiles++;
		//console.log('returned files'+countFiles);
	}
	/*else {
		countDir++;
		console.log('returned directory');
	}
	console.log(countFiles);*/	
	//return countFiles;
	
  });
  console.log(countFiles  +" "+ countDir);
}); 