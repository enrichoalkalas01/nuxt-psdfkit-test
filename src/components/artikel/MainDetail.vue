<template>
  <section class="sec-artikel">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="arsip.html#AllTabs02">List Artikel</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Artikel</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-2 my-3">
                                <img src="/assets/static/artikel/artikel-detail.png" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <!-- <h3 class="subtitle txt-main">Fasilitas Kepala Daerah: Gubernur Sumbar Serahkan Mobil Dinas Baru untuk Operasional Satgas Covid-19</h3> -->
                                <div class="d-block">
                                    <p class="fw-bold">FASILITAS KEPALA DAERAH</p>
                                    <p>KOMPAS edisi Jumat 20 Agustus 2021</p>
                                    <p>Halaman: 11</p>
                                    <p>Penulis: JOL</p>
                                    <div class="db-price rounded">
                                        <a href="pesan-pdf.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan PDF</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Photo Slider -->
                    

                    <div class="d-block my-3">
                        <h2 class="title txt-main">Fasilitas Kepala Daerah: Gubernur Sumbar Serahkan Mobil Dinas Baru untuk Operasional Satgas Covid-19</h2>
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
                                    <b>PADANG, KOMPAS</b> — Gubernur Sumatera Barat Mahyeldi meminta maaf atas polemik yang muncul dari pembelian mobil dinas baru senilai total Rp 2 miliar untuk gubernur dan wakil gubernur di tengah krisis pandemi Covid-19.
                                    Mahyeldi menyerahkan mobil dinasnya ke Satuan Tugas Covid-19 Sumbar untuk operasional, yang juga diikuti oleh Wakil Gubernur Sumbar Audy Joinaldy.
                                </p>
                                <p>

                                    Mahyeldi menyampaikan itu di Istana Gubernur Sumbar, Padang, Kamis (19/8/2021) siang. ”Atas nama pribadi dan pemerintah terlebih dahulu menyampaikan permohonan maaf kepada kita semua karena telah menimbulkan keresahan dan jadi pembicaraan publik,” ujarnya.
                                </p>
                                <p>
                                    Mahyeldi kemudian menyerahkan mobil dinas baru kepada Sekretaris Badan Penanggulangan Bencana Daerah (BPBD) Sumbar Mulyadi di halaman Istana Gubernur Sumbar. Mobil tersebut menjadi kendaraan operasional penanganan Covid-19. Adapun mobil dinas lama Gubernur
                                    Sumbar, Toyota Fortuner, juga segera dilelang sehingga uangnya bisa dialokasikan untuk penanggulangan Covid-19. </p>
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
                    <div class="banner my-3">
                        <a href="#">
                            <img src="resources/images/ads2.png" class="w-100 rounding" alt="">
                        </a>
                    </div>

                    <!-- Suggestion -->
                    <Suggestion v-bind:dataSuggestions="suggestions" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // import Flicking from "@egjs/vue3-flicking";
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Artikel',
        components: {
            // Flicking,
            Suggestion
        },
        data () {
            return {
                suggestions: dataSuggestions
            }
        }
    }
</script>