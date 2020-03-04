const fs = require("fs");
const path = require('path');
const pathToNotesStorage = path.join('./notes.json');

const getAllNotes = () => {
    return JSON.parse(fs.readFileSync(pathToNotesStorage));
};
 
const createNote = (title, body) => {
    const note = {};
    note.title = title;
    note.body = body;
    const array = getAllNotes();
    // console.log(array); // проверка работоспособности
        const dublicateFinder = array.find(element => element.title === title);
        // console.log(dublicateFinder); // проверка результата работы команды
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
        console.log(array);
    } else {
        console.log("You haven't notes!");
    }
};

const readNote = (title) => {
    const array = getAllNotes();
    const noteFinder = array.find(element => element.title === title);
    if(noteFinder) {
        console.log("Your note: \n" + "Title: " + noteFinder.title + "\nBody: " + noteFinder.body);
    } else {
        console.log("Note isn't exist!");
    }
};

const removeNote = (title) => {
    const array = getAllNotes();
    const sortedNotes = array.filter(note => note.title !== title);
    // удаляем (фильтруем) заметку по заданному title
    if (array.length !== sortedNotes.length) {
        console.log("Note with title - " + title + " - succesfully deleted!");
        fs.writeFileSync(pathToNotesStorage, JSON.stringify(sortedNotes, null, '\t'));
    } else {
        console.log("Note, which you want delete isn't exist!");
    }
};

module.exports = { // экспорт созданных функций
     createNote, listOfNotes, readNote, removeNote
};