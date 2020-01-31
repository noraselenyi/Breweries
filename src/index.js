/* eslint-disable no-undef */
const express = require('express');
const app = express();
const PORT = 8080;

const morgan = require('morgan');
require("dotenv").config();


app.use(morgan('dev'));
app.use(express.json());

const router = require("./routes/index");
app.use(router);

// app.use('/', function (req, res) {
//     res.send('Tadammmm!');
// });

app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
});

module.exports = app;
