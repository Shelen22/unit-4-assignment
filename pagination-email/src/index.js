 const express = require('express');
 const app = express();
 app.use(express.json());

 const usercontroller = require('./controllers/user.controller');

  
  
  app.use("/users", usercontroller);


  module.exports = app;