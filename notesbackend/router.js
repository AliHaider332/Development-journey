// router.js
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Store conversation history
const conversationHistories = new Map();

async function chatWithAI(message, sessionId = 'default') {
  try {
    if (!message || typeof message !== 'string' || message.trim() === '') {
      throw new Error('Invalid message');
    }

    if (!process.env.GOOGLE_API_KEY) {
      throw new Error('API key missing');
    }

    // Initialize history if not exists
    if (!conversationHistories.has(sessionId)) {
      conversationHistories.set(sessionId, []);
    }

    const history = conversationHistories.get(sessionId);

    const model = ai.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: `
You are a helpful JavaScript instructor. 
Rules:
If the user ask some out of the context then don't try to answer only try to direct to the js
• Keep answers short (1–1.5 paragraphs max)
• Use simple language
• Use bullet points
• Use bold for key terms
• Use \`code\` for inline code
• Use javascript for code blocks
• No HTML tags, no headings
• Most Importent : Try to give solution in short word 


`,
    });

    // Add new user message
    history.push({ role: 'user', parts: [{ text: message }] });

    // Limit to last 6 messages
    if (history.length > 6) history.splice(0, history.length - 6);

    const result = await model.generateContent({
      contents: history,
      generationConfig: {
        temperature: 0.3,
        topP: 0.8,
        topK: 20,
        maxOutputTokens: 100,
      },
    });

    const response = await result.response;
    const aiText = response.text();

    // Save AI response
    history.push({ role: 'model', parts: [{ text: aiText }] });

    return aiText;
  } catch (err) {
    console.error('AI Service Error:', err.message);
    return "I'm having trouble connecting. Please try again.";
  }
}

function clearHistory(sessionId = 'default') {
  conversationHistories.set(sessionId, []);
  return true;
}

function getHistoryLength(sessionId = 'default') {
  const h = conversationHistories.get(sessionId);
  return h ? h.length : 0;
}

module.exports = { chatWithAI, clearHistory, getHistoryLength };
