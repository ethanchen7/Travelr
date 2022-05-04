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
    const newComment = await Comment.create(req.body);
    const comment = await Comment.findByPk(newComment.id, {
      include: [{ model: User }],
    });
    return res.json(comment);
  })
);

router.put(
  "/:commentId(\\d+)",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.commentId);
    const newComment = await comment.update(req.body);
    res.json({ newComment, message: "edited" });
  })
);

router.delete(
  "/:commentId(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.commentId);
    comment.destroy();
    res.json({ comment, message: "deleted" });
  })
);

module.exports = router;
