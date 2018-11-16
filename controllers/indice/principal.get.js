const Indice = require('../../models/indice.model')

exports.indice_get = (req, res, next) => {
  Indice.find({}, (err, result) => {
    if(result.length <= 0) {
      res.render('admin/principal/post', {
        title: 'Post New Principal Page'
      })
    } else {
      res.redirect('/admin/indice')
    }
  })


}