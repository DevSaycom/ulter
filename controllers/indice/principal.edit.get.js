const Indice = require('../../models/indice.model')

const id = '5bedfe488efe970570a006dc'

exports.indice_edit = (req, res, next) => {
  Indice.findById(id, (err, indice) => {
    if (err) {
      throw err
    } else {
      res.render('admin/principal/edit', {
        title: 'Edita el Indice',
        indice: indice
      })
    }
  })
}