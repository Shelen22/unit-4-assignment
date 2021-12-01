const express = require("express");
const router = express.Router();
const Topic = require("../models/topic.model");

router.post("/", async (req, res) => {
    try {
        const topic = await Topic.create(req.body);
        return res.status(201).send(topic);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

module.exports = router;