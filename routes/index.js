const express = require('express');

// import routers for /notes
const notesRouter = require('./notes');
const browserRouter = require('');

const app = express();

app.use('/', browserRouter);
app.use('/notes', notesRouter);



module.exports = app;