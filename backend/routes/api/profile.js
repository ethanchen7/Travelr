const express = require("express");
const asyncHandler = require("express-async-handler");

const { validateProfile } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Profile, User, Favorite } = require("../../db/models");

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
    });
    if (profile) {
      res.status(200);
      res.json(profile);
    } else {
      return res.status(404);
    }
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
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const profile = await Profile.findOne({
      where: {
        userId,
      },
    });
    if (profile) {
      await profile.update(req.body);
      await profile.save();
      res.json(profile);
    }
  })
);

module.exports = router;
