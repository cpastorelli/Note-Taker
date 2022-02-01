// set up Express Server
const express = require('express');

// brought in routes from routes folders
const apiRoutes = require('./routes/apiRoutes');


// initializing the applicaion & setting the port
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Serve static files from public folder (HTML, CSS, IMG, ECT)
app.use(express.static('public'));

// middleware to access base routes with /api to be routed to apiRoutes
app.use('/api', apiRoutes);

// begins the server on the port number. Shows the port number in the console.log
app.listen(PORT, () => console.log(`View me on port: ${PORT}!`));
