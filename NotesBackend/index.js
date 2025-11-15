// index.js (server)
const express = require('express');
const cors = require('cors');
const { chatWithAI, clearHistory, getHistoryLength } = require('./router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'JavaScript AI Tutor Server is running!' });
});

// Chat route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId = 'default' } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const aiResponse = await chatWithAI(message, sessionId);

    res.json({
      response: aiResponse,
      sessionId,
      historyLength: getHistoryLength(sessionId),
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      error: 'Internal server error',
      response:
        "I'm having trouble connecting right now. Please try again later.",
    });
  }
});

// Clear history
app.post('/api/clear-history', (req, res) => {
  const { sessionId = 'default' } = req.body;
  clearHistory(sessionId);
  res.json({ message: 'Conversation history cleared', sessionId });
});

// History info
app.get('/api/history-info/:sessionId?', (req, res) => {
  const sessionId = req.params.sessionId || 'default';
  res.json({
    sessionId,
    historyLength: getHistoryLength(sessionId),
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// AI Model info
app.get('/api/model-info', (req, res) => {
  res.json({
    model: 'gemini-2.0-flash',
    provider: 'Google Generative AI',
    temperature: 0.3,
    maxTokens: 300,
  });
});

app.listen(PORT);
