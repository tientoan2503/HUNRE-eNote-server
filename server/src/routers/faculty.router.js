/**
 * Create by ToanNTe on 17/09/2021
 */

const express = require('express')
const Router = express.Router()
const controller = require('../controllers/faculty.controller')

Router.get('/', controller.getAll)
  .post('/', controller.createFaculty)

module.exports = Router