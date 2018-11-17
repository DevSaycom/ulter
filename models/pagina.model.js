const mongoose = require('mongoose')

const paginaSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  page: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Pagina', paginaSchema)