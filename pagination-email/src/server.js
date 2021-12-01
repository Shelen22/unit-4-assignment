 const app = require('./index');

 const connect = require("./config/db");

 

 app.listen(2222, async (req, res) => {
     await connect();
     console.log("listening on port 2222");
 })