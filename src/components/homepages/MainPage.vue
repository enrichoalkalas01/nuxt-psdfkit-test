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
                if (value === 'foto') return 'Foto'
                if (value === 'layanan') return 'LayananKami'
                if (value === 'berita_terkini') return 'BeritaTerkini'
                if (value === 'data_statistik') return 'DataStatistik'
                if (value === 'buku') return 'Buku'
            },

            setDynamicData(value) {
                if (value.name === 'banner') return value.data
                if (value.name === 'pengumuman') return value.data
                if (value.name === 'sekilas_info') return value.data
                if (value.name === 'artikel') return value.data
                if (value.name === 'infografik') return value.data
                if (value.name === 'foto') return value.data
                if (value.name === 'layanan') return value.data
                if (value.name === 'berita_terkini') return value.data
                if (value.name === 'data_statistik') return value.data
                if (value.name === 'buku') return value.data
            }
        },
    }  
</script>