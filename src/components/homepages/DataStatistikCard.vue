<template>
    <div class="row d-flex justify-content-center">
        <div
            v-for="(n, j) in (statistiks.length - (statistiks.length - 1))" :key="j"
            class="col-12 col-lg-6 my-2"
        >
            <div class="content borderless">
                <a :href="`/data-detail/${ statistiks[n - 1] ? statistiks[n - 1].collection : '' }/${ statistiks[n - 1] ? statistiks[n - 1].document_id : '' }`">
                    <img :src="statistiks[n - 1] ? statistiks[n - 1].image_source : ''" alt="" class="foto-img">
                </a>
                <h3 class="title my-3">
                    <a :href="`/data-detail/${ statistiks[n - 1] ? statistiks[n - 1].collection : '' }/${ statistiks[n - 1] ? statistiks[n - 1].document_id : '' }`">
                        {{ statistiks[n - 1] ? statistiks[n - 1].title : '' }}
                    </a>
                </h3>
                <span class="date-time">
                    <i class="fas fa-clock"></i>
                    {{ statistiks[n - 1] ? statistiks[n - 1].created_source : '' }}, {{ statistiks[n - 1] ? this.$store.state.Tools.ChangeDateString(statistiks[n - 1].created_date.substring(0, 10)) : '' }}
                </span>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="row">
                <div
                    v-for="(n, j) in statistiks.length - 1" :key="j"
                    class="col-12 pt-2 pb-3"
                >
                    <div class="content full-height borderless kolom2 bot-line mb-3">
                        <a :href="`/data-detail/${ statistiks[n] ? statistiks[n].collection : '' }/${ statistiks[n] ? statistiks[n].document_id : '' }`">
                            <img :src=" statistiks[n] ? statistiks[n].image_source : ''" alt="" class="foto-img">
                        </a>
                        <div class="desc">
                            <h3 class="title">
                                <a :href="`/data-detail/${ statistiks[n] ? statistiks[n].collection : '' }/${statistiks[n] ? statistiks[n].document_id : ''}`">{{ statistiks[n].title }}</a>
                            </h3>
                            <span class="date-time">
                                <i class="fas fa-clock"></i>
                                {{ statistiks[n] ? statistiks[n].created_source : '' }}, {{ statistiks[n] ? this.$store.state.Tools.ChangeDateString(statistiks[n].created_date.substring(0, 10)) : '' }}
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