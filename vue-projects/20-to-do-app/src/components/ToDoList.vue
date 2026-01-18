<template>
  <div class="w-4/5 max-w-lg">
    <div v-if="currentToDoItemsList.length">
      <div
        class="mt-3" 
        :class="{ 
          'rounded-md': currentToDoItemsList.length > 1, 
          'rounded-tr-md rounded-tl-md': currentToDoItemsList.length === 1, 
          'bg-proj-20-dark-theme-very-dark-grayish-blue border border-proj-20-dark-theme-very-dark-grayish-blue': isDarkThemeEnabled, 
          'bg-white border': !isDarkThemeEnabled 
        }"
        @dragover.prevent
        @dragenter.prevent
      >
      <transition-group v-if="!disableAnimation" name="fade" tag="div">
        <div 
          v-for="(item, index) in currentToDoItemsList"
          :key="item.id"
          :draggable="!item.isDone"
          @dragstart="startDrag($event, index)"
          @dragover.prevent
          @drop="onDrop(index)"
        >
          <ToDoItem
            :text="item.text"
            :isDone="item.isDone"
            :id="item.id"
            :is-dark-theme-enabled="isDarkThemeEnabled"
            :index="index"
            @done="markToDoAsDone"
            @delete="deleteToDo"
            class="py-2 px-3 box-border w-full"
          />
          <div class="border-b border-gray-500"></div>
        </div>
      </transition-group>
        <div
          class="flex items-center px-3 py-3 text-[10px] text-proj-20-dark-theme-dark-grayish-blue" 
          :class="{ 'justify-end': !allActiveToDoItems.length, 'justify-between': allActiveToDoItems.length }"
        >
          <span v-if="allActiveToDoItems.length" class="cursor-pointer">{{ allActiveToDoItems.length }} Items left</span>
          <button @click="clearCompletedToDos" class="cursor-pointer hover:underline">Clear completed</button>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center mt-4">
      <div
        class="check-icon w-5 h-5 rounded-full flex items-center justify-center bg-green-500 mr-2"
      >
        <img src="/images/icon-check.svg" alt="Check icon" class="w-3 h-3" />
      </div>
      <span 
        class="pt-1"
        :class="{ 'text-slate-300': isDarkThemeEnabled }"
      >
        Nothing to be done, all check!
      </span>
    </div>
    <FiltersBar @change-filter="changeCurrentFilter" :to-do-list="toDoList" :is-dark-theme-enabled="isDarkThemeEnabled" ref="filtersBar" />
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import FiltersBar from "./FiltersBar.vue";
import { mapGetters } from 'vuex';

export default {
  components: {
    ToDoItem,
    FiltersBar,
  },
  props: {
    isDarkThemeEnabled: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      draggedIndex: null,
      disableAnimation: false,
    };
  },
  methods: {
    clearCompletedToDos() {
      this.$store.commit('clearCompletedToDoItems');
      if (this.$refs.filtersBar) {
        this.$refs.filtersBar.setDefaultFilter();
      }
    },
    startDrag(evt, index) {
      this.draggedIndex = index;
      evt.dataTransfer.effectAllowed = 'move';
    },
    onDrop(dropIndex) {
      if (this.draggedIndex !== null && this.draggedIndex !== dropIndex) {
        const items = [...this.currentToDoItemsList];
        const movedItem = items.splice(this.draggedIndex, 1)[0];
        items.splice(dropIndex, 0, movedItem);

        this.$store.commit('updateToDoItemsList', items);
      }
      this.draggedIndex = null;
    },
    changeCurrentFilter() {
      this.disableAnimation = true;

      this.$nextTick(() => {
        this.disableAnimation = false;
      });
    }
  },
  computed: {
    ...mapGetters(['allActiveToDoItems', 'allCompletedToDoItems']),
    currentToDoItemsList() {
      if (this.$store.state.currentFilter === 'active') return this.allActiveToDoItems;
      if (this.$store.state.currentFilter === 'completed') return this.allCompletedToDoItems;
      return this.$store.state.allToDoItems;
    }
  },
  mounted() {
    if (this.$store.state.allToDoItems.length) {
      this.currentToDoItemsList = this.$store.state.allToDoItems;
    }
  }
};
</script>

<style scoped>
[draggable="true"]:active {
  cursor: grabbing;
}

.fade-enter-active {
  animation: fadeIn 0.5s ease-out;
}

.fade-leave-active {
  animation: fadeOut 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
