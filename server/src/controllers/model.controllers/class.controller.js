// /**
//  * Create by ToanNTe on 17/09/2021
//  */

const Class = require('../../models/Class')

const getAll = async (req, res) => {
  try {
    const classes = await Class.find({})
      .populate('students')
      .populate('major')
    res.status(200).json(classes)
  } catch (err) {
    console.error(err)
  }
}

const createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body)
    await newClas.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAll,
  createClass
}