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

// Get Book by id
module.exports.getBookById = function (id, callback){
    Book.findById(id).exec(callback)
}

// Add Book
module.exports.addBook = function (book, callback){
    Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function (id, book, callback){
    var query = {_id: id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url
    };
    Book.findOneAndUpdate(query, update, callback);
}