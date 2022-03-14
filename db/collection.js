const {v4: uuidv4} = require('uuid');
const fs = require('fs');
const notes = require('../routes/notes');


class Collection {
    read() {
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            const grabbedNotes;

            try {
                grabbedNotes = [].concat(JSON.parse(notes));
            } catch(err) {
                grabbedNotes = [];            }
        })
    }

    newNote(note) {
        const { title, inputText} = note;

        if (!title || !inputText) {
            console.log(`Your note must have both a body and a title.`);
        }
    
        const newNote = { title, text, id: uuidv4() };
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updateNotes) => this.write(updateNotes))
        .then(() => newNote);
    }

    deleteNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filtered) => this.write(filtered));
    }
}