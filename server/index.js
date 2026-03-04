const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Helper function to load JSON data files
const loadJsonFile = (filename) => {
  try {
    const filePath = path.join(__dirname, 'data', filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return null;
  }
};

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

// API: Get all FE projects
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

// Get portfolio general info (navbar, about)
app.get('/api/portfolio', (req, res) => {
  const data = loadJsonFile('portfolio.json');
  if (!data) {
    return res.status(500).json({ success: false, error: 'Failed to load portfolio data' });
  }
  res.json({ success: true, data });
});

// Get work experience
app.get('/api/portfolio/experience', (req, res) => {
  const data = loadJsonFile('experience.json');
  if (!data) {
    return res.status(500).json({ success: false, error: 'Failed to load experience data' });
  }
  res.json({ success: true, experience: data });
});

// Get education
app.get('/api/portfolio/education', (req, res) => {
  const data = loadJsonFile('education.json');
  if (!data) {
    return res.status(500).json({ success: false, error: 'Failed to load education data' });
  }
  res.json({ success: true, education: data });
});

// Get skills
app.get('/api/portfolio/skills', (req, res) => {
  const data = loadJsonFile('skills.json');
  if (!data) {
    return res.status(500).json({ success: false, error: 'Failed to load skills data' });
  }
  res.json({ success: true, techSkillsByGroup: data });
});

// Get certifications
app.get('/api/portfolio/certifications', (req, res) => {
  const data = loadJsonFile('certifications.json');
  if (!data) {
    return res.status(500).json({ success: false, error: 'Failed to load certifications data' });
  }
  res.json({ success: true, certificates: data });
});

// Get courses
app.get('/api/portfolio/courses', (req, res) => {
  const data = loadJsonFile('courses.json');
  if (!data) {
    return res.status(500).json({ success: false, error: 'Failed to load courses data' });
  }
  res.json({ success: true, courses: data });
});

// Get all portfolio data at once (useful for initial load)
app.get('/api/portfolio/all', (req, res) => {
  try {
    const portfolio = loadJsonFile('portfolio.json');
    const experience = loadJsonFile('experience.json');
    const education = loadJsonFile('education.json');
    const skills = loadJsonFile('skills.json');
    const certificates = loadJsonFile('certifications.json');
    const courses = loadJsonFile('courses.json');

    if (!portfolio || !experience || !education || !skills || !certificates || !courses) {
      return res.status(500).json({ success: false, error: 'Failed to load some portfolio data' });
    }

    res.json({
      success: true,
      data: {
        ...portfolio,
        workExperienceItems: experience,
        educationItems: education,
        techSkillsByGroup: skills,
        certificates,
        courses
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
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