const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

client.connect().then(() => {
    db = client.db("eventdb");
    console.log("MongoDB Connected...");
});

// REGISTER API
app.post("/register", async (req, res) => {
    const { regno, name, events } = req.body;

    // Validation
    if (events.length > 3) {
        return res.send("Max 3 events allowed!");
    }

    const collection = db.collection("registrations");

    // Check duplicate
    const existing = await collection.findOne({ regno });
    if (existing) {
        return res.send("Duplicate Register Number!");
    }

    await collection.insertOne({ regno, name, events });

    res.send("Registration Successful!");
});

// SEARCH API
app.get("/search/:regno", async (req, res) => {
    const regno = req.params.regno;

    const collection = db.collection("registrations");
    const user = await collection.findOne({ regno });

    if (!user) {
        return res.send("No record found");
    }

    res.json(user);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});