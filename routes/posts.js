const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('List of Book Recommendations');
});

router.post('/posts', (req, res) => {
    const post = new Post({
        Reader: req.body.Reader,
        BookTitle: req.body.BookTitle,
        BookDescription: req.body.BookDescription
    })
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    });
});

module.exports = router;

