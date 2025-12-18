import { createStore } from "vuex";

export default createStore({
  state: {
    allToDoItems: [],
    isDarkThemeEnabled: false,
    currentFilter: null,
  },
  getters: {
    allActiveToDoItems(state) {
      return state.allToDoItems.filter(toDoItem => !toDoItem.isDone);
    },
    allCompletedToDoItems(state) {
      return state.allToDoItems.filter(toDoItem => toDoItem.isDone);
    },
    getIdForNewToDoItem(state) {
      if (!state.allToDoItems || state.allToDoItems.length === 0) {
        return 1;
      }
      const lastTodoItemId = state.allToDoItems ? state.allToDoItems[state.allToDoItems.length - 1].id : 0;
      return lastTodoItemId + 1;
    }
  },
  mutations: {
    addToDoItem(state, toDoItem) {
      state.allToDoItems.push(toDoItem);
      localStorage.setItem("toDoList", JSON.stringify(state.allToDoItems));
    },
    markToDoItemAsDone(state, toDoItemId) {
      const index = state.allToDoItems.findIndex(item => item.id === toDoItemId);
      if (index !== -1) {
        state.allToDoItems[index].isDone = true;
      }
      localStorage.setItem("toDoList", JSON.stringify(state.allToDoItems));
    },
    removeToDoItem(state, toDoItemId) {
      const index = state.allToDoItems.findIndex(item => item.id === toDoItemId);
      if (index !== -1) {
        state.allToDoItems = state.allToDoItems.filter(item => item.id !== toDoItemId);
      }
      localStorage.setItem("toDoList", JSON.stringify(state.allToDoItems));
    },
    clearCompletedToDoItems(state) {
      state.allToDoItems = state.allToDoItems.filter(item => !item.isDone);
      localStorage.setItem("toDoList", JSON.stringify(state.allToDoItems));
    },
    updateToDoItemsList(state, newToDoItemsList) {
      state.allToDoItems = newToDoItemsList;
      localStorage.setItem("toDoList", JSON.stringify(state.allToDoItems));
    },
    toggleDarkTheme(state) {
      state.isDarkThemeEnabled = !state.isDarkThemeEnabled;
    }
  },
});
