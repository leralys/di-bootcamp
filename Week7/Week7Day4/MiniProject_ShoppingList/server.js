const express = require('express');
const app = express();

app.listen(8080, (req, res) => {
    console.log('listening on port 8080');
})

module.exports = app;