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
      'I am a detail-oriented Quality Assurance Specialist with a passion for breaking things just so they can be fixed stronger. Throughout my current experience I was ensuring the best quality of Tagvenue platform by idenifying and reporting all sorts of issues - from simple UI flaws, through functional problems, ending with performance and UX related issues. My experience also includes maintatining and improving email deliverability architecture.',
      'At some point in my career I started exploring test automation which also led me to learning basic of Frontend technologies. There was a time when I wanted to shift more into becoming Front End Developer. After gaining the necessary knowledge about front end frameworks and actually trying this new responsiblities I realized, that I achieve the biggest work satisfaction by ensuring quality. Nevertheless, this experience allowed me to deeper understand programming, and Front End related concepts used in software development.',
      'Currently I am expanding my knowledge on few different levels in QA World. I am practicing with API Testing and building CI/CD flow, to be able to build more robust test automation implementations. Additionally, I am interested now in expanging my career into security testing and thus, I started gathering knowledge necessary to perform Security Analyst role, with addition on understanding common website vulnerabilities from area of Penetration Testing.',
      'I am also staying in touch in regards of AI and its impact on software development and testing. In my current role I was able to implement few different AI automation utilizing Claude and Claude Code, such as Test Cases generator or Playwright E2E tests generator, which allowed me to gain some practical experience in this area and understand better how AI can be used in software development and testing.'
    ],
    workExperienceItems: [
      {
        position: 'QA Engineer',
        company: 'Tagvenue Limited',
        duration: 'Mar 2025 - Current',
        description: 'Next step in my career in Tagvenue is related to introducing me more into Front End development role and expangind my skill in test automation. I managed to migrate our whole E2E test base from Puppeteer + JavaScript to Playwright + Typescript. Additionally at this time I was exposed more to Front End development tasks with Vue.js framework. In the end I decided not to pursue the path of becoming Front End Developer but it was a great experience and chance to improve my JavaScript skills. Currently I am also leading two QA Testers in the team, and introducing AI into our workflow. With help of Claude I was able to implement tool (Claude Projects) to generate and add test cases to our test management system and also reusable prompt / instructions to generate Playwright E2E tests.',
        descriptionListItems: [
          'Migrating our whole E2E test base from Puppeteer + JavaScript to Playwright + Typescript',
          'Implementing new E2E tests using Playwright + Typescript',
          'Implementing smaller Front End Stoies using Vue.js framework',
          'Leading two QA Testers in the team',
          'Introducing AI into QA Team workflow - Test cases generation and Playwright E2E tests generation using Claude and Claude Code',
          'Implementing alerts for monitoring email deliverability metrics using Grafana and data in ElasticSearch',
          'Security topics'
        ],
        skills: ['Test Automation', 'Playwright', 'Typescript', 'Vue.js', 'AI in Testing', 'Claude', 'Grafana', 'ElasticSearch'],
        isCurrent: true,
      },
      {
        position: 'QA & Product Specialist',
        company: 'Tagvenue Limited',
        duration: 'Jan 2023 - Feb 2025',
        description: 'I was continuing my work and development in Tagvenue by introducing myself to programming and test automation using existing stack of Puppeteer and JavaScript. During this time I was also occasionally fixing and implementing smaller Front End features, which allowed me to gain more experience in programming and understanding of Front End development. At this time, our QA Team started to grow and I had a chance to act as a leader for new team member.',
        descriptionListItems: [
          'Performing tests on both Front End and Back End (testing changes on local environment or directly on the database level)',
          'Indetifying error logs related to actions performed during testing with use os ElasticSearch and Kibana',
          'Writing and maintaining automated E2E tests using Puppeteer with Page Object Model methodology',
          'Implementing small Front End code changes (fixing styles of elements on the website, implementing smaller features)',
          'Ensuring the best quality of the software by creating and maintaining QA processes within the team (automated JIRA flows, separate QA process for designs)',
          'Suggesting improvements to the product',
          'Acting as a Team Leader for other QA Specialists within the team',
          'Improving our email deliverability architecture by implementing more strict DMARC policies and monitoring metrics using GlockApps software'
        ],
        skills: ['Manual Testing', 'Test Automation', 'Puppeteer', 'JavaScript', 'Front End Development', 'HTML/CSS', 'Project Management', 'Email Deliverability', 'GlockApps', 'Kibana'],
        isCurrent: false,
      },
      {
        position: 'Junior QA & Product Specialist',
        company: 'Tagvenue Limited',
        duration: 'Jul 2021 - Dec 2022',
        description: 'It is my first full time job in the field of software testing, where I was responsible for ensuring the best quality of Tagvenue platform by perfoming various types of testing, and close collaboration with developers, product managers and other teams. Because of a startup nature of the company, I had a chance to be involved in various different projects and reponsibilities. Tagvenue is a venue hire marketplace platform, where customers can book venues for their dream events.',
        descriptionListItems: [
          'Manual testing of newly implemented features',
          'Identifying, reporting and prioritizing bugs and issues in Jira',
          'Organizing and maintaining a Slack channel for reporting bugs found by other teams in the company',
          'Occasionally writing documentation of more complex features',
          'Managing smaller product projects, from research to writing feature descriptions',
          'Assisting other teams with smaller data requests by preparing and executing MySQL queries',
          'Maintaining email deliverability architecture'
        ],
        skills: ['Manual Testing', 'Bug Reporting', 'Jira', 'Documentation', 'Project Management', 'MySQL', 'SendGrid'],
        isCurrent: false,
      },
      {
        position: 'Junior Software QA Tester - Internship',
        company: 'BMB Bartosz Dudziński',
        duration: 'Feb 2021 - Jul 2021',
        description: 'I had an opprotunity to work as an intern Junior Software QA Tester at BMB Bartosz Dudziński, where me and three other interns were reponsibble for testing newly created project of Renal Property Management app. This experience allowed me to work for the first time in a team of testers on one project, connected to Jira and xRay.',
        descriptionListItems: [
          'Creating and executing test cases',
          'Reporting found issues using Jira with xRay plugin',
          'Working in a team of testers on one project',
          'Manual testing of web application: Exploratory testing, re-testing of previously found issues'
        ],
        skills: ['Test case execution', 'Bug reporting', 'Jira', 'xRay'],
        isCurrent: false,
      },
      {
        position: 'Crowdtesting member',
        company: 'uTest',
        duration: 'Dec 2020 - Nov 2021',
        description: 'While looking for other opportunities in the field of software testing, I was also doing some crowdtesting on uTest platform. It allowed me to gain first experience with finding and reporting bugs in real projects, I participated in few projects, all of them were web applications.',
        descriptionListItems: [
          'Exploratory testing of various web applications',
          'Reporting found issues in accordance to the best practices and rules provided by the platform',
          'Executing prepared test cases and providing detailed feedback on the results'
        ],
        skills: ['Exploratory Testing', 'Test Case Execution', 'Bug Reporting', 'uTest'],
        isCurrent: false,
      },
    ],
    educationItems: [
      { degree: 'master', name: 'Master\'s degree in Tourism and Recreation', institution: 'WSB Merito University in Wrocław', description: 'Specialistaion: Tourism management', date: '2017 - 2019' },
      { degree: 'bachelor', name: 'Bachelor\'s degree in Tourism and Recreation', institution: 'State Higher Vocational School in Sulechów', description: 'Specialization: Hotel business ', date: '2014 - 2017' }
    ],
    projects: [],
    techSkillsByGroup: [
      { 
        group: 'automation', 
        groupLabel: 'Automation',
        skills: [
          { name: 'Playwright', lvl: 4 },
          { name: 'Puppeteer', lvl: 3 },
          { name: 'K6', lvl: 1 },
          { name: 'API Testing', lvl: 1 },
          { name: 'Jenkins', lvl: 1 },
          { name: 'GitHub Actions', lvl: 1 },
        ] 
      },
      { 
        group: 'tools',
        groupLabel: 'Tools',
        skills: [
          { name: 'Jira', lvl: 4 },
          { name: 'BrowserStack', lvl: 3 },
          { name: 'GlockApps', lvl: 3 },
          { name: 'SendGrid', lvl: 3 },
          { name: 'Elastic Stack', lvl: 1 },
          { name: 'Grafana', lvl: 1 },
          { name: 'Rollbar', lvl: 1 },
          { name: 'Postman', lvl: 1 },
          { name: 'ZAP', lvl: 1 },
          { name: 'Claude', lvl: 2 },
          { name: 'Git', lvl: 3 },
        ]
      },
      { 
        group: 'programmingLanguages', 
        groupLabel: 'Programming Languages',
        skills: [
          { name: 'JavaScript', lvl: 4 },
          { name: 'TypeScript', lvl: 3 },
          { name: 'MySQL', lvl: 3 },
          { name: 'HTML/CSS', lvl: 4 },
          { name: 'Vue.js', lvl: 2 },
          { name: 'Bash', lvl: 1 }
        ]
      }
    ],
    certificates: [
      { 
        name: 'ISTQB Certified Tester Foundation Level', 
        details: ['Issuer: ISTQB® - International Software Testing Qualifications Board', 'Date: 08/2021', 'ID: 016667/CTFL/2021'], color: 'yellow'
      },
      {
        name: 'Cambridge English: B2 First (FCE)',
        details: ['Issuer: Cambridge Assessment English', 'Date: 06/2020'], color: 'blue'
      }
    ],
    courses: [
    { 
      name: 'OWASP ZAP Step-by-step Tutorial', 
      issuer: 'Arkenstone Learning - YouTube', 
      link: 'https://www.youtube.com/watch?v=bf2YuqgaeWo&list=PLH8n_ayg-60J9i3nsLybper-DR3zJw6Z5', 
      iconType: 'book',
      iconColor: 'yellow'
    },
    { 
      name: 'CI/CD for Test Automation: Jenkins & GitHub Actions', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/cicd-testers/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-9f5ddd4c-c58a-477d-a21f-0bb0099ecc82/',
      iconType: 'book',
      iconColor: 'blue'
    },
    { 
      name: 'GenAI & AI Agents for QA Automation | Copilot & Claude code', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/generative-ai-in-software-testing/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-ae55ef7f-1b08-42a7-b2ba-b017a78569a8/',
      iconType: 'book',
      iconColor: 'red'
    },
    { 
      name: 'Performance Testing: Introduction to k6 for Beginners', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/k6-load-testing-performance-testing/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-4a6f8e53-0a38-40dc-aee8-d54e8a2b6c17/',
      iconType: 'code',
      iconColor: 'green'
    },
    { 
      name: 'Vue JS 3 Tutorial for Beginners', 
      issuer: 'The Net Ninja - YouTube', 
      link: 'https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1', 
      iconType: 'code',
      iconColor: 'red'
    },
    { 
      name: 'Complete JavaScript Programming Course From A to Z', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/kurs-programowanie-w-javascript/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-7733d807-bcfb-49cb-9274-54449baed3ed/',
      iconType: 'code',
      iconColor: 'green'
    },
    { 
      name: 'Intermediate front-end in 15 intensive days!', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/front-end-zaawansowany/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-8313a2db-0669-42f9-a7f5-50ac3d5d94f5/',
      iconType: 'code',
      iconColor: 'green'
    },
    { 
      name: 'Web developer from scratch in 15 days!', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/kurs-web-developer-od-podstaw-w-15-dni/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-26ab7179-fdc9-4f3c-8953-cd1cb75f5057/',
      iconType: 'code',
      iconColor: 'green'
    },
    { 
      name: 'Modern JavaScript (Complete guide, from Novice to Ninja)', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/modern-javascript-from-novice-to-ninja/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-9f3e5a89-a810-4191-b800-cc2fc45cb755/',
      iconType: 'code',
      iconColor: 'blue'
    },
    { 
      name: 'Git for beginners', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/kurs-gita/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-df2ebaf9-1a4a-455b-811d-f349c608a8f8/',
      iconType: 'code',
      iconColor: 'red'
    },
    { 
      name: 'Playwright: Web Automation Testing From Zero to Hero', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/playwright-from-zero-to-hero/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-9d0e03ad-590b-4a9e-ab2b-88b83d2be8d9/',
      iconType: 'code',
      iconColor: 'yellow'
    },
    { 
      name: 'Automated Software Testing with Puppeteer', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/automated-headless-browser-testing-with-puppeteer/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-463216b2-1e2d-4f81-af69-34b7bb853773/',
      iconType: 'code',
      iconColor: 'green'
    },
    { 
      name: 'Postman - REST API Testing', 
      issuer: 'Udemy',
      link: 'https://www.udemy.com/course/kurs-postman/',
      certificateLink: 'https://www.udemy.com/certificate/UC-3ddf53ce-1d5c-44e9-ba6a-db8bc7f01f8c/',
      iconType: 'book',
      iconColor: 'blue'
    },
    { 
      name: 'ISTQB Foundation Level CTFL training for 2021', 
      issuer: 'Udemy', 
      certificateLink: 'https://www.udemy.com/certificate/UC-2198822a-a779-41c4-bddf-253ef0ce24e8/',
      iconType: 'book',
      iconColor: 'blue'
    },
    { 
      name: 'Basics of Manual Software Testing', 
      issuer: 'Udemy', 
      link: 'https://www.udemy.com/course/kurs-testowania-oprogramowania/', 
      certificateLink: 'https://www.udemy.com/certificate/UC-13a899ec-d39d-4eba-90e8-207c46e2508e/',
      iconType: 'book',
      iconColor: 'blue'
    },
  ]
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
