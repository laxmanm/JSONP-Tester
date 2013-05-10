var express = require("express");
var fs = require("fs");

var server = express();
server.set("jsonp callback", true);
server.get("/:phone", function(req, res) {
	fs.readFile( __dirname + '/resources/'+req.params.phone, function (err, data) {
		if (err) {
			throw err; 
		}
		console.log(data.toString());
		res.jsonp(JSON.parse(data.toString()));
	});
});
server.listen('8000');
