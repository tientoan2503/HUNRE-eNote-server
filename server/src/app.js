/**
 * Create by ToanNTe on 16/09/2021
 */

const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 8888
const db = require('./config/db')

app.use(morgan('combined'))

db.connect()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

