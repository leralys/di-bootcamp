// Use Express to create a few routes:
// The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
// If the parameter is not a string (ie. numbers or else), set the status to 404.
// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.


const express = require('express');
const app = require('./server');
//To parse form data in POST request body:
app.use(express.urlencoded({ extended: false }))


app.get('/aboutMe/:hobby', (req, res) => {
    const { hobby } = req.params;
    if (!isNaN(Number(hobby))) {
        res.status(404).send('status 404');
    } else {
        res.send(hobby);
    }
});

app.get('/pic', (req, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
});

app.get('/form', (req, res) => {
    res.sendFile('./public/form.html', { root: __dirname });
})

app.post('/formData', (req, res) => {
    console.log(req.body);
    const { email, message } = req.body;
    res.send(`${email} sent you a message ${message}`);
})

app.get('*', (req, res) => {
    res.status(404).send('wrong path!')
})
