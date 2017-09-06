
var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3101;

// set up access to index.html
app.use(express.static(path.join(__dirname, './')));
app.get('/', function(req, res) {
	console.log('Getting index.html');
  res.sendFile(path.join(__dirname, './', 'histogram-app.html'));
});

app.listen(port);
console.log("App listening on port " + port);