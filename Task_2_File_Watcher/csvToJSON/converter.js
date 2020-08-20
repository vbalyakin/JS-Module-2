const fs = require("fs"),
    path = require("path"),
    csv = require("csvtojson"),
    pathCSV = path.join(__dirname, "./MOCK_DATA.csv"),
    pathCSVSecond = path.join(__dirname, "./MOCK_DATA_2.csv");

const importDataSync = () => {
    const promiseFirst = new Promise(resolve => resolve(
            csv()
            .fromFile(pathCSV)
        )),
        promiseSecond = new Promise(resolve => resolve(
            csv()
            .fromFile(pathCSVSecond)
        ));
    Promise.all([promiseFirst, promiseSecond])
        .then(value => {
            console.log(value);
        })
        .catch(error => console.error("ERROR in Promise.all!", error));
};

const importData = () => {
    const promiseFirst = new Promise(resolve => resolve(
            csv().fromFile(pathCSV)
        )),
        promiseSecond = new Promise(resolve => resolve(
            csv().fromFile(pathCSVSecond)
        ));
    promiseFirst
        .then(jsonObject => {
            console.log(jsonObject);
        })
        .catch(error => console.error("ERROR in FIRST PROMISE!", error));
    promiseSecond
        .then(jsonObject => {
            console.log(jsonObject);
        })
        .catch(error => console.error("ERROR in SECOND PROMISE!", error));
};

importData();
importDataSync();
