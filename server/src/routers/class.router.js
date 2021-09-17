/**
 * Create by ToanNTe on 17/09/2021
 */

const express = require('express')
const Router = express.Router()
const controller = require('../controllers/class.controller')

Router.get('/', controller.getAllByMajor)

module.exports = Router