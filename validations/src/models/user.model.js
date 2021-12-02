const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {type:String},
  last_name: {type:String},
  email: {type:String},
  pincode: {type:Number},
  age: {type:Number},
  gender: {type:String},

});

const User = mongoose.model("user", userSchema);

module.exports = User;
