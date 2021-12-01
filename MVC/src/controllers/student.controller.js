const express = require("express");
const router = express.Router();
const Student = require("../models/student.model");

router.post("/", async (req, res) => {
    try {
        const student = await Student.create(req.body);
        return res.status(201).send(student);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

module.exports = router;