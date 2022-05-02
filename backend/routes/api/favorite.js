const express = require("express");
const asyncHandler = require("express-async-handler");

const { validateProfile } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite, User } = require("../../db/models");

const router = express.Router();

// get all the favorites for the current user
router.get(
  "/",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const { currentUserId } = req.body;
    const favorites = await Favorite.findAll({
      where: {
        userId: currentUserId,
      },
      include: [
        {
          model: User,
        },
        {
          model: Image,
        },
      ],
    });
    return res.json(favorites);
  })
);

module.exports = router;
