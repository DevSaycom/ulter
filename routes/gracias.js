const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('gracias', {
    title: 'Gracias por Comunicarte con nosotros!'
  })
})

module.exports = router