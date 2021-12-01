const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: false },
        gender: { type: String, required: false, default: "Male" },
        dob: { type: Date, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
