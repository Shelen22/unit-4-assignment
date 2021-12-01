const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
    {
        date_of_eval: { type: Date, required: true },
        student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "student",
            required: true,
        },
        topic_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "topic",
            required: true,
        },
        marks: { type: Number, required: false, default: 0 },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Eval = mongoose.model("evaluation", evaluationSchema);

module.exports = Eval;