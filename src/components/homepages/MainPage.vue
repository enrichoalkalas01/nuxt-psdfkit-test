<template>
    <section>
        <div
            class="wrapper-main-page"
            v-for="(mainpage, i) in MainPageData.mainpage"
            :key="i"
        >
            <component 
                :is="setDynamicComponent(mainpage.name_component)"
                v-bind:dataSet="setDynamicData({
                    name: mainpage.name_component,
                    data: mainpage.data
                })"
            />
        </div>
        <!-- Banner -->
        <!-- <Banner v-bind:dataBanners="banners" /> -->
        
        <!-- Pengumuman -->
        <!-- <Pengumuman v-bind:dataPengumuman="pengumuman" /> -->

        <!-- Sekilas Info -->
        <!-- <SekilasInfo /> -->
        
        <!-- Articles -->
        <!-- <Articles v-bind:dataArtikels="artikels" /> -->

        <!-- Slider Infographics -->
        <!-- <Infographics v-bind:dataInfografiks="infografiks" /> -->

        <!-- Foto -->
        <!-- <Foto v-bind:dataFotos="fotos" /> -->

        <!-- Buku -->
        <!-- <Buku v-bind:dataBukus="bukus" /> -->

        <!-- Data Statistik -->
        <!-- <DataStatistik v-bind:dataStatistiks="statistiks" /> -->

        <!-- Layanan Kami -->
        <!-- <LayananKami /> -->

        <!-- Berita Terkini -->
        <!-- <BeritaTerkini v-bind:dataBeritas="beritas" /> -->

    </section>
</template>

<script>
    // Library
    import MainpageJson from './MainPageData.json'
    // import Axios from 'axios'

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

    let dataBukus = [
        { id: 1, images: '/assets/static/buku/topikhangat/buku1.jpeg', title: 'How To Avoid a Climate Disaster: Solusi Yang Kita Miliki Dan Terobosan Yang Kita Perlukan', desc: 'Menjelaskan tentang berbagi upaya yang harus segera diambil untuk mengurangi emisi gas karbon. Dampak pemanasan global yang makin terasa membuat penulis mulai mengajukan'},
        { id: 2, images: '/assets/static/buku/topikhangat/buku2.jpeg', title: 'Bumi Yang Tak Dapat Dihuni: Kisah Tentang Masa Depan', desc: 'Mengungkapkan tentang masa depan dunia yang akan dilanda sejumlah bencana dahsyat karena terjadinya perubahan iklim. Beberapa malapetaka yang diceritakan dalam buku'},
        { id: 3, images: '/assets/static/buku/topikhangat/buku3.jpeg', title: 'This Changes Everything: Capitalism Vs The Climate', desc: 'Menurut Klein, kebenaran yang menyakitkan berkaitan dengan pemanasan global bukanlah soal karbon, tapi kapitalisme. Perang model ekonomi terhadap kehidupan di bumi.'},
    ]

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
                MainPageData: MainpageJson,
                fotos: dataFotos,
                bukus: dataBukus,
                statistiks: dataStatistiks,
                beritas: dataBeritas,
            }
        },

        async mounted() {
            console.log(JSON.parse(JSON.stringify(this.MainPageData)))
        },

        methods: {
            setDynamicComponent(value) {
                if (value === 'banner') return 'Banner'
                if (value === 'pengumuman') return 'Pengumuman'
                if (value === 'sekilas_info') return 'SekilasInfo'
                if (value === 'artikel') return 'Articles'
                if (value === 'infografik') return 'Infographics'
            },

            setDynamicData(value) {
                if (value.name === 'banner') return value.data
                if (value.name === 'pengumuman') return value.data
                if (value.name === 'sekilas_info') return value.data
                if (value.name === 'artikel') return value.data
                if (value.name === 'infografik') return value.data
            }
        },
    }  
</script>