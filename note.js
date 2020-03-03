const yargs = require('yargs');
const packageJSON = require('./package.json');
yargs.version(packageJSON.version);
const creator = require('./creator');

yargs.command({
    command: 'add',
    describe: 'add new unique note',
    builder: {
        title: { // название создаваемой заметки
            type: 'string', // тип создаваемй заметки
            demandOption: true, // мол этот параметр обязателен
            descride: 'Title of new note'
        },
        body: { // текст внутри заметки
            type: 'string',
            demandOption: true,
            describe: 'Content of new note'
        }
    },
    handler({title, body}) { // hadler - ссылка на функцию-обработчик
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
        console.log('LIST command: ');
    }
});
yargs.command({
    command: 'read',
    describe: 'read one note by its title',
    handler() {
        console.log('READ command: ');
    }
});
yargs.command({
    command: 'remove',
    describe: 'remove one note by its title',
    handler() {
        console.log('REMOVE command: ');
    }
});

yargs.parse();
