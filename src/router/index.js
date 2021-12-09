import { createWebHistory, createRouter } from "vue-router"
import App from '../App.vue'
import Tester from '../layouts/Tester.vue'

const routes = [
    { path: '/', name: 'homepages', component: App },
    { path: '/test', name: 'tester', component: Tester }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router