<template>
    <section class="sec-artikel">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="data">List Data</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Data</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img src="/assets/static/data/data1.png" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <!-- <h3 class="subtitle txt-main">Penderita Penyakit Demam Berdarah</h3> -->
                                <div class="d-block">
                                    <p class="fw-bold">PENDERITA PENYAKIT DEMAM BERDARAH</p>
                                    <!-- <p>KOMPAS edisi Jumat 20 Agustus 2021</p> -->
                                    <p>Halaman: 1</p>
                                    <p>Penulis: JOL</p>
                                    <div class="db-price rounded">
                                        <span class="price-tag">mulai dari Rp. 300.000</span>
                                        <a href="pesan-data.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Data</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block my-3">
                        <h2 class="title txt-main">Penderita Penyakit Demam Berdarah Dengue di DKI Jakarta</h2>
                        <ul class="nav nav-tabs komp-tabs my-3" id="myTabDetails" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="db-Tabs01" data-bs-toggle="tab" href="#dbTabs01" aria-controls="dbTabs01" aria-selected="true"> Detail</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="db-Tabs02" data-bs-toggle="tab" href="#dbTabs02" aria-controls="dbTabs02" aria-selected="false">Ketentuan Penggunaan</a>
                            </li>
                        </ul>
                        <div class="tab-content komp-tab-content">
                            <div class="tab-pane fade show active" id="dbTabs01" role="tabpanel" aria-labelledby="db-Tabs01">
                                <p>
                                    Penyakit demam berdarah adalah penyakit yang disebabkan oleh gigitan nyamuk Aedes aegypti pembawa virus dengue. Penderita penyakit ini mengalami gejala demam yang tinggi, ada kalanya disertai sakit kepala dan nyeri sendi. 
                                </p>
                                <p>
                                    Data jumlah penderita DBD yang dilaporkan oleh RS dan ditindaklanjuti dengan penyelidikan epidemiologi di Provinsi DKI Jakarta dalam tiga tahun terakhir menunjukkan kasus yang cukup tinggi. Pada tahun 2018, kasus tertinggi terjadi di Jakarta Barat dengan 909 penderita (32%). 
                                    Kenaikan kasus terjadi pada tahun 2019 di semua Kota di DKI Jakarta dengan kasus tertinggi sebanyak 3004 terjadi di Jakarta Timur. 
                                    Pada tahun 2020 angka kasus demam berdarah menurun dibanding tahun 2019 meskipun masih menunjukkan angka yang cukup tinggi. 
                                    Kesadaran masyarakat akan kebersihan lingkungan tempat tinggal dan sekitar perlu ditingkatkan untuk membasmi tempat bersarangnya nyamuk penyebab penyakit ini. (AAN/Litbang Kompas)
                                </p>
                            </div>
                            <div class="tab-pane fade " id="dbTabs02" role="tabpanel" aria-labelledby="db-Tabs02">
                                <ol>
                                    <li>Penggunaan artikel harus mengajukan izin kepada Kompas.</li>
                                    <li>Penggunaan artikel wajib mencantumkan kredit atas nama Penulis dengan format: ‘Kompas/Penulis.</li>
                                    <li>Artikel tidak boleh digunakan sebagai sarana/materi kegiatan atau tindakan yang melanggar norma hukum, sosial, SARA, dan mengandung unsur pelecehan/ pornografi/ pornoaksi/ diskriminasi.</li>
                                    <li>Penggunaan artikel untuk kepentingan komersial silahkan hubungi kami</li>
                                    <li>Penggunaan artikel tokoh/sosok/properti untuk kepentingan komersial wajib mendapat persetujuan secara tertulis dari yang bersangkutan.</li>
                                    <li>Pelanggan tidak boleh mengubah, memperbanyak, mengalihwujudkan, memindahtangankan, memperjualbelikan foto tanpa persetujuan dari Kompas.</li>
                                    <li>Untuk pembelian artikel tokoh, mohon untuk konfirmasi terlebih dahulu sebelum melakukan transaksi ke alamat e-mail <a href="mailto:kompasdata@kompas.id">kompasdata@kompas.id</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-3">
                    <!-- Banner -->
                    <Banner />

                    <!-- Suggestion -->
                    <Suggestion v-bind:dataSuggestions="suggestions" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Banner from './Banner.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'MainDetail',
        components: {
            Banner,
            Suggestion,
        },
        data () {
            return {
                suggestions: dataSuggestions
            }
        }
    }
</script>