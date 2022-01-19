const fs = require('fs');

// const path = './list.json';

const appendToFile = (jsonStr) => {
    // if this is the first time we submit the form
    // create a new file and append to it
    if (!fs.existsSync('./list.json')) {
        fs.writeFile('./list.json', `[${jsonStr}]`, err => {
            if (err) {
                console.log('error', err);
            }
        });
    } else {
        fs.appendFile('./list.json', `,${jsonStr}`, err => {
            if (err) {
                console.log('error', err);
            }
        })
    }
}

// const appendToFile = (jsonStr) => {
//     // if this is the first time we submit the form
//     // create a new file and append to it
//     if (!fs.existsSync('./list.json')) {
//         try {
//             fs.writeFile('./list.json', jsonStr)
//         }
//         catch (e) {
//             console.log('error', e);
//         }
//     } else {
//         try {
//             fs.appendFile('./list.json', jsonStr)
//         }
//         catch (e) {
//             console.log('error', e);
//         }
//     }
// }




module.exports = {
    appendToFile
}
// appendToFile('{"item": "q", "amount": "1"}');