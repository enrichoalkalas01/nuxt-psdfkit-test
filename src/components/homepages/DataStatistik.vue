<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">Data</h2>
                    <h2 class="headtitle py-2">{{ statistiks.title_section }}</h2>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs" id="myTab2" role="tablist">
                        <li
                            v-for="(statistik, i) in statistiks.data" :key="i"
                            class="nav-item" role="presentation"
                        >
                            <a
                                :class="i === 0 ? 'nav-link active' : 'nav-link'"
                                :id="`data-Tabs0${ i + 1 }`"
                                data-bs-toggle="tab"
                                :href="`#dataTabs0${ i + 1 }`"
                                :aria-controls="`dataTabs0${ i + 1 }`"
                                :aria-selected="i === 0 ? 'true' : 'false'"
                            >{{ statistik.type_tab }}</a>
                        </li>
                    </ul>
                </div>
                <div class="row py-3">
                    <div class="tab-content">
                        <div
                            v-for="(statistik, i) in statistiks.data" :key="i"
                            :class="i === 0 ? 'tab-pane fade show active' : 'tab-pane fade'"
                            :id="`dataTabs0${ i + 1 }`"
                            role="tabpanel"
                            :aria-labelledby="`data-Tabs0${ i + 1 }`"
                        >
                            <div class="row d-flex justify-content-center">
                                <div
                                    v-for="(n, j) in (statistik.data.length - (statistik.data.length - 1))" :key="j"
                                    class="col-12 col-lg-6 my-2"
                                >
                                    <div class="content borderless">
                                        <a :href="`data-detail/${ statistik.data[n - 1].id }`">
                                            <img :src="statistik.data[n - 1].image_source" alt="" class="foto-img">
                                        </a>
                                        <h3 class="title my-3">
                                            <a :href="`data-detail/${ statistik.data[n - 1].id }`">
                                                {{ statistik.data[n - 1].title }}
                                            </a>
                                        </h3>
                                        <span class="date-time">
                                            <i class="fas fa-clock"></i>
                                            {{ statistik.data[n - 1].created_source }}, {{ statistik.data[n - 1].created_date }}
                                        </span>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="row">
                                        <div
                                            v-for="(n, j) in statistik.data.length - 1" :key="j"
                                            class="col-12 pt-2 pb-3"
                                        >
                                            <div class="content full-height borderless kolom2 bot-line mb-3">
                                                <a :href="`data-detail/${ statistik.data[n].id }`">
                                                    <img :src="statistik.data[n].image_source" alt="" class="foto-img">
                                                </a>
                                                <div class="desc">
                                                    <h3 class="title">
                                                        <a href="data-detail/1">{{ statistik.data[n].title }}</a>
                                                    </h3>
                                                    <span class="date-time">
                                                        <i class="fas fa-clock"></i>
                                                        {{ statistik.data[n].created_source }}, {{ statistik.data[n].created_date }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="data.html" class="more-link">Data Lainnya <i class="fas fa-chevron-right"></i></a>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DataStatistik',
    props: [ 'dataSet' ],
    data() {
        return {
            statistiks: null
        }
    },
    beforeMount() {
        this.statistiks = this.dataSet
    },
    mounted() {
        this.statistiks = this.dataSet
    },
    updated() {
        this.statistiks = this.dataSet
    },
}
</script>