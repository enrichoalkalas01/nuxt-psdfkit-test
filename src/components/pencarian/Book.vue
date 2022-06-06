<template>
    <div class="row line-bot full">
        <div class="col-12">
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
                                <a :href="`/buku-detail/${ book.id }`" class="more">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="f14 mt-4">
                Total Search : <span class="f14">{{ total_search }} data</span>
            </p>
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
                books: this.dataBooks,
                total_search: 0,
            }
        },

        async mounted() {
            this.books = this.dataBooks
            this.total_search = this.totalSearch
        },

        async updated() {
            this.books = this.dataBooks
            this.total_search = this.totalSearch
        },
    }
</script>
