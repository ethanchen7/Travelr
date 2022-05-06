const express = require("express");
const asyncHandler = require("express-async-handler");
const { Op } = require("sequelize");

const { validateProfile } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite, User } = require("../../db/models");

const router = express.Router();

// get all the favorites for the current user
router.get(
  "/:id",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res, next) => {
    try {
      const images = await Image.findAll({
        where: {
          tags: { [Op.contains]: [req.params.id] },
        },
        include: [
          {
            model: User,
          },
          {
            model: Favorite,
          },
        ],
      });
      res.json(images);
    } catch (e) {
      next(e);
    }
  })
);

module.exports = router;
