<template>
    <div class="tab-pane fade" id="AllTabs04" role="tabpanel" aria-labelledby="All-Tabs04">
        <div class="row mt-3">
            <div class="col-12 col-md-9">
                <InfografikCard 
                    v-for="infografik in infografiks" :key="infografik.id"
                    v-bind:data="infografik"
                    v-bind:dataId="infografik.id"
                    v-bind:dataImage="infografik.images"
                    v-bind:dataTitle="infografik.title"
                    v-bind:dataDesc="infografik.desc"
                />
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
    </div>
</template>

<script>
    import InfografikCard from './InfografikCard.vue'
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Infografik',
        components: {
            InfografikCard,
            Banner,
            Suggestion,
        },
        props: [
            'dataInfografiks'
        ],
        data () {
            return {
                infografiks: this.dataInfografiks,
                suggestions: dataSuggestions,
            }
        }
    }
</script>