const fs = require('fs');

const path = './list.json';

let obj = {
    table: []
};

const appendToFile = (jsonStr) => {
    obj.table.push(jsonStr);
    let json = JSON.stringify(obj);
    // if this is the first time we submit the form, and there is no file ->
    // create a new file and append to it
    if (!fs.existsSync(path)) {
        fs.writeFile(path, json, 'utf8', err => {
            if (err) {
                console.log('error', err);
                return;
            }
        });
    } else {
        fs.readFile(path, 'utf8', function readFileCallback(err, data) {
            if (err) {
                console.log('error', err);
            } else {
                //may need to wrap JSON.parse into a try catch block in case of parsing bad json
                obj = JSON.parse(data); //now it an object
                obj.table.push(jsonStr); //add some data
                json = JSON.stringify(obj); //convert it back to json
                fs.writeFile(path, json, 'utf8', err => { // write it back 
                    if (err) {
                        console.log('error', err);
                    }
                });
            }
        });
    }
}

// has to be synchronous in order to finish reading file before the responce is sent
const getList = () => {
    if (!fs.existsSync(path)) {
        return (404);
    }
    const file = fs.readFileSync(path, 'utf8')
    return JSON.parse(file);
}


module.exports = {
    appendToFile,
    getList
}