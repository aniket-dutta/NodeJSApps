
const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, resp) {

    if (req.url === "/about") {
        fs.readFile(`${__dirname}/About.html`, (error, pgResp) => {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write("<h1>Home Page</h1><br /><br />To visit about section, enter: /about ");
        console.log("Server Error");
        resp.end();
    }
});

server.listen(3000);
 
console.log('Server Started listening on 3000');