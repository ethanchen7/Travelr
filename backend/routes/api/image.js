const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image } = require("../../db/models");
const { singleUpload } = require("../awss3");

const router = express.Router();

router.get(
  "/",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const images = await Image.findAll();
    return res.json(images);
  })
);

router.post("/", singleUpload("image"), (req, res) => {
  console.log(req);
  res.send("hi");
  //   const image = req.file;
  //   const tag = req.body.tag;
  //   console.log(image);
  //   console.log(tag);
});

module.exports = router;
