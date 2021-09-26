/**
 * Create by ToanNTe on 26/09/2021
 */

const jwt = require('jsonwebtoken')

const ACCESS_TOKEN_SCERET = "D2T_access_token_sceret"

const verifyToken = (req, res, next) => {
  const authHeader = req.header('Authorization')
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.sendStatus(401)

  try {
    jwt.verify(token, ACCESS_TOKEN_SCERET)
    next()
  } catch (err) {
    console.log(err)
    return res.sendStatus(403)
  }
}

module.exports = verifyToken