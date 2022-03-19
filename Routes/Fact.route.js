const express = require("express");
const router = express.Router();
const FactController = require("../Controllers/Fact.Controller");
const { verifyAccessToken } = require("../helpers/jwt_helper");

router.post("/create", verifyAccessToken, FactController.create);
router.get("/", verifyAccessToken, FactController.list);
router.put("/:id", verifyAccessToken, FactController.update);
router.delete("/:id", verifyAccessToken, FactController.delete);

module.exports = router;
