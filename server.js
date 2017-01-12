var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var moment = require('moment');

var auth = require('./controllers/auth');
var message = require('./controllers/message');
var checkAtuhenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

// Middleware
app.use(bodyParser.json());
app.use(cors);

// Requests
app.get('/api/message', message.get);
app.post('/api/message', checkAtuhenticated, message.post);
app.post('/auth/register', auth.register);

// Connections
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test", function(err, db) {
    if(!err) {
        console.log('We are connected to mongo');
    }
});

var server = app.listen(5000, function() {
    console.log('Server listens port', server.address().port);
});