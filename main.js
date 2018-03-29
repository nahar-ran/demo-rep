
var http = require ('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(JSON.stringify(req.headers));
    res.end('<h1> hello world </h1>');
}).listen(8080);