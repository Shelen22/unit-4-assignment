const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Urlcontroller = require("./controlles/url.controllers")
app.use(express.json());
 
app.use("/", Urlcontroller);

// Server Setup
const PORT = 3333;
app.listen(PORT, async () => {
 await mongoose.connect(`mongodb://127.0.0.1:27017/URlShorter`)
  console.log(`Server is running at PORT ${PORT}`);
});