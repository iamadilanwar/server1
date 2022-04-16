const express = require("express");
const router = express.Router();
const FileController = require("../Controllers/File.Controller");
const { verifyAccessToken } = require("../helpers/jwt_helper");
const multer = require("multer");
let fs = require('fs');
let dir = './uploads';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, dir);
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + "_" + Date.now() + "." + extension);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|JPG|png|PNG)$/)) {
      cb(null, false);
      return cb(new Error("Only images are allowed!"));
    } else {
      cb(null, true);
    }
  },
}).single("image");

router.post("/image", verifyAccessToken, upload, FileController.uploadFile);

module.exports = router;
