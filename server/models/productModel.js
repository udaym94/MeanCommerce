var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var schema = new mongoose.Schema(
    { 
        title: {
            type: 'string',
            required: true
        },
        image: {
            type: 'string',
            required: true
        },
        price: {
            type: 'string',
            required: true,
        },
        added: {
            type: 'date',
            required: true,
        },
        description: {
            type: 'string',
            required: true
        }
    });
const Product = mongoose.model('Products', schema);
module.exports = Product;

  module.exports.getProductById = function(id, callback){
    Product.findById(id, callback);
  }
  
  module.exports.getProducts = function(callback){
    const query = {};
    Product.find(query, callback);
  }