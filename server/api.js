const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meancommerce');
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

module.exports = router;