const axios = require('axios');

const getCareerPrediction = async (userData) => {
  try {
    console.log('Using OpenRouter API Key:', process.env.OPENROUTER_API_KEY); // Debugging statement
    const response = await axios.post('https://api.openrouter.com/predict', userData, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching career prediction:', error);
    throw new Error('Failed to fetch career prediction.');
  }
};

module.exports = { getCareerPrediction };