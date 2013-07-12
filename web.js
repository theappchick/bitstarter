var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

var myContent = fs.readFileSync("index.html", "utf8");


console.log("reading my index file: " + myContent);

app.get('/', function(request, response) {
  response.send('Hello World3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
