<template>
  <section>
    <FormStepHeading
      heading="Personal info"
      text="Please provide your name, email address and phone number."
    />
    <InputWithLabel
      v-model="store.formData.personalInfo.name"
      label="Name"
      placeholder="e.g. Stephen King"
      tabindex="1"
      :errors="store.formErrors.personalInfo.name"
    />
    <InputWithLabel
      v-model="store.formData.personalInfo.email"
      label="Email Address"
      placeholder="e.g. stephenking@lorem.com"
      input-type="email"
      tabindex="2"
      :errors="store.formErrors.personalInfo.emailAddress"
    />
    <InputWithLabel
      v-model="store.formData.personalInfo.phoneNumber"
      label="Phone Number"
      placeholder="e.g. +1 234 567 890"
      input-type="phone"
      tabindex="3"
      :errors="store.formErrors.personalInfo.phoneNumber"
    />
  </section>
</template>

<script setup>
import InputWithLabel from './InputWithLabel.vue';
import FormStepHeading from './FormStepHeading.vue';

import { useMultiStepFormStore } from '../stores/multiStepFormStore.js';

const store = useMultiStepFormStore();

</script>

<style scoped>
</style>
