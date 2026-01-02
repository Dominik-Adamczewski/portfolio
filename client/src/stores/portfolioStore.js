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
  }),
  getters: {},
  actions: {}
});
