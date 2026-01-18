<template>
  <form class="mx-6 z-10 w-full">
    <BaseUpload 
      label="Upload avatar" 
      @upload="handleFileUpload"
    />
    <ErrorMessage 
      v-if="errors?.avatar.length > 0"
      :errors="errors.avatar"
    />
    <BaseInput 
      v-model="fullName"
      label="Full name"
      placeholder="Enter your full name"
      :errors="errors.fullName"
      @blur="validateFullNameInputField"
      @input="clearErrors('fullName')"
    />
    <EmailInput 
      v-model="email"
      label="Email address"
      placeholder="example@email.com"
      :errors="errors.email"
      @blur="validateEmailInputField"
      @input="clearErrors('email')"
    />
    <BaseInput 
      v-model="github"
      label="GitHub Username" 
      placeholder="@yourusername" 
      :errors="errors.github"
      @blur="validateGithubInputField"
      @input="clearErrors('github')"
    />
    <div class="text-center mt-6">
      <CtaButton 
        class="font-semibold"
        @click.prevent="validateForm"
      >
        Generate My Ticket
      </CtaButton>
    </div>
  </form>
</template>

<script setup>
import BaseInput from './BaseInput.vue';
import EmailInput from './EmailInput.vue';
import CtaButton from './CtaButton.vue';
import BaseUpload from './BaseUpload.vue';
import ErrorMessage from './ErrorMessage.vue';
import { validateEmail, validateGithubUsername, validateUserName, validateAvatarUrl } from '../composables/validate.js';
import { getRandomTicketId } from '../composables/random';
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['submit']);

const fullName = ref('');
const email = ref('');
const github = ref('');
const avatarUrl = ref('');
const errors = ref({
  fullName: [],
  email: [],
  github: [],
  avatar: [],
});

function handleFileUpload(data) {
  avatarUrl.value = data.imagePreview;
  errors.value.avatar = [];
}

function validateFullNameInputField() {
  errors.value.fullName = validateUserName(fullName.value);
}

function validateEmailInputField() {
  errors.value.email = validateEmail(email.value);
}

function validateGithubInputField() {
  errors.value.github = validateGithubUsername(github.value);
}

function validateAvatar() {
  errors.value.avatar = validateAvatarUrl(avatarUrl.value);
}

function clearErrors(inputType) {
  errors.value[inputType] = [];
} 

function validateForm() {
  validateFullNameInputField();
  validateEmailInputField();
  validateGithubInputField();
  validateAvatar();
  if (errors.value.fullName.length === 0 && errors.value.email.length === 0 && errors.value.github.length === 0 && errors.value.avatar.length === 0) {
    emit('submit', { fullName: fullName.value, github: github.value, avatarUrl: avatarUrl.value, email: email.value, randomTicketId: getRandomTicketId(5) });
  }
}
</script>

<style>

</style>