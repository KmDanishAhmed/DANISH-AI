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
    query,
    results: [
      "Search API online",
      "Future semantic search",
      "Knowledge graph integration pending"
    ]
  });
});

// Code Generation API
app.post('/api/code/generate', (req, res) => {
  const { prompt } = req.body;
  res.json({
    success: true,
    prompt,
    generated: `// Generated starter code

function app(){
    console.log("DANISH AI");
}`
  });
});

// Translation API
app.post('/api/translate', (req, res) => {
  const { code, source, target } = req.body;

  let translated = code;

  if (source === "javascript" && target === "python") {
    translated = translated
      .replace(/console\.log\((.*?)\);?/g, 'print($1)')
      .replace(/const\s+/g, '')
      .replace(/let\s+/g, '');
  }

  res.json({
    success: true,
    translated
  });
});

// Knowledge Query API
app.post('/api/knowledge/query', (req, res) => {
  const { question } = req.body;

  res.json({
    success: true,
    question,
    answer: "Knowledge service connected."
  });
});

// System Status
app.get('/api/system/status', (req, res) => {
  res.json({
    success: true,
    status: "running",
    version: "1.0.0"
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
