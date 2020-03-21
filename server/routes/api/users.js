const express = require("express");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");

const router = express.Router();

const User = require("../../models/User");

//@route  POST api/users
//@desc   register route
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Password must meet requirements").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    //check if user already exists
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ errors: [{ msg: "User Already Exists" }] });
      }
      
      //create new user with instance of User model
      user = new User({ name, email, password });

      //encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password,salt);

      //save new user to database
      await user.save();
      res.send("User Registered");
    } catch (err) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
