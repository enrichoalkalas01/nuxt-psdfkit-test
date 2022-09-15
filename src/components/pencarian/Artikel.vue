<template>
    <div class="row mt-3 pb-4 line-bot full">
        <!-- <LoadingScreen /> -->
        <div class="col-12" v-if="artikels ? artikels.length <= 0 : null">
            <span>Data pencarian sudah melebihi batas maksimal page. Silahkan cari data dengan kata kunci yang lebih spesifik...</span>
        </div>
        <div class="col-12" v-if="artikels ? artikels.length > 0 : null">
            <p class="f14 mt-4">
                Menemukan : <span class="f14">{{ total_search }} data</span>
                <span class="notif-total" v-if="total_search >= 10000"> ( *maks. menampilkan  {{ total_search }} data )</span>
            </p>
            <div
                v-for="artikel in artikels" :key="artikel.id"
                class="row artikels content borderless my-3"
            >
                <div
                    :class="artikel.featured_image !== '' ? 'col-12 col-sm-12 col-md-9 col-lg-9 text-wrapper' : 'col-12 col-sm-12 col-md-12 col-lg-12 text-wrapper'"
                >
                    <h2 class="title">
                        <a @click="checkLogin" :href="`/artikel-detail/${ artikel.document_id }${ linkBack }`" class="txt-main">
                            <span v-html="artikel.title"></span>
                        </a>
                    </h2>
                    <span class="date-time mb-3">
                        <span class="date-time">
                            <i class="fas fa-clock"></i> {{ artikel.publication }}, {{ artikel.published_date ? this.$store.state.Tools.ChangeDateString(artikel.published_date.substring(0, 10)) : this.$store.state.Tools.ChangeDateString(artikel.published_date.substring(0, 10)) }} &nbsp;
                            <i class="fa-solid fa-images"></i> {{ artikel.photo_count }} &nbsp;
                            <i class="fa-solid fa-chart-line"></i> {{ artikel.infographic_count }} &nbsp;
                            <i class="fa-solid fa-money-bill-1-wave"></i>&nbsp; {{ artikel.price ? artikel.price : '0' }} &nbsp;
                        </span>
                    </span>
                    <p class="short-text three">
                        <span v-html="artikel.summary"></span>
                    </p>
                </div>
                <div v-if="artikel.featured_image !== ''" class="col-12 col-sm-12 col-md-3 col-lg-3 images-wrapper">
                    <div class="images-box">
                        <div
                            class="image"
                            v-on:hover="imagesOnHover"
                            :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + artikel.featured_image }')`"
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="currentTabs === 'all'" class="mt-3 d-flex justify-content-center">
                <a href="javascript:void(0)" class="btn btn-second">Artikel lainnya</a>
            </div>
        </div>
    </div>
</template>

<script>
    // import LoadingScreen from '../addons/LoadingScreen.vue'

    export default {
        name: 'Artikel',
        // components: { LoadingScreen },
        props: [
            'dataArtikels', 'totalSearch', 'tabs'
        ],
        data (){
            return{
                linkBack: null,
                artikels: [],
                total_search: 0,
                currentTabs: null
            }
        },
        
        async beforeMount() {
            this.linkBack = window.location.search
            this.artikels = this.dataArtikels
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        async mounted() {
            this.linkBack = window.location.search
            this.artikels = this.dataArtikels
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        async updated() {
            this.artikels = this.dataArtikels
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        methods: {
            checkLogin: function(e) {
                if (!this.$store.state.Login.LoginStatus) {
                    e.preventDefault();
                    setTimeout(() => { 
                        this.$store.commit('setLoadingScreen', true)
                        this.$store.commit('setLoadingImage', 'failed');
                        this.$store.commit('setLoadingText', 'Anda belum login, silahkan login terlebih dahulu');
                        this.$store.commit('setCloseStatus', true);
                    }, 500)
                }
            },
        },
    }
</script>

<style>
    .artikels.content {
        display: flex !important;
    }

    .images-wrapper .images-box {
        width: 100%;
        height: 150px;
        position: relative;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    .images-wrapper .images-box .image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        background-color: #dedede;
    }

    .notif-total {
        font-size: 12px;
        color: red;
    }
</style>