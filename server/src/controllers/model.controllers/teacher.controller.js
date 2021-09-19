/**
 * Create by ToanNTe on 18/09/2021
 */

const Teacher = require('../../models/Teacher')

const getAll = async (req, res) => {
  try {
    const teachers = await Teacher.find({})
    res.status(200).json(teachers)
  } catch (err) {
    console.log(err)
  }
}

const createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body)
    await teacher.save()
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAll,
  createTeacher
}