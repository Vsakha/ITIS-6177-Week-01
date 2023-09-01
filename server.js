const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end('Hi, I have created a basic server!\n');

});
const port = 3000
server.listen(port, () => {
    console.log('Check my Server at http://localhost:3000/');

});
