<template>
    <div>
        <LoadingScreen />
        <Statistik
            v-bind:dataStatistiks="statistiks ? statistiks.documents : null"
            v-bind:totalSearch="total_search"
        />
    </div>
</template>

<script>
    import Axios from 'axios'
    import Statistik from './Statistik.vue'
    import LoadingScreen from '../addons/LoadingScreen.vue'

    export default {
        name: 'MainStatistik',
        components: {
            Statistik,
            LoadingScreen,
        },
        data() {
            return {
                statistiks: null,
                total_search: 0,
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
            }
        },
    }
</script>