var http = require('http');
var fs = require('fs');

var port = 8080;

http.createServer(function (request, response){
    //read in file
    fs.readFile('index.html', function(err,content){
        if(err){
            response.writeHead(404,{'Content-Type': 'text/html'});
            response.end('failed');
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(content);
    });
}).listen(port);

//Tell the server it started
console.log('server running on port ' + port);

//Non - Blocking Code
