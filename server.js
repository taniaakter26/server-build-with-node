var http = require('http');
var fs = require('fs');

var server=http.createServer(function (req,res){

    if (req.url=="/"){
        //This is Home Page
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h1>This is Home Page</h1>')
        res.end();
    }
    else if(req.url=="/about"){
        // This is About Page
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is About Page</h1>')
        res.end();
    }
    else if(req.url=="/contact"){
        //This is Contact Page
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>This is Contact Page</h1>')
        res.end();
    }
    else if (req.url === '/file-write') {
        // This is file-write Page
        fs.writeFile('demo.txt', 'hello world', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('hello world');
        });
    }
});
server.listen(3000);
console.log("server run successfully");
