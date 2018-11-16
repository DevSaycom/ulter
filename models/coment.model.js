const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  date: {
    type: String
  },
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    default: 'Anonimo'
  },
  email: {
    type: String,
    default: 'No Entregado'
  },
  body: {
    type: String,
    default: 'En Blanco'
  }
})

module.exports = mongoose.model('Comment', commentSchema)