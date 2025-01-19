const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// API key for PlainlyVideos
const API_KEY = "yxFYHvmB2r2Xz0nhbPEERYXkLUJRAjnN"; // Replace with your actual API key

// Endpoint to handle video generation
app.post("/generate-video", async (req, res) => {
    const { input } = req.body;

    try {
        const response = await fetch("https://api.plainlyvideos.com/api/v2/renders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                templateId: "8f7f2d8a-9ccc-42dc-b229-1a175b890e99", // Replace with a valid template ID
                variables: { text: input } // Replace with variables required by the API
            })
        });

        if (!response.ok) {
            const error = await response.json();
            return res.status(response.status).json({ error: error.message });
        }

        const data = await response.json();
        res.json({ videoUrl: data.videoUrl }); // Adjust based on the API response structure
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
