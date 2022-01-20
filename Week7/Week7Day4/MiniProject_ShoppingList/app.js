const app = require('./server');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fsmodule = require('./modules/fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// root rout serves the form
app.use('/', express.static(path.join(__dirname, '/public')));
//display the list of items
app.use('/mylist', express.static(path.join(__dirname, '/public/list.html')));

// gets data from 'api' - reads the file and sends the result as a json string
app.get('/list', (req, res) => {
    let listObj = fsmodule.getList();
    // won't send any data if we do not have a json file yet
    if (listObj == 404) {
        res.send(`<p>Sorry, your list is empty</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gr%C3%B8nlandshund_in_Sisimiut_%287%29.JPG/640px-Gr%C3%B8nlandshund_in_Sisimiut_%287%29.JPG"/>`)
    }
    else {
        res.json(listObj);
    }
});

// takes the data from the form and appends it to the json file
app.post('/list', (req, res) => {
    console.log(req.body);
    fsmodule.appendToFile(req.body);
    res.redirect('/list');
});