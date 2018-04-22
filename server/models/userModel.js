var mongoose = require('mongoose');

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
var Users = mongoose.model('Users', schema);
module.exports = Users;