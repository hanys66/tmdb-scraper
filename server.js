require("dotenv").config();
console.log(process.env);
const express = require("express");
const scrapeMovies = require("./scraper");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/movies", async (req, res) => {
    try {
        const movies = await scrapeMovies();
        if (movies.length === 0) throw new Error("No movies found. Check scraper.");
        res.json(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});