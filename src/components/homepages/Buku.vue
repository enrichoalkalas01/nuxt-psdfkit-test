<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">Buku</h2>
                    <h2 class="headtitle py-2">Referensi perpustakaan dan publikasi terbitan Kompas</h2>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                        <li v-for="(dataBuku, i) in bukus" :key="dataBuku.id" class="nav-item" role="presentation">
                            <a
                                :class="i == 0 ? 'nav-link active' : 'nav-link'"
                                :id="`buku-Tabs0${ i + 1 }`" data-bs-toggle="tab"
                                :href="`#bukuTabs0${ i + 1 }`"
                                :aria-controls="`bukuTabs0${ i }`"
                                :aria-selected="i == 0 ? 'true' : 'false'"
                                v-on:click="ClickedTab"
                            >{{ dataBuku.title }}</a>
                        </li>
                    </ul>
                    <div class="tab-content komp-tab-content" id="komp-tab-content">
                        <div 
                            v-for="(dataBuku, i) in bukus" :key="dataBuku.id"
                            :class="i == 0 ? 'tab-pane fade show active' : 'tab-pane fade'"
                            :id="`buku-Tabs0${ i + 1 }`"
                            role="tabpanel"
                            :aria-labelledby="`buku-Tabs0${ i + 1 }`"
                        >
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in dataBuku.books.book" :key="buku.id"
                                    v-bind:data="dataBuku"
                                    v-bind:dataId="buku.perpustakaanid"
                                    v-bind:dataImage="buku.src"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.lead"
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
        components: { BukuCard },

        // Component Props
        props: [ 'dataBukus', ],

        // Component State
        data () {
            return {
                bukus: null
            }
        },

        // Component Did Mounted
        mounted() { this.bukus = this.dataBukus },

        // Component Did Update
        updated() { this.bukus = this.dataBukus },

        methods: {
            // Changes Tab Data
            ClickedTab(e) {
                let ElementTabs = document.querySelector(`#komp-tab-content #${ e.target.getAttribute("id") }`)
                let TabPane = document.querySelector("#komp-tab-content .tab-pane.show.active")
                TabPane.classList.remove("show"); TabPane.classList.remove("active")
                ElementTabs.classList.add("show"); ElementTabs.classList.add("active")
            }
        },
    }
</script>