const express = require("express");
const asyncHandler = require("express-async-handler");

const { validateProfile } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Profile, User, Favorite } = require("../../db/models");
const { singlePublicFileUpload, singleMulterUpload } = require("../../awsS3");

const router = express.Router();

router.get(
  "/:userId(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const profile = await Profile.findOne({
      where: {
        userId,
      },
      include: [{ model: User }],
    });
    res.json(profile);
  })
);

// get all images created by a particular user to populate profile
router.get(
  "/:userId(\\d+)/images",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const images = await Image.findAll({
      where: {
        userId,
      },
      include: [{ model: User }, { model: Favorite }],
    });
    res.json(images);
  })
);

router.put(
  "/:userId(\\d+)",
  requireAuth,
  validateProfile,
  singleMulterUpload("image"),
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const {
      fullName,
      profilePic,
      location,
      favoriteDestination,
      occupation,
      bio,
    } = req.body;

    let editedPic;
    if (req.file) {
      editedPic = await singlePublicFileUpload(req.file);
    } else {
      editedPic = profilePic;
    }

    const profile = await Profile.findByPk(userId);

    await profile.update({
      fullName,
      profilePic: editedPic,
      occupation,
      location,
      favoriteDestination,
      bio,
    });

    const editedProfile = await Profile.findByPk(userId, {
      include: [{ model: User }],
    });
    res.json(editedProfile);
  })
);

module.exports = router;
