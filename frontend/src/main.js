import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './css/styles.css'
import 'vue3-carousel/dist/carousel.css'

// intialize app
createApp(App)
    .use(router)
    .mount('#app')
