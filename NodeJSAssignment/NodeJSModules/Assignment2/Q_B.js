const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("download.html");

const request = http.get("http://www.google.com/", (response) => response.pipe(file));

file.on("finish", () => console.log('File downloaded to "download.html"'));