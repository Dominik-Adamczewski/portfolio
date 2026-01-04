import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolioStore', {
  state: () => ({
    navbarLinks: [
      { name: 'About', href: '#about' },
      { name: 'Education', href: '#education' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Certifications', href: '#certifications' },
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
  }),
  getters: {},
  actions: {}
});
