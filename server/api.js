const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');

var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/meancommerce');
var User = require('./models/userModel');
// const conn = mongoose.createConnection('mongodb://localhost/meancommerce');

// console.log('Connection ' + conn.db);

let response = {
    status : 200,
    message : null,
    data : []
}

var sendError = (err,res) => {
    response.status = 501;
    response.message = typeof err == "object" ? err.message : err;
    res.status(501).json(response);
}

// router.get('/products', (req,res) => {

// });
router.post('/register', (req,res) => {
    var userdata = _.pick(req.body,['name','email','username','password']);
    User.create(userdata, (err,user) => {
        if(err) res.send('err');
        res.send('success');
    });
});

router.post('/authenticate', 
    passport.authenticate('local', { successRedirect: '/dashboard',failureRedirect: '/login', failureFlash: true  }),
    (req,res) => {
    // req.passport.
});

router.get('/dashboard', (req,res) => {
    const loggedInUser = '5ae3eb4ebe031920d02c82c4';
    User.findById(loggedInUser, (err,user)=> {
        if(err) res.send('err');
        response.data = user;
        res.json(response);
    });
})
module.exports = router;