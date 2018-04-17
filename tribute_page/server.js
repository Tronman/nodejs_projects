const express = require('express');
const app = express();

var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');

var configDB =  require('./config/database.js');
mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());

app.use(session({
  secret: 'keyboardcat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use('/', (req,res) => {
	res.send('our first express programm');
	console.log(req.cookies);
	console.log('============================');
	console.log(req.session);
});

app.listen(port);
console.log('server running on port...', port);