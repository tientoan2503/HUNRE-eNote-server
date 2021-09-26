/**
 * Create by ToanNTe on 17/09/2021
 */

const Student = require('../../models/Student')
const argon2 = require('argon2')

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
    // mat khau se la so dien thoai cua sinh vien
    // hashcode so dien thoai
    const hashPassword = await argon2.hash(student.phone)
    student.password = hashPassword
    await student.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAll,
  createStudent
}