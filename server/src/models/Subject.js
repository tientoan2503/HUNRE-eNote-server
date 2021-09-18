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
  subjectCode: {
    type: String,
    require: true,
    unique: true
  },
  credit: {
    type: Number,
    require: true
  },
  begin: {
    type: Date,
    require: true
  },
  end: {
    type: Date,
    require: true
  },
  lesson: [{
    type: Number,
    require: true
  }],
  weekdays: {
    type: String,
    require: true
  },
  schoolYear: {
    type: String,
    ref: 'schoolYear'
  }
}, {
  collection: 'Subject',
  timestamps: true
})

module.exports = mongoose.model('subject', schema)