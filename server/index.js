var express = require('express');
var http = require('http');

var app = express();

app.use('/static', express.static('../static'));

app.get('/', function (req, res) {
    res.sendfile('./views/index.html');
});

app.listen(process.env.PORT || 3000);