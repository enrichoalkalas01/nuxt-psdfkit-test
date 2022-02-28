// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router"
// import Store from '../vuex/Store'
import Login from '../components/login/Login.vue'
import Register from '../components/login/Register.vue'
import MainPage from '../components/homepages/MainPage.vue'
import Arsip from '../components/arsip/MainPage.vue'
import ArtikelDetail from '../components/artikel/MainDetail.vue'
import FotoDetail from '../components/foto/MainDetail.vue'
import InfografikDetail from '../components/infografik/MainDetail.vue'
import Buku from '../components/buku/MainPage.vue'
import BukuDetail from '../components/buku/MainDetail.vue'
import Data from '../components/data/MainPage.vue'
import DataDetail from '../components/data/MainDetail.vue'
import Layanan from '../components/layanan/MainPage.vue'
import Bantuan from '../components/bantuan/MainPage.vue'
import Pencarian from '../components/pencarian/MainPage.vue'
import Test from '../components/test/TestPlugin.vue'

const routes = [
    // Login & Register
    { path: '/login', name: 'login', component: Login },
    { path: '/daftar', name: 'daftar', component: Register },

    // Homepages
    { path: '/', name: 'homepages', component: MainPage },

    // Arsip
    { path: '/arsip', name: 'arsip', component: Arsip },

    // Artikel
    { path: '/artikel-detail/:id', name: 'artikel-detail', component: ArtikelDetail },

    // Foto
    { path: '/foto-detail/:id', name: 'foto-detail', component: FotoDetail },

    // Infografik
    { path: '/infografik-detail/:id', name: 'infografik-detail', component: InfografikDetail },
    
    // Buku
    { path: '/buku', name: 'buku', component: Buku },
    { path: '/buku-detail/:id', name: 'buku-detail', component: BukuDetail },

    // Data
    { path: '/data', name: 'data', component: Data },
    { path: '/data-detail/:id', name: 'data-detail', component: DataDetail },

    // Layanan
    { path: '/layanan', name: 'layanan', component: Layanan },

    // About or Bantuan
    { path: '/bantuan', name: 'bantuan', component: Bantuan },

    // Pencarian
    { path: '/pencarian', name: 'pencarian', component: Pencarian },

    // Tester
    { path: '/test', name: 'test', component: Test },
]

const router = createRouter({
    // Store,
    history: createWebHistory(),
    routes,
})

export default router