var User = require('./models/user');
module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.render('../views/pages/index.ejs');
    });

    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/auth/google/callback',
        passport.authenticate('google', { successRedirect: '/profile',
                                         failureRedirect: '/'}));
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}