// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('I am listening to a request');
//     console.log(req.headers);
//     res.end('Hello from my first server')
// })

// server.listen(3000, () => {
//     console.log('server is listening to port 3000');
// })


const express = require('express');
const data = require('./products');
const users = require('./getUsers');
const app = express();


// http://localhost:3000/api/products
// app.get('/api/products', (req, res) => {
//     //res.json automatically stringifys the arr of objects
//     res.json([
//         { name: 'iPhone', price: 800 },
//         { name: 'iPad', price: 1200 },
//         { name: 'iWatch', price: 600 }
//     ])
// });

app.get('/api/lera', (req, res) => {
    res.json([
        { name: 'Lera' }
    ])
})

app.get('/api/products', (req, res) => {
    // or we can use res.send because ->
    // When the parameter is an Array or Object,
    // Express responds with the JSON representation:
    res.json(data.products);
});

app.get('/api/products/:productId', (req, res) => {
    console.log(req.params.productId);
    const id = Number(req.params.productId);
    const product = data.products.find(item => item.id == id);
    res.json(product);
})

app.get('/api/users', (req, res) => {
    // using module that fetches the api
    users.getUsers()
        .then(getUsersRes => {
            res.send(getUsersRes);
        })
        .catch(e => console.log(e));
})

app.use('/', express.static(__dirname + '/public'))



// app.get('/login', (req,res) => {
//   console.log(req.query);
//   res.json({message:'ok from get'});
// })
// app.post('/login',(req,res)=>{
//   console.log(req.body);
//   res.json({user:req.body.username});
// })


app.listen(3000, () => {
    console.log('listening on port 3000')
})