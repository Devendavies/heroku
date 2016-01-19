'use strict';
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./app/routes'); /* (app) in documentation-needed? */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/League-Feed');

/* check if connected to mongoose */
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('mongoose connected');
});

// mongoose.connect(db.url);  repetative? => (documentation)

app.get('/', express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// parse api objects as json?

app.use('/scripts', express.static(__dirname + '/node_modules'))
app.use(routes);

// Server
const server = app.listen(3000, () => {
  console.log('Server running')
})
