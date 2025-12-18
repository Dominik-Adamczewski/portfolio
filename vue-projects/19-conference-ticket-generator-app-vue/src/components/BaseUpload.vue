<template>
  <label 
    class="text-white" 
  >
    {{ label }}
  </label>
  <div 
    class="border-2 border-dashed rounded-md p-4 text-white mt-2" 
    :class="{ 'bg-gray-800': isDragging, 'hover:bg-proj-19-neutral-500 cursor-pointer': !imagePreview }"
    @click="triggerFileInput"
    @dragover.prevent="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleFileDrop"
  >
    <div class="flex flex-col items-center">
      <div 
        v-if="imagePreview" 
        class="w-10/12 flex flex-col items-center justify-center"
      >
        <img 
          :src="imagePreview" 
          alt="Avatar image preview"
          class="w-14 h-14 rounded-md border border-white mb-4"
        >
        <div class="flex flex-wrap items-center justify-around w-full">
          <AvatarUploadButton
            class="px-2 text-xs font-light"
            :class="{ 'mt-2': imagePreview }"
            @click.stop="removeUploadedImage"
          >
            Remove image
          </AvatarUploadButton>
          <AvatarUploadButton 
            class="px-2 text-xs font-light"
            :class="{ 'mt-2': imagePreview }"
            @click.stop="changeUploadedImage"
          >
            Change image
          </AvatarUploadButton>
        </div>
      </div>
      <div 
        v-else
        class="flex flex-col items-center"
      >
        <img
          src="/images/icon-upload.svg"
          alt="Upload icon"
          class="w-12 h-12"
        >
        <p class="font-extralight mt-2">
          Drag and drop or click to upload
        </p>
      </div>
    </div>
    <input 
      id="file"
      ref="fileInput"
      type="file" 
      name="file-upload-input" 
      hidden
      @change="handleFileUpload"
    >
  </div>
  <ErrorMessage 
    v-if="errors?.length > 0"
    :errors="errors"
  />
  <div 
    v-if="!imagePreview && !errors.length"
    class="flex items-center text-xs font-extralight mt-4 text-white"
  >
    <img 
      src="/images/icon-info.svg" 
      alt="Info icon"
      class="mr-1"
    >
    Upload your photo (JPG or PNG, max size: 500KB)
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import { validateUploadedFile } from '../composables/validate.js';
import AvatarUploadButton from './AvatarUploadButton.vue';
import ErrorMessage from './ErrorMessage.vue';

const emit = defineEmits(['upload']);

defineProps({
  label: String,
});

const fileInput = ref(null);
const imagePreview = ref(null);
const isDragging = ref(false);
const errors = ref([]);

function triggerFileInput() {
  fileInput.value.click();
}
function processFile(file) {
  errors.value = validateUploadedFile(file);
  const areThereAnyErrors = errors.value.length > 0;

  if (!areThereAnyErrors) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
      emit('upload', { imagePreview: reader.result });
    };
    reader.readAsDataURL(file);
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  processFile(file);
}

function handleFileDrop(event) {
  event.preventDefault();
  isDragging.value = false;

  const file = event.dataTransfer.files[0];
  processFile(file);
}

function handleDragOver(event) {
  event.preventDefault();
  isDragging.value = true;
}

function handleDragLeave(event) {
  event.preventDefault();
  isDragging.value = false;
}

function removeUploadedImage() {
  imagePreview.value = null;
  fileInput.value.value = null;
}

function changeUploadedImage() {
  removeUploadedImage();
  triggerFileInput();
}

</script>

<style>

</style>