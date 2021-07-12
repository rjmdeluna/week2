const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');


//Import Routes
const postsRoute = require('./routes/posts.js');

app.use(bodyParser.json());
app.use('/posts', postsRoute);
//JSON to JS
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES
app.get('/',(req, res) => {
    res.send("Hello to you");
});


//Listening to the Server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.warn('Server running on http://localhost:${PORT}');
});