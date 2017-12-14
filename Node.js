var http = require('http');

console.log("Server is created and listening on port 8080...");

http.createServer(function(req,res) {
	res.write("Voila...!!");
}).listen(8080);