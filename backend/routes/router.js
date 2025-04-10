const express = require('express')
const myRouter = express.Router()
const signUpauth = require('../middleware/auth')
const signupCON = require('../controller/signup')



myRouter.post('/signup', signUpauth, signupCON)

module.exports = myRouter