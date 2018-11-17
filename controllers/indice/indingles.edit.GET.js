const Indingles = require('../../models/indingles.model')


exports.indice_edit = (req, res, next) => {

  Indingles.find({}, (err, indice) => {
    if (err) {
      throw err
    } else {
      console.log(indice[0])
      res.render('admin/principal/edit', {
        title: 'Edita el Indice',
        indice: indice[0]
      })
    }
  })
}