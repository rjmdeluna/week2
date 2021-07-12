const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');
const mongoose = require('mongoose');
const { restart } = require('nodemon');
require('dotenv/config');

const app = express();

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
    if (err) console.log(err)
    if (!err) console.log("Connected to DB");
});

//GET
router.get('/', async(req, res) => {
    const x = await Post.find();
    res.json(x);
});
app.use(express.json());


//POST
router.post('/', (req, res) => {
    const post = new Post({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        phone_number: req.body.phone_number
    });
    post.save().then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })
});

module.exports =router;