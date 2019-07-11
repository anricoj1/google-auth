var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mysql = require('mysql');

var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser')

var flash = require('connect-flash');
var morgan = require('morgan');
var fs = require('fs');

var request = require('request-promise');
var url = require('url');
var http = require('http');


var c = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
});

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret: 'stringotext',
        saveUninitialized: true,
        resave: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'));
app.set('trust proxy', true)


require('./app/routes.js')(app, passport);

app.listen(port);
console.log('Server running on port: ' + port);


c.connect(function(err) {
	if(err) throw err;
	console.log('Conencted!');
});
