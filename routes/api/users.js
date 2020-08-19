const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
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
    console.log(password); // DEBUG
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

module.exports = router;
