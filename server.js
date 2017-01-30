
var logger = require('morgan');
var express = require('express');
var routes = require('./routes/crudadmin');
var bodyParser=require('body-parser');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use('/mymovie', routes)

var server = app.listen(8000, function () {
  console.log('listening on port 8000');
});
