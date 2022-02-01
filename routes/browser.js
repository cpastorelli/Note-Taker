// brings in the module from NPM 
// and runs router function that returns a router object
const browser = require('express').Router();
const path = require('path');


// when going to /notes in browser, notes.html will be loaded
browser.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// testing wildcard setting for any alternative paths
browser.get('*', (req,res) => {
    console.log(`unidentified path accessed, redirected to index.html`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export to use in server file
module.exports = browser;