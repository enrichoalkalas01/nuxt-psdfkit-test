import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
// import VueMeta from 'vue-meta'
import VueX from 'vuex'
import App from './App.vue'
import router from './router/index'
import StoreData from './vuex/Store'

const app = createApp(App)
app.use(router)
app.use(VueX)
app.use(StoreData)
// app.use(VueMeta)
app.use(createMetaManager())

app.mount('#app')