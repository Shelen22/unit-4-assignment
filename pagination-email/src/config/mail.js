 const nodemailer = require('nodemailer');

  module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "2bb6899b982d88",
      pass: "217213e32b787a",
    },
  });