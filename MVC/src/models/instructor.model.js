const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
    {
        instructor_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Instructor = mongoose.model("instructor", instructorSchema);

module.exports = Instructor;