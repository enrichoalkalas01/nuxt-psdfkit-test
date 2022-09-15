<template>
    <div class="row mt-3">
        <!-- <LoadingScreen /> -->
        <div class="wrapper-gallery col-12 pb-4 line-bot full">
            <div class="row" v-if="dataFotos ? dataFotos.length <= 0 : null">
                <span>Data pencarian sudah melebihi batas maksimal page. Silahkan cari data dengan kata kunci yang lebih spesifik...</span>
            </div>
            <div class="row box-gallery" v-if="dataFotos ? dataFotos.length > 0 : null">
                <p class="f14 mt-4">
                    Menemukan : <span class="f14">{{ total_search }} data</span>
                    <span class="notif-total" v-if="total_search >= 10000"> ( *maks. menampilkan  {{ total_search }} data )</span>
                </p>
                <div 
                    v-for="(foto, i) in fotos ? fotos.documents : null" :key="i"
                    class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 text-center"
                >
                    <a :href="`/foto-detail/${ foto ? foto.document_id : null }${ linkBack }`" class="content borderless info-ctn">
                        <img :src="foto ? `${ this.$store.state.Tools.GetUrlFiles + foto.thumbnail }` : null" class="img-square32 rounding mb-1" alt="">
                        <h2 class="subtitle mb-1">
                            <div class="truncate" v-html="`${ foto.title }`"></div>
                        </h2>
                        <span class="date-time">
                            {{ foto.credit }}, {{ this.$store.state.Tools.ChangeDateString(foto.published_date.substring(0, 10)) }}
                        </span>
                        <!-- <h2 class="title truncate" v-html="`${ foto.title }`"></h2>
                        <p class="subtitle">{{ foto.credit }}, {{ this.$store.state.Tools.ChangeDateString(foto.published_date.substring(0, 10)) }} </p> -->
                    </a>
                </div>
            </div>
        </div>
        <div class="col-12 pt-2">
            <!-- Pagination -->
            <div class="pagination">
                <VPagination
                    v-model="page"
                    :pages="Number(Math.round((total_search / (configPhotosData?.size ? configPhotosData?.size : 1))))"
                    :range-size="1"
                    active-color="#DCEDFF"
                    @update:modelValue="updatePagination"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    // import LoadingScreen from '../addons/LoadingScreen.vue'
    import VPagination from "@hennge/vue3-pagination"
    import "@hennge/vue3-pagination/dist/vue3-pagination.css"

    export default {
        name: 'Gallery',
        components: {
            // LoadingScreen, 
            VPagination
        },
        props: [],
        data() {
            return {
                linkBack: null,
                dataFotos: [],
                fotos: null,
                total_search: 0,
                page: Number(this.$store.state.Search.CurrentPageKey),
                configPhotosData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey < 2 ? this.$store.state.Search.CurrentPageKey :
                    (Number(this.$store.state.Search.CurrentPageKey) - 1 ) * this.$store.state.Search.SizeKey + 1,
                    size: 16,
                    orderdirection: this.$store.state.Search.OrderDirectionKey
                },
            }
        },

        async mounted() {
            this.linkBack = window.location.search;

            this.$store.commit('configSearchPhotos', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configPhotosData
            })

            this.$store.commit('setLoadingScreen', true)
            this.getData()
        },

        async updated() {
            // this.fotos !== null ? this.getData() : false
        },

        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataPhotos = await Axios(this.$store.state.Search.SearchConfigPhotos)
                    // Set Data From API
                    this.dataFotos = DataPhotos.data.documents
                    this.fotos = DataPhotos.data
                    this.total_search = this.fotos.total

                    if ( DataPhotos ) this.$store.commit('setLoadingScreen', false)
                    
                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'foto', total: this.fotos.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            },

            async updatePagination(currPage) {
                let queryStringUrl = this.queryStringFunction()
                let stringUrl = '', i = 0
                for ( let queryData in queryStringUrl) {
                    stringUrl = stringUrl + `${ queryData === 'currentpage' ? queryData : queryData }=${ queryData === 'currentpage' ? currPage : queryStringUrl[queryData] }&`
                    i = i + 1
                }

                window.location.href = `/pencarian?${ stringUrl.substring(0, stringUrl.length - 1) }`
            },

            queryStringFunction: function() {
                const urlSearchParams = new URLSearchParams(window.location.search)
                const params = Object.fromEntries(urlSearchParams.entries())
                return params
            },
        },
    }
</script>