class FileWatcher {
  watchForFile() {
    const chokidar = require("chokidar"),
      fs = require("fs"),
      path = require("path"),
      pathToFile = path.join(__dirname, "MOCK_DATA (2).csv"),
      pathToWrite = path.join(__dirname, "logFile.json"),
      watcher = chokidar.watch(pathToFile, {
        persistent: true,
        awaitWriteFinish: {
          stabilityThreshold: 2000 
        },
      }),
      addMessage = `File ${pathToFile} has been added`,
      changeMessage = `File ${pathToFile} has been changed`,
      removeMessage = `File ${pathToFile} has been removed`;

    const writeChangesToJSON = (message) => {
      return fs.writeFileSync(pathToWrite, JSON.stringify(message, null, " "));
    };

    watcher.on("add", pathToFile => writeChangesToJSON(addMessage));
    watcher.on("change", pathToFile => writeChangesToJSON(changeMessage));
    watcher.on("unlink", pathToFile => writeChangesToJSON(removeMessage));
  }
}

module.exports = new FileWatcher();
