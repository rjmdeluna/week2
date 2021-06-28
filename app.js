const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');


//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//JSON to JS
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome Reader');
});

//DB
mongoose.connect(process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to DB!')
);

//Listening to the Server
app.listen(3000);