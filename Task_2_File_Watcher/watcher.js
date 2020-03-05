const fs = require('fs');
const path = require('path');
const pathToFile = "watcher.js";

const dirName = path.dirname(pathToFile); // родительсмкая директория файла
const baseName = path.basename(pathToFile); // имя файла
const extName = path.extname(pathToFile); // расширение файла

const watchForAddFile = (command) => {

};

// module.exports = {
//     watchForAddFile
// };

console.log (dirName);