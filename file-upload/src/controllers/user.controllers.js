const express = require('express');

const path = require('path');

const User = require('../models/user.model');
const upload = require('../middleware/upload')

const router = express.Router()

router.post("/",upload.single("profile_pic"),async (req,res) =>{
   
    try{
        const user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            profile_pic : req.file.path,
        })
        return res.status(201).json(user);
    }catch(e){
        return res.status(500).send({ message: e.message })
    }
})
router.post("/",upload.any("profile_pic"),async (req,res) =>{
   
    try{
        const user = await User.create({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            profile_pic : req.file.path,
        })
        return res.status(201).json(user);
    }catch(e){
        return res.status(500).send({ message: e.message })
    }
})

module.exports= router;