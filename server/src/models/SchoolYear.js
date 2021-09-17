/**
 * Create by ToanNTe on 15/09/2021
 */

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  yearStart: {
    type: String,
    require: true
  },
  yearEnd: {
    type: String,
    require: true
  }
}, {
  collection: 'SchoolYear'
})

module.exports = mongoose.model('schoolYear', schema)