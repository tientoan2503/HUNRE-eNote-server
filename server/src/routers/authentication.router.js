/**
 * Create by ToanNTe on 19/09/2021
 * Router xac minh tai khoan khi dang nhap va thay doi mat khau
 */

const express = require('express')
const Router = express.Router()
const controller = require('../controllers/authentication.controller')

// @router /login/teacher
// login cho giang vien
// Router.post('/teacher', controller.loginWithTeacher)

// @router /login/teacher/change-password
// thay doi mat khau cho giao vien
// Router.post('/teacher/change-password', controller.changePasswordForTeacher)

// @router /login/
// login cho sinh vien
Router.post('/', controller.login)

module.exports = Router