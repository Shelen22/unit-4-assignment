const express = require("express");
const router = express.Router();
const Instructor = require("../models/instructor.model");

router.post("/", async (req, res) => {
    try {
        const instructor = await Instructor.create(req.body);
        return res.status(201).send(instructor);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

module.exports = router;