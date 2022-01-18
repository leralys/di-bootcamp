const express = require('express');
const DB = require('./modules/db');
const cors = require('cors');

const app = express();
app.use(cors());



app.listen(8080, (req, res) => {
    console.log('listening on port 8080, the weather is good today!')
})

app.get('/countries', (req, res) => {
    // DB.getCountries(db)
    DB.getCountries()
        .then(data => {
            res.json(data);
        })
        .catch(e => console.log(e));
})

app.use('/', express.static(__dirname + '/public'));