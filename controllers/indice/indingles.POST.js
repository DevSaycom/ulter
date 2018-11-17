const Indingles = require('../../models/indingles.model')
const mongoose = require('mongoose')

exports.indingles_POST = (req, res, next) => {

  let fecha = new Date()

  const plan_basico = req.body.plan_basico
  const plan_pro = req.body.plan_pro
  const plan_empresa = req.body.plan_empresa
  const title = req.body.title
  const subtitle = req.body.subtitle
  const b1_title = req.body.b1_title
  const b1_subtitle = req.body.b1_subtitle
  const b2_title = req.body.b2_title
  const b2_subtitle = req.body.b2_subtitle
  const b3_title = req.body.b3_title
  const b3_subtitle = req.body.b3_subtitle
  const año = fecha.getFullYear()


  let indice = new Indingles({
    _id: new mongoose.Types.ObjectId(),
    plan_basico : plan_basico,
    plan_pro: plan_pro,
    plan_empresa: plan_empresa,
    title: title,
    subtitle: subtitle,
    b1_title: b1_title,
    b1_subtitle: b1_subtitle,
    b2_title: b2_title,
    b2_subtitle: b2_subtitle,
    b3_title: b3_title,
    b3_subtitle: b3_subtitle,
    año: año
  })

  Indingles.find({}, (err, result) => {
      if (err) {
        throw err
      } else {
      if(result.length <= 0) {
        indice.save((err) => {
          if (err) {
            console.error(err)
          } else {
            console.log(indice)
            res.redirect('/')
          }
        })
      } else {
        res.redirect('/admin/')
      }
    }
  })
}