const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite, User, Comment, Profile } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3.js");

const router = express.Router();

router.get(
  "/",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const images = await Image.findAll({
      include: [{ model: User }, { model: Favorite }],
    });
    return res.json(images);
  })
);

// get single image
router.get(
  "/:id(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const image = await Image.findByPk(req.params.id, {
      include: [{ model: User }, { model: Favorite }, { model: Comment }],
    });
    return res.json(image);
  })
);

router.post(
  "/",
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const { userId, tags } = req.body;
    console.log(tags.split(","));
    const imageUrl = await singlePublicFileUpload(req.file);
    const newImage = await Image.create({
      userId,
      imageUrl,
      tags: tags.split(","),
    });
    const createdImage = await Image.findByPk(newImage.id, {
      include: [{ model: User }],
    });
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

router.put(
  "/:id(\\d+)/favorite",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { imageId } = req.body;
    await Image.update(req.body, {
      where: {
        id: imageId,
      },
    });
    const image = await Image.findByPk(imageId);
    res.json(image);
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
      include: [{ model: Image }, { model: User }],
    });
    // console.log(favorite);
    await favorite.destroy();
    res.send({ favorite, userId });
  })
);

module.exports = router;
