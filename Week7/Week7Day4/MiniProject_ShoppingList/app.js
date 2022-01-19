const app = require('./server');
const express = require('express');
const path = require('path');
const fsmodule = require('./modules/fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// root rout serves the form
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/list', (req, res) => {
    res.send('ok there');
})
app.post('/list', (req, res) => {
    const obj = JSON.stringify(req.body);
    console.log(obj);
    // console.log(fsmodule);
    fsmodule.appendToFile(obj);
    res.redirect('/list');
})
