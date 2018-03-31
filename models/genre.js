var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
module.exports.getGenres = function (callback){
    Genre.find().exec(callback);
}

// Add Genre
module.exports.addGenre = function (genre, callback){
    Genre.create(genre, callback);
}

// Update Genre
module.exports.updateGenre = function (id, genre, callback){
    var query = {_id: id};
    var update = {name: genre.name};
    Genre.findOneAndUpdate(query, update, callback);
}

// Delete Genre
module.exports.deleteGenre = function (id, callback){
    Genre.findByIdAndRemove(id, callback);
}