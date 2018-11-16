const express = require('express')
const router = express.Router()
const Indice = require('../models/indice.model')

const id = '5bedfe488efe970570a006dc'

router.get('/', (req, res, next) => {

  Indice.findById(id)
  .exec()
  .then(indice => {
    res.render('index', {
      title: 'Ulter Web: Soluciones Web',
      indice: indice
    })
  })
})

module.exports = router