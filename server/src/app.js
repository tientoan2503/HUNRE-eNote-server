/**
 * Create by ToanNTe on 16/09/2021
 */

const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 8866
const db = require('./config/db')
const router = require('./routers/index.router')

app.use(morgan('combined'))

db.connect()

router(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

