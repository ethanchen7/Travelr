const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const imagesRouter = require("./image");
const profileRouter = require("./profile");

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/images", imagesRouter);

router.use("/profile", profileRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
