// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router"
// import Store from '../vuex/Store'
import Login from '../components/login/Login.vue'
import Logout from '../components/login/Logout.vue'
import Register from '../components/login/Register.vue'
import Notification from '../components/login/Notification.vue'
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
import PencarianLanjut from '../components/pencarian/MainDetail.vue'
import Test from '../components/test/TestCarousel.vue'

// Dashboard
import Dashboard from '../components/dashboard/MainPage'
import TopUp from '../components/payments/TopUp.vue'
import Voucher from '../components/payments/Voucher.vue'

const routes = [
    // Login & Register
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/daftar', name: 'daftar', component: Register },
    { path: '/notification', name: 'notification', component: Notification },

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
    { path: '/data-detail/:collection/:id', name: 'data-detail', component: DataDetail },

    // Layanan
    { path: '/layanan', name: 'layanan', component: Layanan },

    // About or Bantuan
    { path: '/bantuan', name: 'bantuan', component: Bantuan },

    // Pencarian
    { path: '/pencarian', name: 'pencarian', component: Pencarian },
    { path: '/pencarian-lanjut', name: 'pencarian-lanjut', component: PencarianLanjut },

    // Tester
    { path: '/test', name: 'test', component: Test },

    // Dashboard
    {
        path: '/dashboard', name: 'dashboard', component: Dashboard,
        children: [
            { path: '/dashboard', name: 'dashboard', component: TopUp },
            { path: '/dashboard/topup', name: 'topup', component: TopUp },
            { path: '/dashboard/voucher', name: 'voucher', component: Voucher },
        ]
    },
]

const router = createRouter({
    // Store,
    history: createWebHistory(),
    routes,
})

export default router