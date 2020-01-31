const express = require('express');
const app = express();
const PORT = 8080;

const morgan = require('morgan');

app.use(morgan('dev'));

app.use('/', function (req, res) {
    res.send('Tadammmm!');
});

app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
});wer


sdf


let ehat= 3;

module.exports = app;



