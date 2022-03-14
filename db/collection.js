const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const util = require('util');
const rFileAsync = util.promisify(fs.readFile);
const wFileAsync = util.promisify(fs.writeFile);


class Collection {
    constructor() {
        this.lastId = 0;
    }

    read() {
        return rFileAsync('db/db.json', 'utf8');
    }

    write(note) {
        return wFileAsync('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read()
        .then(notes => {
            let grabbedNotes;

            try { 
                grabbedNotes = [].concat(JSON.parse(notes));
            } catch(err) {  
                console.log(`Something went wonky. ${err}`);
                grabbedNotes = [];
            }
            return grabbedNotes;
        })
    }

    newNote(note) {
        const { title, inputText} = note;

        if (!title || !inputText) {
            console.log(`Your note must have both a body and a title.`);
            throw new Error('Title and Body must have something in them.');
        }
    
        const newNote = { title, inputText, id: uuidv4() };

        return this.getNotes()
        .then(notes => [...notes, newNote])
        .then(updateNote => this.write(updateNote))
        .then(() => newNote);
    }

    deleteNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filtered) => this.write(filtered));
    }
}

module.exports = new Collection();