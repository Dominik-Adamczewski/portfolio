<template>
  <div 
    class="main-container bg-cover bg-center min-h-screen pb-10"
  >
    <header class="p-4 flex items-center justify-center flex-col text-white relative w-full">
      <img 
        src="../public/images/pattern-squiggly-line-top.svg" 
        class="absolute w-36 h-36 right-0 -top-4"
      >
      <div
        class="header-content-container w-full flex flex-col items-center justify-center"
      >
        <img 
          src="/images/logo-full.svg" 
          alt="Coding conf logo" 
          class="mb-10"
        >
        <h1 
          v-if="isTicketReady" 
          class="text-3xl text-center mb-6"
        >
          Congrats, {{ fullName }} Your ticket is ready.
        </h1>
        <h1 v-else>
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p 
          v-if="isTicketReady" 
          class="text-lg text-center text-proj-19-neutral-300"
        >
          We've emailed your ticket to <span class="text-proj-19-orange-700">{{ email }}</span> and will send updates in the run up to the event.
        </p>
        <p v-else>
          Secure your spot at next year's biggest coding conference.
        </p>
      </div>
    </header>
    <div class="mt-6 flex items-center justify-center">
      <TicketView
        v-if="isTicketReady" 
        :full-name="fullName"
        :github="github"
        :avatar-url="avatarUrl"
        :random-ticket-id="randomTicketId"
        class="mt-12"
      />
      <TicketForm 
        v-else 
        class="max-w-xl"
        @submit="handleTicketFormSubmit"
      />
      <img 
        src="/images/pattern-squiggly-line-bottom.svg" 
        class="absolute bottom-0 -left-8 z-0 h-80 w-80 pointer-events-none"
      >
    </div>
    <div class="text-center mt-10">
      <CtaButton 
        v-if="isTicketReady" 
        class="font-semibold"
        button-width="half"
        @click="clearExistingTicket"
      >
        Generate new ticket
      </CtaButton>
    </div>
  </div>
</template>

<script setup>
import TicketForm from './components/TicketForm.vue';
import TicketView from './components/TicketView.vue';
import CtaButton from './components/CtaButton.vue';
import { ref, onMounted } from 'vue';

const isTicketReady = ref(false);
const fullName = ref(null);
const github = ref(null);
const avatarUrl = ref(null);
const email = ref(null);
const randomTicketId = ref(null);

function createTicket(data) {
  isTicketReady.value = true;
  fullName.value = data.fullName;
  email.value = data.email;
  github.value = data.github;
  avatarUrl.value = data.avatarUrl;
  randomTicketId.value = data.randomTicketId;
}

function saveTicketInLocalStorage(ticketObj) {
  localStorage.setItem('ticketData', JSON.stringify(ticketObj));
}

function handleTicketFormSubmit(data) {
  createTicket(data);

  const ticketData = {
    fullName: data.fullName,
    email: data.email,
    github: data.github,
    avatarUrl: data.avatarUrl,
    randomTicketId: data.randomTicketId,
  };

  saveTicketInLocalStorage(ticketData);
}

function loadExistingTicket() {
  const ticketObject = localStorage.getItem('ticketData');
  if (ticketObject) {
    const parsedTicketObject = JSON.parse(ticketObject);
    isTicketReady.value = true;
    createTicket(parsedTicketObject);
  }
}

function clearExistingTicket() {
  localStorage.removeItem('ticketData');
  isTicketReady.value = false;
}

onMounted(() => {
  loadExistingTicket();
});

</script>

<style scoped>
  .main-container {
    background: url('../public/images/background-mobile.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (min-width: 1024px) {
    .header-background {
      background-image: url('../public/images/background-desktop.png');
    }
  }

  .header-content-container {
    background: url('../public/images/pattern-lines.svg');
  }
</style>
