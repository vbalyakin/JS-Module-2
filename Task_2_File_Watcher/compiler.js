const chokidar = require('chokidar');
const path = "./Task_2_File_watcher";
const watcher = chokidar.watch(path, {
    persistent: true
});

watcher.on('add', path => log(`In ${path} file OR directory has been added`));
watcher.on('change', path => log(`In ${path} file OR directory has been changed`));
watcher.on('unlink', path => log(`In ${path} file OR directory has been removed`));
