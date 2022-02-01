// brings in the module from NPM 
// and runs router function that returns a router object
const notes = require('express').Router();
const collection = require('../db/collection');

// gets all of the notes
notes.get('/notes', (req, res) => {
    collection
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
});

// creates a new note
notes.post('/notes', (req, res) => {
    collection
        .newNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })

});

// deletes a note based on id
notes.delete('/notes/:id', (req, res) => {
    collection 
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true}))
        .catch((err) => {
            res.status(500).json(err);
            console.log(err);
        })
});

// testing wildcard setting for any alternative pages
notes.get('*', (req,res) => {
    res.json(`Unable to find this page.`);
});

// export to use in server file
module.exports = notes;