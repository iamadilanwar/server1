const express = require('express')
const router = express.Router()
const CardController = require('../Controllers/Card.Controller')
const { verifyAccessToken } = require('../helpers/jwt_helper')

//Main Card Routes
router.post('/create',verifyAccessToken, CardController.create)
router.get('/',verifyAccessToken, CardController.list)
router.get('/:id',verifyAccessToken, CardController.single)
router.put('/:id',verifyAccessToken, CardController.update)
router.delete('/:id',verifyAccessToken, CardController.delete)

module.exports = router
