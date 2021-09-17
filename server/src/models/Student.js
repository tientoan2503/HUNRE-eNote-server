/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  studentID: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  gender: {
    type: Number,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  IDNumber: {
    type: String,
    require: true
  },
  dob: {
    type: Date,
    require: true
  },
  hometown: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  },
  class: {
    type: String,
    ref: 'class'
  }
}, {
  timestamps: true
}, {
  collection: 'Student'
})

module.exports = mongoose.model('student', schema)