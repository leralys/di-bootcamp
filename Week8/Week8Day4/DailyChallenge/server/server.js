// const axios = require('axios');
const cors = require('cors');
const express = require('express');
const env = require('dotenv');

const app = express();

env.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    // print the HTTP method and the URL of every request
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/api/hello', (req, res, next) => {
    res.send('Hello From Express');
});

app.post('/api/world', (req, res, next) => {
    console.log(req.body);
    const { userMessage } = req.body;
    res.json({ serverAnswer: `I received your POST request. This is what you sent me:  ${userMessage}` });
})


//wrong route
app.get('*', (req, res) => {
    res.redirect('https://http.cat/404');
});




// Server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})