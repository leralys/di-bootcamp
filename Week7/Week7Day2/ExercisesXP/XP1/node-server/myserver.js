// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/


const htmlTags = `<h1>This is my first responce</h1>
                  <h2>This is my first responce</h2>
                  <h3>This is my first responce</h3>`

const http = require('http');

const htmlTagsSender = (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.writeHead(200);
    res.end(htmlTags);
}

const myserver = http.createServer(htmlTagsSender);
myserver.listen(3000);  
