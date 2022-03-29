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
                        <div class="tab-pane fade show active" id="AllTabs01" role="tabpanel" aria-labelledby="All-Tabs01">
                            <Semua
                                v-bind:dataArtikels="artikels"
                                v-bind:dataFotos="fotos"
                                v-bind:dataInfografiks="infografiks"
                            />
                        </div>

                        <!-- Artikel -->
                        <div class="tab-pane fade" id="AllTabs02" role="tabpanel" aria-labelledby="All-Tabs02">
                            asldkasd laksd alsdk
                            <!-- <Artikel v-bind:dataArtikels="artikelsComponent" /> -->
                        </div>
                        
                        <!-- Foto -->
                        <div class="tab-pane fade" id="AllTabs03" role="tabpanel" aria-labelledby="All-Tabs03">
                            aslkdjasdsdalks d
                            <!-- <Foto v-bind:dataFotos="fotos" /> -->
                        </div>

                        <!-- Infografik -->
                        <div class="tab-pane fade" id="AllTabs04" role="tabpanel" aria-labelledby="All-Tabs04">
                            asldas
                            <!-- <Infografik v-bind:dataInfografiks="infografiks" /> -->
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
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    // import Artikel from '../artikel/MainPage.vue'
    // import Foto from '../foto/MainPage.vue'
    // import Infografik from '../infografik/MainPage.vue'

    export default {
        name: 'MainPage',
        components: {
            MiniMenu,
            Semua,
            // Artikel,
            // Foto,
            // Infografik,
        },
        props: { },
        
        data() {
            return {
                artikels: null,
                fotos: null,
                infografiks: null,
                keySearch: this.$store.state.Search.SearchKey,
                totalSearch: this.$store.state.Search.TotalSearch,
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

        beforeMount() {
            
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
            } catch (error) {
                console.log(error.message)
            }
        },

        updated() {
            this.totalSearch = this.$store.state.Search.TotalSearch
        },
    }
</script>

<style>
    .f14 {
        font-size: 14px;
    }
</style>