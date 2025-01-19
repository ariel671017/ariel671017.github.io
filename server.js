const express = require("express");
const fetch = require("node-fetch");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// API key for PlainlyVideos
const API_KEY = "yxFYHvmB2r2Xz0nhbPEERYXkLUJRAjnN"; // Replace with your actual API key

// Endpoint to handle video generation
app.post("/generate-video", async (req, res) => {
    const { input } = req.body;

    try {
        const response = await fetch("https://api.plainlyvideos.com/your-endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({ input }) // Adjust based on API documentation
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to generate video" });
        }

        const data = await response.json();
        res.json({ videoUrl: data.videoUrl }); // Adjust based on the API response structure
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
