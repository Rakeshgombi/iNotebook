const express = require('express');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const JWT_SECRETE = "Rockyisagood$oy"

// Create a user using: POST "/api/auth/createuser", Doesn't require Login
router.post('/createuser', [
  body('name', "Enter a valid Name").isLength({ min: 3 }),
  body('email', "Enter the valid Email").isEmail(),
  body('password', "Password length must be atleast 5 characters").isLength({ min: 5 })
], async (req, res) => {

  // If there are errors, return Bad request errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with the same email already exists
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ error: "Sorry, A user with the same email already exists" })
    }
    const salt = await bcrypt.genSalt(10);

    let secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRETE);

    res.json({authToken});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Unknown error occured");
  }
});

module.exports = router;