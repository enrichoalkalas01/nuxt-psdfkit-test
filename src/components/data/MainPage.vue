<template>
    <section class="sec-artikel my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <MiniMenu />
                <div class="row py-3">
                    <div class="col-md-9">
                        <div class="tab-content komp-tab-content">
                            <div class="tab-pane fade show active" id="dataTabs01" role="tabpanel" aria-labelledby="data-Tabs01">
                                <Semua v-bind:dataProducts="products" />
                            </div>
                            <div class="tab-pane fade" id="dataTabs03" role="tabpanel" aria-labelledby="data-Tabs03">
                                <SurveiKompas v-bind:dataProducts="products" />
                            </div>
                            <div class="tab-pane fade" id="dataTabs04" role="tabpanel" aria-labelledby="data-Tabs04">
                                <Statistik v-bind:dataProducts="products" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <!-- Banner -->
                        <Banner />
                        
                        <!-- Suggestion -->
                        <Suggestion v-bind:dataSuggestions="suggestions" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MiniMenu from './MiniMenu.vue'
    import Semua from './Semua.vue'
    import SurveiKompas from './SurveiKompas.vue'
    import Statistik from './Statistik.vue'
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataProducts = [
        { id: 1, images: '/assets/images/image 27.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', miniDesc: 'Industri pariwisata ruang angkasa terus bergerak. Virgin Galactic, salah satu pemain di bisnis ini, akan melakukan penerbangan pada September'},
        { id: 2, images: '/assets/images/image 28.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', miniDesc: 'Industri pariwisata ruang angkasa terus bergerak. Virgin Galactic, salah satu pemain di bisnis ini, akan melakukan penerbangan pada September'},
        { id: 3, images: '/assets/images/image 29.png', title: 'Terdampak Pandemi Angka Kemiskinan Naik Lagi', miniDesc: 'Industri pariwisata ruang angkasa terus bergerak. Virgin Galactic, salah satu pemain di bisnis ini, akan melakukan penerbangan pada September'},
    ]

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'MainPage',
        components: {
            MiniMenu,
            Semua,
            SurveiKompas,
            Statistik,
            Banner,
            Suggestion,
        },
        data () {
            return {
                products: dataProducts,
                suggestions: dataSuggestions
            }
        }
    }
</script>