/**
 * Create by ToanNTe on 19/09/2021
 */

const Student = require('../models/Student')
const Teacher = require('../models/Teacher')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SCERET = "D2T_access_token_sceret"

// login student
const login = async (req, res) => {

  const { studentID, password } = req.body

  if (!studentID || !password)
    return res.status(400).json({ success: false, message: 'Missing username and/or password' })

  try {
    // check for existing username
    const student = await Student.findOne({ studentID })
    if (!student)
      return res.status(400).json({ success: false, message: 'Username or password is incorrect' })

    // if studentID found
    const passwordValid = await argon2.verify(student.password, password)
    if (!passwordValid)
      return res.status(400).json({ success: false, message: 'Username or password is incorrect' })

    // if login successful, return accessToken
    const accessToken = jwt.sign(studentID, ACCESS_TOKEN_SCERET)
    res.json({ success: true, message: 'Login successfully', token: accessToken })
} catch (err) {
    console.error(err)
  }
}

module.exports = {
  login
}