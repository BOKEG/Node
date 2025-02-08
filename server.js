var http = require("http")

http.createServer(function name(req, res) {
    res.writeHead (200, {'content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!!</h1>\n');
    
}).listen(3000);

console.log("server is running http://localhost:3000")