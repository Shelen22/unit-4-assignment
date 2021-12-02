const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

router.post(
  "/",
    body("email").custom(async (value) => {
      // value = a@a.com
      const isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/.test(value);
      if (!isEmail) {
        throw new Error("Please enter a proper email address");
      }
      const userEmail = await User.findOne({ email: value })
      .lean()
      .exec();
      if (userEmail) {
        throw new Error("Please try with a different email address");
      }
      return true;
    }),
    body("pincode").custom((value) => {
      // value = 1900
      const isNumber = /^[0-9]*$/.test(value); // true or false
      if (!isNumber || value.length > 6 || value.length < 6) {
        throw new Error("Pincode cannot be 6 digit");
      }
      return true;
    }),
    body("age")
    .isNumeric()
    .custom(async (value) => {
    if (value < 0 || value > 100) {
    throw new Error("Please enter age between 1 - 100");
    }
    return true;
  }),
  body("gender")
  .isIn(["Male", "Female","Other"])
  .withMessage("Please correct info"),
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      let newErrors = errors.array().map(({ msg, param, location }) => {
        return {
          [param]: msg,
        };
      });
      return res.status(400).json({ errors: newErrors });
    }
    try {
      const user = await User.create(req.body);

      return res.status(201).json({ user });
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  }
);

module.exports = router;