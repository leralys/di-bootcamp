
// Exercise 1 : Express & JSON
// Instructions
// Use your server to get the static HTML file from the public folder

// Create two files : server.js and script.js.
// In the server.js file, create an express server and a route /, using the GET method.
// Add the below Javascript Object in the handler function of the route:
// 4. Use your server to get the static HTML file from the public folder.
// 5. Your server should run on http://localhost:3000/ to serve the HTML file.
// 6. In the script.js file, fetch your server and get the response. The response should be the JSON Object. console.log this object and display it on the HTML.

const express = require('express');
const app = express();

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

app.use('/', express.static(`${__dirname}/public`));

app.get('/user', (req, res) => {
    res.send(user);
});



// Exercise 2 : Express & Parameters
// Instructions
// In the server.js file, create your server using express.
// Create a route to the root of the app, using a GET request method.
// The path of the route should contain the route parameter id.
// The handler function of the route should respond with the value of the route parameter.
// Run on port http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object


// app.get('/:id', (req, res) => {
//     console.log(req.params);
//     res.send(req.params);
// });


// Exercise 3: Express & Static Files
// Instructions
// Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert)
// In a server.js file create your server using express.
// Use your server to get the static HTML file from the public folder
// Your server should run on http://localhost:3000/ to serve the HTML file


app.get('/static', (req, res) => {
    res.sendFile('./public/static/static.html', { root: __dirname });
});


app.listen(3000, () => {
    console.log('listening on port 3000');
});