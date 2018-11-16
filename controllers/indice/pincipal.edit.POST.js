const Indice = require('../../models/indice.model')

const id = '5bedfe488efe970570a006dc'

exports.indice_edit_POST = (req, res, next) => {
  console.log('funciona pero no hace nada parece')
  let indice = {}
  let fecha = new Date()

  indice.plan_basico = req.body.plan_basico
  indice.plan_pro = req.body.plan_pro
  indice.plan_empresa = req.body.plan_empresa
  indice.title = req.body.title
  indice.subtitle = req.body.subtitle
  indice.b1_title = req.body.b1_title
  indice.b1_subtitle = req.body.b1_subtitle
  indice.b2_title = req.body.b2_title
  indice.b2_subtitle = req.body.b2_subtitle
  indice.b3_title = req.body.b3_title
  indice.b3_subtitle = req.body.b3_subtitle
  indice.año = fecha.getFullYear()


  let query = {_id:id}

  Indice.updateOne(query, indice, (err) => {
    if (err) {
      throw err
    } else {
      res.redirect('/admin/indice')
    }
  })
}