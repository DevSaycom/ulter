const Indice = require('../../models/indice.model')


exports.indice_edit_POST = (req, res, next) => {



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



  Indice.find({}, (err, indi) => {
    let query = {_id:indi[0]._id}

    Indice.updateOne(query, indice, (err) => {
      if (err) {
        throw err
      } else {
        res.redirect('/admin/indice')
      }
    })
  })
}