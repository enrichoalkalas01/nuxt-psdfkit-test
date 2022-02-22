<template>
    <div class="tab-pane fade" id="AllTabs03" role="tabpanel" aria-labelledby="All-Tabs03">
        <div class="row py-3">
            <div class="col-12 col-md-9 text-center">
                <div class="row">
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/hasil0.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/hasil1.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/hasil2.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto01.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto02.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto03.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto04.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto05.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto06.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto07.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto08.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto09.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto10.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto11.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                    <div class="col-12 col-sm-4 my-3">
                        <a href="foto-detail/1">
                            <img src="/assets/images/foto/hasil-foto12.png" class="img-square32 rounding" alt="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-3 my-3">
                <!-- Banner -->
                <Banner />

                <!-- Suggestion -->
                <Suggestion v-bind:dataSuggestions="suggestions" />
            </div>
        </div>
        <div class="row">
            <div class="col-12 my-3 text-center">
                <ul class="pagination cst-pagin d-flex justify-content-center">
                    <li class="page-item disabled"><a class="page-link" href="#">Sebelumnya</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Selanjutnya</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Foto',
        components: {
            Banner,
            Suggestion,
        },
        data () {
            return {
                suggestions: dataSuggestions,
            }
        }
    }
</script>