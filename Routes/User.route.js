const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/User.Controller')
const { verifyAccessToken } = require('../helpers/jwt_helper')

router.get('/list',verifyAccessToken, UserController.list)



module.exports = router
