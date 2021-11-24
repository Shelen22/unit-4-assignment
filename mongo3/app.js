const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/movies");
};

const userSchema = new mongoose.Schema(
    {
        movie_name: { type: String, required: true, unique: true },
        movie_genre: { type: String, required: true },
        production_year: { type: Number, required: true },
        budget: { type: Number, required: true },
    },
    {
        versionKey: false,
        timestamp: true,
    }
);

const Movies = mongoose.model("movie", userSchema);

app.post("/movies", async (req, res) => {
    try {
        const movie = await Movies.create(req.body);
        res.status(201).send({ movie });
    } catch (e) {
        res.status(500).send({ message: e.message, status: "failed" });
    }
});

app.get("/movies", async (req, res) => {
    try {
        const movie = await Movies.find().lean().exec();
         return res.status(200).send({ movie });
    } catch (e) {
       return res.status(500).send({ message: e.message, status: "failed" });
    }
});

app.patch("/movies/:id", async (req, res) => {
    try {
        const movie = await Movies.findByIdAndUpdate(req.params.id, req.body,{new:true});
       return res.status(200).send({ movie });
    } catch (e) {
       return res.status(500).send({ message: e.message, status: "failed" });
    }
});

app.get("/movies/:id", async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.id).lean().exec();
         return res.status(200).send({ movie });
    } catch (e) {
       return res.status(500).send({ message: e.message, status: "failed" });
    }
});

app.delete("/movies/:id" , async (req, res) =>{
    try {
        const movie = await Movies.findByIdAndDelete(req.params.id).lean().exec();
         return res.status(200).send({ movie });
    } catch (e) {
       return res.status(500).send({ message: e.message, status: "failed" });
    }
});


app.listen(2222, async () => {
    await connect();
    console.log("listening on 2222");
});
