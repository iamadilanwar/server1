const express = require('express')
const router = express.Router()
const CardController = require('../Controllers/Card.Controller')
const { verifyAccessToken } = require('../helpers/jwt_helper')

//Main Card Routes

router.get('/', CardController.allSubCards)
router.get('/:key', CardController.allSubCards)

//SingleCardRoutes
// router.get('/:id/all',verifyAccessToken, SingleCardConstroller.list)
// router.get('/:id/:id',verifyAccessToken, SingleCardConstroller.single)
// router.put('/:id/:id',verifyAccessToken, SingleCardConstroller.update)
// router.delete('/:id/:id',verifyAccessToken, SingleCardConstroller.delete)
// router.post('/:id/add',verifyAccessToken, SingleCardConstroller.create)



module.exports = router
