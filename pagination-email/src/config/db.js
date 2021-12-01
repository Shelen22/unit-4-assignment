 const mongoose = require('mongoose');

module.exports = () =>{
    return mongoose.connect("mongodb+srv://shailendra:shailendra22@cluster0.djbfv.mongodb.net/pagination")
}