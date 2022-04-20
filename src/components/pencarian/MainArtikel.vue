<template>
    <div>
        <Artikel
            v-bind:dataArtikels="artikels ? artikels.documents : null"
            v-bind:totalSearch="total_search"
        />
    </div>
</template>

<script>
    import Axios from 'axios'
    import Artikel from './Artikel.vue'

    export default {
        name: 'MainArtikel',
        components: {
            Artikel,
        },
        data() {
            return {
                artikels: null,
                total_search: 0,
                configArticlesData: {
                    search: this.$store.state.Search.SearchKey,
                    authors: this.$store.state.Search.AuthorKey,
                    publication: this.$store.state.Search.PublicationKey,
                    publishedFrom: `${ this.$store.state.Search.DateFromKey }`,
                    publishedTo: `${ this.$store.state.Search.DateToKey }`,
                    from: this.$store.state.Search.CurrentPageKey < 2 ? this.$store.state.Search.CurrentPageKey :
                    (Number(this.$store.state.Search.CurrentPageKey) - 1 ) * this.$store.state.Search.SizeKey + 1,
                    size: 10,
                    orderdirection: this.$store.state.Search.OrderDirectionKey
                },
            }
        },
        async mounted() {
            this.$store.commit('configSearchArticles', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configArticlesData
            })

            this.getData()
        },
        async updated() {
            
        },
        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataArticles = await Axios(this.$store.state.Search.SearchConfigArticles)
                    
                    // Set Data From API
                    this.artikels = DataArticles.data
                    this.total_search = DataArticles.data.total

                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'artikel', total: this.artikels.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>