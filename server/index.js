const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Add this for debugging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`)
  next()
})

// Serve static files from "projects" directory
app.use('/projects', express.static(path.join(__dirname, 'public', 'projects')));

// Load metadata about projects
const metaDataPath = path.join(__dirname, 'data', 'projects-metadata.json');
let projectsMetaData = {};

try {
  const metadataContent = fs.readFileSync(metaDataPath, 'utf-8');
  projectsMetaData = JSON.parse(metadataContent);
} catch (error) {
  console.error('❌ Error loading project metadata:', error);
}

// API: Get all projects
app.get('/api/projects', (req, res) => {
  const projectsDir = path.join(__dirname, 'public', 'projects')
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? '' 
    : 'http://localhost:3000'
  
  try {
    const projects = fs.readdirSync(projectsDir)
      .filter(name => {
        const projectPath = path.join(projectsDir, name)
        return fs.statSync(projectPath).isDirectory()
      })
      .map(name => ({
        id: Number(name.split('-')[0]),
        name: name,
        title: name
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .slice(1)
          .join(' '),
        url: `${baseUrl}/projects/${name}/index.html`,  // Full URL in dev,
        metaData: projectsMetaData[name] || {}
      }))
      .sort((a, b) => a.id - b.id)
    
    console.log('✅ Found projects:', projects.length)
    res.json({ success: true, projects, count: projects.length })
  } catch (error) {
    console.error('❌ Error:', error)
    res.status(500).json({ success: false, error: error.message })
  }
});

// API: Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;