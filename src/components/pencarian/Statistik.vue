<template>
    <div class="row line-bot full  mt-3">
        <div class="col-12">
            <div class="content borderless">
                <div class="row" v-if="statistiks ? statistiks.length <= 0 : null">
                    <span>Data pencarian sudah melebihi batas maksimal page. Silahkan cari data dengan kata kunci yang lebih spesifik...</span>
                </div>
                <div class="row" v-if="statistiks ? statistiks.length > 0 : null">
                    <p class="f14 mt-4">
                        Menemukan : <span class="f14"> {{ total_search }} data</span>
                        <span class="notif-total" v-if="total_search >= 10000"> ( *maks. menampilkan  {{ total_search }} data )</span>
                    </p>
                    <div
                        v-for="(statistik, i) in statistiks" :key="i"
                        class="col-12 pt-2 pb-3"
                    >
                        <div class="content full-height borderless kolom2 mb-3">
                            <a :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }${ linkBack }`">
                                <div class="images-statistik" :style="`background-image: url('https://assets.kompasdata.id/${ statistik.thumbnail }')`"></div>
                                <!-- <img :src="`https://assets.kompasdata.id/${ statistik.thumbnail }`" alt="" class="foto-img"> -->
                            </a>
                            <div class="desc">
                                <h3 class="title">
                                    <a class="data-title" v-html="statistik.title" :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }${ linkBack }`"></a>
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
                linkBack: null,
                statistiks: [],
                total_search: 0,
            }
        },

        async beforeMount() {
            this.linkBack = window.location.search
            this.statistiks = this.dataStatistiks
            this.total_search = this.totalSearch
        },
        
        async mounted() {
            this.linkBack = window.location.search
            this.statistiks = this.dataStatistiks
            this.total_search = this.totalSearch
        },

        async updated() {
            this.statistiks = this.dataStatistiks
            this.total_search = this.totalSearch
        },
    }
</script>

<style>
    .data-title highlight{
        background-color: #bbfe3a;
    }

    .images-statistik {
        width: 100%;
        height: 250px;
        background-color: #dedede;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        border-radius: 5px;
    }
</style>