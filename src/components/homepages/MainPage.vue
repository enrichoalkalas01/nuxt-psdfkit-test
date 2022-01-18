<template>
    <section>
        <!-- Banner -->
        <Banner />
        
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
    // Library
    import Axios from 'axios'

    // Components
    import Articles from './Articles.vue'
    import Infographics from './Infographics.vue'
    import Foto from './Foto.vue'
    import Buku from './Buku.vue'
    import DataStatistik from './DataStatistik.vue'
    import LayananKami from './LayananKami.vue'
    import BeritaTerkini from './BeritaTerkini.vue'
    import InformasiTerkini from './InformasiTerkini'
    import Banner from './Banner.vue'

    export default {
        name: 'MainPage',
        components: { 
            Articles, Infographics,
            Foto, Buku, DataStatistik,
            LayananKami, BeritaTerkini,
            InformasiTerkini, Banner
        },

        data() {
            return {
                MainPageData: null
            }
        },

        mounted() {
            let ConfigApi = {
                method: 'get',
                url: 'https://dev-be.kompasdata.id/api/Configs',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            Axios(ConfigApi).then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }
    }

    
</script>