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
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="buku-Tabs01" data-bs-toggle="tab" href="#bukuTabs01" aria-controls="bukuTabs01" aria-selected="true">Topik Hangat</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs02" data-bs-toggle="tab" href="#bukuTabs02" aria-controls="bukuTabs02" aria-selected="false">Penerbit Buku Kompas</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs03" data-bs-toggle="tab" href="#bukuTabs03" aria-controls="bukuTabs03" aria-selected="false">Perpustakaan</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs04" data-bs-toggle="tab" href="#bukuTabs04" aria-controls="bukuTabs04" aria-selected="false">Buku Elektronik</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs05" data-bs-toggle="tab" href="#bukuTabs05" aria-controls="bukuTabs05" aria-selected="false">Laporan</a>
                        </li>
                    </ul>
                    <div class="tab-content komp-tab-content" id="komp-tab-content">
                        <div
                            v-for="(tabBuku, i) in tabBukus" :key="i"
                            :class="i == 0 ? 'tab-pane fade show active' : 'tab-pane fade'"
                            :id="`bukuTabs0${ i + 1 }`"
                            role="tabpanel"
                            :aria-labelledby="`buku-Tabs0${ i + 1 }`"
                        >
                            <div class="buku-card">
                                <BukuCard 
                                    v-for="buku in bukus" :key="buku.id"
                                    v-bind:data="buku"
                                    v-bind:dataId="buku.id"
                                    v-bind:dataImage="buku.images"
                                    v-bind:dataTitle="buku.title"
                                    v-bind:dataDesc="buku.desc"
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
        props: [ 'dataBukus', ],

        // Component State
        data () {
            return {
                bukus: null,
                tabBukus: [1,2,3,4,5],
            }
        },

        // Component Did Mounted
        mounted() {
            this.bukus = this.dataBukus
        },

        // Component Did Update
        updated() {
            this.bukus = this.dataBukus
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

<!-- <div 
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
</div> -->
<!-- <li v-for="(dataBuku, i) in bukus" :key="dataBuku.id" class="nav-item" role="presentation">
    <a
        :class="i == 0 ? 'nav-link active' : 'nav-link'"
        :id="`buku-Tabs0${ i + 1 }`" data-bs-toggle="tab"
        :href="`#bukuTabs0${ i + 1 }`"
        :aria-controls="`bukuTabs0${ i }`"
        :aria-selected="i == 0 ? 'true' : 'false'"
        v-on:click="ClickedTab"
    >{{ dataBuku.title }}</a>
</li> -->