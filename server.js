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

var mysql = require('mysql');


var twitter = require('twitter');

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

require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Server running on http://localhost:8080');
