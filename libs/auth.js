isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log('Bienvenido!')
    return next()
  } else {
    res.redirect('/')
  }
}

module.exports = isAuth