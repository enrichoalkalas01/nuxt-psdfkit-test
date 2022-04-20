<template>
    <div>
        <Books
            v-bind:dataBooks="books ? books.documents : null"
            v-bind:totalSearch="total_search"
        />
    </div>
</template>

<script>
    import Axios from 'axios'
    import Books from './Book.vue'

    export default {
        name: 'MainBook',

        // Components
        components: {
            Books
        },

        // Component State
        data () {
            return {
                books: null,
                total_search: 0,
                configBooksData: {
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

        // Component Did Mounted
        mounted() {
            this.$store.commit('configSearchBooks', {
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                data: this.configBooksData
            })

            this.getData()
        },

        methods: {
            async getData() {
                try {
                    // Get Data From API
                    let DataBooks = await Axios(this.$store.state.Search.SearchConfigBooks)
                    
                    // Set Data From API
                    this.books = DataBooks.data
                    this.total_search = DataBooks.data.total

                    // Set Total Data
                    this.$store.commit('setTotalSearchDetail', { type: 'book', total: this.books.total })
                    
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
    }
</script>