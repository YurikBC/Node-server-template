const express = require('express');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const livereload = require('livereload');
const path = require('path');
const app = express();

// webpack run
const compiler = webpack({
    entry: path.join(__dirname, "/src/main.js"),
    output: {
        path: path.join(__dirname, "/public"),
        filename: 'app.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './*.html', to: path.join(__dirname, "/public")},
            {from: path.join(__dirname, "/src/styles.css"), to: path.join(__dirname, "/public")}
        ])
    ]
});

// watch
compiler.watch({
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}, () => {});

compiler.run(() => {});


// server run
app.get('/', function response(req, res) {
    app.use(express.static('public'));
    res.sendFile(path.join(__dirname, '/index.html'))
})

// hot reloader
var server = livereload.createServer({});
server.watch(__dirname + "/public");

// listen to the server
app.listen(3000, () => {
    console.log(`server on port ${3000}`)
});
