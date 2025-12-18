<template>
  <div class="app-container flex flex-col min-h-screen">
    <header
      class="px-5 pt-10 bg-no-repeat bg-cover bg-center w-full page-header"
      :class="{ 'dark-theme': $store.state.isDarkThemeEnabled }"
    >
      <div class="w-full max-w-lg mx-auto">
        <div class="flex items-center justify-between">
          <h1 class="text-3xl text-proj-20-very-light-gray tracking-widest">
            TODO
          </h1>
          <ThemeSwitchIcon :is-dark-theme="$store.state.isDarkThemeEnabled" @click="changeTheme" />
        </div>
      </div>
      <div class="mx-auto max-w-lg w-full">
        <AddToDoForm :is-dark-theme-enabled="$store.state.isDarkThemeEnabled" />
      </div>
    </header>
    <section 
      class="main-section relative flex items-center flex-col grow"
      :class="{ 'bg-proj-20-very-dark-desaturated-blue': $store.state.isDarkThemeEnabled, 'bg-proj-20-very-light-gray': !$store.state.isDarkThemeEnabled }"
    >
      <ToDoList 
        :is-dark-theme-enabled="$store.state.isDarkThemeEnabled"
      />
    </section>
  </div>
</template>

<script>
import AddToDoForm from "./components/AddToDoForm.vue";
import ToDoList from "./components/ToDoList.vue";
import ThemeSwitchIcon from "./components/ThemeSwitchIcon.vue";

export default {
  components: { AddToDoForm, ToDoList, ThemeSwitchIcon },
  methods: {
    changeTheme() {
      this.isDarkThemeUsed = !this.isDarkThemeUsed;
    }
  },
  mounted() {
    const storedToDoItems = localStorage.getItem("toDoList");
    this.$store.state.allToDoItems = storedToDoItems ? JSON.parse(storedToDoItems) : [];

    if (this.isDarkThemeUsed) {
      document.body.style.backgroundColor = 'bg-proj-20-very-dark-desaturated-blue';
    }
  },
};
</script>

<style>
:root {
  --header-min-height: 192px;
}

.page-header {
  background-image: url('./assets/bg-mobile-light.jpg');
  min-height: var(--header-min-height);
}

.page-header.dark-theme {
  background-image: url('./assets/bg-mobile-dark.jpg');
}

@media only screen and (min-width: 1024px) {
  .page-header {
    background-image: url('./assets/bg-desktop-light.jpg');
  }

  .page-header.dark-theme {
    background-image: url('./assets/bg-desktop-dark.jpg');
  }
}
</style>
