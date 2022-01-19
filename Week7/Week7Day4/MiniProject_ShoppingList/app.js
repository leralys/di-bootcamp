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

app.get('/list', (req, res) => {
    // console.log(fsmodule.getList());
    let listObj = fsmodule.getList();
    res.json(listObj);
})
app.post('/list', (req, res) => {
    console.log(req.body);
    fsmodule.appendToFile(req.body);
    res.redirect('/list');
})

// app.post('/from', (req, res) => {
//     res.redirect(307, '/to');
//   });
//   app.post('/to', (req, res) => res.send(req.body.message));