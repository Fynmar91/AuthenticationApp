const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../model/User");

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
router.post("/register", async (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;

  console.log(req.body);
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: "Passwords do not match.",
    });
  }
  // Check unique username
  const foundUsername = await User.findOne({ username: username });
  if (foundUsername) {
    console.log("User Already exists!");

    return res.status(400).json({
      msg: "Username is already taken",
    });
  }
  // Cehck unique email
  const foundEmail = await User.findOne({ email: email });
  if (foundEmail) {
    console.log("Email Already exists!");

    return res.status(400).json({
      msg: "Email is already registered. Forgot your password?",
    });
  }
  // Data is valid, Register user
  let newUser = new User({
    name,
    username,
    password,
    email,
  });
  // Hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      } else {
        newUser.password = hash;
        newUser.save().then((user) => {
          return res.status(201).json({
            success: true,
            msg: "User has been successfully registered.",
          });
        });
      }
    });
  });
});

/**
 * @route POST api/users/login
 * @desc Signing in user
 * @access Public
 */
router.post("/login", async (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "User does not exist.",
        success: false,
      });
    } else {
      bcrypt.compare(req.body.password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
          };
          jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
            res.status(200).json({
              success: true,
              user: user,
              token: `Bearer ${token}`,
              msg: "Successfully signed in.",
            });
          });
        } else {
          return res.status(404).json({
            msg: "Incorrect password.",
            success: false,
          });
        }
      });
    }
  });
});

/**
 * @route POST api/users/profile
 * @desc Return User's data
 * @access Private
 */
router.get("/profile", passport.authenticate("jwt", { session: false }), async (req, res) => {
  return res.json({
    user: req.user,
  });
});

module.exports = router;
