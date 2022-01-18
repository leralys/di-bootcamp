const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(4000, () => {
    console.log('listening on port 4000 with a smile')
})

app.use('/', express.static(__dirname + '/public'));

app.get('/products', (req, res) => {
    res.redirect('/welcome');
})


app.get('/welcome', (req, res) => [
    res.sendFile(__dirname + '/public/about.html')
])

app.get('/login', (req, res) => {
    console.log(req.query);
    // res.json({ user: 'lera' });
    res.send('<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big_Red_WKU_Mascot_Image.jpg/330px-Big_Red_WKU_Mascot_Image.jpg">')
    // res.send('hello');
})

app.post('/login', (req, res) => {
    console.log(req.body);
})


// app.route('/login')
// .get((req,res )=> {

// })
// .post((req, res) => {

// })


app.get('/login/:id', (req, res) => {
    // console.log(req.params);
    res.send(`hello ${req.params.id}`)
})