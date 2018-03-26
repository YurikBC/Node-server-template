const express = require('express');
const path = require('path');
const app = express();
const authModel = require('./authModel');

// Login
app.route('/api/user')
    .get(authModel.GET_USER)
    .post(authModel.SIGN_IN_USER);

// Registration
app.route('/api/auth')
    .post(authModel.SIGN_UP_USER);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});

module.exports.req = app;