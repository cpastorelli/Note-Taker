// brings in the module from NPM 
// and runs router function that returns a router object
const router = require('express').Router();
const path = require('path');


// when going to /notes in browser, notes.html will be loaded
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// testing wildcard setting for any alternative paths
router.get('*', (req,res) => {
    console.log(`unidentified path accessed, redirected to index.html`);
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export to use in server file
module.exports = browser;