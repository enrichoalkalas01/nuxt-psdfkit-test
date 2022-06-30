// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router"
// import Store from '../vuex/Store'
// import Login from '../components/login/Login.vue'
import Logout from '../components/login/Logout.vue'
import Register from '../components/login/Register.vue'
import Notification from '../components/login/Notification.vue'
import Activation from '../components/login/Activation.vue'
import MainPage from '../components/homepages/MainPage.vue'
// import Arsip from '../components/arsip/MainPage.vue'
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
import Test from '../components/test/MainPage.vue'

// Dashboard
import Dashboard from '../components/dashboard/MainPage'
import HomepageDashboard from '../components/dashboard/Dashboard.vue'
import TopUp from '../components/payments/TopUp.vue'
import Voucher from '../components/payments/Voucher.vue'
import ShoppingCart from '../components/dashboard/Shopping/ShoppingCart.vue'
import Chatting from '../components/dashboard/Chat/Chatting.vue'
import Syarat from '../components/dashboard/Syarat.vue'
import Account from '../components/dashboard/Account.vue'
import History from '../components/dashboard/History/MainPage.vue'

const routes = [
    // Login & Register
    // { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/daftar', name: 'daftar', component: Register },
    { path: '/notification-activation', name: 'notification', component: Notification },
    { path: '/user/activation', name: 'activation', component: Activation },

    // Homepages
    { path: '/', name: 'homepages', component: MainPage },

    // Arsip
    // { path: '/arsip', name: 'arsip', component: Arsip },

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
            { path: '/dashboard', name: 'dashboard', component: HomepageDashboard },
            { path: '/dashboard/topup', name: 'topup', component: TopUp },
            { path: '/dashboard/kupon', name: 'voucher', component: Voucher },
            { path: '/dashboard/daftar-pesanan', name: 'daftar-pesanan', component: ShoppingCart },
            { path: '/dashboard/daftar-transaksi', name: 'daftar-transaksi', component: History },
            { path: '/dashboard/pesan', name: 'chatting', component: Chatting },
            { path: '/dashboard/syarat', name: 'syarat', component: Syarat },
            { path: '/dashboard/akun', name: 'account', component: Account },
        ]
    },
]

const router = createRouter({
    // Store,
    history: createWebHistory(),
    routes,
})

export default router