const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Profile } = require("../../db/models");
const { validateSignup } = require("../../utils/validation");

const router = express.Router();

// Sign up
router.post(
  "/",
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });
    const newProfile = await Profile.create({
      userId: user.id,
    });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  })
);

module.exports = router;
