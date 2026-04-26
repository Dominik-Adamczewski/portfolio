const API_URL = import.meta.env.PROD
  ? '/api'
  : 'http://localhost:3000/api';

export const api = {
  async getProjects() {
    try {
      const response = await fetch(`${API_URL}/projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      };
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getProjectUrl(projectName) {
    return import.meta.env.PROD
      ? `/projects/${projectName}/index.html`
      : `http://localhost:3000/projects/${projectName}/index.html`;
  },

  // Portfolio endpoints
  async getPortfolioAll() {
    try {
      const response = await fetch(`${API_URL}/portfolio/all`);
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getTestAutomationProjects() {
    try {
      const response = await fetch(`${API_URL}/test-automation-projects`);
      if (!response.ok) {
        throw new Error('Failed to fetch test automation projects');
      }
      const data = await response.json();
      return data.projects;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getPortfolio() {
    try {
      const response = await fetch(`${API_URL}/portfolio`);
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio base data');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getExperience() {
    try {
      const response = await fetch(`${API_URL}/portfolio/experience`);
      if (!response.ok) {
        throw new Error('Failed to fetch experience data');
      }
      const data = await response.json();
      return data.experience;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getEducation() {
    try {
      const response = await fetch(`${API_URL}/portfolio/education`);
      if (!response.ok) {
        throw new Error('Failed to fetch education data');
      }
      const data = await response.json();
      return data.education;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getSkills() {
    try {
      const response = await fetch(`${API_URL}/portfolio/skills`);
      if (!response.ok) {
        throw new Error('Failed to fetch skills data');
      }
      const data = await response.json();
      return data.techSkillsByGroup;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getCertifications() {
    try {
      const response = await fetch(`${API_URL}/portfolio/certifications`);
      if (!response.ok) {
        throw new Error('Failed to fetch certifications data');
      }
      const data = await response.json();
      return data.certificates;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  },

  async getCourses() {
    try {
      const response = await fetch(`${API_URL}/portfolio/courses`);
      if (!response.ok) {
        throw new Error('Failed to fetch courses data');
      }
      const data = await response.json();
      return data.courses;
    } catch (error) {
      console.error('API Error: ', error);
      throw error;
    }
  }
};