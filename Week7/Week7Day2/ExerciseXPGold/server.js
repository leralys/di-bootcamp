// Create an index.html file. It contains a form with the method POST and the action to
// http://localhost:3001

// Use body parser and create a route using a POST method.
// Submit the form with some data and retrieve the data as a JSON Object.
// The data should be displayed on the page and also in the terminal.


const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', express.static(__dirname));

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})





app.listen(3001, (req, res) => {
    console.log('listening on port 3001');
})