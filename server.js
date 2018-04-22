const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//CORS here
var api = require('./server/api');
var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', api);

app.get('*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}

app.set('port', port);
var server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is Up & Running on port ${port}`);
})