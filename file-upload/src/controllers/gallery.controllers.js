const express = require('express');

const path = require('path');

const Gallery = require('../models/gallery.model');
const upload = require('../middleware/upload')

const router = express.Router()

router.post("/",upload.any("pictures",5),async (req,res) =>{
    const filePaths = req.files.map(file =>file.path);
    try{
        const gallery = await Gallery.create({
            user_id : req.body.id,
            pictures : req.filePath,
        })
        return res.status(201).json(user);
    }catch(e){
        return res.status(500).send({ message: e.message })
    }
})