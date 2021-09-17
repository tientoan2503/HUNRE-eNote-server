/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  falcuty: {
    type: String,
    ref: 'falcuty'
  }
}, {
  collection: 'Major'
})

module.exports = mongoose.model('major', schema)