var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

var myBuffer = fs.readFileSync("index.html", "utf8");


console.log("reading my index file: " + myBuffer);

app.get('/', function(request, response) {
  response.send(myBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
