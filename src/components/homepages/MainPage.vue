<template>
    <section>
        <!-- Banner -->
        <Banner />

        <!-- Sekilas Info -->
        <SekilasInfo />
        
        <!-- Articles -->
        <Articles />

        <!-- Slider Infographics -->
        <Infographics />

        <!-- Foto -->
        <Foto />

        <!-- Buku -->
        <Buku />

        <!-- Data Statistik -->
        <DataStatistik />

        <!-- Layanan Kami -->
        <LayananKami />

        <!-- Berita Terkini -->
        <BeritaTerkini />

    </section>
</template>

<script>
    import Articles from './Articles.vue'
    import Infographics from './Infographics.vue'
    import Foto from './Foto.vue'
    import Buku from './Buku.vue'
    import DataStatistik from './DataStatistik.vue'
    import LayananKami from './LayananKami.vue'
    import BeritaTerkini from './BeritaTerkini.vue'
    import Banner from './Banner.vue'
    import SekilasInfo from './SekilasInfo.vue'

    export default {
        name: 'MainPage',
        components: { 
            Articles, Infographics,
            Foto, Buku, DataStatistik,
            LayananKami, BeritaTerkini,
            Banner, SekilasInfo
        },
    }

    // $(document).ready(function() {
    //     /*slide*/
    //     $(".banner-slide").slick({
    //         dots: true,
    //         autoplay: true,
    //         infinite: true,
    //         arrows: true,
    //         speed: 300,

    //     }); /*slide*/
    //     $(".infografik-slide").slick({
    //         // dots: true,
    //         autoplay: true,
    //         infinite: true,
    //         arrows: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,

    //         centerMode: true,
    //         centerPadding: '60px',
    //         variableWidth: true,
    //         speed: 300,

    //     });
    // });
</script>