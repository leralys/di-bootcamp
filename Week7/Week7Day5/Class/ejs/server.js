const express = require('express');
const env = require('dotenv');
const cors = require('cors')
const app = express();

env.config();
app.use(cors());
app.set('view engine', 'ejs')


// app.get('/', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/shop', (req, res) => {
    const products = [
        { id: 1, name: 'iPhone', price: 500 },
        { id: 2, name: 'iPad', price: 600 },
        { id: 3, name: 'iWatch', price: 400 },
        { id: 3, name: 'EarPods ', price: 300 }
    ]
    // res.render('shop', { data: products });
    res.render('shop', { products });
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})