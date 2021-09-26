/**
 * Create by ToanNTe on 17/09/2021
 */

const express = require('express')
const Router = express.Router()
const controller = require('../../controllers/model.controllers/student.controller')
const verifyToken = require('../../middleware/auth')

Router.get('/', verifyToken, controller.getAll)
  .post('/', controller.createStudent)

module.exports = Router