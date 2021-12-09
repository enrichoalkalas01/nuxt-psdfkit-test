import { createWebHistory, createRouter } from "vue-router"
import Tester from '../layouts/Tester.vue'
import MainPage from '../components/homepages/MainPage.vue'
import Bantuan from '../components/bantuan/MainPage.vue'

const routes = [
    { path: '/', name: 'homepages', component: MainPage },
    { path: '/bantuan', name: 'bantuan', component: Bantuan },
    { path: '/test', name: 'tester', component: Tester },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router