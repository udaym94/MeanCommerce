const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const _ = require('lodash');

var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('./config/database');

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
    var newUser = new User(userdata);
    User.addUser(newUser, (err, user) => {
        if(err){
          res.json({success: false, msg:'Failed to register user'});
        } else {
          res.json({success: true, msg:'User registered'});
        }
    });
    // User.create(userdata, (err,user) => {
    //     if(err) res.send('err');
    //     res.send('success');
    // });
});

router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.getUserByEmail(email, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
  
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 // 1 week
          });
  
          res.json({
            success: true,
            token: `Bearer ${token}`,
            user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
  });

  router.get('/dashboard', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
  });

//   router.get('/dashboard', (req,res) => {
//     const loggedInUser = '5ae3eb4ebe031920d02c82c4';
//     User.findById(loggedInUser, (err,user)=> {
//         if(err) res.send('err');
//         response.data = user;
//         res.json(response);
//     });
//   })

module.exports = router;