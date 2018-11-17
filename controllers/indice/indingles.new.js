const Indingles = require('../../models/indingles.model')

exports.indice_get = (req, res, next) => {
  Indingles.find({}, (err, result) => {
    if(result.length <= 0) {
      res.render('admin/principal/indingles/post', {
        title: 'Post New Principal Page'
      })
    } else {
      res.redirect('/admin/indice')
    }
  })
}