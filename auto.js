var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('this is git test\n');
}).listen(8060, '10.13.194.129');
console.log('Server running at http://10.13.194.129:8060/');
