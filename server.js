const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//CORS here
var flash = require('connect-flash');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var api = require('./server/api');
var app = express();

// app.configure(function() {
//   app.use(express.cookieParser('keyboard cat'));
//   app.use(express.session({ cookie: { maxAge: 60000 }}));
//   app.use(flash());
// });

var port = process.env.PORT || 3000;

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport')(passport);

app.use('/', api);

app.get('*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'dist','index.html'));
}

app.set('port', port);
var server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is Up & Running on port ${port}`);
})