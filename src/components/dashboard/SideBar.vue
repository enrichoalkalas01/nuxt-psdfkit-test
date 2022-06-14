<template>
    <section class="col-3 box-sidebar">
        <div class="row d-flex flex-column flex-shrink-0 py-3 text-white bg-dark h-100">
            <!-- <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Dashboard</span>
            </a>
            <hr> -->
            <ul class="nav nav-pills flex-column px-3 mb-auto">
                <li class="nav-item">
                    <a href="/dashboard" :class="Dashboard ? 'nav-link text-white active' : 'nav-link text-white'" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                        Home
                    </a>
                </li>
                <li class="nav-item">
                    <a href="/dashboard/daftar-pesanan" :class="ShoppingCart ? 'nav-link text-white active' : 'nav-link text-white'" aria-current="page">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                        Daftar Pesanan
                    </a>
                </li>
                <li>
                    <a href="/dashboard/topup" :class="Topup ? 'nav-link text-white active' : 'nav-link text-white'">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                        Topup Saldo
                    </a>
                </li>
                <li>
                    <a href="/dashboard/voucher" :class="Voucher ? 'nav-link text-white active' : 'nav-link text-white'">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                        Redeem Voucher
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                        Akun
                    </a>
                </li>
                <li>
                    <a href="/dashboard/pesan" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                        Pesan
                    </a>
                </li>
                <li>
                    <a href="/dashboard/syarat" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
                        Syarat
                    </a>
                </li>
            </ul>
            <hr>
            <div class="dropdown">
                <a href="/logout" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>Logout</strong>
                    <!-- <img src="https://github.com/mdo.png" alt="" width="25" height="25" class="rounded-circle me-2 mr-2">
                    <strong>{{ this.$store.state.Login.UserData.username }}</strong> -->
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SideBar',

        data() {
            return {
                Voucher: false,
                Topup: false,
                Dashboard: false,
                ShoppingCart: false
            }
        },

        mounted() {
            if ( window.location.pathname === '/dashboard' ) this.Dashboard = !this.Dashboard
            if ( window.location.pathname === '/dashboard/topup' ) this.Topup = !this.Topup
            if ( window.location.pathname === '/dashboard/voucher' ) this.Voucher = !this.Voucher
            if ( window.location.pathname === '/dashboard/daftar-pesanan' ) this.ShoppingCart = !this.ShoppingCart
        }
    }
</script>