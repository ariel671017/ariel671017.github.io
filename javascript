<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Video Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
            background-color: #f4f4f4;
        }
        .container {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        textarea {
            width: 100%;
            height: 150px;
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
        }
        #loading {
            text-align: center;
            color: #666;
            margin-top: 20px;
        }
        #videoContainer {
            margin-top: 20px;
            text-align: center;
        }
        #generatedVideo {
            max-width: 100%;
            border-radius: 4px;
        }
        .hidden {
            display: none;
        }
        #errorMessage {
            color: red;
            text-align: center;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>AI Video Generator</h1>
        <p>Enter a detailed prompt for your video generation:</p>
        <form id="promptForm">
            <textarea id="promptInput" placeholder="Describe the video you want to generate (e.g., 'A 30-second animation of a rocket launching into space with realistic physics')" required></textarea>
            <button type="submit" id="generateButton">Generate Video</button>
        </form>
        <div id="loading" class="hidden">
            <p>Generating your video... This may take a few minutes.</p>
        </div>
        <div id="errorMessage" class="hidden"></div>
        <div id="videoContainer" class="hidden">
            <h2>Your Generated Video</h2>
            <video id="generatedVideo" controls></video>
            <p id="videoDescription"></p>
        </div>
    </div>

    <script>
        const form = document.getElementById('promptForm');
        const promptInput = document.getElementById('promptInput');
        const generateButton = document.getElementById('generateButton');
        const loadingDiv = document.getElementById('loading');
        const videoContainer = document.getElementById('videoContainer');
        const generatedVideo = document.getElementById('generatedVideo');
        const videoDescription = document.getElementById('videoDescription');
        const errorMessage = document.getElementById('errorMessage');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Reset previous state
            errorMessage.classList.add('hidden');
            videoContainer.classList.add('hidden');
            loadingDiv.classList.remove('hidden');
            generateButton.disabled = true;

            const prompt = promptInput.value;

            try {
                // This is a placeholder for the actual API call
                // You'll need to replace this with the actual integration method
                const response = await simulateVideoGeneration(prompt);

                // Update video source and description
                generatedVideo.src = response.videoUrl;
                videoDescription.textContent = response.description;

                // Show video container
                loadingDiv.classList.add('hidden');
                videoContainer.classList.remove('hidden');
            } catch (error) {
                // Handle errors
                loadingDiv.classList.add('hidden');
                errorMessage.textContent = `Error: ${error.message}`;
                errorMessage.classList.remove('hidden');
            } finally {
                generateButton.disabled = false;
            }
        });

        // Simulated video generation function
        async function simulateVideoGeneration(prompt) {
            // Replace this with actual API integration
            return new Promise((resolve, reject) => {
                // Simulate API call delay
                setTimeout(() => {
                    // In a real scenario, you'd call the actual video generation API
                    resolve({
                        videoUrl: 'https://example.com/generated-video.mp4',
                        description: `Video generated from prompt: "${prompt}"`
                    });
                }, 3000);
            });
        }
    </script>
</body>
</html>
