const express = require('express');
const path = require('path');
const webpack = require('./webpack.config');
const knex = require('./db/knex')
const crypto = require('crypto')
const app = express();

function generateToken () {
    return crypto.randomBytes(64).toString('hex');
}


app.route('/api/user')
    .get(function (req, res) {
        knex.select().from('users').where('id', '1').then(function (users) {
            res.send(users)
        });
    })
    .post(function (req, res) {
        let token;
        let email = req.body.email;
        let password = req.body.password;
        knex.select('*').from('users').then((users) => {
            // if user already exist
            let isUserExist = users.some((user) => {
                return user.email === email
            });
            if (!isUserExist) {
                token = generateToken();
                let newUser = {
                    email: email,
                    password: password,
                    token: token
                }
                knex('users').insert(newUser).then(() => {
                    res.send(newUser)
                })
            }
        });
    })

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});

module.exports.req = app;