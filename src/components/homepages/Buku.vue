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
                                v-if="i < 3"
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
                            <div class="buku-card" v-if="bukuData.type_tab === 'Topik Hangat'">
                                <BukuCard 
                                    v-for="buku in bukuData.data" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.document_id"
                                    v-bind:dataImage="buku.image_source"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.excerpt"
                                />
                            </div>

                            <div class="buku-card" v-if="bukuData.type_tab === 'Penerbit Buku Kompas'">
                                <BukuCard
                                    v-for="pbk in dataBukuPBK" :key="pbk.id"
                                    v-bind:data="pbk"
                                    v-bind:dataId="pbk.product_id"
                                    v-bind:dataImage="pbk.cover"
                                    v-bind:dataTitle="pbk.title"
                                    v-bind:dataDesc="pbk.description"
                                    v-bind:dataUrl="pbk.url"
                                />
                            </div>

                            <div class="buku-card" v-if="bukuData.type_tab === 'Perpustakaan'">
                                <BukuCard
                                    v-for="perpus in dataBukuPerpustakaan" :key="perpus.id"
                                    v-bind:data="perpus"
                                    v-bind:dataId="perpus.id"
                                    v-bind:dataImage="`${ this.$store.state.Tools.GetUrlFile + perpus.cover }`"
                                    v-bind:dataTitle="perpus.judul"
                                    v-bind:dataDesc="perpus.sinopsis"
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
    import Axios from 'axios'
    import BukuCard from './BukuCard.vue'

    export default {
        name: 'Buku',

        components: {
            BukuCard
        },

        props: [ 'dataSet' ],

        data () {
            return {
                bukus: null,
                dataBukuPBK: [],
                dataBukuPerpustakaan: [],
            }
        },

        async beforeMount() {
            try {
                this.bukus = this.dataSet
                let dataPBK = await Axios('https://dev-be.kompasdata.id/api/Books/mainpage/geraipbk')
                this.dataBukuPBK = dataPBK.data
                
                let dataPerpustakaan = await Axios('https://dev-be.kompasdata.id/api/Books/mainpage/perpus?count=3&range=-1&random=true')
                this.dataBukuPerpustakaan = dataPerpustakaan.data
            } catch (error) {
                console.log(error)
            }
        },

        mounted() {
            this.bukus = this.dataSet
        },

        updated() {
            this.bukus = this.dataSet
        },

        watch: {
            $route(to) {
                let dataHash = to.hash
                if ( dataHash.includes('buku-Tabs') ) {
                    document.querySelector('#myTab .nav-item .nav-link.active').classList.remove('active')
                    document.querySelector('#komp-tab-content .tab-pane').classList.remove('show')
                    document.querySelector('#komp-tab-content .tab-pane').classList.remove('active')
                    document.querySelector(dataHash).classList.add('active')
                    document.querySelector(dataHash.replace('-','')).classList.add('show')
                    document.querySelector(dataHash.replace('-','')).classList.add('active')
                } 
            }
        },

        methods: {
            // Changes Tab Data
            // ClickedTab(e) {
            //     let ElementTabs = document.querySelector(`#komp-tab-content #${ e.target.getAttribute("id") }`)
            //     let TabPane = document.querySelector("#komp-tab-content .tab-pane.show.active")
            //     TabPane.classList.remove("show"); TabPane.classList.remove("active")
            //     ElementTabs.classList.add("show"); ElementTabs.classList.add("active")
            // }
        }
    }
</script>