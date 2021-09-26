/**
 * Create by ToanNTe on 17/09/2021
 */

const schoolYearRouter = require('./model.routes/schoolYear.route')
const studentRouter = require('./model.routes/student.route')
const majorRouter = require('./model.routes/major.route')
const facultyRouter = require('./model.routes/faculty.route')
const classRouter = require('./model.routes/class.route')
const subjectRouter = require('./model.routes/subject.route')
const teacherRouter = require('./model.routes/teacher.route')
const authRouter = require('./auth.route')

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