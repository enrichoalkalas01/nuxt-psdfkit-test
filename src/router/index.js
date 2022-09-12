import { createWebHistory, createRouter } from "vue-router"
import Notification from '../components/login/Notification.vue'
import Activation from '../components/login/Activation.vue'
// import MainPage from '../components/homepages/MainPage.vue'
// import ArtikelDetail from '../components/artikel/MainDetail.vue'
// import FotoDetail from '../components/foto/MainDetail.vue'
// import InfografikDetail from '../components/infografik/MainDetail.vue'
// import Buku from '../components/buku/MainPage.vue'
// import BukuDetail from '../components/buku/MainDetail.vue'
// import Data from '../components/data/MainPage.vue'
// import DataDetail from '../components/data/MainDetail.vue'
// import Layanan from '../components/layanan/MainPage.vue'
// import Bantuan from '../components/bantuan/MainPage.vue'
// import FAQ from '../components/bantuan/FAQ.vue'
// import PetaSitus from '../components/bantuan/PetaSitus.vue'
// import Pencarian from '../components/pencarian/MainPage.vue'
// import PencarianLanjut from '../components/pencarian/MainDetail.vue'
// import Test from '../components/test/MainPage.vue'

// Dashboard
// import Dashboard from '../components/dashboard/MainPage'
// import HomepageDashboard from '../components/dashboard/Dashboard.vue'
// import TopUp from '../components/payments/TopUp.vue'
// import Voucher from '../components/payments/Voucher.vue'
// import ShoppingCart from '../components/dashboard/Shopping/ShoppingCart.vue'
// import Chatting from '../components/dashboard/Chat/Chatting.vue'
// import Syarat from '../components/dashboard/Syarat.vue'
// import Account from '../components/dashboard/Account.vue'
// import History from '../components/dashboard/History/MainPage.vue'

const routes = [
    { path: '/notification-activation', name: 'notification', component: Notification },
    { path: '/user/activation', name: 'activation', component: Activation },

    // Homepages
    { path: '/', name: 'homepages', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/homepages/MainPage.vue`) },

    // Artikel
    { path: '/artikel-detail/:id', name: 'artikel-detail', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/artikel/MainDetail.vue`) },

    // Foto
    { path: '/foto-detail/:id', name: 'foto-detail', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/foto/MainDetail.vue`) },

    // Infografik
    { path: '/infografik-detail/:id', name: 'infografik-detail', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/infografik/MainDetail.vue`) },
    
    // Buku
    { path: '/buku', name: 'buku', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/buku/MainPage.vue`) },
    { path: '/buku-detail/:id', name: 'buku-detail', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/buku/MainDetail.vue`) },

    // Data
    { path: '/data', name: 'data', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/data/MainPage.vue`) },
    { path: '/data-detail/:collection/:id', name: 'data-detail', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/data/MainDetail.vue`) },

    // Layanan
    { path: '/layanan', name: 'layanan', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/layanan/MainPage.vue`) },

    // About or Bantuan
    { path: '/bantuan', name: 'bantuan', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/bantuan/MainPage.vue`) },
    { path: '/FAQ', name: 'faq', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/bantuan/FAQ.vue`) },
    { path: '/peta-situs', name: 'peta-situs', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/bantuan/PetaSitus.vue`) },

    // Pencarian
    { path: '/pencarian', name: 'pencarian', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/pencarian/MainPage.vue`) },
    { path: '/pencarian-lanjut', name: 'pencarian-lanjut', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/pencarian/MainDetail.vue`) },

    // Dashboard
    {
        path: '/dashboard', name: 'dashboard', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/MainPage`),
        children: [
            { path: '/dashboard', name: 'dashboard', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/Dashboard.vue`) },
            { path: '/dashboard/topup', name: 'topup', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/payments/TopUp.vue`) },
            { path: '/dashboard/kupon', name: 'voucher', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/payments/Voucher.vue`) },
            { path: '/dashboard/daftar-pesanan', name: 'daftar-pesanan', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/Shopping/ShoppingCart.vue`) },
            { path: '/dashboard/daftar-transaksi', name: 'daftar-transaksi', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/History/MainPage.vue`) },
            { path: '/dashboard/pesan', name: 'chatting', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/Chat/Chatting.vue`) },
            { path: '/dashboard/syarat', name: 'syarat', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/Syarat.vue`) },
            { path: '/dashboard/akun', name: 'account', component: import(/* webpackChunkName: "lazy-view-[request]" */ `../components/dashboard/Account.vue`) },
        ]
    }
]

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    routes,
})

export default router