<template>
    <section>
        <!-- Banner -->
        <Banner v-bind:dataBanners="banners" />

        <!-- Pengumuman -->
        <Pengumuman v-bind:dataPengumuman="pengumuman" />

        <!-- Sekilas Info -->
        <SekilasInfo />
        
        <!-- Articles -->
        <Articles v-bind:dataArtikels="artikels" />

        <!-- Slider Infographics -->
        <Infographics v-bind:dataInfografiks="infografiks" />

        <!-- Foto -->
        <Foto v-bind:dataFotos="fotos" />

        <!-- Buku -->
        <Buku v-bind:dataBukus="bukus" />

        <!-- Data Statistik -->
        <DataStatistik v-bind:dataStatistiks="statistiks" />

        <!-- Layanan Kami -->
        <LayananKami />

        <!-- Berita Terkini -->
        <BeritaTerkini v-bind:dataBeritas="beritas" />

    </section>
</template>

<script>
    // Library
    import Axios from 'axios'

    // Components
    import Banner from './Banner.vue'
    import Pengumuman from './Pengumuman.vue'
    import SekilasInfo from './SekilasInfo.vue'
    import Articles from './Articles.vue'
    import Infographics from './Infographics.vue'
    import Foto from './Foto.vue'
    import Buku from './Buku.vue'
    import DataStatistik from './DataStatistik.vue'
    import LayananKami from './LayananKami.vue'
    import BeritaTerkini from './BeritaTerkini.vue'

    let dataBanners = [
        {
            id: 1,
            title: 'Rimbunnya Anggur di Kota Tangsel',
            date: 'JANUARI 14, 2022',
            images: '/assets/static/banner/banner1.jpg',
        },
        {
            id: 2,
            title: 'Terpikat Raja Ampat',
            date: 'JANUARI 15, 2022',
            images: '/assets/static/banner/banner2.jpg',
        },
        {
            id: 3,
            title: 'Kompetensi, Wajah Kemerdekaan Pers',
            date: 'JANUARI 17, 2022',
            images: '/assets/static/banner/banner3.jpg',
        },
        {
            id: 4,
            title: 'Obat Covid-19 Siap Diproduksi di Dalam Negeri',
            date: 'JANUARI 15, 2022',
            images: '/assets/static/banner/banner4.jpg',
        },
        {
            id: 5,
            title: 'Sesajen Semeru dan Beda Pemaknaan Manusia',
            date: 'JANUARI 15, 2022', 
            images: '/assets/static/banner/banner5.jpg',
        },
    ]

    // let dataPengumuman = "Kompasdata melayani kunjungan setiap hari Senin-Jumat, pukul 09.00-14.00 WIB, melalui reservasi email kompasdata@kompas.id"

    let dataInfografiks = [
        { id: 1, images: '/assets/static/infografik/info1.jpg', title: 'Prestasi Indonesia Di Ajang Olimpiade', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 10 Juli 2021'},
        { id: 2, images: '/assets/static/infografik/info2.jpg', title: 'Pemain Terbaik Liga Indonesia', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 4 November 2021'},
        { id: 3, images: '/assets/static/infografik/info3.jpg', title: 'Suaka Margasatwa Terkecil Berada di Jakarta', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 16 November 2021'},
        { id: 4, images: '/assets/static/infografik/info4.jpg', title: 'Cakupan Vaksin Covid-19 Dosis 1 dan 2 di Indonesia', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas Epaper, 18 November 2021'},
        { id: 5, images: '/assets/static/infografik/info5.jpg', title: 'Jumlah Kebutuhan Pejabat Kepada Daerah Tahun 2022-2023', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas Epaper, 18 November 2021'},
        { id: 6, images: '/assets/static/infografik/info6.jpg', title: 'Komposisi Konsumsi BBM di Indonesia', desc: 'Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai dan mengisi kemerdekaan.', source: 'Kompas, 26 November 2021'},
    ]

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
    ]

    // let dataBukus = [
    //     { id: 1, images: '/assets/static/buku/topikhangat/buku1.jpeg', title: 'How To Avoid a Climate Disaster: Solusi Yang Kita Miliki Dan Terobosan Yang Kita Perlukan', desc: 'Menjelaskan tentang berbagi upaya yang harus segera diambil untuk mengurangi emisi gas karbon. Dampak pemanasan global yang makin terasa membuat penulis mulai mengajukan'},
    //     { id: 2, images: '/assets/static/buku/topikhangat/buku2.jpeg', title: 'Bumi Yang Tak Dapat Dihuni: Kisah Tentang Masa Depan', desc: 'Mengungkapkan tentang masa depan dunia yang akan dilanda sejumlah bencana dahsyat karena terjadinya perubahan iklim. Beberapa malapetaka yang diceritakan dalam buku'},
    //     { id: 3, images: '/assets/static/buku/topikhangat/buku3.jpeg', title: 'This Changes Everything: Capitalism Vs The Climate', desc: 'Menurut Klein, kebenaran yang menyakitkan berkaitan dengan pemanasan global bukanlah soal karbon, tapi kapitalisme. Perang model ekonomi terhadap kehidupan di bumi.'},
    // ]

    let dataStatistiks = [
        { id: 1, images: 'assets/images/image 27.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', source:'Survei, April 2003'},
        { id: 2, images: 'assets/images/image 27.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', source:'Survei, April 2003'},
        { id: 3, images: 'assets/images/image 27.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', source:'Survei, April 2003'},
        { id: 4, images: 'assets/images/image 27.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', source:'Survei, April 2003'},
    ]

    let dataBeritas = [
        { id: 1, images: '/assets/images/image 34.png', title: 'Cemas Melihat Arah Kurva Pandemi Indonesia ke Depan', desc: 'Pemberlakuan Pembatasan Kegiatan Masyarakat Darurat telah berjalan hampir dua minggu tapi kasus Covid-19 masih tinggi. Seberapa besar korban dan dampak sosial ekonomi ke depan sangat tergantung langkah kita saat ini.'},
        { id: 2, images: '/assets/images/image 37.png', title: 'Ikhtiar Melindungi Generasi Penerus dari Pandemi', desc: 'Di tengah kondisi Sumatera Selatan yang kian kritis, anak menjadi kelompok yang cukup rentan tertular atau menulari virus Covid-19. Terbukti, jumlah anak yang terkonfirmasi positif di Sumsel melonjak cukup signifikan.'},
    ]

    export default {
        name: 'MainPage',
        components: {
            Banner,
            Pengumuman,
            SekilasInfo,
            Articles,
            Infographics,
            Foto,
            Buku,
            DataStatistik,
            LayananKami,
            BeritaTerkini,
        },

        data() {
            return {
                MainPageData: null,
                banners: dataBanners,
                pengumuman: null,
                artikels: dataArtikels,
                infografiks: dataInfografiks,
                fotos: dataFotos,
                bukus: null,
                statistiks: dataStatistiks,
                beritas: dataBeritas,
            }
        },

        async mounted() {
            let ConfigApi = {
                url: 'https://dev-be.kompasdata.id/api/Configs/mainpage',
                method: 'get',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            let Data = await Axios(ConfigApi).then(response => response.data).catch(err => err)
            console.log(JSON.parse(Data.value))
            this.MainPageData = JSON.parse(Data.value)
            this.pengumuman = this.MainPageData.mainpage.info
            this.bukus = this.MainPageData.mainpage.librarycollections.categories.category
        }
    }

    
</script>