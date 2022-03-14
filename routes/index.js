const router = require('express').Router();
const collection = require('../db/collection');


// import routers for /notes
router.get('/notes', (req, res) => {
    collection.getNotes().then((note) => {
        return res.status(200).json(notes);
    })
    .catch((err) => {
        console.log(`Something went wrong! Error Msg: ${err}`);
        res.status(500).json(err);
    });
});

router.delete('/notes/:id', (req, res) => {
    collection.deleteNote(req.params.id)
    .then(() => { return res.status(200).json({message: 'Note has been deleted!'})})
    .catch((err) => {
        console.log(`Something went wrong! Error Msg: ${err}`);
        res.status(500).json(err);
    });
});

router.post('/notes', (req, res) => {
    collection.newNote(req.body)
    .then(() => { return res.status(200).json(note)})
    .catch((err) => {
        console.log(`Something went wrong! Error Msg: ${err}`);
        res.status(500).json(err);
    });
});

module.exports = router;