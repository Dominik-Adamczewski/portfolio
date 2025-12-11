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
  }
};