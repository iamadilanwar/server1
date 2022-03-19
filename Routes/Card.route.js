const express = require('express')
const router = express.Router()
const CardController = require('../Controllers/Card.Controller')
const { verifyAccessToken } = require('../helpers/jwt_helper')

//Main Card Routes
router.post('/create',verifyAccessToken, CardController.create)
router.get('/', CardController.list)
router.get('/:id', CardController.single)
router.put('/:id',verifyAccessToken, CardController.update)
router.put('/:id/:id',verifyAccessToken, CardController.update)
router.delete('/:id',verifyAccessToken, CardController.delete)
router.get('/allSubCards', CardController.allSubCards)

//SingleCardRoutes
// router.get('/:id/all',verifyAccessToken, SingleCardConstroller.list)
// router.get('/:id/:id',verifyAccessToken, SingleCardConstroller.single)
// router.put('/:id/:id',verifyAccessToken, SingleCardConstroller.update)
// router.delete('/:id/:id',verifyAccessToken, SingleCardConstroller.delete)
// router.post('/:id/add',verifyAccessToken, SingleCardConstroller.create)



module.exports = router
