const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../awss3");

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

router.post(
  "/",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const image = req.file;
    const { userId, tag } = req.body;
    const imageUrl = await singlePublicFileUpload(image);
    const newImage = await Image.create({
      userId,
      tag,
      imageUrl,
    });
    const createdImage = await Image.findByPk(newImage.id);
    res.json(createdImage);
  })
);

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
