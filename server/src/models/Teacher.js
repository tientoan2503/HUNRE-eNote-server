/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  teacherID: {
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
    require: true
  },
  email: {
    type: String,
    require: true
  },
  avatar: {
    type: String,
    require: true
  },
  subjects: [{
    type: {
      class: {
        type: String,
        ref: 'class'
      },
      subject: {
        type: String,
        ref: 'subject'
      }
    },
    default: null
  }]
}, {
  collection: 'Teacher',
  timestamps: true
})

module.exports = mongoose.model('teacher', schema)