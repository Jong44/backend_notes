const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const NoteRoutes = require('./routes/NoteRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/notes', NoteRoutes);
app.use('/auth', AuthRoutes);


module.exports = app;

