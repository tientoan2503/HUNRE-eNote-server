/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  faculty: {
    type: String,
    ref: 'faculty'
  }
}, {
  collection: 'Major'
})

module.exports = mongoose.model('major', schema)