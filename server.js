// set up Express Server
const express = require('express');

// initializing the applicaion & setting the port
const app = express();
const PORT = 3001;

// for POST and PUT requests: 
// asking server toaccept or sstore the data enclosed in the body (req.body) of that request
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));


// begins the server on the port number. Shows the port number in the console.log
app.listen(PORT, () => console.log(`View me on port: ${PORT}!`));
