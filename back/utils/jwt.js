const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config.json')


function createToken(USER_ID){
  return jwt.sign({USER_ID}, JWT_KEY,{ "expiresIn": "24h" })
}

function verifyToken(token, USER_ID){
  const decoded = jwt.verify(token, JWT_KEY)
  return decoded.USER_ID === USER_ID
}


module.exports = {
  createToken,
  verifyToken,
}