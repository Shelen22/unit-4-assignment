 const {Schema, model} = require('mongoose');

 const userSchema = new Schema({
     first_name : {type: String,required:true, unique: true},
     last_name : {type: String},
     profile_pic : [{type: String,required:true}]
 },
 {
     versionKey:false,
     timestamps: true,
 }
 );

 module.exports = model("user", userSchema);