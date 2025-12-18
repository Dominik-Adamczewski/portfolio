import { createApp } from 'vue'
import './style.css'
import store from "./store/toDoStore";
import App from './App.vue'

createApp(App).use(store).mount('#app')
