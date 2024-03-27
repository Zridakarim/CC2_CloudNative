const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const host = process.env.HOST 
const PORT = process.env.PORT || 3009;
const URL_MONGOOSE = process.env.URL_MONGOOSE;
const DBNAME = process.env.DBNAME;
var app = express()

app.use(express.json());
mongoose.connect(URL_MONGOOSE, { useNewUrlParser: true})

const db = mongoose.connection;


db.on('erreur', (err) => console.log(`erreur de connection DB ${err}`));

db.once('open', () => console.log('connexion au succes avec DB'));

app.use('/', require('../auth-service/auth.js'));

app.listen(PORT, () => console.log(`Server is on port ${PORT}`))