var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    image_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = function (callback){
    Book.find().exec(callback)
}
