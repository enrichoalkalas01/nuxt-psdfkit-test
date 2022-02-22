<template>
    <div class="tab-pane fade" id="AllTabs02" role="tabpanel" aria-labelledby="All-Tabs02">
        <div class="row pt-3">
            <div class="col-12 col-md-9">
                <div class="content borderless my-3">
                    <div class="row">
                        <div class="col-sm-4 my-3">
                            <a href="artikel-detail/1">
                                <img src="/assets/static/banner/banner1.jpg" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="col-sm-8 my-3">
                            <div class="desc">
                                <h3 class="title"><a href="artikel-detail/1" class="txt-main">Rimbunnya Anggur di Kota Tangsel</a></h3>
                                <p class="short-text three">
                                    Keterbatasan lahan tidak menyurutkan insting petani warga Tangerang Selatan, Banten. Selama pandemi Covid-19, benih dan bibit hortikultura tumbuh subur. Salah satunya melalui komunitas pembudidaya tanaman anggur.
                                </p>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 14 Jan 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content borderless my-3">
                    <div class="row">
                        <div class="col-sm-4 my-3">
                            <a href="artikel-detail/1">
                                <img src="/assets/static/banner/banner2.jpg" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="col-sm-8 my-3">
                            <div class="desc">
                                <h3 class="title"><a href="artikel-detail/1" class="txt-main">Terpikat Raja Ampat</a></h3>
                                <p class="short-text three">
                                    Cantiknya gugusan pulau karang, lembut pasir putih, sungai jernih berair biru, dan bentangan Galaksi Bima Sakti di langit malam hampir selalu tersaji di Raja Ampat.
                                </p>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 15 Jan 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content borderless my-3">
                    <div class="row">
                        <div class="col-sm-4 my-3">
                            <a href="artikel-detail/1">
                                <img src="/assets/static/banner/banner3.jpg" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="col-sm-8 my-3">
                            <div class="desc">
                                <h3 class="title"><a href="artikel-detail/1" class="txt-main">Kompetensi, Wajah Kemerdekaan Pers</a></h3>
                                <p class="short-text three">
                                    (2) Wartawan Indonesia menempuh cara-cara yang profesional dalam melaksanakan tugas jurnalistik. (3) Wartawan Indonesia selalu menguji informasi, memberitakan secara berimbang, tidak mencampurkan fakta dan opini yang menghakimi, serta menerapkan asas praduga tak bersalah. (Pasal 2 dan 3 Kode Etik Jurnalistik, 2006)
                                </p>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 17 Jan 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content borderless my-3">
                    <div class="row">
                        <div class="col-sm-4 my-3">
                            <a href="artikel-detail/1">
                                <img src="/assets/static/banner/banner4.jpg" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="col-sm-8 my-3">
                            <div class="desc">
                                <h3 class="title"><a href="artikel-detail/1" class="txt-main">Obat Covid-19 Siap Diproduksi di Dalam Negeri</a></h3>
                                <p class="short-text three">
                                    Selain mengembangkan vaksin Covid-19 sendiri, Indonesia bersiap memproduksi sendiri obat Covid-19. Harapannya, Indonesia tidak terlalu bergantung pada impor.
                                </p>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 15 Jan 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content borderless my-3">
                    <div class="row">
                        <div class="col-sm-4 my-3">
                            <a href="artikel-detail/1">
                                <img src="/assets/static/banner/banner5.jpg" alt="" class="w-100">
                            </a>
                        </div>
                        <div class="col-sm-8 my-3">
                            <div class="desc">
                                <h3 class="title"><a href="artikel-detail/1" class="txt-main">Sesajen Semeru dan Beda Pemaknaan Manusia</a></h3>
                                <p class="short-text three">
                                    Peristiwa seorang pria menendang sesajen (sesaji) di Pronojiwo, Lumajang, Jawa Timur, viral dan menyita perhatian publik. Sebagian kecil mendukung aksi tersebut, tetapi lebih banyak yang menolak. Pemerintah Kabupaten Lumajang mengibarkan bendera perang atas aksi itu, yang dinilai mencederai keberagaman. Hal ini menjadi bukti bahwa pemahaman dan pemaknaan manusia atas segala sesuatu bisa berbeda-beda.
                                </p>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 17 Jan 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 my-3">
                <!-- Banner -->
                <Banner />

                <!-- Suggestion -->
                <Suggestion v-bind:dataSuggestions="suggestions" />
            </div>
            <div class="col-12 my-3 text-center">
                <ul class="pagination cst-pagin d-flex justify-content-center">
                    <li class="page-item disabled"><a class="page-link" href="#">Sebelumnya</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Selanjutnya</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Artikel',
        components: {
            Banner,
            Suggestion,
        },
        data () {
            return {
                suggestions: dataSuggestions,
            }
        }
    }
</script>