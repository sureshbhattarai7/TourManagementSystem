const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const tourRoute = require('./Router/tourRoute');

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRoute);

module.exports = app;