const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/masai");
};

const userController = require("./controllers/user.controller");
const studentController = require("./controllers/student.controller");
const instructorController = require("./controllers/instructor.controller");
const topicController = require("./controllers/topic.controller");
const evalController = require("./controllers/eval.controller");

app.use("/user", userController);
app.use("/student", studentController);
app.use("/instructor", instructorController);
app.use("/topic", topicController);
app.use("/eval", evalController);

app.listen(2222, async () => {
    await connect();
    console.log("LISTENING ON PORT 2222");
});
