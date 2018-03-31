var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Hola a todos');
});

app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    })

});

app.listen(3000);
console.log("Running en puerto 3000...")