
const express = require('express');

const user = require("./users.json");

const app = express();


// app.get('/', function (req, res) {
//     res.send('Welcome to Home page')
// })

app.get('/', (req, res) =>{
    res.send({user});
})
 
app.listen(2222, function () {
    console.log("listening on port 2222");
});


