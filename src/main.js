import { createApp } from 'vue'
// import VueX from 'vuex'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')

