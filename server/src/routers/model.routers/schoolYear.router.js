/**
 * Create by ToanNTe on 17/09/2021
 */

const express = require('express')
const Router = express.Router()
const controller = require('../../controllers/model.controllers/schoolYear.controller')

Router
  .get('/', controller.getAll)
  .post('/', controller.createSchoolYear)

module.exports = Router