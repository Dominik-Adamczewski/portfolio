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

// API: Get all projects
app.get('/api/projects', (req, res) => {
  const projectsDir = path.join(__dirname, 'public', 'projects')
  
  console.log('📁 Looking for projects in:', projectsDir)
  
  try {
    // Check if directory exists
    if (!fs.existsSync(projectsDir)) {
      console.error('❌ Projects directory does not exist!')
      return res.status(404).json({ 
        success: false, 
        error: 'Projects directory not found',
        path: projectsDir 
      })
    }
    
    const projects = fs.readdirSync(projectsDir)
      .filter(name => {
        const projectPath = path.join(projectsDir, name)
        return fs.statSync(projectPath).isDirectory()
      })
      .map(name => ({
        id: name,
        name: name,
        title: name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        url: `/projects/${name}/index.html`
      }))
    
    console.log('✅ Found projects:', projects.length)
    res.json({ success: true, projects, count: projects.length })
  } catch (error) {
    console.error('❌ Error:', error)
    res.status(500).json({ success: false, error: error.message })
  }
})

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