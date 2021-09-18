/**
 * Create by ToanNTe on 18/09/2021
 */

const express = require('express')
const Router = express.Router()
const controller = require('../controllers/subject.controller')

Router.get('/', controller.getAll)
  .post('/', controller.createSubject)

module.exports = Router
