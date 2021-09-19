/**
 * Create by ToanNTe on 17/09/2021
 */

const Faculty = require('../../models/Faculty')

const getAll = async (req, res) => {
  try {
    const faculties = await Faculty.find({})
    return res.status(200).json(faculties)
  } catch (err) {
    console.error(err)
  }
}

const createFaculty = async (req, res) => {
  try {
    const faculty = new Faculty(req.body)
    await faculty.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = {
  createFaculty,
  getAll
}