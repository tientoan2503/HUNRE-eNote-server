/**
 * Create by ToanNTe on 15/09/2021
 */

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  schoolYear: {
    type: String,
    ref: 'schoolYear'
  }
}, {
  collection: 'Semester'
})

module.exports = mongoose.module('semester', schema)