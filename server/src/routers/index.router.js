/**
 * Create by ToanNTe on 17/09/2021
 */

const schoolYearRouter = require('./model.routers/schoolYear.router')
const studentRouter = require('./model.routers/student.router')
const majorRouter = require('./model.routers/major.router')
const facultyRouter = require('./model.routers/faculty.router')
const classRouter = require('./model.routers/class.router')
const subjectRouter = require('./model.routers/subject.router')
const teacherRouter = require('./model.routers/teacher.router')
const authRouter = require('./authentication.router')

function route(app) {

  // Router for models
  app.use('/api/schoolYears', schoolYearRouter)

  app.use('/api/students', studentRouter)

  app.use('/api/majors', majorRouter)

  app.use('/api/faculties', facultyRouter)

  app.use('/api/faculties', facultyRouter)

  app.use('/api/classes', classRouter)

  app.use('/api/subjects', subjectRouter)

  app.use('/api/teachers', teacherRouter)

  // Router for authentication
  app.use('/api/login', authRouter)

}

module.exports = route