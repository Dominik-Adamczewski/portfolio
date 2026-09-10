# Portfolio — CV as an App 🚧

Live: https://portfolio-eta-lilac-17.vercel.app/

> **Status: Work in progress.** Core functionality works, but content and final UI Design still may change.

An interactive, full-stack version of my CV — instead of a static PDF, this app serves my work experience, education, skills, certifications, and courses through a real API, and doubles as a showcase for both my front-end practice projects and my test automation work.

## What it does

- Renders a dynamic CV/portfolio UI (experience, education, skills, certifications, courses) sourced from a small JSON-backed API rather than hardcoded content
- Showcases front-end practice projects built while exploring front-end development (HTML/CSS through Vue.js), based on designs from [Frontend Mentor](https://www.frontendmentor.io/)
- Showcases test automation projects — including a Playwright E2E suite (with CI/CD) for a locally-run Conduit app, and Postman/API tests for a Trello-based project — by serving their generated HTML test reports directly in the app

## Tech stack

**Client**
- Vue 3 + Vite
- Pinia (state management)
- Vue Router
- Tailwind CSS

**API**
- Node.js + Express
- Serves portfolio content from JSON files, plus static project files and Playwright HTML reports
- Configured for serverless deployment (Vercel-style `api/` entrypoint)

## Related repos

- [playwright-tests](https://github.com/Dominik-Adamczewski/playwright-tests) — the Playwright E2E test suite referenced in the test automation section
- [conduit-realworld-example-app-for-e2e](https://github.com/Dominik-Adamczewski/conduit-realworld-example-app-for-e2e) — the app under test
