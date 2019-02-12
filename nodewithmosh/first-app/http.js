const http = require('http');

const server = http.createServer();
//low level
server.on('connection',(socket) => {

     console.log('New Connection', socket);

});

server.listen(3000);