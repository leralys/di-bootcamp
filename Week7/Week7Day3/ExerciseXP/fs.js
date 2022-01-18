// Exercise 1 : Reading From A File In Node.JS

// Instructions
// Create a text file and write something inside (example: ‘Some Text To See’)
// Create an fs.js file, and inside use the Node JS File System to read the text file and console.log the output in the terminal


const fs = require('fs');

// fs.readFile('./text.txt', (err, data) => {
//     if (err) {
//         console.log('error', err);
//     }
//     console.log(data.toString());
// })

// Exercise 2 : Writing Files With Node JS
// Instructions
// Create an fs.js file, and use the Node js File System to create a new text file and write to it.
// Use the Node js File System to append some other text to the text file. (Example:”Buy orange juice”)
// Use the Node js File System to delete the file.

// fs.writeFile('data.txt', 'Bla bla', err => {
//     if (err) {
//         console.log('error', error);
//     }
// })

// fs.appendFile('./data.txt', ' Buy orange juice', err => {
//     if (err) {
//         console.log('error', err);
//     }
// })


fs.unlink('./data.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('deleted');
})
