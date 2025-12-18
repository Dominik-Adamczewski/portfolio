<template>
  <form 
    class="px-4 rounded-lg mt-6 flex items-center text-[20px]"
    :class="{ 
      'bg-proj-20-dark-theme-very-dark-grayish-blue border border-proj-20-dark-theme-very-dark-grayish-blue': isDarkThemeEnabled, 
      'bg-white': !isDarkThemeEnabled 
    }"
  >
    <input
      type="text"
      v-model="inputText"
      placeholder="Create a new todo..."
      class="w-full text-gray-700 text-[20px] outline-none py-3 flex items-center placeholder:text-sm"
      :class="{ 
        'bg-proj-20-dark-theme-very-dark-grayish-blue text-slate-200': isDarkThemeEnabled,
        'bg-white text-black': !isDarkThemeEnabled
      }"
    />
    <button
      v-if="inputText.length > 0"
      @click="submitNewToDo"
      class="cursor-pointer font-semibold flex items-center hover:underline"
      :class="{ 'text-slate-200': isDarkThemeEnabled, 'text-black': !isDarkThemeEnabled }"
    >
      Add
    </button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      isTextAdded: false,
      inputText: "",
    };
  },
  props: {
    isDarkThemeEnabled: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    submitNewToDo() {
      this.$store.commit('addToDoItem', { id: this.getIdForNewToDoItem, text: this.inputText, isDone: false });
      this.inputText = "";
      this.isTextAdded = false;
    },
  },
  computed: {
    ...mapGetters(['getIdForNewToDoItem'])
  }
};
</script>

<style></style>
