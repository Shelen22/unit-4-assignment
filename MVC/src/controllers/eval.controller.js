const express = require("express");
const router = express.Router();
const Eval = require("../models/evaluation.model");


router.post("/", async (req,res) => {
    try {
        const eval = await Eval.create(req.body);
        return res.status(201).send(eval);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

router.get("/students/topic_id=:topic_id", async (req, res) => {
    try {
        const eval = await Eval.find({ topic_id:req.params.topic_id })
            .populate("student_id")
            .populate(
                {
                    path: "student_id",
                    populate: {
                        path: "user_id",
                    }
                }
            )
            .populate("topic_id")
            .lean()
            .exec()
        return res.status(200).send(eval);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
})

router.get("/students/max-marks", async (req, res) => {
    try {
        const highestMarks = await Eval.find()
            .sort({ marks: -1 })
            .limit(3)
            .populate("student_id")
            .populate({
                path: "student_id",
                populate: {
                    path: "user_id",
                },
            })
            .populate("topic_id")
            .lean()
            .exec();
        return res.status(200).send(highestMarks);
    } catch (e) {
        return res.status(500).send({ message: e.message });
    }
});

module.exports = router;