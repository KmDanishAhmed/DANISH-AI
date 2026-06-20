const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'DANISH AI Server Running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Search API
app.post('/api/search', (req, res) => {
  const { query } = req.body;
  res.json({
    success: true,
    query: query,
    results: ["Search API working", "Query processed: " + (query || "empty")]
  });
});

// Code Generation API
app.post('/api/code/generate', (req, res) => {
  const { prompt } = req.body;
  res.json({
    success: true,
    message: "Code generation endpoint",
    prompt: prompt,
    generatedCode: "// Generated code will appear here"
  });
});

// Translation API
app.post('/api/translate', (req, res) => {
  const { text } = req.body;
  res.json({
    success: true,
    message: "Translation endpoint",
    inputText: text,
    translatedText: "Translation results will appear here"
  });
});

// Knowledge Query API
app.post('/api/knowledge/query', (req, res) => {
  const { query } = req.body;
  res.json({
    success: true,
    message: "Knowledge endpoint",
    query: query,
    knowledgeResults: "Knowledge base query results will appear here"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DANISH AI Server running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard available at http://localhost:${PORT}/danish-ai.html`);
});
