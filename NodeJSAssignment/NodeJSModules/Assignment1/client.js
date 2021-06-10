const net = require('net');
const client = net.connect(3000, () => { 
  console.log('client connected \n');
  
    });
    client.on('data', (data) => {
        console.log(data.toString());
    client.end();
    });
    client.on('end', function() {
        console.log('client disconnected');
});