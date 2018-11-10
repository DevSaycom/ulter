exports.admin_index = (req, res, next) => {
  res.render('admin/index', {
    title: 'Admin Page'
  })
}