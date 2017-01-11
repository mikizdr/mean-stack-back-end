var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.post('/api/message', function(req, res) {
    console.log(req.body);
    res.status(200);
});

var server = app.listen(5000, function() {
    console.log('Server listens port', server.address().port);
});