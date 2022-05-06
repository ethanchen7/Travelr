const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const imagesRouter = require("./image");
const profileRouter = require("./profile");
const commentRouter = require("./comment");
const favoriteRouter = require("./favorite");
const searchRouter = require("./search");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/images", imagesRouter);

router.use("/profile", profileRouter);

router.use("/comments", commentRouter);

router.use("/favorites", favoriteRouter);

router.use("/search", searchRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
