exports.login_get = (req, res, next) => {
  res.render('admin/login', {
    title: 'Login to admin'
  })
}