// brings in the module from NPM 
// and runs router function that returns a router object
const notes = require('express').Router();


// 
notes.get('/notes', (req, res) => {

});


// 
notes.post('/notes', (req, res) => {

});


// 
notes.put('/notes', (req, res) => {

});


// 
notes.delete('/notes/:id', (req, res) => {

});

// testing wildcard setting for any alternative pages
notes.get('*', (req,res) => {
    res.json(`Unable to find this page.`);
    // res.sendFile(path)
});

// export to use in server file
module.exports = notes;