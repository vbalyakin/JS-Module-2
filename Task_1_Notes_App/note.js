const yargs = require('yargs');
const packageJSON = require('./package.json');
yargs.version(packageJSON.version);
const creator = require('./creator');

yargs.command({ // АПГРЕЙД ДО ИСЧЕЗНОВЕНИЯ --body (глянуть yargs)
    command: 'add',
    describe: 'add new unique note',
    builder: {
        title: { // название создаваемой заметки
            type: 'string', // тип создаваемй заметки
            demandOption: true, // этот параметр (title) обязателен
            alias: "t",
            describe: 'Title of new note'
        },
        body: { // текст внутри заметки
            type: 'string',
            demandOption: true,
            alias: "b",
            describe: 'Content of new note'
        }
    },
    handler({
        title,
        body
    }) { // hadler - ссылка на функцию-обработчик
        // console.log('ADD command: ', {title, body});
        // в итоге, передавая два аргумента внутрь hadler мы получаем в консоль
        // ...значения title и body в порядке их вызова
        creator.createNote(title, body);
        // после экспорта из creator.js мы здесь вызываем функцию по созданию
        // ... заметки со своим title и body
    }
});
yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler() {
        creator.listOfNotes();
    }
});
yargs.command({
    command: 'read',
    describe: 'read one note by its title',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            alias: "t",
            describe: 'Title of new note'
        }
    },
    handler({
        title
    }) {
        creator.readNote(title);
    }
});
yargs.command({
    command: 'remove',
    describe: 'remove one note by its title',
    builder: {
        title: {
            type: 'string',
            demandOption: true,
            alias: "t",
            describe: 'Title of new note'
        }
    },
    handler({
        title
    }) {
        creator.removeNote(title);
    }
});

yargs.parse(); // читает из консоли данные