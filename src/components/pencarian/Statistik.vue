<template>
    <div class="row line-bot full  mt-3">
        <div class="col-12">
            <div class="content borderless">
                <div class="row">
                    <div
                        v-for="(statistik, i) in statistiks" :key="i"
                        class="col-12 pt-2 pb-3"
                    >
                        <div class="content full-height borderless kolom2 mb-3">
                            <a :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }${ this.$store.state.Search.SearchKey ? `?search=${ this.$store.state.Search.SearchKey }` : '' }`">
                                <img :src="`https://assets.kompasdata.id/${ statistik.thumbnail }`" alt="" class="foto-img">
                            </a>
                            <div class="desc">
                                <h3 class="title">
                                    <a :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }${ this.$store.state.Search.SearchKey ? `?search=${ this.$store.state.Search.SearchKey }` : '' }`">{{ statistik.title }}</a>
                                </h3>
                                <p class="short-text two" v-html="`${ statistik.description }`"></p>
                                <span class="date-time">
                                    <i class="fas fa-clock"></i>
                                    {{ statistik.publication }}, {{ statistik.published_date ? this.$store.state.Tools.ChangeDateString(statistik.published_date.substring(0, 10)) : this.$store.state.Tools.ChangeDateString(statistik.published_date.substring(0, 10)) }}
                                </span>
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
        name: 'Statistik',
        props: [
            'dataStatistiks', 'totalSearch'
        ],
        data (){
            return{
                statistiks: this.dataStatistiks,
                total_search: 0,
            }
        },
        
        async mounted() {
            this.statistiks = this.dataStatistiks
            this.total_search = this.totalSearch
            console.log(this.statistiks)
        },

        async updated() {
            this.statistiks = this.dataStatistiks
            this.total_search = this.totalSearch
        },
    }
</script>