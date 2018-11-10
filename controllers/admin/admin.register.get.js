const Admin = require('../../models/admin.model')

exports.register_get = (req, res, next) => {
  Admin.find({}, (err, admin) => {
    if (admin.length <= 0) {
      res.render('admin/register', {
        title: 'Register new Admin'
      })
    } else {
      res.redirect('/admin/login')
    }
  })
}