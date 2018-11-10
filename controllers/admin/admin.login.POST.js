const passport = require('passport')

exports.login_POST = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/admin/login'
  })(req, res, next)
}