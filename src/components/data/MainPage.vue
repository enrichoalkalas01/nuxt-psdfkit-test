<template>
    <section class="sec-artikel">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <MiniMenu />
                <div class="row py-3">
                    <div class="col-md-9">
                        <div class="tab-content komp-tab-content">
                            <div class="tab-pane fade show active" id="dataTabs01" role="tabpanel" aria-labelledby="data-Tabs01">
                                <Semua v-bind:dataProducts="products" />
                            </div>
                            <div class="tab-pane fade" id="dataTabs02" role="tabpanel" aria-labelledby="data-Tabs02">
                                <Polling v-bind:dataProducts="products" />
                            </div>
                            <div class="tab-pane fade" id="dataTabs03" role="tabpanel" aria-labelledby="data-Tabs03">
                                <Survey v-bind:dataProducts="products" />
                            </div>
                            <div class="tab-pane fade" id="dataTabs04" role="tabpanel" aria-labelledby="data-Tabs04">
                                <Statistik v-bind:dataProducts="products" />
                            </div>
                            <div class="tab-pane fade" id="dataTabs05" role="tabpanel" aria-labelledby="data-Tabs05">
                                <Pencarian v-bind:dataProducts="products" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <Banner />
                        <div class="title-content">
                            <p>Suggestion</p>
                        </div>
                        <Suggestion />
                        <Suggestion />
                        <Suggestion />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    import Polling from './Polling.vue'
    import Survey from './Survey.vue'
    import Statistik from './Statistik.vue'
    import Pencarian from './Pencarian.vue'
    import Banner from './Banner.vue'
    import Suggestion from './Suggestion.vue'

    let dataProducts = [
        { id: 1, images: '/assets/images/image 27.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', miniDesc: 'Industri pariwisata ruang angkasa terus bergerak. Virgin Galactic, salah satu pemain di bisnis ini, akan melakukan penerbangan pada September'},
        { id: 2, images: '/assets/images/image 28.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', miniDesc: 'Industri pariwisata ruang angkasa terus bergerak. Virgin Galactic, salah satu pemain di bisnis ini, akan melakukan penerbangan pada September'},
        { id: 3, images: '/assets/images/image 29.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', miniDesc: 'Industri pariwisata ruang angkasa terus bergerak. Virgin Galactic, salah satu pemain di bisnis ini, akan melakukan penerbangan pada September'},
    ]

    export default {
        name: 'MainPage',
        components: {
            MiniMenu,
            Semua,
            Polling,
            Survey,
            Statistik,
            Pencarian,
            Banner,
            Suggestion,
        },
        data () {
            return {
                products: dataProducts
            }
        }
    }
</script>