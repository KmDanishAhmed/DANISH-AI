# DANISH AI - Deployment Guide

## Quick Start

### Prerequisites
- Node.js 14+ installed
- npm installed

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the server**
   ```bash
   npm start
   ```

3. **Access the application**
   - Dashboard: http://localhost:3000/danish-ai.html
   - Landing Page: http://localhost:3000/index.html
   - API Health: http://localhost:3000/

### Available APIs

- **GET** `/` - Server health check
- **POST** `/api/search` - Search functionality
- **POST** `/api/code/generate` - Code generation
- **POST** `/api/translate` - Translation service
- **POST** `/api/knowledge/query` - Knowledge base queries

## Production Deployment

### Option 1: Heroku
```bash
git push heroku main
```

### Option 2: Railway/Render
- Connect GitHub repository
- Set start command: `npm start`

### Option 3: Docker
```bash
docker build -t danish-ai .
docker run -p 3000:3000 danish-ai
```

### Option 4: GitHub Pages + Backend
- Use static files (index.html) with GitHub Pages
- Deploy backend separately on Heroku/Railway/Render

## Environment Variables
```
PORT=3000
NODE_ENV=production
```

## Troubleshooting
- Check Node.js: `node --version`
- Clear cache: `npm cache clean --force`
- Reinstall: `rm -rf node_modules && npm install`
