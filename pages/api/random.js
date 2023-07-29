// api/random.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Make the API request to the external API
    const response = await axios.get('https://zenquotes.io/api/random?option1=value&option2=value');

    // Set CORS headers to allow requests from any origin (*)
    res.setHeader('Access-Control-Allow-Origin', 'https://ali-ahmed.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Extract the quote and author from the response
    const { q, a } = response.data[0];

    // Respond with the quote and author as JSON
    res.status(200).json({ quote: q, author: a });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching the quote.' });
  }
}
