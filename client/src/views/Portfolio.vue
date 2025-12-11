<script setup>
import { ref, onMounted } from 'vue'
import { api } from '../services/api'

const projects = ref([])
const loading = ref(true)
const error = ref(null)

const skills = [
  {
    category: 'Testing',
    items: ['Manual Testing', 'Test Case Design', 'ISTQB FL Certified', 'BrowserStack']
  },
  {
    category: 'Automation',
    items: ['Playwright', 'Puppeteer → Playwright Migration', 'E2E Testing', 'Test Architecture']
  },
  {
    category: 'API & Performance',
    items: ['Postman', 'K6 Load Testing', 'API Testing Basics']
  },
  {
    category: 'Development',
    items: ['JavaScript/TypeScript', 'Vue.js', 'HTML/CSS', 'Tailwind CSS']
  },
  {
    category: 'CI/CD & Tools',
    items: ['GitHub Actions', 'Jenkins', 'Git', 'Vercel Deployment']
  }
]

const experience = {
  company: 'Venue Hire Marketplace',
  role: 'QA Specialist',
  duration: '4 Years (2020 - Present)',
  highlights: [
    'Migrated entire test automation suite from Puppeteer to Playwright',
    'Designed and implemented E2E testing strategy',
    'Created comprehensive test case documentation',
    'Collaborated with development team on CI/CD pipeline'
  ]
}

onMounted(async () => {
  try {
    const response = await api.getProjects()
    projects.value = response.projects
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})

const openProject = (project) => {
  window.open(project.url, '_blank')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    <!-- Hero Section -->
    <header class="container mx-auto px-6 py-20">
      <div class="max-w-4xl">
        <h1 class="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          QA Specialist
        </h1>
        <p class="text-2xl text-slate-300 mb-6">
          4 years of experience in manual & automated testing
        </p>
        <p class="text-lg text-slate-400 mb-8 max-w-2xl">
          Specialized in E2E test automation with Playwright, frontend development, 
          and building robust testing strategies for web applications.
        </p>
        <div class="flex gap-4">
          <a href="#projects" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            View Projects
          </a>
          <a href="#contact" class="px-6 py-3 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition">
            Contact Me
          </a>
        </div>
      </div>
    </header>

    <!-- Skills Section -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold mb-12">Skills & Technologies</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="skill in skills" 
          :key="skill.category"
          class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition"
        >
          <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ skill.category }}</h3>
          <ul class="space-y-2">
            <li 
              v-for="item in skill.items" 
              :key="item"
              class="text-slate-300 flex items-start"
            >
              <span class="text-blue-500 mr-2">▹</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold mb-12">Experience</h2>
      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h3 class="text-2xl font-bold text-blue-400">{{ experience.role }}</h3>
            <p class="text-xl text-slate-300">{{ experience.company }}</p>
          </div>
          <span class="text-slate-400 font-mono">{{ experience.duration }}</span>
        </div>
        <ul class="space-y-3">
          <li 
            v-for="highlight in experience.highlights" 
            :key="highlight"
            class="text-slate-300 flex items-start"
          >
            <span class="text-green-500 mr-3 mt-1">✓</span>
            {{ highlight }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold mb-12">Frontend Projects ({{ projects.length }})</h2>
      
      <!-- Loading -->
      <div v-if="loading" class="text-center py-20">
        <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p class="text-slate-400 mt-4">Loading projects...</p>
      </div>
      
      <!-- Error -->
      <div v-else-if="error" class="text-center py-20">
        <p class="text-red-400">Error loading projects: {{ error }}</p>
      </div>
      
      <!-- Projects Grid -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id"
          @click="openProject(project)"
          class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-500 transition group cursor-pointer"
        >
          <h3 class="text-xl font-bold group-hover:text-purple-400 transition mb-2">
            {{ project.title }}
          </h3>
          <p class="text-slate-400 text-sm mb-4">
            Click to view live project →
          </p>
          <div class="text-purple-400 text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
            Open Project
            <span class="text-lg">↗</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="container mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold mb-12">Certifications</h2>
      <div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8 inline-block">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl">
            🎓
          </div>
          <div>
            <h3 class="text-xl font-bold">ISTQB Foundation Level</h3>
            <p class="text-slate-400">Certified Software Tester</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="container mx-auto px-6 py-12 border-t border-slate-800">
      <div class="text-center text-slate-400">
        <p>© 2024 QA Portfolio | Built with Vue.js + Vite + Tailwind CSS + Express</p>
        <p class="mt-2 text-sm">Deployed on Vercel with CI/CD via GitHub Actions</p>
      </div>
    </footer>
  </div>
</template>