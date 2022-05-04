const express = require("express");
const asyncHandler = require("express-async-handler");

const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite, User, Comment } = require("../../db/models");
const { singleMulterUpload, singlePublicFileUpload } = require("../awsS3");

const router = express.Router();

router.get(
  "/:imageId(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const imageId = req.params.imageId;
    const comments = await Comment.findAll({
      where: {
        imageId,
      },
      include: [{ model: User }],
    });
    return res.json(comments);
  })
);

router.post(
  "/:imageId(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const imageId = req.params.imageId;
    const newComment = await Comment.create(req.body);
    return res.json(newComment);
  })
);

module.exports = router;
