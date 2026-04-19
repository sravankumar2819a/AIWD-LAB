const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "urk23cs5002",   // ✅ your password
    database: "eventdb"
});


db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Registration API
app.post("/register", (req, res) => {
    const { regno, name, events } = req.body;

    // Validation: max 3 events
    if (events.length > 3) {
        return res.send("You can select maximum 3 events only!");
    }

    const eventsStr = events.join(", ");

    const sql = "INSERT INTO registrations (regno, name, events) VALUES (?, ?, ?)";

    db.query(sql, [regno, name, eventsStr], (err, result) => {
        if (err) {
            return res.send("Duplicate Register Number!");
        }
        res.send("Registration Successful!");
    });
});

// Search API
app.get("/search/:regno", (req, res) => {
    const regno = req.params.regno;

    const sql = "SELECT * FROM registrations WHERE regno = ?";
    db.query(sql, [regno], (err, result) => {
        if (result.length === 0) {
            return res.send("No record found");
        }
        res.json(result[0]);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});