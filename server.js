/**
 * Created by skessler on 6/3/15.
 */

// libs
var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000;

// logging
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port);
console.log('Server is running on http://localhost:' + port);