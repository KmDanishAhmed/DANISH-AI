const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

// Simple endpoints that mirror the front-end expectations
app.post('/api/search', (req, res) => {
  const q = req.body.query || 'sample';
  res.json({status:'success', query:q, results:[{title:`Result 1 for ${q}`, url:'https://example.com/1'},{title:`Result 2 for ${q}`, url:'https://example.com/2'}], totalResults:2});
});

app.post('/api/code/generate', (req, res) => {
  const prompt = req.body.prompt || 'demo';
  const code = `// Generated (live) code for: ${prompt}\n\nfunction demo(){\n  console.log('Hello from DANISH AI - live server');\n}\n\nmodule.exports = {demo};`;
  res.json({status:'success', prompt, language:'javascript', code, explanation:'Live server generated code (demo)'});
});

app.post('/api/translate', (req, res) => {
  const { text, language } = req.body;
  res.json({status:'success', original:text, targetLanguage:language || 'es', translated:`(live) [${language||'es'}] ${text}`});
});

app.post('/api/knowledge/query', (req, res) => {
  const q = req.body.query || '';
  res.json({status:'success', query:q, answer:`(live) Answer for: ${q}`, sources:['Live KB 1']});
});

app.post('/api/status', (req, res) => {
  res.json({status:'operational', version:'1.0.0', timestamp:new Date().toISOString(), services:{search:true,codeGen:true,translator:true,knowledge:true}});
});

app.listen(port, () => console.log(`DANISH-AI demo server listening on http://localhost:${port}`));
