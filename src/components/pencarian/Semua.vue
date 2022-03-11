<template>
    <div class="row">
        <div class="col-12 col-md-9">
            <!-- Foto -->
            <Foto v-bind:dataFotos="fotos" />
            
            <!-- Artikel -->
            <Artikel v-bind:dataArtikels="artikels" />

            <!-- Infografik -->
            <Infografik v-bind:dataInfografiks="infografiks" />

            <!-- Buku -->
            
            <!-- Data -->
            
        </div>
        <div class="col-12 col-md-3 my-3">
            <!-- Banner -->
            <Banner />

            <!-- Suggestion -->
            <Suggestion v-bind:dataSuggestions="suggestions" />
        </div>
    </div>
</template>

<script>
    import Foto from './Foto.vue'
    import Artikel from './Artikel.vue'
    import Infografik from './Infografik.vue'
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]
    
    export default {
        name: 'Semua',
        components: {
            Foto,
            Artikel,
            Infografik,
            Banner,
            Suggestion,
        },
        props: [
            'dataFotos',
            'dataArtikels',
            'dataInfografiks',
        ],
        data () {
            return {
                fotos: this.dataFotos,
                artikels: this.dataArtikels,
                infografiks: this.dataInfografiks,
                suggestions: dataSuggestions,
            }
        }
    }
</script>