<template>
    <div class="row d-flex justify-content-center">
        <div 
            v-for="(statistik, i) in statistiks.slice(0,1)" :key="i+1"
            class="col-12 col-lg-6 my-2"
        >
            <div class="content borderless">
                <a v-if="statistik.thumbnail" :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }`">
                    <img :src="this.$store.state.Tools.GetUrlFileAsset + statistik.thumbnail" alt="" class="foto-img">
                </a>
                <h3 class="title my-3">
                    <a :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }`">
                        {{ statistik.title }}
                    </a>
                </h3>
                <span class="date-time">
                    <i class="fas fa-clock"></i>
                    {{ statistik.credit }}, {{ this.$store.state.Tools.ChangeDateString(statistik.published_date.substring(0, 10)) }}
                </span>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="row">
                <div 
                    v-for="(statistik, i) in statistiks.slice(1,4)" :key="i+2"
                    class="col-12 pt-2 pb-3"
                >
                    <div class="content full-height borderless kolom2 bot-line mb-3">
                        <a v-if="statistik.thumbnail" :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }`">
                            <img :src="this.$store.state.Tools.GetUrlFileAsset + statistik.thumbnail" alt="" class="foto-img">
                        </a>
                        <div class="desc">
                            <h3 class="title">
                                <a :href="`/data-detail/${ statistik.collection }/${ statistik.document_id }`">
                                    {{ statistik.title }}
                                </a>
                            </h3>
                            <span class="date-time">
                                <i class="fas fa-clock"></i>
                                {{ statistik.credit }}, {{ this.$store.state.Tools.ChangeDateString(statistik.published_date.substring(0, 10)) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataStatistikCard',
        props: [
            'dataStatistik'
        ],
        data() {
            return {
                statistiks: [],
            }
        },
        beforeMount() {
            this.statistiks = this.dataStatistik
        },
        mounted() {
            this.statistiks = this.dataStatistik
        },

        beforeUpdate() {
            this.statistiks = this.dataStatistik
        },

        updated() {
            this.statistiks = this.dataStatistik
        }
    }
</script>