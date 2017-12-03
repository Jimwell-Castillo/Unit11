var server = require("http");
server.createServer(function (request, response)
{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello World, my name is John Smith\n');
}
).listen(8001);
//Console print message
console.log('Server running at http://127.0.0.1:8001/');

