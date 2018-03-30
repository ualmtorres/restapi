var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/books');
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Hola a todos');
});

app.listen(3000);
console.log("Running en puerto 3000...")