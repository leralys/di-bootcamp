const express = require('express');
const env = require('dotenv');
const path = require('path');
const DB = require('./modules/db');

const app = express();

env.config();

// app.use('/', express.static(`${__dirname}/public`));
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/about', (req, res) => {
    res.sendFile('./public/about.html', { root: __dirname })
    // res.sendFile(`${__dirname}/public/about.html`)
});

app.get('/welcome', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname })
})

app.get('/customers', (req, res) => {
    DB.getCustomers()
        .then(data => res.json(data))
        .catch(e => console.log(e));
})

app.get('/customer', (req, res) => {
    let { customerId } = req.query;
    DB.getCustomerById(customerId)
        .then(data => res.json(data))
        .catch(e => console.log(e));
})






app.listen(process.env.PORT, () => {
    console.log(`listening on port${process.env.PORT}`);
});