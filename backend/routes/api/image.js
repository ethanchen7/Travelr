const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite } = require("../../db/models");
const { singleMulterUpload } = require("../awss3");

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

router.post("/", singleMulterUpload("image"), (req, res) => {
  console.log(req);
  res.send("hi");
  //   const image = req.file;
  //   const tag = req.body.tag;
  //   console.log(image);
  //   console.log(tag);
});

router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const imageId = req.params.id;
    const image = await Image.findByPk(imageId);
    await image.destroy();
    return res.status(204);
  })
);

// create a favorite
router.post(
  "/:id(\\d+)/favorite",
  requireAuth,
  asyncHandler(async (req, res) => {
    const favorite = await Favorite.create(req.body);
    res.json(favorite);
  })
);

router.delete(
  "/:id(\\d+)/favorite",
  requireAuth,
  asyncHandler(async (req, res) => {
    const imageId = req.params.id;
    const { userId } = req.body;
    const favorite = await Favorite.findOne({
      where: {
        userId,
        imageId,
      },
    });
    await favorite.destroy();
    res.json({ message: "favorite removed" });
  })
);

module.exports = router;
