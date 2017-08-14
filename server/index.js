var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');
var items = require('../db');
var router = require('./lib/routes');

var app = express();
var port = 8080;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(sessions({
  resave: false,
  saveUninitialized: true,
  secret: 'meow'
}));

app.use('/', router);

app.listen(port, function() {
  console.log('Listening on PORTOPOTTY ', port);
});