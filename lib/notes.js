const fs = require("fs");
const path = require("path");

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
}

function findId(id, notesArray) {
    const search = notesArray.filter(notes => notes.id === id);
    return search;
}

module.exports = {createNote, findId,}