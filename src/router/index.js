import { createWebHistory, createRouter } from "vue-router"
import MainPage from '../components/homepages/MainPage.vue'
import Data from '../components/data/MainPage.vue'
import Layanan from '../components/layanan/MainPage.vue'
import Bantuan from '../components/bantuan/MainPage.vue'
import Login from '../components/login/Login.vue'
import Register from '../components/login/Register.vue'
import Arsip from '../components/arsip/MainPage.vue'
import Buku from '../components/buku/MainPage.vue'
import BukuDetail from '../components/buku/MainDetail.vue'

const routes = [
    // Login & Register
    { path: '/login', name: 'login', component: Login },
    { path: '/daftar', name: 'daftar', component: Register },

    // Homepages
    { path: '/', name: 'homepages', component: MainPage },
    
    // Layanan
    { path: '/data', name: 'data', component: Data },

    // Layanan
    { path: '/layanan', name: 'layanan', component: Layanan },

    // About or Bantuan
    { path: '/bantuan', name: 'bantuan', component: Bantuan },

    // Arsip
    { path: '/arsip', name: 'arsip', component: Arsip },

    // Buku
    { path: '/buku', name: 'buku', component: Buku },
    { path: '/buku-detail', name: 'buku-detail', component: BukuDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router