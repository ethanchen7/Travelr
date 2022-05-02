const express = require("express");
const asyncHandler = require("express-async-handler");

const { validateProfile } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Profile, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/:userId",
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
      return res.json(profile);
    }
    return res.status(404);
  })
);

router.put(
  "/:userId",
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
      return res.json(profile);
    }
  })
);

module.exports = router;
