const express = require('express');
const connect = require("./config/db");

const app = express();
app.use(express.json());

const start = async () => {
  await connect();

  app.listen(2244, () => {
    console.log("listening on port 2244");
  });
};

module.exports = {start, app};
