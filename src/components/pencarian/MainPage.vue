<template>
    <section class="sec-artikel pt-5">
        <div class="container pt-3">
            <div class="row d-flex justify-content-center pb-5">
                <div class="col-12" id="notif-search" v-if="this.$store.state.Login.UserData.memberType === 0 || !this.$store.state.Login.LoginStatus">
                    <div class="row">
                        <div class="col-12 status-user">
                            <span>Tipe user : {{ this.$store.state.Search.userStatus }}</span>
                        </div>
                        <div class="status-message">
                            <div v-html="this.$store.state.Search.userTextStatus"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-10 mb-3">
                    <h2 class="subtitle py-2"> Hasil Pencarian</h2>
                    <p>Kata kunci : <span class="text-bold">{{ keySearch }}</span></p>
                    <p class="f14">
                        <!-- Total Search : <span class="f14">{{ totalSearch }} data</span> -->
                    </p>
                </div>
                <div class="col col-md-2 align-items-end d-flex">
                    <!-- <p class="text-md-right">Pencarian Lanjut</p> -->
                    <select
                        v-on:change="orderDirectionData"
                        class="form-control"
                        id="order-direction"
                        :value="this.$store.state.Search.OrderDirectionKey"
                    >
                        <option value="">Relevansi</option>
                        <option value="asc">Terlama</option>
                        <option value="desc">Terbaru</option>
                    </select>
                </div>
                <div class="col-12">
                    <!-- Mini Menu -->
                    <MiniMenu />

                    <!-- Search -->
                    <div class="tab-content komp-tab-content">
                        <!-- Semua -->
                        <div 
                            :class="this.$store.state.Search.TypeSearch === '0' ? 'tab-pane fade show active' : 'tab-pane fade'"
                            id="AllTabs01"
                            role="tabpanel"
                            aria-labelledby="All-Tabs01"
                        >
                            <Semua />
                        </div>

                        <!-- Artikel -->
                        <div 
                            :class="this.$store.state.Search.TypeSearch === '1' ? 'tab-pane fade show active' : 'tab-pane fade'"
                            id="AllTabs02"
                            role="tabpanel"
                            aria-labelledby="All-Tabs02"
                        >
                            <Artikel v-bind:dataArtikels="artikels ? artikels.documents : null" />
                        </div>
                        
                        <!-- Foto -->
                        <div 
                            :class="this.$store.state.Search.TypeSearch === '2' ? 'tab-pane fade show active' : 'tab-pane fade'"
                            id="AllTabs03"
                            role="tabpanel"
                            aria-labelledby="All-Tabs03"
                        >
                            <Gallery v-bind:dataFotos="fotos ? fotos.documents : null" />
                        </div>

                        <!-- Infografik -->
                        <div
                            :class="this.$store.state.Search.TypeSearch === '3' ? 'tab-pane fade show active' : 'tab-pane fade'"
                            id="AllTabs04"
                            role="tabpanel"
                            aria-labelledby="All-Tabs04"
                        >
                            <Infografik v-bind:dataInfografiks="infografiks ? infografiks.documents : null" />
                        </div>

                        <!-- Buku -->
                        <div 
                            :class="this.$store.state.Search.TypeSearch === '4' ? 'tab-pane fade show active' : 'tab-pane fade'"
                            id="AllTabs05"
                            role="tabpanel"
                            aria-labelledby="All-Tabs05"
                        >
                            <Buku />
                        </div>

                        <!-- Data -->
                        <div 
                            :class="this.$store.state.Search.TypeSearch === '5' ? 'tab-pane fade show active' : 'tab-pane fade'"
                            id="AllTabs06"
                            role="tabpanel"
                            aria-labelledby="All-Tabs06"
                        >
                            <Statistik />
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div>
                        <div class="col-12 my-3 text-center">
                            <ul class="pagination cst-pagin d-flex justify-content-center">
                                <li 
                                    :class="pagination[0].page > 1 ? 'page-item' : 'page-item disabled'">
                                    <a 
                                        class="page-link" 
                                        :href="
                                            pagination[0].page > 0 ?
                                                pagination[0].url.replace(
                                                    `currentpage=${ pagination[0].url.substring(pagination[0].url.length - 1) }`,
                                                    `currentpage=${ Number(pagination[0].url.substring(pagination[0].url.length - 1)) - 1 }`
                                                )
                                            : ''
                                        "
                                    >
                                        Sebelumnya
                                    </a>
                                </li>
                                <li 
                                    v-for="(pageData, i) in pagination" :key="i"
                                    :class="i == 0 ? 'page-item active' : 'page-item'"
                                >
                                    <a class="page-link" :href="pageData.url">
                                        {{ pageData.page }}
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a 
                                        class="page-link" 
                                        :href="pagination[1].url"
                                    >
                                        Selanjutnya
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    import Artikel from './MainArtikel.vue'
    import Infografik from './MainInfografik.vue'
    import Gallery from './Gallery.vue'
    import Buku from './MainBook.vue'
    import Statistik from './MainStatistik.vue'

    export default {
        name: 'MainPage',
        components: {
            MiniMenu,
            Semua,
            Artikel,
            // Foto,
            Infografik,
            Gallery,
            Buku,
            Statistik
        },
        props: { },
        
        data() {
            return {
                pageOfItems: [],
                artikels: null,
                fotos: null,
                infografiks: null,
                statistiks: null,
                pagination: [{ page: 1, url: '' }, { page: 1, url: '' }, { page: 2, url: '' }, { page: 3, url: '' }, { page: 3, url: '' }],
                keySearch: this.$store.state.Search.SearchKey,
                totalSearch: this.$store.state.Search.TotalSearch,
                ChangeStatus: 0,
            }
        },

        watch: {
            '$store.state.Search.SearchKey': function() {
                this.keySearch !== this.$store.state.Search.SearchKey ?
                this.keySearch = this.$store.state.Search.SearchKey : this.keySearch
            }
        },

        async mounted() {
            this.totalSearch = this.$store.state.Search.TotalSearch
            this.pagination = this.paginationFunction()
            console.log(this.$store.state)
        },

        async updated() {
            this.totalSearch = this.$store.state.Search.TotalSearch
            if ( this.ChangeStatus !== this.$store.state.Search.ChangeStatus ) {
                this.$store.commit('setSearchStatus')
                // this.getData()
            }
        },

        methods: {
            queryStringFunction: function() {
                const urlSearchParams = new URLSearchParams(window.location.search)
                const params = Object.fromEntries(urlSearchParams.entries())
                return params
            },

            paginationFunction: function() {
                let queryStringUrl = this.queryStringFunction()
                let newUrlPassing = `/pencarian?query=${ queryStringUrl.query }&orderdirection=${ queryStringUrl.orderdirection }&datefrom=${ queryStringUrl.datefrom }&dateto=${ queryStringUrl.dateto }&author=${ queryStringUrl.author }&publication=${ queryStringUrl.publication }&typesearch=${ queryStringUrl.typesearch }&size=${ queryStringUrl.size }&collection=${ queryStringUrl.collection }`
                let newArrPage = []
                for( let i = 0; i < 3; i++ ) {
                    newArrPage[i] = {
                        page: Number(queryStringUrl.currentpage) + i,
                        url: newUrlPassing + `&currentpage=${ Number(queryStringUrl.currentpage) + i }`
                    }
                }

                return newArrPage
            },

            orderDirectionData: function(e) {
                let queryString = this.queryStringFunction(), urlString = `${ window.location.pathname }?`
                for ( let i in queryString ) {
                    if ( i === 'orderdirection' ) {
                        urlString = urlString + `${ i }=${ e.target.value }&`
                    } else {
                        urlString = urlString + `${ i }=${ queryString[i] }&`
                    }
                }

                window.location.href = urlString
                this.$store.commit('setOrderDirection', e.target.value)
            }
        },
    }

    /*

        let url = https://dev-be.kompasdata.id/api/search?search&authors&publication&page&publishedfrom&publishedto&orderdirection&from=1&size=2

        - search (kata kunci)
        - authors (penulis)
        - publication (media)
        - page (halaman)
        - publishedfrom (tanggal awal)
        - publishedto (tanggal akhir)
        - orderdirection (urutan)
        - from (default=1, record hasil pencarian)
        - size (default=30, jumlah hasil pencarian per halaman)

    */
</script>

<style>
    .f14 {
        font-size: 14px;
    }
</style>
