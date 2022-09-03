<template>
    <div class="row line-bot full mt-3 pb-4">
        <div class="col-12" v-if="booksData ? booksData.length <= 0 : null">
            <span>Data pencarian sudah melebihi batas maksimal page. Silahkan cari data dengan kata kunci yang lebih spesifik...</span>
        </div>
        <div class="col-12" v-if="booksData ? booksData.length > 0 : null">
            <p class="f14 mt-4">
                Menemukan : <span class="f14">{{ total_search }} data</span>
                <span class="notif-total" v-if="total_search >= 10000"> ( *maks. menampilkan  {{ total_search }} data )</span>
            </p>
            <div class="row d-flex justify-content-center">
                <div
                    v-for="(book, i) in books" :key="i"
                    class="col-12 col-sm-6 col-md-4 col-lg-3"
                >
                    <div class="row buku-card">
                        <div class="col bc-inner">
                            <img :src="`https://assets.kompasdata.id/buku/cover/${ book.cover }`" alt="" class="bc-img">
                            <h3 class="w-100 subtitle short-text three">
                                <div class="w-100" v-html="book.judul"></div>
                            </h3>
                            <!-- <div class="text-start"> -->
                            <div class="text-center">
                                <p class="short-text four text-center">Tahun Terbit {{ book.penerbittahun }}</p>
                                <a :href="`/buku-detail/${ book.id }${ linkBack }`" class="more">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Book',
        props: [
            'dataBooks', 'totalSearch'
        ],
        data (){
            return{
                linkBack: null,
                books: this.dataBooks,
                booksData: [],
                total_search: 0,
            }
        },

        async beforeMount() {
            this.linkBack = window.location.search
            this.books = this.dataBooks
            this.booksData = this.dataBooks
            this.total_search = this.totalSearch
        },

        async mounted() {
            this.linkBack = window.location.search
            this.books = this.dataBooks
            this.booksData = this.dataBooks
            this.total_search = this.totalSearch
        },

        async updated() {
            this.books = this.dataBooks
            this.booksData = this.dataBooks
            this.total_search = this.totalSearch
        },
    }
</script>

<style scoped>
    .buku-card .bc-inner .bc-img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        box-shadow: none;
    }
</style>