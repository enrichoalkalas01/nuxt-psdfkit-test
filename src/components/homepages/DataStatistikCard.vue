<template>
    <div class="row d-flex justify-content-center">
        <div
            v-for="(n, j) in (statistiks.length - (statistiks.length - 1))" :key="j"
            class="col-12 col-lg-6 my-2"
        >
            <div class="content borderless">
                <a :href="`/data-detail/${ statistiks[n - 1].document_id }`">
                    <img :src="statistiks[n - 1].image_source" alt="" class="foto-img">
                </a>
                <h3 class="title my-3">
                    <a :href="`/data-detail/${ statistiks[n - 1].document_id }`">
                        {{ statistiks[n - 1].title }}
                    </a>
                </h3>
                <span class="date-time">
                    <i class="fas fa-clock"></i>
                    {{ statistiks[n - 1].created_source }}, {{ statistiks[n - 1].created_date }}
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
                        <a :href="`/data-detail/${ statistiks[n].document_id }`">
                            <img :src="statistiks[n].image_source" alt="" class="foto-img">
                        </a>
                        <div class="desc">
                            <h3 class="title">
                                <a :href="`/data-detail/${statistiks[n].document_id}`">{{ statistiks[n].title }}</a>
                            </h3>
                            <span class="date-time">
                                <i class="fas fa-clock"></i>
                                {{ statistiks[n].created_source }}, {{ statistiks[n].created_date }}
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
                statistiks: null,
            }
        },
        beforeMount() {
            this.statistiks = this.dataStatistik
            // console.log(JSON.parse(JSON.stringify(this.statistiks)));
        },
        mounted() {
            this.statistiks = this.dataStatistik
            // console.log(JSON.parse(JSON.stringify(this.statistiks)));
        },
        updated() {
            this.statistiks = this.dataStatistik
            // console.log(JSON.parse(JSON.stringify(this.statistiks)));
        }
    }
</script>