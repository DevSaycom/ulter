const express = require('express')
const router = express.Router()
const Indingles = require('../models/indingles.model')

router.get('/', (req, res, next) => {
  Indingles.find({}, (err, ind) => {
    if (err) {
      throw err
    } else {
      const id = ind[0]._id

      Indingles.findById(id)
      .exec()
      .then(indix => {
        res.render('indingles', {
          title: 'Ulter Web: Web Solutions',
          indice: indix
        })
      })
    }
  })
})

module.exports = router