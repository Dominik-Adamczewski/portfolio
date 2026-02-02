import { defineStore } from 'pinia';
import { api } from '../services/api';

export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    navbarLinks: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Education', href: '#education' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Certifications', href: '#certifications-and-courses' },
    ],
    aboutMeParagraphs: [
      'I am a detail-oriented Quality Assurance Specialist with a passion for breaking things just so they can be fixed stronger. My expertise lies in bridging the gap between development and operations through rigorous testing frameworks and automated solutions.',
      'I believe in quality at every stage of the SDLC. Whether it\'s writing complex Playwright scripts or manually exploring edge cases in a new feature, my goal is always the same: a flawless user experience.'
    ],
    workExperienceItems: [
      {
        position: 'Senior QA Engineer',
        company: 'TechFlow Solutions',
        duration: 'Jan 2022 - Present',
        descriptionListItems: [
          'Led a team of 4 QA Engineers, establishing best practices for automation frameworks using Playwright and JavaScript.',
          'Reduced regression testing time by 40% by implementing a robust CI/CD pipeline integration with Jenkins.',
          'Conducted API testing using Postman and RestAssured, identifying critical security vulnerabilities before launch.'
        ],
        skills: ['Playwright', 'JavaScript', 'CI/CD', 'API Testing', 'Jenkins']
      }
    ],
    educationItems: [
      { degree: 'master', name: 'Master of Science in Software Engineering', institution: 'Tech University', description: 'Lotem ipsum dupson deloarean matko bosko', date: '2022' },
      { degree: 'bachelor', name: 'Bachelor of Science in Computer Science', institution: 'University of Technology', description: 'Lotem ipsum dupson deloarean matko bosko', date: '2020' }
    ],
    projects: [],
    techSkills: [
      { name: 'Playwright', lvl: 3 },
      { name: 'Puppeteer', lvl: 2 },
      { name: 'Postman', lvl: 1 },
      { name: 'JavaScript', lvl: 4 }
    ],
    certificates: [
      { name: 'ISTQB Foundation Level', details: ['Issuer: SJSI', 'Date: 2023', 'ID: AAAA-BBBB-CCCC-DDDD'], color: 'yellow' },
    ],
    courses: [
      { name: 'Automated Software Testing with Playwright', issuer: 'Udemy', date: '2023', link: 'https://www.udemy.com/certificate/UC-XXXXXX/' },
    ]
  }),
  getters: {},
  actions: {
    async fetchProjects() {
      try {
        const response = await api.getProjects()
        this.projects = response.projects;
        console.log('Projects fetched successfully:', this.projects);
      } catch (err) {
        throw new Error(err.message);
      }
    }
  }
});
