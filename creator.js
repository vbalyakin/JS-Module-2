 const fs = require("fs");
 const path = require('path');

 const pathToNotesStorage = path.join('./notes.json');
 
 const getNote = () => {
    fs.writeFileSync(pathToNotesStorage, 'utf-8');
 }; // получение заметки

 const createNote = (title, body) => {
     getNote("title: " + `${title}` + "\nbody: " + `${body}`);
        // console.log("title: " + `${title}` + "\nbody: " + `${body}`);
 }; // создание заметки

 module.exports = {
     createNote
 };