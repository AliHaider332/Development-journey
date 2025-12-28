const express = require('express');
const cors = require('cors');
const { chatWithAI } = require('./router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Chat route - THE ONLY ENDPOINT
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId = 'default' } = req.body;
    console.log(message);
    

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const aiResponse = await chatWithAI(message, sessionId);

    res.json({
      response: aiResponse,
      sessionId,
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error',
      response: "I'm having trouble connecting right now. Please try again later.",
    });
  }
});

// Health check (optional but good to have)
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Chat API is running' });
});

app.listen(PORT, () => {
  console.log(`Chat API running on port ${PORT}`);
});