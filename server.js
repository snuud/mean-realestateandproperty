require('./api/data/dbconnection.js');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

var port = process.env.PORT || 8080;
app.set('port', port);

app.use(function(req, res, next){
    console.log(req.method + ' ' + req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', routes);

var server = app.listen(app.get('port'), function(){
    var serverPort = server.address().port;
    console.log('Server running on port ' + serverPort);
});

