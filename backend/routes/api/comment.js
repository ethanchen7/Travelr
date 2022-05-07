const express = require("express");
const asyncHandler = require("express-async-handler");

const { validateComment } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const { Image, Favorite, User, Comment } = require("../../db/models");

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
  validateComment,
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
  validateComment,
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.commentId);
    const newComment = await comment.update(req.body);
    const editedComment = await Comment.findByPk(newComment.id, {
      include: [{ model: User }],
    });
    res.json({ editedComment });
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
