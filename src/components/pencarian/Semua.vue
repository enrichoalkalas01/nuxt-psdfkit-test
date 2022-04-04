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
                configPhotosData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey,
                    size: this.$store.state.Search.SizeKey,
                },
                configArticlesData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey,
                    size: this.$store.state.Search.SizeKey,
                },
                configInfografiksData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey,
                    size: this.$store.state.Search.SizeKey,
                }
            }
        },
        async mounted() {
            // Passing Data To Vuex
            this.$store.commit('configSearchPhotos', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configPhotosData
            })

            this.$store.commit('configSearchArticles', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configArticlesData
            })

            this.$store.commit('SearchConfigInfografiks', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configInfografiksData
            })

            this.getData()
        },

        methods: {
            async getData() {
                console.log(this.$store.state.Search.ChangeStatus)
                try {
                    // Get Data From API
                    let DataPhotos = await Axios(this.$store.state.Search.SearchConfigPhotos)
                    let DataArticles = await Axios(this.$store.state.Search.SearchConfigArticles)
                    let DataInfografiks = await Axios(this.$store.state.Search.SearchConfigInfografiks)

                    // Set Data From API
                    this.fotos = DataPhotos.data.documents
                    this.artikels = DataArticles.data.documents
                    this.infografiks = DataInfografiks.data.documents

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