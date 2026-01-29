<script setup>
import { onMounted } from 'vue';  
import MobileNavigationBar from './components/MobileNavigationBar.vue';
import SummarySection from './components/SummarySection.vue';
import BaseSection from './components/BaseSection.vue';
import WorkExperienceItem from './components/work-experience/WorkExperienceItem.vue';
import ProjectCard from './components/front-end-projects/ProjectCard.vue';
import TechSkill from './components/tech-skills/TechSkill.vue';
import Carousel from './components/Carousel.vue';
import CertificateCard from './components/certifications-and-courses/CertificateCard.vue';
import CourseCard from './components/certifications-and-courses/CourseCard.vue';

import { usePortfolioStore } from './stores/portfolioStore';

const store = usePortfolioStore();

onMounted(async () => {
  await store.fetchProjects();
});
</script>

<template>
  <div class="container relative">
    <nav class="flex items-center justify-between p-4 w-full">
      <MobileNavigationBar />
    </nav>
    <main>
      <SummarySection />
      <BaseSection title="About Me" id="about">
        <p v-for="(paragraph, index) in store.aboutMeParagraphs" :key="index" class="text-sm text-gray-400 leading-6 mt-2">
          {{ paragraph }}
        </p>
      </BaseSection>
      <BaseSection title="Work Experience" id="experience" class="bg-linear-to-br from-portfolio-blue-tinted-gray to-white">
        <WorkExperienceItem v-for="(workExperienceItem, index) in store.workExperienceItems" :key="index" :experienceData="workExperienceItem" />
      </BaseSection>
      <BaseSection title="Front End Projects" id="projects">
        <p class="text-sm text-gray-400 leading-6 mt-2">Explore my collection of front-end development projects.</p>
        <p class="text-sm text-gray-400 leading-6 mt-2 italic">All projects were created based on the designs from <a href="https://www.frontendmentor.io/" class="text-blue-500 hover:underline">Frontend Mentor</a> challenges.</p>
        <div v-if="store.projects.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Carousel :items="store.projects">
            <template v-slot:default="{ item }">
              <ProjectCard :projectData="item" />
            </template>
          </Carousel>
        </div>
      </BaseSection>
      <BaseSection title="Technical Skills" id="skills" class="bg-linear-to-br from-gray-50 to-portfolio-light-purple">
        <TechSkill v-for="(skill, index) in store.techSkills" :key="index" :skill="skill" class="mb-3" />
      </BaseSection>
      <BaseSection title="Certifications & Courses" id="certifications-and-courses" class="bg-linear-to-br from-gray-50 to-portfolio-light-purple">
        <h3 class="text-lg font-semibold mb-2">Certifications</h3>
        <CertificateCard
          v-for="(certificate, index) in store.certificates"
          :key="index"
          :certificate="certificate"
          :iconColor="certificate.color"
        />
        <h3 class="text-lg font-semibold mb-2 mt-4">Courses</h3>
        <CourseCard
          v-for="(course, index) in store.courses"
          :key="index"
          iconType="code"
          iconColor="blue"
          :course="course"
        />
      </BaseSection>
    </main>
  </div>
</template>