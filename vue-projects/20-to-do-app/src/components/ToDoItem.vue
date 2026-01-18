<template>
  <div
    class="flex items-center justify-between"
    @click="markToDoAsDone"
    draggable="true"
    @dragstart="onDragStart"
    @dragover.prevent
    @drop="onDrop"
    :class="{ 
      'hover:bg-proj-20-very-light-gray cursor-pointer': !isDone,
      'hover:rounded-tr-md hover:rounded-tl-md': !isDone && index === 0,
      'hover:bg-proj-20-dark-theme-dark-grayish-blue': !isDone && isDarkThemeEnabled
    }"
    @keydown.enter="markToDoAsDone"
    @keydown.space.prevent="markToDoAsDone"
    tabindex="0"
  >
    <div class="flex items-center">
      <span class="drag-handle cursor-grab mr-2" :class="{ 'text-white': isDarkThemeEnabled }">⠿</span>
      <img
        v-if="!isDone"
        src="../../public/images/icon-circle.svg"
        alt="Circle icon"
        class="w-5 h-5"
      />
      <img
        v-else
        src="../../public/images/icon-check.svg"
        alt="Check icon"
        class="w-4 h-4 p-0.5 check-icon rounded-full flex items-center justify-center"
      />
      <span
        class="ml-2"
        :class="{ 'line-through': isDone, 'text-slate-300': isDarkThemeEnabled, 'text-black': !isDarkThemeEnabled }"
      >
        {{ text }}
      </span>
    </div>
    <button class="cursor-pointer p-2 rounded-md hover:bg-proj-20-light-grayish-blue" @click="removeToDo">
      <img src="../../public/images/icon-cross.svg" alt="Close icon" class="w-3 h-3" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
    isDarkThemeEnabled: {
      type: Boolean,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  methods: {
    markToDoAsDone() {
      const index = this.$store.state.allToDoItems.findIndex(
        (item) => item.id === this.id
      );
      if (index !== -1) {
        this.$store.commit('markToDoItemAsDone', this.id);
      }
    },
    removeToDo() {
      const index = this.$store.state.allToDoItems.findIndex(
        (item) => item.id === this.id
      );
      if (index !== -1) {
        this.$store.commit('removeToDoItem', this.id);
        localStorage.setItem("toDoList", JSON.stringify(this.$store.state.allToDoItems));
      }
    },
  },
};
</script>

<style scoped>
.check-icon {
  background-image: linear-gradient(to bottom right, #33b2ff, #f464fd);
}
</style>
