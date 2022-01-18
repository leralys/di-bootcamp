// Exercise 1: Shopping Project
// Instructions

// We will be building a simple application of shopping list.
// Each item is an object that contains a name and a price. This item will be saved to an array.
// Therefore our shopping list is an array of objects.
// Our application should have the following routes:

// GET /items - this should respond with a list of shopping items.
// GET /items/:id - this route should display a single item’s name and price
// POST /item - this route should accept form data and add it to the shopping list. (ie. add it to the array)

// Bonus : For the two first instructions, instead of sending an array of object, send an HTML file
// 

const express = require('express');
const app = express();
const db = require('./items');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/item', express.static(__dirname));

// todo some error checking here
app.post('/item', (req, res) => {
    const obj = req.body;
    db.items.push(obj);
    res.redirect('/items');
})

app.get('/items', (req, res) => {
    res.json(db.items);
});


app.get('/items/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(404).send('not found');
    } else {
        const search = db.items.find(el => el.id == id);
        if (search == undefined) {
            res.status(404).redirect('/items');
        }
        res.json(search);
    }
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, don\'t know this address');
})


app.listen(8080, (req, res) => {
    console.log('listening on port 8080');
})