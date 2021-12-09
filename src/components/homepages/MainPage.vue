<template>
    <section>
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

        <!-- Informasi Terkini -->
        <InformasiTerkini />

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
    import InformasiTerkini from './InformasiTerkini'

    export default {
        name: 'MainPage',
        components: { Articles, Infographics, Foto, Buku, DataStatistik, LayananKami, BeritaTerkini, InformasiTerkini },
    }
</script>