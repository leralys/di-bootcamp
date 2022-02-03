const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const path = require('path');
const DB = require('./modules/db');
const fs = require('fs');

const app = express();

env.config();
app.use(cors());

// middleware
// const logger = (req, res, next) => {
//     let user = req.query.username;
// // || req.body.username || req.params.username
//     fs.appendFile('./log', user + '\n', err => {
//         if (err) {
//             console.log(err)
//         }
//     })
//     next();
// }

// to use only on countries
// app.use('/countries', logger);

app.use((req, res, next) => {
    // print the HTTP method and the URL of every request
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get('/api/countries', async (req, res) => {
    // console.log(req.headers);
    const data = await DB.getCountries();
    res.json(data);
})

app.get('/api/cities/:id', async (req, res) => {
    const { id } = req.params;
    const data = await DB.getCitiesById(id);
    res.json(data);
})

// to use the route with the middleware
// app.get('/api/cities/:id', logger, async (req, res) => {
//     const { id } = req.params;
//     const data = await DB.getCitiesById(id);
//     res.json(data);
// })


//wrong route
// app.get('*', (req, res) => {
//     res.redirect('https://http.cat/404');
// });


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})