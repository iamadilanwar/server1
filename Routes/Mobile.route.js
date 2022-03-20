const express = require("express");
const router = express.Router();
const CardController = require('../Controllers/Card.Controller')
const FactController = require("../Controllers/Fact.Controller");
const HistoryController = require("../Controllers/History.Controller");

//Mobile routes for app
router.get('/cards', CardController.list)
router.get('/cards/:id', CardController.single)
router.get('/allSubCards', CardController.allSubCards)
router.get('/allSubCards/:key', CardController.allSubCards)
router.get("/fact", FactController.list);
router.get("/history", HistoryController.list);

module.exports = router