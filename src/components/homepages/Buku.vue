<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">Buku</h2>
                    <h2 class="headtitle py-2">{{ bukus.title_section }}</h2>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                        <li
                            v-for="(tabBuku, i) in bukus.data" :key="i"
                            class="nav-item" role="presentation"
                        >
                            <a
                                :class="i === 0 ? 'nav-link active' : 'nav-link'"
                                :id="`buku-Tabs0${ i + 1 }`"
                                data-bs-toggle="tab"
                                :href="`#bukuTabs0${ i + 1 }`"
                                :aria-controls="`bukuTabs0${ i + 1 }`"
                                :aria-selected="i === 0 ? 'true' : 'false'"
                            >
                                {{ tabBuku.type_tab }}
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content komp-tab-content" id="komp-tab-content">
                        <div
                            v-for="(bukuData, i) in bukus.data" :key="i"
                            :class="i == 0 ? 'tab-pane fade show active' : 'tab-pane fade'"
                            :id="`bukuTabs0${ i + 1 }`"
                            role="tabpanel"
                            :aria-labelledby="`buku-Tabs0${ i + 1 }`"
                        >
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukuData.data" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.image_source"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.excerpt"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="buku" class="more-link">Buku Lainnya <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BukuCard from './BukuCard.vue'

    export default {
        name: 'Buku',

        // Components
        components: {
            BukuCard
        },

        // Component Props
        props: [ 'dataSet' ],

        // Component State
        data () {
            return {
                bukus: null,
            }
        },

        beforeMount() {
            this.bukus = this.dataSet
        },

        // Component Did Mounted
        mounted() {
            this.bukus = this.dataSet
        },

        // Component Did Update
        updated() {
            this.bukus = this.dataSet
        },

        methods: {
            // Changes Tab Data
            // ClickedTab(e) {
            //     let ElementTabs = document.querySelector(`#komp-tab-content #${ e.target.getAttribute("id") }`)
            //     let TabPane = document.querySelector("#komp-tab-content .tab-pane.show.active")
            //     TabPane.classList.remove("show"); TabPane.classList.remove("active")
            //     ElementTabs.classList.add("show"); ElementTabs.classList.add("active")
            // }
        },
    }
</script>