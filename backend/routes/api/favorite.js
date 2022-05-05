const express = require("express");
const asyncHandler = require("express-async-handler");

const { validateProfile } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite, User } = require("../../db/models");

const router = express.Router();

// get all the favorites for the current user
router.get(
  "/users/:userId(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const favorites = await Favorite.findAll({
      where: {
        userId,
      },
      include: [
        {
          model: User,
        },
        {
          model: Image,
          include: [{ model: Favorite }, { model: User }],
        },
      ],
    });
    return res.json(favorites);
  })
);

module.exports = router;
