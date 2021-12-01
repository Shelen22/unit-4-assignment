const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
    {
        topic_name: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);
const Topic = mongoose.model("topic", topicSchema);

module.exports = Topic;