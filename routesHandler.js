const express = require('express');
const path = require('path');
const webpack = require('./webpack.config');
const knex = require('./db/knex')
const crypto = require('crypto')
const app = express();

function generateToken () {
    return crypto.randomBytes(64).toString('hex');
}

// Login
app.route('/api/user')
    .get(function (req, res) {
        knex.select().from('users').where('id', '1').then(function (users) {
            res.send(users)
        });
    })
    .post(function (req, res) {
        knex('users').where({
            email: req.body.email
        }).then((user) => {
            console.log(user)
            res.send(user)
        })
    })

// Registration
app.route('/api/auth')
    .post((req, res) => {
        let token;
        let email = req.body.email || '';
        let password = req.body.password || '';
        let firstName = req.body.firstName || '';
        let secondName = req.body.secondName || '';

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
                    firstname: firstName,
                    secondname: secondName,
                    token: token
                }
                knex('users').insert(newUser).then(() => {
                    res.status(200);
                    res.send(newUser)
                })
            } else {
                res.status(401);
                res.send('User Already Exists');
            }
        });
    });

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});

module.exports.req = app;