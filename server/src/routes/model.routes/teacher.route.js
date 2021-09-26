/**
 * Create by ToanNTe on 18/09/2021
 */

const express = require('express')
const Router = express.Router()
const controller = require('../../controllers/model.controllers/teacher.controller')

Router.get('/', controller.getAll)
  .post('/', controller.createTeacher)

module.exports = Router