const main = require('./main');
const http = require('http');

// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.
// Use the exported module in a script.js file.
// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const b = 5;

// console.log(main.largeNumber + b);

// Part II:
// In a script.js file create a server with http and console.log a message.
// Set the response header, and respond by the result from Part I.
// Also write in a head tag a message like ‘Hi there at the frontend’
// Your server should run on http://localhost:3000/



const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`My Module is <br> ${main.largeNumber + b} <html><body><h1>Hi there at front end</h1></body></html>`);
}

const server = http.createServer(requestListener);
server.listen(3000);

// Part III:
// Create a file named main.js and create a function that returns the current date and time. Export the module.
// Use the exported module in a script.js file.
// Create a server with http, set the response header and respond with a message that outputs the current date and time from the exported module.
// Your server should run on http://localhost:8080/

const displayDateAndTime = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h3>${main.getCurrDateAndTime()}</h3></body></html>`);
}

const server1 = http.createServer(displayDateAndTime);
server1.listen(8080);