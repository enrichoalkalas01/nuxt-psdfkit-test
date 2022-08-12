<template>
    <div class="row">
        <LoadingScreen />
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

            <!-- Buku -->
            <div v-if="total_search_books> 0">
                <Buku
                    v-bind:dataBooks="books ? books : null"
                    v-bind:totalSearch="total_search_books"
                />
            </div>

            <!-- Infografik -->
            <div v-if="total_search_infografik > 0">
                <Infografik
                    v-bind:dataInfografiks="infografiks"
                    v-bind:totalSearch="total_search_infografik"
                />
            </div>
            
            <!-- Data -->
            <div v-if="(total_search_statistiks > 0)">
                <Stastistik
                    v-bind:dataStatistiks="statistiks ? statistiks : null"
                    v-bind:totalSearch="total_search_statistiks"
                />
            </div>
            
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
    import Buku from './Book.vue'
    import Stastistik from './Statistik.vue'
    import Axios from 'axios'
    // import Banner from '../banner/Main.vue'
    // import Suggestion from '../suggestion/Main.vue'

    import LoadingScreen from '../addons/LoadingScreen.vue'

    export default {
        name: 'Semua',
        components: {
            LoadingScreen,
            Foto,
            Artikel,
            Infografik,
            Buku,
            Stastistik,
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
                LoadingScreenStatus: true,
                books: null,
                fotos: null,
                artikels: null,
                statistiks: null,
                infografiks: null,
                total_search_foto: 0,
                total_search_books: 0,
                total_search_artikel: 0,
                total_search_infografik: 0,
                total_search_statistiks: 0,
            }
        },

        watch: {
            // LoadingScreenStatus(old, newVal) {
            //     // console.log(old, newVal)
            // }
        },
        
        async mounted() {
            this.$store.commit('setLoadingScreen', true)
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
                    let TriggerAPI = await Axios('https://dev-be.kompasdata.id/api/BirthDays/GetByMonth/1')
                    let DataArticles = await Axios(this.$store.state.Search.SearchConfigArticles)
                    let DataPhotos = await Axios(this.$store.state.Search.SearchConfigPhotos)
                    let DataBooks = await Axios(this.$store.state.Search.SearchConfigBooks)
                    let DataStatistiks = await Axios(this.$store.state.Search.SearchConfigStatistiks)
                    let DataInfografiks = await Axios(this.$store.state.Search.SearchConfigInfografiks)

                    this.$store.commit('userSetStatusText', DataArticles.data.message)
                    this.$store.commit('userSetStatusSearch', DataArticles.data.member_type)

                    console.log(TriggerAPI ? true : false)
                    if ( DataArticles && DataPhotos && DataBooks && DataStatistiks && DataInfografiks ) this.$store.commit('setLoadingScreen', false)

                    // Set Data From API
                    this.fotos = DataPhotos.data.documents.filter((data, i) => { return i < 5 ? data : null })
                    this.artikels = DataArticles.data.documents.filter((data, i) => { return i < 3 ? data : null })
                    this.infografiks = DataInfografiks.data.documents.filter((data, i) => { return i < 3 ? data : null })
                    this.books = DataBooks.data.documents.filter((data, i) => { return i < 3 ? data : null })
                    this.statistiks = DataStatistiks.data.documents.filter((data, i) => { return i < 3 ? data : null })
                    
                    this.total_search_foto = DataPhotos.data.total
                    this.total_search_artikel = DataArticles.data.total
                    this.total_search_infografik = DataInfografiks.data.total
                    this.total_search_books = DataBooks.data.total
                    this.total_search_statistiks = DataStatistiks.data.total

                    // Set Total Data
                    let total_search = DataInfografiks.data.total + DataPhotos.data.total + DataArticles.data.total
                    this.$store.commit('setTotalSearch', total_search)
                    
                    this.LoadingScreenStatus = !this.LoadingScreenStatus
                    // this.$store.commit('setTotalSearchDetail', { type: 'artikel', total: DataArticles.data.total })
                    // this.$store.commit('setTotalSearchDetail', { type: 'foto', total: DataPhotos.data.total })
                    // this.$store.commit('setTotalSearchDetail', { type: 'infografik', total: DataInfografiks.data.total })
                    // this.$store.commit('setTotalSearchDetail', { type: 'buku', total: DataBukus.data.total })
                    // this.$store.commit('setTotalSearchDetail', { type: 'data', total: DataDatas.data.total })
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>