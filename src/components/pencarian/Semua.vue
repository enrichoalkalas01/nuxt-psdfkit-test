<template>
    <div class="row">
        <!-- <div class="col-12 col-md-9"> -->
        <div class="col-12 col-md-12">
            <!-- Foto -->
            <div v-if="total_search_foto > 0">
                <Foto
                    v-bind:dataFotos="fotos"
                    v-bind:totalSearch="total_search_foto"
                />
            </div>
            
            <!-- Artikel -->
            <div v-if="total_search_artikel > 0">
                <Artikel
                    v-bind:dataArtikels="artikels"
                    v-bind:totalSearch="total_search_artikel"
                />
            </div>

            <!-- Infografik -->
            <div v-if="total_search_infografik > 0">
                <Infografik
                    v-bind:dataInfografiks="infografiks"
                    v-bind:totalSearch="total_search_infografik"
                />
            </div>

            <!-- Buku -->
            
            <!-- Data -->
            
        </div>
        <div class="col-12 col-md-3 my-3">
            <!-- Banner -->
            <!-- <Banner /> -->

            <!-- Suggestion -->
            <!-- <Suggestion v-bind:dataSuggestions="suggestions" /> -->
        </div>
    </div>
</template>

<script>
    import Foto from './Foto.vue'
    import Artikel from './Artikel.vue'
    import Infografik from './Infografik.vue'
    // import Banner from '../banner/Main.vue'
    // import Suggestion from '../suggestion/Main.vue'

    // let dataSuggestions = [
    //     { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    //     { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    //     { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    // ]
    
    export default {
        name: 'Semua',
        components: {
            Foto,
            Artikel,
            Infografik,
            // Banner,
            // Suggestion,
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
                total_search_foto: 0,
                total_search_artikel: 0,
                total_search_infografik: 0,
                // suggestions: dataSuggestions,
            }
        },
        async mounted() {
            // this.fotos = this.dataFotos
        },

        async beforeUpdate() {
            this.fotos = this.dataFotos.documents
            this.artikels = this.dataArtikels.documents
            this.infografiks = this.dataInfografiks.documents

            this.total_search_foto = this.dataFotos ? this.dataFotos.total : 0
            this.total_search_artikel = this.dataArtikels ? this.dataArtikels.total : 0
            this.total_search_infografik = this.dataInfografiks ? this.dataInfografiks.total : 0
            console.log(this.total_search_infografik)
        },

        async updated() {
            this.fotos = this.dataFotos.documents
            this.artikels = this.dataArtikels.documents
            this.infografiks = this.dataInfografiks.documents

            this.total_search_foto = this.dataFotos ? this.dataFotos.total : 0
            this.total_search_artikel = this.dataArtikels ? this.dataArtikels.total : 0
            this.total_search_infografik = this.dataInfografiks ? this.dataInfografiks.total : 0
            console.log(this.total_search_infografik)
        },
    }
</script>