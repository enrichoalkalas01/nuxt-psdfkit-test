<template>
    <div>
        <LoadingScreen />
        <Statistik
            v-bind:dataStatistiks="statistiks ? statistiks.documents : null"
            v-bind:totalSearch="total_search"
        />
        <div class="col-12 pt-2">
            <!-- Pagination -->
            <div class="pagination">
                <VPagination
                    v-model="page"
                    :pages="Number(total_search > 9000 ? 100 : Math.round((total_search / 50)))"
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
    import Statistik from './Statistik.vue'
    import LoadingScreen from '../addons/LoadingScreen.vue'
    import VPagination from "@hennge/vue3-pagination"
    import "@hennge/vue3-pagination/dist/vue3-pagination.css"

    export default {
        name: 'MainStatistik',
        components: {
            Statistik,
            LoadingScreen,
            VPagination
        },
        data() {
            return {
                statistiks: null,
                total_search: 0,
                page: Number(this.$store.state.Search.CurrentPageKey),
                configStatistiksData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey < 2 ? this.$store.state.Search.CurrentPageKey :
                    (Number(this.$store.state.Search.CurrentPageKey) - 1 ) * this.$store.state.Search.SizeKey + 1,
                    size: 10,
                    collection: this.$store.state.Search.CollectionKey,
                    orderdirection: this.$store.state.Search.OrderDirectionKey
                },
            }
        },
        async mounted() {
            this.$store.commit('configSearchStatistiks', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configStatistiksData
            })

            this.$store.commit('setLoadingScreen', true)
            this.getData()
        },
        async updated() {
            
        },
        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataStatistiks = await Axios(this.$store.state.Search.SearchConfigStatistiks)
                    // Set Data From API
                    this.statistiks = DataStatistiks.data
                    this.total_search = DataStatistiks.data.total

                    if ( DataStatistiks ) this.$store.commit('setLoadingScreen', false)

                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'statistik', total: this.statistiks.total })
                    
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