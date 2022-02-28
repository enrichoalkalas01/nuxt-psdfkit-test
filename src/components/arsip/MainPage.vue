<template>
    <section class="sec-artikel  pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center pb-5">    
                <div class="col-12">
                    <!-- MiniMenu -->
                    <MiniMenu />

                    <div class="tab-content komp-tab-content">
                        <!-- Semua -->
                        <div class="tab-pane fade show active" id="AllTabs01" role="tabpanel" aria-labelledby="All-Tabs01">
                            <Semua />
                        </div>

                        <!-- Artikel -->
                       <div class="tab-pane fade" id="AllTabs02" role="tabpanel" aria-labelledby="All-Tabs02">
                            <Artikel v-bind:dataArtikels="artikels" />
                        </div>

                        <!-- Foto -->
                        <div class="tab-pane fade" id="AllTabs03" role="tabpanel" aria-labelledby="All-Tabs03">
                            <Foto v-bind:dataFotos="fotos" />
                        </div>

                        <!-- Infografik -->
                        <div class="tab-pane fade" id="AllTabs04" role="tabpanel" aria-labelledby="All-Tabs04">
                            <Infografik v-bind:dataInfografiks="infografiks"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    import Artikel from '../artikel/MainPage.vue'
    import Foto from '../foto/MainPage.vue'
    import Infografik from '../infografik/MainPage.vue'

    let dataArtikels = [
        { id: 1, images: '/assets/static/banner/banner1.jpg', title: 'Rimbunnya Anggur di Kota Tangsel', desc: 'Keterbatasan lahan tidak menyurutkan insting petani warga Tangerang Selatan, Banten. Selama pandemi Covid-19, benih dan bibit hortikultura tumbuh subur. Salah satunya melalui komunitas pembudidaya tanaman anggur.', source: 'Kompas, 14 Jan 2022'},
        { id: 2, images: '/assets/static/banner/banner2.jpg', title: 'Terpikat Raja Ampat', desc: 'Cantiknya gugusan pulau karang, lembut pasir putih, sungai jernih berair biru, dan bentangan Galaksi Bima Sakti di langit malam hampir selalu tersaji di Raja Ampat.', source: 'Kompas, 15 Jan 2022'},
        { id: 3, images: '/assets/static/banner/banner3.jpg', title: 'Kompetensi, Wajah Kemerdekaan Pers', desc: '(2) Wartawan Indonesia menempuh cara-cara yang profesional dalam melaksanakan tugas jurnalistik. (3) Wartawan Indonesia selalu menguji informasi, memberitakan secara berimbang, tidak mencampurkan fakta dan opini yang menghakimi, serta menerapkan asas praduga tak bersalah. (Pasal 2 dan 3 Kode Etik Jurnalistik, 2006)', source: 'Kompas, 17 Jan 2022'},
        { id: 4, images: '/assets/static/banner/banner4.jpg', title: 'Obat Covid-19 Siap Diproduksi di Dalam Negeri', desc: 'Selain mengembangkan vaksin Covid-19 sendiri, Indonesia bersiap memproduksi sendiri obat Covid-19. Harapannya, Indonesia tidak terlalu bergantung pada impor.', source: 'Kompas, 15 Jan 2022'},
        { id: 5, images: '/assets/static/banner/banner5.jpg', title: 'Sesajen Semeru dan Beda Pemaknaan Manusia', desc: 'Peristiwa seorang pria menendang sesajen (sesaji) di Pronojiwo, Lumajang, Jawa Timur, viral dan menyita perhatian publik. Sebagian kecil mendukung aksi tersebut, tetapi lebih banyak yang menolak. Pemerintah Kabupaten Lumajang mengibarkan bendera perang atas aksi itu, yang dinilai mencederai keberagaman. Hal ini menjadi bukti bahwa pemahaman dan pemaknaan manusia atas segala sesuatu bisa berbeda-beda.', source: 'Kompas, 17 Jan 2022'},
    ]

    let dataFotos = [
        { id: 1, images: 'assets/static/foto/foto1.JPG', title: 'Sekolah Bersiasat Gelar Pembelajaran', source: 'Kompas, 29 Desember 2021'},
        { id: 2, images: 'assets/static/foto/foto2.JPG', title: 'Toprak Razgatlioglu Raih Juara Dunia lewat Balapan Pertama', source: 'Kompas Epaper, 04 Januari 2022'},
        { id: 3, images: 'assets/static/foto/foto3.JPG', title: 'Lava Pijar Gunung Semeru', source: 'Kompas Epaper, 08 Desember 2021'},
        { id: 4, images: 'assets/static/foto/foto4.JPG', title: 'Tes Antigen Cepat Pengendara Sepeda Motor', source: 'Kompas, 08 Juni 2021'},
        { id: 5, images: 'assets/static/foto/foto5.JPG', title: 'Geliat di Pelabuhan Sunda Kelapa di tahun 2022', source: 'Kompas Epaper, 03 Januari 2022'},
        { id: 6, images: 'assets/static/foto/foto6.JPG', title: 'Lanskap Tol Solo-Ngawi', source: 'Kompas, 20 Desember 2021'},
        { id: 7, images: 'assets/static/foto/foto7.JPG', title: 'Banjir di Jalan Thamrin, Jakarta', source: 'Kompas, 05 Maret 1976'},
        { id: 8, images: 'assets/static/foto/foto8.JPG', title: 'Penghargaan Bintang Jalasena Utama di Atas Kapal Selam KRI Nanggala', source: 'Kompaspedia, 28 April 2021'},
        { id: 9, images: 'assets/static/foto/foto9.JPG', title: 'Chrisjon Pertahankan Gelar', source: 'Kompas, 5 Maret 2006'},
    ]

    let dataInfografiks = [
        { id: 1, images: '/assets/static/infografik/info1.jpg', title: 'Prestasi Indonesia Di Ajang Olimpiade', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 10 Juli 2021'},
        { id: 2, images: '/assets/static/infografik/info2.jpg', title: 'Pemain Terbaik Liga Indonesia', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 4 November 2021'},
        { id: 3, images: '/assets/static/infografik/info3.jpg', title: 'Suaka Margasatwa Terkecil Berada di Jakarta', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 16 November 2021'},
        { id: 4, images: '/assets/static/infografik/info4.jpg', title: 'Cakupan Vaksin Covid-19 Dosis 1 dan 2 di Indonesia', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas Epaper, 18 November 2021'},
        { id: 5, images: '/assets/static/infografik/info5.jpg', title: 'Jumlah Kebutuhan Pejabat Kepada Daerah Tahun 2022-2023', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas Epaper, 18 November 2021'},
        { id: 6, images: '/assets/static/infografik/info6.jpg', title: 'Komposisi Konsumsi BBM di Indonesia', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 26 November 2021'},
    ]

    export default {
        name: 'Arsip',
        components: {
            MiniMenu,
            Semua,
            Artikel,
            Foto,
            Infografik,
        },
        props: {
            dataArtikels,
            dataFotos,
            dataInfografiks,
        },
        data () {
            return {
                artikels: dataArtikels,
                fotos: dataFotos,
                infografiks: dataInfografiks,
            }
        }
    }
</script>