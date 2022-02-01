// brings in the module from NPM 
// and runs router function that returns a router object
const browser = require('express').Router();


// 
browser.get('/browser', (req, res) => {

});


// 
browser.post('/browser', (req, res) => {

});


// 
browser.put('/browser', (req, res) => {

});


// 
browser.delete('/browser/:id', (req, res) => {

});



// testing wildcard setting for any alternative pages
browser.get('*', (req,res) => {
    res.json(`Unable to find this page.`);
    // res.sendFile(path)
});

// export to use in server file
module.exports = browser;