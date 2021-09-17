/**
 * Create by ToanNTe on 16/09/2021
 */

const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true
  }
}, {
  collection: 'Faculty'
})

module.exports = mongoose.model('faculty', schema)