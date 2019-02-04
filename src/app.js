const express = require('express');

const helloRoutes = require('./routes/hello');

const app = express();

app.use('/', helloRoutes);

module.exports = app;
