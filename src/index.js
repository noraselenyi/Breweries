/* eslint-disable no-undef */
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
});

module.exports = app;
