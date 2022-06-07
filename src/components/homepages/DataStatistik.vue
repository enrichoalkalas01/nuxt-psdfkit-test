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
                    <div class="tab-content" id="data-content">
                        <div
                            v-for="(statistik, i) in statistiks.data" :key="i"
                            :class="i === 0 ? 'tab-pane fade show active' : 'tab-pane fade'"
                            :id="`dataTabs0${ i + 1 }`"
                            role="tabpanel"
                            :aria-labelledby="`data-Tabs0${ i + 1 }`"
                        >
                            <DataStatistikCard v-bind:dataStatistik="statistik.data" />
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
    import DataStatistikCard from './DataStatistikCard.vue'

    export default {
        name: 'DataStatistik',

        components: {
            DataStatistikCard
        },

        props: [ 'dataSet' ],

        data() {
            return {
                statistiks: null,
            }
        },

        async beforeMount() {
            this.statistiks = this.dataSet
        },

        async mounted() {
            this.statistiks = this.dataSet
        },

        async updated() {
            this.statistiks = this.dataSet
        },

        watch: {
            $route(to) {
                let dataHash = to.hash
                if ( dataHash.includes('data-Tabs') ) {
                    if ( dataHash.includes('01') ) {
                        document.querySelector('#myTab2 .nav-item .nav-link.active').classList.remove('active')
                        document.querySelector('#dataTabs02').classList.remove('show')
                        document.querySelector('#dataTabs02').classList.remove('active')
                        document.querySelector(dataHash).classList.add('active')
                        document.querySelector(dataHash.replace('-','')).classList.add('show')
                        document.querySelector(dataHash.replace('-','')).classList.add('active')
                    } else {
                        document.querySelector('#myTab2 .nav-item .nav-link.active').classList.remove('active')
                        document.querySelector('#dataTabs01').classList.remove('show')
                        document.querySelector('#dataTabs01').classList.remove('active')
                        document.querySelector(dataHash).classList.add('active')
                        document.querySelector(dataHash.replace('-','')).classList.add('show')
                        document.querySelector(dataHash.replace('-','')).classList.add('active')
                    }
                } 
            }
        }
    }
</script>