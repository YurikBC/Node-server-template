const express = require('express');
const livereload = require('livereload');
const path = require('path');
const app = express();
const logger = require('morgan');
const webpack = require('./webpack.config');
const database = require('./database.config');
const bodyParser = require('body-parser');
const knex = require('knex');
const ind = require('./migrations/index')
// webpack config
webpack.config();

// server run
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
// Send files to the browser


// app.get('/api/get_user', async (req, res) => {
//     let client = database.client
//     client.connect(function (err) {
//         client.query('SELECT * FROM weather;', function (err, result) {
//             res.send(result)
//         });
//     });
// });
//
// app.post('/api/set_user', function (req, res) {
//     let email = req.body.email
//     let password = req.body.password
//     let client = database.client
//     client.connect(function (err) {
//         // client.query('INSERT * FROM weather;', function (err, result) {
//         //     res.send(result)
//         // });
//     });
// })

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});


// hot reloader
var server = livereload.createServer({});
server.watch(__dirname + "/public");

// listen to the server
app.listen(3000, () => {
    console.log(`server on port ${3000}`)
});
