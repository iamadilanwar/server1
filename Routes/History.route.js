const express = require("express");
const router = express.Router();
const HistoryController = require("../Controllers/History.Controller");
const { verifyAccessToken } = require("../helpers/jwt_helper");

router.post("/create", verifyAccessToken, HistoryController.create);
router.get("/", verifyAccessToken, HistoryController.list);
router.put("/:id", verifyAccessToken, HistoryController.update);
router.delete("/:id", verifyAccessToken, HistoryController.delete);

module.exports = router;
