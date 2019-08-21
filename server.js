var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');


var request = require('request-promise');
var url = require('url');
var http = require('http');
var passport = require('passport');

// twitter requests use this
var configAuth = require('./config/auth');
var twitter = require('twitter');
var twitterClient = new twitter({
  consumer_key: configAuth.twitterAuth.consumer_key,
  consumer_secret: configAuth.twitterAuth.consumer_secret,
  access_token_key: configAuth.twitterAuth.access_token_key,
  access_token_secret: configAuth.twitterAuth.access_token_secret
});


// passport call
require('./config/passport')(passport);



app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(session({secret: 'string',
                 saveUninitialized: true,
                 resave: true}));



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport, twitterClient);

app.listen(port);
console.log('Server running on http://localhost:8080');
