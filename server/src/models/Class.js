/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  teacher: {
    type: String,
    ref: 'teacher'
  },
  students: [{
    type: String,
    ref: 'student'
  }],
  major: {
    type: String,
    ref: 'major'
  },
  subjects: [{
    type: String,
    ref: 'subject'
  }]
}, {
  timestamps: true
}, {
  collection: 'Class'
})

module.exports = mongoose.model('class', schema)