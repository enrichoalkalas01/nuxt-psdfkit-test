<template>
    <section class="sec-artikel pt-5">
        <div class="container">
            <div class="row d-flex justify-content-center pb-5">
                <div class="col-12 col-md-10 mb-3">
                    <h2 class="subtitle py-2"> Hasil Pencarian</h2>
                    <p>Kata kunci : <span class="text-bold">{{ keySearch }}</span></p>
                    <p class="f14">
                        Total Search : <span class="f14">{{ totalSearch }} data</span>
                    </p>
                </div>
                <div class="col col-md-2">
                    <!-- <p class="text-md-right">Pencarian Lanjut</p> -->
                </div>
                <div class="col-12">
                    <!-- Mini Menu -->
                    <MiniMenu />

                    <!-- Search -->
                    <div class="tab-content komp-tab-content">
                        <!-- Semua -->
                        <div class="tab-pane fade" id="AllTabs01" role="tabpanel" aria-labelledby="All-Tabs01">
                            <Semua
                                v-bind:dataArtikels="artikels"
                                v-bind:dataFotos="fotos"
                                v-bind:dataInfografiks="infografiks"
                            />
                        </div>

                        <!-- Artikel -->
                        <div class="tab-pane fade show active" id="AllTabs02" role="tabpanel" aria-labelledby="All-Tabs02">
                            <Artikel v-bind:dataArtikels="artikels ? artikels.documents : null" />
                        </div>
                        
                        <!-- Foto -->
                        <div class="tab-pane fade" id="AllTabs03" role="tabpanel" aria-labelledby="All-Tabs03">
                            <Gallery v-bind:dataFotos="fotos ? fotos.documents : null" />
                        </div>

                        <!-- Infografik -->
                        <div class="tab-pane fade" id="AllTabs04" role="tabpanel" aria-labelledby="All-Tabs04">
                            <Infografik v-bind:dataInfografiks="infografiks ? infografiks.documents : null" />
                        </div>

                        <!-- Buku -->
                        <div class="tab-pane fade" id="AllTabs05" role="tabpanel" aria-labelledby="All-Tabs05">
                            asldkas
                        </div>

                        <!-- Data -->
                        <div class="tab-pane fade" id="AllTabs06" role="tabpanel" aria-labelledby="All-Tabs06">
                            saldksa
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    import Artikel from './MainArtikel.vue'
    // import Foto from './Foto.vue'
    import Infografik from './MainInfografik.vue'
    import Gallery from './Gallery.vue'


    export default {
        name: 'MainPage',
        components: {
            MiniMenu,
            Semua,
            Artikel,
            // Foto,
            Infografik,
            Gallery,
        },
        props: { },
        
        data() {
            return {
                pageOfItems: [],
                artikels: null,
                fotos: null,
                infografiks: null,
                keySearch: this.$store.state.Search.SearchKey,
                totalSearch: this.$store.state.Search.TotalSearch,
                ChangeStatus: 0,
                page: 10,
                rows: 100,
                perPage: 10,
                currentPage: 1,
                configPhotosData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: "",
                    publication: "",
                    publishedFrom: "",
                    publishedTo: "",
                    from: 0,
                    size: 5
                },
                configArticlesData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: "",
                    publication: "",
                    publishedFrom: "",
                    publishedTo: "",
                    from: 0,
                    size: 3
                },
                configInfografiksData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: "",
                    publication: "",
                    publishedFrom: "",
                    publishedTo: "",
                    from: 0,
                    size: 3
                }
            }
        },

        watch: {
            '$store.state.Search.SearchKey': function() {
                console.log(this.$store.state.Search)
                this.keySearch !== this.$store.state.Search.SearchKey ?
                this.keySearch = this.$store.state.Search.SearchKey : this.keySearch
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

        updated() {
            this.totalSearch = this.$store.state.Search.TotalSearch
            if ( this.ChangeStatus !== this.$store.state.Search.ChangeStatus ) {
                this.$store.commit('setSearchStatus')
                this.getData()
            }
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
                    this.fotos = DataPhotos.data
                    this.artikels = DataArticles.data
                    this.infografiks = DataInfografiks.data

                    // Set Total Data
                    let total_search = this.infografiks.total + this.fotos.total + this.artikels.total
                    this.$store.commit('setTotalSearch', total_search)
                    this.$store.commit('setTotalSearchDetail', { type: 'artikel', total: this.artikels.total })
                    this.$store.commit('setTotalSearchDetail', { type: 'foto', total: this.fotos.total })
                    this.$store.commit('setTotalSearchDetail', { type: 'infografik', total: this.infografiks.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>

<style>
    .f14 {
        font-size: 14px;
    }
</style>