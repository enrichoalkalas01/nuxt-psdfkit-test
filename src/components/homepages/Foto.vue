<template>
    <section class="sec-artikel line-bot py-5">

        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 text-center mb-3">
                    <h2 class="tag">foto</h2>
                    <h2 class="headtitle py-2">{{ fotos.title_section }}</h2>
                </div>
                <div class="row my-3">
                    <FotoCard
                        v-for="foto in fotos.data" :key="foto.id"
                        v-bind:data="foto"
                        v-bind:dataId="foto.id"
                        v-bind:dataImage="foto.image_source"
                        v-bind:dataTitle="foto.title"
                        v-bind:dataSource="foto.created_source"
                        v-bind:dataDate="foto.created_date"
                    />
                </div>
                <div class="col-12 mt-4 text-center text-md-end">
                    <a href="arsip#AllTabs03" class="more-link">Foto Lainnya <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FotoCard from './FotoCard.vue'

    export default {
        name: 'Foto',
        components: {
            FotoCard
        },
        props: [
            'dataSet',
        ],
        data () {
            return {
                fotos: null
            }
        },
        beforeMount() {
            this.fotos = this.dataSet
        },
        mounted() {
            this.fotos = this.dataSet
        },
        updated() {
            this.fotos = this.dataSet
        },
    }
</script>