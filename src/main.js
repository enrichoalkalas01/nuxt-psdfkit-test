import { createApp } from 'vue'
import VueX from 'vuex'
import App from './App.vue'
import router from './router/index'
import StoreData from './vuex/Store'

const app = createApp(App)
app.use(router)
app.use(VueX)
app.use(StoreData)
app.mount('#app')

