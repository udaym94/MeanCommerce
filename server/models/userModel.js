var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var schema = new mongoose.Schema(
    { 
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        },
        username: {
            type: 'string',
            required: true,
            min: 6
        },
        password: {
            type: 'string',
            required: true,
            min: 5
        }
    });
const User = mongoose.model('Users', schema);
module.exports = User;

  module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
  }
  
  module.exports.getUserByEmail = function(email, callback){
    const query = {email: email}
    User.findOne(query, callback);
  }
  
  module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }
  
  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
  }