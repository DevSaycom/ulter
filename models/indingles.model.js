const mongoose = require('mongoose')

const indinglesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  plan_basico: {
    type: Number,
    required: true
  },
  plan_pro: {
    type: Number,
    required: true
  },
  plan_empresa: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  b1_title: {
    type: String,
    required: true
  },
  b1_subtitle: {
    type: String,
    required: true
  },
  b2_title: {
    type: String,
    required: true
  },
  b2_subtitle: {
    type: String,
    required: true
  },
  b3_title: {
    type: String,
    required: true
  },
  b3_subtitle: {
    type: String,
    required: true
  },
  año: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Indingles', indinglesSchema)