const express = require("express");
const { check, validationResult } = require("express-validator/check");
const 

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
      user = new User({ name, email, password });

    } catch (err) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
