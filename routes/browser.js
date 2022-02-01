// brings in the module from NPM 
// and runs router function that returns a router object
const browser = require('express').Router();


// 
browser.get('/', (req, res) => {

});


// 
browser.post('/', (req, res) => {

});


// 
browser.put('/', (req, res) => {

});


// 
browser.delete('/:id', (req, res) => {

});



// testing wildcard setting for any alternative pages
browser.get('*', (req,res) => {
    res.json(`Unable to find this page.`);
    // res.sendFile(path.join(__dirname))
});

// export to use in server file
module.exports = browser;