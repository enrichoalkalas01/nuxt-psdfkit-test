<template>
    <div>
        <LoadingScreen />
        <Infografik
            v-bind:dataInfografiks="infografiks ? infografiks.documents : null"
            v-bind:totalSearch="total_search"
        />
    </div>
</template>

<script>
    import Axios from 'axios'
    import Infografik from './Infografik.vue'
    import LoadingScreen from '../addons/LoadingScreen.vue'

    export default {
        name: 'MainInfografik',
        components: {
            Infografik,
            LoadingScreen,
        },
        data() {
            return {
                infografiks: null,
                total_search: 0,
                configInfografiksData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey < 2 ? this.$store.state.Search.CurrentPageKey :
                    (Number(this.$store.state.Search.CurrentPageKey) - 1 ) * this.$store.state.Search.SizeKey + 1,
                    size: 10,
                    collection: this.$store.state.Search.Collection,
                    orderdirection: this.$store.state.Search.OrderDirectionKey,
                },
            }
        },
        async mounted() {
            this.$store.commit('configSearchInfografiks', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configInfografiksData
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
                    let DataInfografiks = await Axios(this.$store.state.Search.SearchConfigInfografiks)

                    // Set Data From API
                    this.infografiks = DataInfografiks.data
                    this.total_search = DataInfografiks.data.total
                    if ( DataInfografiks ) this.$store.commit('setLoadingScreen', false)

                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'infografik', total: this.infografiks.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>