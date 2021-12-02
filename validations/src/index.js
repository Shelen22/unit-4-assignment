
const {start , app} = require("./server");
const usersController = require("./controllers/users.controller");



app.use("/user", usersController);

start();
