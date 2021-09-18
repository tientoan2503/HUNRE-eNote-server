/**
 * Create by ToanNTe on 17/09/2021
 */

const SchoolYear = require('../models/SchoolYear')

const getAll = async (req, res) => {
  try {
    const schoolYears = await SchoolYear.find({})
    res.status(200).json(schoolYears)
  } catch (err) {
    console.log(err)
  }
}

const createSchoolYear = async (req, res) => {
  try {
    const schoolYear = new SchoolYear(req.body)
    await schoolYear.save()
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getAll,
  createSchoolYear
}