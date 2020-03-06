const fs = require("fs"),
    path = require("path"),
    pathToNotesStorage = path.join("./notes.json");

const getAllNotes = () => {
    return JSON.parse(fs.readFileSync(pathToNotesStorage));
};

const createNote = (title, body) => {
    const note = {},
        array = getAllNotes();
    note.title = title;
    note.body = body;
    const dublicateFinder = array.find(element => element.title === title);
    if (dublicateFinder) {
        console.log("You create dublicate of note!");
    } else {
        array.push(note);
        fs.writeFileSync(pathToNotesStorage, JSON.stringify(array, null, '\t'));
    }
};

const listOfNotes = () => {
    const array = getAllNotes();
    if (array.length !== 0) {
        array.forEach(element => {
            console.log(element);
        });
    } else {
        console.log("You haven't notes!");
    }
};

const readNote = (title) => {
    const array = getAllNotes(),
        noteFinder = array.find(element => element.title === title);
    result = noteFinder ? `Your note:\n${title} - ` + noteFinder.body : "Note isn't exist!";
    console.log(result);
};

const removeNote = (title) => {
    const array = getAllNotes();
    const sortedNotes = array.length !== 0 ? array.filter(note => note.title !== title) : [];
    if (array.length !== sortedNotes.length) {
        console.log(`Note with title -  ${title} - succesfully deleted!`);
        fs.writeFileSync(pathToNotesStorage, JSON.stringify(sortedNotes, null, '\t'));
    } else {
        result = array.length === 0 ? "No any notes for 'delete' operation!" : "Note, which you want delete isn't exist!";
        console.log(result);
    }
};

module.exports = {
    createNote,
    listOfNotes,
    readNote,
    removeNote
};
