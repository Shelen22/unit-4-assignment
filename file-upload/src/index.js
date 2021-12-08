const express = require('express');

const usercontroller = require('./controllers/user.controllers');
const gallerycontroller = require('./controllers/gallery.controllers');


const app = express();
app.use(express.json());


app.use("/user", usercontroller);
app.use("/gallery", gallerycontroller);


module.exports = app;