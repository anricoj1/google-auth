module.exports = function(app, passport){
    app.get('/', function(req, res){
        res.render('../views/pages/index.ejs');
    });

    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/auth/google/callback',
        passport.authenticate('google', { successRedirect: '/profile',
                                         failureRedirect: '/'}));

    app.get('/login', function(req, res){
      res.render('../views/pages/user/login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
      successRedirect : '/profile',
      failureRedirect : '/login',
      failureFlash : true
    }),
    function(req, res) {
      console.log("Welcome!");

      if (req.body.remember){
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect('/');
    });

    app.get('/signup', function(req, res){
      res.render('../views/pages/user/register.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function(req, res) {
      res.render('../views/pages/user/profile.ejs', {
        user : req.user
      });
    });

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

    app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/')
    });
};

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}
