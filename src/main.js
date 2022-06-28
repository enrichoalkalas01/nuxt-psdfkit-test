import { createApp } from 'vue'
import VueX from 'vuex'
import App from './App.vue'
import router from './router/index'
import StoreData from './vuex/Store'
import GAuth from "vue3-google-oauth2"

const app = createApp(App)
const gauthOption = {
    // clientId: '416703530808-hgiskb3hql7lbt0ejgn6i0at5fqtgmjs.apps.googleusercontent.com',
    clientId: '416703530808-hgiskb3hql7lbt0ejgn6i0at5fqtgmjs.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}
app.use(GAuth, gauthOption)

app.use(router)
app.use(VueX)
app.use(StoreData)

app.mount('#app')