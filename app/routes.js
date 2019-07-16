var User = require('./models/user');
module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.render('../views/pages/index.ejs');
    });

    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/auth/google/callback',
        passport.authenticate('google', { successRedirect: '/profile',
                                         failureRedirect: '/'}));

    app.get('/twitter', function(req, res){
      res.render('../views/pages/twitter/index.ejs');
    });

    app.get('/facebook', function(req, res){
      res.render('../views/pages/facebook/index.ejs')
    });

    app.get('/twitch', function(req, res){
      res.render('../views/pages/twitch/index.ejs')
    });


    app.get('/youtube', function(req, res){
      res.render('../views/pages/youtube/index.ejs')
    });


    app.get('/github', function(req, res){
      res.render('../views/pages/github/index.ejs')
    });


    app.get('/instagram', function(req, res){
      res.render('../views/pages/instagram/index.ejs')
    });
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}
