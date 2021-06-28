const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Reader: {
        type: String,
        required: true
    },
    BookTitle: {
        type: String,
        required: true
    },
    BookDescription: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('myFirstDatabase', PostSchema);