document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the prompt
    const prompt = document.getElementById('promptInput').value;
    
    // Show loading
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('videoContainer').classList.add('hidden');
    
    // Simulate video generation (replace with actual AI video generation API)
    setTimeout(() => {
        // Hide loading
        document.getElementById('loading').classList.add('hidden');
        
        // Show video container
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.classList.remove('hidden');
        
        // Simulate setting a video (replace with actual video URL)
        const video = document.getElementById('generatedVideo');
        video.src = 'https://example.com/placeholder-video.mp4'; // Replace with actual video source
    }, 3000); // Simulated 3-second delay
});
