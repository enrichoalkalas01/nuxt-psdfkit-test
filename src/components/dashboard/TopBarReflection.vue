<template>
    <div class="row">
        <nav class="col-12 navbar navbar-expand-md navbar-dark komp-navbar">
            <div class="container pt-md-0">
                <div class="collapse navbar-collapse" id="navbarMain">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown ms-auto">
                            <a class="nav-link dropdown-toggle" href="#" id="bantuanDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Bantuan
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="bantuanDropdown">
                                <li><a class="dropdown-item" href="/bantuan#tentang">Tentang</a></li>
                                <li><a class="dropdown-item" href="/bantuan#langganan">Cara Berlangganan</a></li>
                                <li><a class="dropdown-item" href="/bantuan#harga">Harga</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="d-block d-md-none p-3">
                        <a href="/login" class="btn btn-line">LOGIN</a>
                        <a href="/daftar" class="btn btn-second">DAFTAR</a>
                    </div>
                </div>

            </div>

        </nav>
        <div class="col-12 nav-below  d-none d-md-block">
            <div class="container">
                <div class="row">
                    <div class="col-12 py-3">
                        <div class="nb-inner">
                            <a class="navbar-brand" href="/">
                                <img src="/assets/images/logo-kompasdata.png" alt="Pusat Informasi Kompas">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopBarReflection'
    }
</script>

<style>

</style>