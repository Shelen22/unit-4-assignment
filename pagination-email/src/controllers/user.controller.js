const express = require("express");

const transporter = require("../config/mail");

const User = require("../model/user.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 2;

    const skip = (page - 1) * size;

    const users = await User.find().skip(skip).limit(size).lean().exec();

    const totalpages = Math.ceil((await User.find().countDocuments()) / size);

    return res.send({ users, totalpages });
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
  // console.log('users:', users)
});

router.post("/", async (req, res) => {
  try {
    const admin = [
      "shailendra@mgmail.com",
      "gautam@gmail.com",
      "adtiya@gmail.com",
      "ruchi@gmail.com",
      "komal@gmail.com",
    ];
    const to_string = admin.join(",");
    const users = await User.create(req.body);

    const message = {
      from: "shailendra@gmail.com",
      to: `${users.email},${to_string}`,
      subject: `${users.first_name}${users.last_name} has registered with us`,
      text: `Hi ${users.first_name}, Please confirm your email address`,
      html: `<h1>Please welcome ${users.first_name}${users.last_name}<h1>`,
    };

    transporter.sendMail(message);
    return res.status(201).send(users);
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
});

module.exports = router;
