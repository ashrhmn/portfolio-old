import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import $ from 'jquery'

createApp(App).use(router).mount('#app')