/**
 * Create by ToanNTe on 17/09/2021
 */

const schoolYearRouter = require('./schoolYear.router')
const studentRouter = require('./student.router')
const majorRouter = require('./major.router')
const facultyRouter = require('./faculty.router')
const classRouter = require('./class.router')

function route(app) {

  app.use('/schoolYears', schoolYearRouter)
  
  app.use('/students', studentRouter)

  app.use('/majors', majorRouter)
  
  app.use('/faculties', facultyRouter)
  
  app.use('/faculties', facultyRouter)

  app.use('/classes', classRouter)

}

module.exports = route