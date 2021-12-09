import { createWebHistory, createRouter } from "vue-router"
import MainPage from '../components/homepages/MainPage.vue'
import Bantuan from '../components/bantuan/MainPage.vue'
import Login from '../components/login/Login.vue'
import Register from '../components/login/Register.vue'

const routes = [
    // Login & Register
    { path: '/login', name: 'login', component: Login },
    { path: '/daftar', name: 'daftar', component: Register },

    // Homepages
    { path: '/', name: 'homepages', component: MainPage },
    
    // About or Bantuan
    { path: '/bantuan', name: 'bantuan', component: Bantuan },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router