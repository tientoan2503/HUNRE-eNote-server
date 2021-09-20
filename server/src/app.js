/**
 * Create by ToanNTe on 16/09/2021
 */

const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 8866
const db = require('./config/db')
const router = require('./routers/index.router')
const cors = require('cors')

app.use(morgan('combined'))

// dung de doc du lieu duoc gui len trong body duoi dang data json
app.use(express.json())

// dung de giao tiep giua clien va server
app.use(cors())

db.connect()

router(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 

