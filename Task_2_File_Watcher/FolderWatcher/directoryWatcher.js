class DirectoryWatcher {
  watchForFolder() {
    const chokidar = require("chokidar"),
      fs = require("fs"),
      path = require("path"),
      pathToDirectory = path.join(__dirname, "../FolderWatcher/"),
      pathToWrite = path.join(__dirname, "./logDirectory.json"),
      watcher = chokidar.watch(pathToDirectory, {
        persistent: true,
        awaitWriteFinish: {
          stabilityThreshold: 500
        },
      }),
      addMessageDirectory = `File in directory ${pathToDirectory} has been added`,
      changeMessageDirectory = `File in directory ${pathToDirectory} has been changed`,
      removeMessageDirectory = `File in directory ${pathToDirectory} has been removed`;

    const writeChangesToJSON = (message) => {
      return fs.writeFileSync(pathToWrite, JSON.stringify(message, null, " "));
    };

    watcher.on("add", pathToFile => writeChangesToJSON(addMessageDirectory));
    watcher.on("change", pathToFile => writeChangesToJSON(changeMessageDirectory));
    watcher.on("unlink", pathToFile => writeChangesToJSON(removeMessageDirectory));
  }
}

module.exports = new DirectoryWatcher();
