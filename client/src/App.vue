<script setup>
import { onMounted, ref } from 'vue';  
import NameLogo from './components/navbar/NameLogo.vue';
import NavigationBar from './components/navbar/NavigationBar.vue';
import SummarySection from './components/SummarySection.vue';
import BaseSection from './components/BaseSection.vue';
import WorkExperienceItem from './components/work-experience/WorkExperienceItem.vue';
import ProjectCard from './components/front-end-projects/ProjectCard.vue';
import SkillGroup from './components/tech-skills/SkillGroup.vue';
import Carousel from './components/Carousel.vue';
import CertificateCard from './components/certifications-and-courses/CertificateCard.vue';
import CourseCard from './components/certifications-and-courses/CourseCard.vue';
import EducationCard from './components/education/EducationCard.vue';
import Footer from './components/footer/Footer.vue';
import ShowMoreLess from './components/ShowMoreLess.vue';

import { usePortfolioStore } from './stores/portfolioStore';

const store = usePortfolioStore();

const skillsExpanded = ref(false);
const workExperienceExpanded = ref(false);
const coursesExpanded = ref(false);

onMounted(async () => {
  await store.fetchProjects();
});
</script>

<template>
  <div class="relative">
    <nav class="flex items-center justify-between p-4 lg:px-24 2xl:px-60 w-full border-b border-gray-300">
      <NameLogo class="mr-4" />
      <NavigationBar />
    </nav>
    <main>
      <SummarySection />
      <BaseSection title="About Me" id="about" class="bg-portfolio-very-light-gray">
        <p v-for="(paragraph, index) in store.aboutMeParagraphs" :key="index" class="text-sm leading-6 mt-2">
          {{ paragraph }}
        </p>
      </BaseSection>
      <BaseSection title="Work Experience" id="experience" class="bg-white">
        <ShowMoreLess
          :item-count="store.workExperienceItems.length"
          :is-expanded="workExperienceExpanded"
          :threshold="1"
          max-height="max-h-[520px]"
          from-color="from-white"
          @toggle="workExperienceExpanded = !workExperienceExpanded"
        >
          <WorkExperienceItem
            v-for="(workExperienceItem, index) in store.workExperienceItems"
            :key="index"
            :experienceData="workExperienceItem"
            :is-last="index === store.workExperienceItems.length - 1"
          />
        </ShowMoreLess>
      </BaseSection>
      <BaseSection title="Education" id="education" class="bg-white">
        <EducationCard v-for="(educationItem, index) in store.educationItems" :key="index" :education="educationItem" />
      </BaseSection>
      <BaseSection title="Front End Projects" id="projects" class="bg-portfolio-very-light-gray">
        <p class="text-sm leading-6 mt-2">Explore my collection of front-end development projects.</p>
        <p class="text-sm leading-6 mt-2 italic">All projects were created based on the designs from <a href="https://www.frontendmentor.io/" class="text-blue-500 hover:underline">Frontend Mentor</a> challenges.</p>
        <div v-if="store.projects.length > 0" class="gap-6 mt-6">
          <Carousel :items="store.projects">
            <template v-slot:default="{ item }">
              <ProjectCard :projectData="item" />
            </template>
          </Carousel>
        </div>
      </BaseSection>
      <BaseSection title="Technical Skills" id="skills" class="bg-white">
        <div class="lg:flex lg:items-stretch lg:justify-between lg:gap-12">
          <SkillGroup
            v-for="(group, index) in store.getSortedSkillsByGroup"
            :key="index"
            :name="group.groupLabel"
            :type="group.group"
            :skills="group.skills"
            :is-expanded="skillsExpanded"
            @toggle="skillsExpanded = !skillsExpanded"
            class="lg:flex-1"
          />
        </div>
      </BaseSection>
      <BaseSection title="Certifications & Courses" id="certifications-and-courses" class="bg-portfolio-very-light-gray">
        <h3 class="text-lg font-semibold mb-2">Certifications</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          <CertificateCard
            v-for="(certificate, index) in store.certificates"
            :key="index"
            :certificate="certificate"
            :iconColor="certificate.color"
          />
        </div>
        <h3 class="text-lg font-semibold mb-2 mt-4">Courses</h3>
        <ShowMoreLess
          :item-count="store.courses.length"
          :is-expanded="coursesExpanded"
          :threshold="1"
          max-height="max-h-[620px]"
          from-color="from-white"
          @toggle="coursesExpanded = !coursesExpanded"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <CourseCard
              v-for="(course, index) in store.courses"
              :key="index"
              :iconType="course.iconType"
              :iconColor="course.iconColor"
              :course="course"
            />
          </div>
        </ShowMoreLess>
      </BaseSection>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>