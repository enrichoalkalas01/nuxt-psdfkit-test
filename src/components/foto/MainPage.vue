<template>
    <div class="row py-3">
        <div class="col-12 col-md-9 text-center">
            <div class="row">
                <CardFoto 
                    v-for="foto in fotos" :key="foto.id"
                    v-bind:data="foto"
                    v-bind:dataId="foto.id"
                    v-bind:dataImage="foto.images"
                />
            </div>
        </div>
        <div class="col-12 col-md-3 my-3">
            <!-- Banner -->
            <Banner />

            <!-- Suggestion -->
            <Suggestion v-bind:dataSuggestions="suggestions" />
        </div>
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
</template>

<script>
    import CardFoto from './CardFoto.vue'
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'MainPage',
        components: {
            CardFoto,
            Banner,
            Suggestion,
        },
        props: [
            'dataFotos'
        ],
        data () {
            return {
                fotos: this.dataFotos,
                suggestions: dataSuggestions,
            }
        }
    }
</script>