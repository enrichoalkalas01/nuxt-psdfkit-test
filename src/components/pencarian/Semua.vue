<template>
    <div class="row">
        <!-- <div class="col-12 col-md-9"> -->
        <div class="col-12 col-md-12">
            <!-- Foto -->
            <div v-if="total_search_foto > 0">
                <Foto
                    v-bind:dataFotos="fotos"
                    v-bind:totalSearch="total_search_foto"
                />
            </div>
            
            <!-- Artikel -->
            <div v-if="total_search_artikel > 0">
                <Artikel
                    v-bind:dataArtikels="artikels"
                    v-bind:totalSearch="total_search_artikel"
                />
            </div>

            <!-- Infografik -->
            <div v-if="total_search_infografik > 0">
                <Infografik
                    v-bind:dataInfografiks="infografiks"
                    v-bind:totalSearch="total_search_infografik"
                />
            </div>

            <!-- Buku -->
            
            <!-- Data -->
            
        </div>
        <div class="col-12 col-md-3 my-3">
            <!-- Banner -->
            <!-- <Banner /> -->

            <!-- Suggestion -->
            <!-- <Suggestion v-bind:dataSuggestions="suggestions" /> -->
        </div>
    </div>
</template>

<script>
    import Foto from './Foto.vue'
    import Artikel from './Artikel.vue'
    import Infografik from './Infografik.vue'
    import Axios from 'axios'
    // import Banner from '../banner/Main.vue'
    // import Suggestion from '../suggestion/Main.vue'

    export default {
        name: 'Semua',
        components: {
            Foto,
            Artikel,
            Infografik,
            // Banner,
            // Suggestion,
        },
        props: [
            'dataFotos',
            'dataArtikels',
            'dataInfografiks',
        ],
        data () {
            return {
                artikels: null,
                fotos: null,
                infografiks: null,
                total_search_foto: 0,
                total_search_artikel: 0,
                total_search_infografik: 0,
            }
        },
        async mounted() {
            this.getData()
        },

        async updated() {
            let total_search = this.total_search_foto + this.total_search_artikel + this.total_search_infografik
            this.$store.commit('setTotalSearch', total_search)
        },

        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataPhotos = await Axios(this.$store.state.Search.SearchConfigPhotos)
                    let DataArticles = await Axios(this.$store.state.Search.SearchConfigArticles)
                    let DataInfografiks = await Axios(this.$store.state.Search.SearchConfigInfografiks)

                    // Set Data From API
                    this.fotos = DataPhotos.data.documents.filter((data, i) => { return i < 5 ? data : null })
                    this.artikels = DataArticles.data.documents.filter((data, i) => { return i < 3 ? data : null })
                    this.infografiks = DataInfografiks.data.documents.filter((data, i) => { return i < 3 ? data : null })

                    this.total_search_foto = DataPhotos.data.total
                    this.total_search_artikel = DataArticles.data.total
                    this.total_search_infografik = DataInfografiks.data.total

                    // Set Total Data
                    let total_search = DataInfografiks.data.total + DataPhotos.data.total + DataArticles.data.total
                    this.$store.commit('setTotalSearch', total_search)
                    this.$store.commit('setTotalSearchDetail', { type: 'artikel', total: DataArticles.data.total })
                    this.$store.commit('setTotalSearchDetail', { type: 'foto', total: DataPhotos.data.total })
                    this.$store.commit('setTotalSearchDetail', { type: 'infografik', total: DataInfografiks.data.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>