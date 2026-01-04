const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const apiRouter = require('./routes/api'); // Import the api.js router

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

require('dotenv').config();

const openRouterApiKey = process.env.OPENROUTER_API_KEY;
const youtubeApiKey = process.env.YOUTUBE_API_KEY;

console.log(`OpenRouter API Key: ${openRouterApiKey}`);
console.log(`YouTube API Key: ${youtubeApiKey}`);

// Middleware to parse JSON bodies
app.use(express.json());

// Use the API router for routes starting with /api
app.use('/api', apiRouter);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
