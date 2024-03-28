const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

module.exports = app;