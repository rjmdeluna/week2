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
app.get('/get', (req, res) => {
    res.send('Welcome Reader');
});


//Listening to the Server
app.listen(3000, () => console.log('Server running on port: http://localhost:3000'));