/**
 * Create by ToanNTe on 17/09/2021
 */

const Student = require('../../models/Student')

const getAll = async (req, res) => {
  try {
    const students = await Student.find({})
    res.status(200).json(students)
  } catch (err) {
    console.error(err)
  }
}

const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body)
    await student.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAll,
  createStudent
}