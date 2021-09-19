/**
 * Create by ToanNTe on 18/09/2021
 */

const Subject = require('../../models/Subject')

const getAll = async (req, res) => {
  try {
    const subjects = await Subject.find({})
    res.status(200).json(subjects)
  } catch (err) {
    console.error(err)
  }
}

const createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body)
    await subject.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAll,
  createSubject
}