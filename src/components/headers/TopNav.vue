<template>
    <nav class="navbar navbar-expand-md navbar-dark komp-navbar">
        <div class="container pt-md-0">
            <a class="navbar-brand d-block d-md-none me-auto" href="/">
                <img src="/assets/images/logo-kompasdata.png" alt="Pusat Informasi Kompas Test">
            </a>
            <a href="/dashboard" class="icon-cart mx-3 d-block d-md-none" style="margin-right: 0 !important;">
                <i class="fa-solid fa-user"></i>
            </a>
            <a href="/dashboard/daftar-pesanan" class="icon-cart mx-3 d-block d-md-none">
                <i class="fas fa-shopping-cart"></i>
            </a>
            <button class="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarMain">
                <div class="search-box d-block d-md-none py-2">
                    <div class="input-group">
                        <select class="form-select" id="selectCari"> 
                            <option value="1">Artikel</option>
                            <option value="2">Gambar</option>
                            <option value="3">Data</option>
                        </select>
                        <input type="text" class="form-control" placeholder="Masukkan teks" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <a href="/pencarian" class="btn btn-main px-3" id="btn-cari"><i class="fas fa-search"></i></a>
                    </div>
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="ArsipDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Arsip
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="ArsipDropdown">
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=1&size=10&collection=&page=&currentpage=1&orderdirection=">Artikel</a></li>
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=2&size=10&collection=&page=&currentpage=1&orderdirection=">Foto</a></li>
                            <li><a class="dropdown-item" href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=3&size=10&collection=&page=&currentpage=1&orderdirection=">Infografik</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="bukuDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Buku
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="bukuDropdown">
                            <li><a class="dropdown-item" href="/#buku-Tabs02">Penerbit Buku Kompas</a></li>
                            <li><a class="dropdown-item" href="/#buku-Tabs03">Perpustakaan</a></li>
                            <!-- <li><a class="dropdown-item" href="/buku#bukuTabs04">Buku Elektronik</a></li> -->
                            <!-- <li><a class="dropdown-item" href="#">Laporan</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dataDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Data
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="dataDropdown">
                            <li><a class="dropdown-item" href="/pencarian?query=&datefrom=&dateto=&author=&publication=&typesearch=5&size=10&collection=&currentpage=1&orderdirection=desc">Survei Kompas</a></li>
                            <li><a class="dropdown-item" href="/pencarian?query=&datefrom=&dateto=&author=&publication=&typesearch=5&size=10&collection=kompas_statistic&currentpage=1&orderdirection=desc">Statistik</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="layananDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Layanan
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="layananDropdown">
                            <li><a class="dropdown-item" href="/layanan#riset">Jasa Riset</a></li>
                            <li><a class="dropdown-item" href="/layanan#konten">Konten Kreatif</a></li>
                            <li><a class="dropdown-item" href="/layanan#penerbit">Penerbitan Buku</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown ms-auto">
                        <a class="nav-link dropdown-toggle" href="#" id="bantuanDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Bantuan
                    </a>
                        <ul class="dropdown-menu" aria-labelledby="bantuanDropdown">
                            <li><a class="dropdown-item" href="/bantuan#tentang">Tentang</a></li>
                            <li><a class="dropdown-item" href="/bantuan#langganan">Cara Berlangganan</a></li>
                            <li><a class="dropdown-item" href="/FAQ">FAQ</a></li>
                        </ul>
                    </li>

                </ul>
                <div class="d-block d-md-none p-3" v-if="!this.$store.state.Login.LoginStatus">
                    <a href="/login" class="btn btn-line">LOGIN</a>
                    <a href="/daftar" class="btn btn-second">DAFTAR</a>
                </div>
            </div>

        </div>

        <div id="box-mobile-bar" class="container active-mobile" v-on:click="sideBarActive">
            <div class="row bmb-burger-box">
                <div class="col-12 bmb-burger">
                    <div class="wrapper-burger">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
    export default {
        name: 'TopNav',
        mounted() {
            if ( window.innerWidth > 650 ) document.querySelector("#box-mobile-bar").classList.remove("active-mobile")
            else {
                if ( window.location.pathname.includes('dashboard')) document.querySelector("#box-mobile-bar").classList.add("active-mobile")
                else document.querySelector("#box-mobile-bar").classList.remove("active-mobile")
            }
        },

        methods: {
            sideBarActive() { this.$store.commit('setStatusSideBar') }
        }
    }
</script>

<style>

</style>
