const net = require('net');
const server = net.createServer((c) => {
  console.log('server connected');

  c.on('end', () => {
    console.log('server disconnected');
  });

  c.write('Hello World\r\n');
  c.pipe(c);
});
server.listen(3000, function() { 
  console.log('server bound');
});

