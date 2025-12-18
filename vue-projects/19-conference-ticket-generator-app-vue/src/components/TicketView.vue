<template>
  <div class="ticket-container relative z-10 w-full">
    <div class="flex justify-between items-center h-full flex-grow py-3">
      <div class="h-full">
        <div class="flex">
          <div class="text-white flex items-start text-xl ml-4 mt-2 lg:mt-12">
            <img 
              src="/images/logo-mark.svg" 
              alt="Coding conf logo" 
              class="w-8 h-8 mr-2"
            >
            <div>
              <div class="self-start leading-none">
                Coding Conf
              </div>
              <div class="text-white text-xs mt-2">
                Jan 31, 2025 / Austin, TX
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center text-white ml-3 mb-2 lg:mb-12 mt-8 md:mt-16 lg:mt-24">
          <img 
            :src="avatarUrl"
            alt="Avatar image preview"
            class="w-14 h-14 rounded-md mr-4"
          >
          <div>
            <span class="font-semibold">{{ fullName }}</span>
            <div class="flex items-center text-xs font-light">
              <img 
                src="/images/icon-github.svg" 
                alt="Github icon"
                class="mr-1 w-4 h-4"
              >
              {{ github }}
            </div>
          </div>
        </div>
      </div>
      <div class="row-start-2 col-start-3 text-white ticket-id">
        {{ randomTicketId }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  avatarUrl: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  randomTicketId: {
    type: String,
    required: true,
  }
});

</script>

<style scoped>
  .ticket-container {
    min-height: 200px;
    max-width: 400px; 
    background-image: url('../../public/images/pattern-ticket.svg');
    background-repeat: no-repeat;
    background-size: calc(100% - 32px) auto;
    background-position: center center;
    padding: 1.5rem; 
    border-radius: 12px; 
  }

  @media (min-width: 768px) {
    .ticket-container {
      min-height: 250px;
      max-width: 500px; 
      padding: 2rem;
    }
  }

  @media (min-width: 1024px) {
    .ticket-container {
      min-height: 300px;
      max-width: 600px; 
      padding: 2.5rem;
    }
  }

  .ticket-id {
    writing-mode: vertical-lr;
    font-size: 1.25rem;
  }
</style>