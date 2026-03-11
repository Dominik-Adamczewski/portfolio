import { defineStore } from 'pinia';
import { api } from '../services/api';

export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    navbarLinks: [],
    aboutMeParagraphs: [],
    workExperienceItems: [],
    educationItems: [],
    projects: [],
    techSkillsByGroup: [],
    certificates: [],
    courses: [],
    isLoading: false,
    error: null
  }),
  getters: {
    getSortedSkillsByGroup: (state) => {
      return state.techSkillsByGroup.map(group => {
        return {
          ...group,
          skills: group.skills.sort((a, b) => b.lvl - a.lvl)
        }
      });
    }
  },
  actions: {
    async fetchAllPortfolioData() {
      this.isLoading = true;
      this.error = null;
      try {
        const data = await api.getPortfolioAll();
        
        this.navbarLinks = data.navbarLinks || [];
        this.aboutMeParagraphs = data.aboutMeParagraphs || [];
        this.workExperienceItems = data.workExperienceItems || [];
        this.educationItems = data.educationItems || [];
        this.techSkillsByGroup = data.techSkillsByGroup || [];
        this.certificates = data.certificates || [];
        this.courses = data.courses || [];
        await this.fetchProjects();
      } catch (err) {
        this.error = err.message;
        throw new Error('Failed to fetch portfolio data:', err);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchProjects() {
      try {
        const response = await api.getProjects()
        this.projects = response.projects;
      } catch (err) {
        this.error = err.message;
        throw new Error(err.message);
      }
    }
  }
});
