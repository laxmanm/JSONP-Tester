var express = require("express");
var fs = require("fs");

var server = express();
//server.enable("jsonp callback");
server.set("jsonp callback", true);
server.get("/", function(req, res){
	res.sendfile(__dirname+'/index.html');
});
server.get("/jsonp", function(req, res) {
	fs.readFile( __dirname + '/test.json', function (err, data) {
		if (err) {
			throw err; 
		}
		console.log(data.toString());
		res.jsonp(JSON.parse(data.toString()));
	});
});
server.listen('8000');
