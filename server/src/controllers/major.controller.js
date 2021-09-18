/**
 * Create by ToanNTe on 17/09/2021
 */

const Major = require('../models/Major')

const getAll = async (req, res) => {
  try {
    const majors = await Major.find({}).populate('faculty')
    console.log(majors)
    res.status(200).json(majors)
  } catch (err) {
    console.error(err)
  }
}

const createMajor = async (req, res) => {
  try {
    const major = new Major(req.body)
    await major.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  getAll,
  createMajor
}