<template>
    <section id="side-bar-new" class="">
        <div class="icon-button" id="icon-button">
            <span>Menu</span>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="wrapper-sb">
            <ul class="content-menu">
                <li class="nav-items">
                    <a href="/dashboard">
                        <div :class="`menu-box ${ Dashboard ? 'active' : '' }`">
                            <i class="fa-solid fa-house icon-text"></i>
                            <span class="icon-sidebox">Home</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/daftar-pesanan">
                        <div :class="`menu-box ${ ShoppingCart ? 'active' : '' }`">
                            <i class="fa-solid fa-clipboard-list icon-text"></i>
                            <span class="icon-sidebox">Daftar Pesanan Foto</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/daftar-transaksi">
                        <div :class="`menu-box ${ HistoryTransaction ? 'active' : '' }`">
                            <i class="fa-solid fa-list icon-text"></i>
                            <span class="icon-sidebox">Daftar Transaksi</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/topup">
                        <div :class="`menu-box ${ Topup ? 'active' : '' }`">
                            <i class="fa-solid fa-circle-dollar-to-slot icon-text"></i>
                            <span class="icon-sidebox">Topup Saldo</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/kupon">
                        <div :class="`menu-box ${ Voucher ? 'active' : '' }`">
                            <i class="fa-solid fa-receipt icon-text"></i>
                            <span class="icon-sidebox">Kupon</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/akun">
                        <div :class="`menu-box ${ Account ? 'active' : '' }`">
                            <i class="fa-solid fa-user icon-text"></i>
                            <span class="icon-sidebox">Akun</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/pesan">
                        <div :class="`menu-box ${ Chat ? 'active' : '' }`">
                            <i class="fa-solid fa-comment-dots icon-text"></i>
                            <span class="icon-sidebox">Pesan</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="/dashboard/syarat">
                        <div :class="`menu-box ${ Terms ? 'active' : '' }`">
                            <i class="fa-solid fa-lock icon-text"></i>
                            <span class="icon-sidebox">Syarat</span>
                        </div>
                    </a>
                </li>
                <li class="nav-items">
                    <a href="https://account.kompas.id/logout">
                        <div :class="`menu-box`">
                            <i class="fa-solid fa-user icon-text"></i>
                            <span class="icon-sidebox">Logout</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SideBarNew',
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

            document.querySelector("#icon-button").addEventListener('click', function(e) {
                if ( !document.getElementById("side-bar-new").getAttribute('class').includes('hide') ) {
                    document.getElementById("icon-button").classList.add('hide')
                    document.getElementById("side-bar-new").classList.add('hide')
                    document.getElementById("content-dashboard").classList.add('active')
                } else {
                    e.target.classList.remove('hide')
                    document.getElementById("icon-button").classList.remove('hide')
                    document.getElementById("side-bar-new").classList.remove('hide')
                    document.getElementById("content-dashboard").classList.remove('active')
                }
            })
        }
    }
</script>
