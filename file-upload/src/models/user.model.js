 const {Schema, model} = require('mongoose');

 const userSchema = new Schema({
     first_name : {type: String,required:true},
     last_name : {type: String},
     email : {type: String,required:true,unique: true},
     profile_pic : {type: String,required:true}
 },
 {
     versionKey:false,
     timestamps: true,
 }
 );

 module.exports = model("user", userSchema);