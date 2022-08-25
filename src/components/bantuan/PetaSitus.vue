<template>
    <div class="sec-artikel my-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="title line-bot full">Peta Situs</h2>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-sm-4 col-md-3 my-3">
                            <div class="box-title text-center">
                                <h3 class="subtitle">Beranda</h3>
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-9 mb-3">
                            <div class="content borderless full my-3 peta-situs">
                                <ul>
                                    <li><a href="/?element_scroll=slide&offsett=125">Pencarian</a></li>
                                    <li><a href="/?element_scroll=sekilas-info-mp&offsett=125">Sekilas Info</a></li>
                                    <li><a href="/?element_scroll=artikel-mp&offsett=175">Produk</a></li>
                                    <li><a href="/?element_scroll=berita-terkini-mp&offsett=125">Berita Terkini</a></li>
                                    <li><a href="/?element_scroll=layanan-mp&offsett=125">Layanan Kami</a></li>
                                    <li><a href="https://account.kompas.id/register?next=https%3A%2F%2Fdata-dev.kompas.id%2F%3Fstatus%3Dsukses_login&status_login=login">Daftar Baru</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-3 my-3">
                            <div class="box-title text-center">
                                <h3 class="subtitle">Mesin Pencarian</h3>
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-9 mb-3">
                            <div class="content borderless full my-3 peta-situs">
                                <ul>
                                    <li><a href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=1&size=10&collection=&page=&currentpage=1&orderdirection=">Arsip Artikel</a></li>
                                    <li><a href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=2&size=10&collection=&page=&currentpage=1&orderdirection=">Arsip Foto</a></li>
                                    <li><a href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=3&size=10&collection=&page=&currentpage=1&orderdirection=">Arsip Infografik</a></li>
                                    <li><a href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=4&size=10&collection=&page=&currentpage=1&orderdirection=">Perpustakaan</a></li>
                                    <li><a href="/pencarian?query=&subject=&datefrom=&dateto=&author=&publication=&typesearch=5&size=10&collection=&page=&currentpage=1&orderdirection=">Data</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-3 my-3">
                            <div class="box-title text-center">
                                <h3 class="subtitle">Dashboard</h3>
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-9 mb-3">
                            <div class="content borderless full my-3 peta-situs">
                                <ul>
                                    <li><a href="/dashboard">Dashboard</a></li>
                                    <li><a href="/dashboard/daftar-pesanan">Daftar Pesanan Foto</a></li>
                                    <li><a href="/dashboard/daftar-transaksi">Daftar Transaksi</a></li>
                                    <li><a href="/dashboard/topup">Topup Saldo</a></li>
                                    <li><a href="/dashboard/kupon">Kupon</a></li>
                                    <li><a href="/dashboard/akun">Akun</a></li>
                                    <li><a href="/dashboard/pesan">Pesan</a></li>
                                    <li><a href="/dashboard/syarat">Syarat dan Ketentuan</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'PetaSitus'
    }
</script>

<style>
    .peta-situs a{
        text-decoration: none;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>