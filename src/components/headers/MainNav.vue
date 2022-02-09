<template>
    <div class="nav-below  d-none d-md-block">
        <div class="container">
            <div class="row">
                <div class="col-12 py-3">
                    <div class="nb-inner">
                        <a class="navbar-brand" href="/">
                            <img src="/assets/images/logo-kompasdata.png" alt="Pusat Informasi Kompas">
                        </a>
                        <div class="med-box d-none d-md-block">
                            <div class="search-box">
                                <div class="input-group">
                                    <select class="form-select" id="selectCari"> 
                                        <option value="0">Semua</option>
                                        <option value="1">Artikel</option>
                                        <option value="2">Foto</option>
                                        <option value="3">Infografik</option>
                                        <option value="4">Buku</option>
                                        <option value="5">Data</option>
                                    </select>
                                    <input type="text" class="form-control" placeholder="Masukkan teks" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <a href="/hasil-cari" class="btn btn-main px-3" id="btn-cari"><i class="fas fa-search"></i></a>
                                </div>
                            </div>

                        </div>
                        <div class="user-box">
                            <a href="#" class="cart d-none d-md-block">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                            <span class="divider mr-2  d-none d-md-block"></span>
                            <a href="/login" class="btn btn-line">LOGIN</a>
                            <a href="/daftar" class="btn btn-second">DAFTAR</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainNav',
    }
</script>

<style>

</style>