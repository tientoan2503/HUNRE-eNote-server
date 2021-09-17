/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  studentID: {
    type: String,
    require: true,
    unique: true
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
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true
  },
  IDNumber: {
    type: String,
    require: true,
    unique: true
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
    default: null
  },
  class: {
    type: String,
    ref: 'class',
    default: null
  }
}, {
  collection: 'Student',
  timestamps: true
})

module.exports = mongoose.model('student', schema)