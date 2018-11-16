const express = require('express')
const router = express.Router()
const Indice = require('../models/indice.model')


router.get('/', (req, res, next) => {

  Indice.find({}, (err, indi) => {
    const id = indi[0]._id

    Indice.findById(id)
    .exec()
    .then(indice => {
      res.render('index', {
        title: 'Ulter Web: Soluciones Web',
        indice: indice
      })
    })
  })
})

module.exports = router