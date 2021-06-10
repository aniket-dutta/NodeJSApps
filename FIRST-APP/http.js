const http = require( 'http' );

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('Hello world');
        res.end();
    }
});


server.on("connection", (socket) =>{
    console.log('New Connection')
});
server.listen(3000);
console.log("Listening to 3000")            
