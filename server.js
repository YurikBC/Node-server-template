const express = require('express');
const livereload = require('livereload');
const path = require('path');
const app = express();
const logger = require('morgan');
const webpack = require('./webpack.config');
const bodyParser = require('body-parser');

// webpack config
webpack.config();

// server run
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Send files to the browser
app.use(express.static('public'));

// Route Handler upload
app.use(require('./routesHandler').req)

// hot reloader
var server = livereload.createServer({});
console.log(__dirname + "/routesHandler.js")
server.watch([__dirname + "/public", __dirname + "routesHandler.js"]);

// listen to the server
app.listen(3000, () => {
    console.log(`server on port ${3000}`)
});
