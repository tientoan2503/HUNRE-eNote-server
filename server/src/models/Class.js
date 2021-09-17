/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  /* teacher: {
    type: String,
    ref: 'teacher'
  }, */
  students: [{
    type: String,
    ref: 'student',
    default: null
  }],
  major: {
    type: String,
    ref: 'major'
  },
  subjects: [{
    type: String,
    ref: 'subject',
    default: null
  }]
}, {
  collection: 'Class',
  timestamps: true
})

module.exports = mongoose.model('class', schema)