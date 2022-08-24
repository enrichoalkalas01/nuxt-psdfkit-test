<template>
    <section
        :class="
            this.$store.state.Headers.SideBarStatus ?
            `col-3 box-sidebar active-mobile` : `col-3 box-sidebar`
        "
        id="parent-sidebar"
        v-on:click="closeSideBar"
    >
        <div class="row d-flex flex-column flex-shrink-0 py-3 text-white bg-dark h-100 wrap-sb">
            <!-- <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Dashboard</span>
            </a>
            <hr> -->
            <ul class="nav nav-pills flex-column px-3 mb-auto">
                <li class="nav-item">
                    <a href="/dashboard" :class="Dashboard ? 'nav-link text-white active' : 'nav-link text-white'" aria-current="page">
                        <i class="fa-solid fa-house icon-text"></i>
                        <span class="icon-sidebox">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/daftar-pesanan" :class="ShoppingCart ? 'nav-link text-white active' : 'nav-link text-white'" aria-current="page">
                        <i class="fa-solid fa-clipboard-list icon-text"></i>
                        <span class="icon-sidebox">Daftar Pesanan Foto</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/daftar-transaksi" :class="HistoryTransaction ? 'nav-link text-white active' : 'nav-link text-white'" aria-current="page">
                        <i class="fa-solid fa-list icon-text"></i>
                        <span class="icon-sidebox">Daftar Transaksi</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/topup" :class="Topup ? 'nav-link text-white active' : 'nav-link text-white'">
                        <i class="fa-solid fa-circle-dollar-to-slot icon-text"></i>
                        <span class="icon-sidebox">Topup Saldo</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/kupon" :class="Voucher ? 'nav-link text-white active' : 'nav-link text-white'">
                        <i class="fa-solid fa-receipt icon-text"></i>
                        <span class="icon-sidebox">Kupon</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/akun" :class="Account ? 'nav-link text-white active' : 'nav-link text-white'">
                        <i class="fa-solid fa-user icon-text"></i>
                        <span class="icon-sidebox">Akun</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/pesan" :class="Chat ? 'nav-link text-white active' : 'nav-link text-white'">
                        <i class="fa-solid fa-comment-dots icon-text"></i>
                        <span class="icon-sidebox">Pesan</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/syarat" :class="Terms ? 'nav-link text-white active' : 'nav-link text-white'">
                        <i class="fa-solid fa-lock icon-text"></i>
                        <span class="icon-sidebox">Syarat</span>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SideBar',

        data() {
            return {
                Chat: false,
                Terms: false,
                Topup: false,
                Account: false,
                Voucher: false,
                Dashboard: false,
                ShoppingCart: false,
                HistoryTransaction: false,
            }
        },

        mounted() {
            if ( window.location.pathname === '/dashboard' ) this.Dashboard = !this.Dashboard
            if ( window.location.pathname === '/dashboard/topup' ) this.Topup = !this.Topup
            if ( window.location.pathname === '/dashboard/akun' ) this.Account = !this.Account
            if ( window.location.pathname === '/dashboard/kupon' ) this.Voucher = !this.Voucher
            if ( window.location.pathname === '/dashboard/pesan' ) this.Chat = !this.chat
            if ( window.location.pathname === '/dashboard/syarat' ) this.Terms = !this.Terms
            if ( window.location.pathname === '/dashboard/daftar-pesanan' ) this.ShoppingCart = !this.ShoppingCart
            if ( window.location.pathname === '/dashboard/daftar-transaksi' ) this.HistoryTransaction = !this.HistoryTransaction
        },

        methods: {
            closeSideBar(e) {
                if ( e.target.id === 'parent-sidebar' ) {
                    e.target.classList.remove('active-mobile') // remove class active mobile
                    this.$store.commit('setCloseSideBar') // set false side bar status
                }
            }
        }
    }
</script>