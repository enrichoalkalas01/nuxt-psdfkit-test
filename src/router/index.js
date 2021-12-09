import { createWebHistory, createRouter } from "vue-router"
import Tester from '../layouts/Tester.vue'
import MainPage from '../components/homepages/MainPage.vue'
import Bantuan from '../components/bantuan/MainPage.vue'
import Login from '../components/login/Login.vue'
import Register from '../components/login/Register.vue'

const routes = [
    { path: '/test', name: 'tester', component: Tester },
    { path: '/', name: 'homepages', component: MainPage },
    { path: '/bantuan', name: 'bantuan', component: Bantuan },
    { path: '/login', name: 'login', component: Login },
    { path: '/daftar', name: 'daftar', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router