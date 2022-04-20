<template>
    <div class="row pt-3 line-bot full">
        <Splide :options="SliderConfig">
            <SplideSlide
                v-for="(foto, i) in fotos" :key="i"
            >
                <div class="box-image col-12 col-md-9 text-center">
                    <a :href="`/foto-detail/${ foto.document_id }`">
                        <img :src="`${ this.$store.state.Tools.GetUrlFiles + foto.preview }`" class="img-square32 rounding" alt="">
                    </a>
                </div>
            </SplideSlide>
        </Splide>
        <p class="f14 mt-4">
            Total Search : <span class="f14">{{ total_search }} data</span>
        </p>
    </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import '@splidejs/splide/dist/css/themes/splide-default.min.css'

    export default {
        name: 'Foto',
        components: {
            Splide,
            SplideSlide,
        },
        props: [
            'dataFotos', 'totalSearch'
        ],
        data() {
            return {
                SliderConfig: {
                    updateOnMove: true,
                    type: 'loop',
                    // focus: 'center',
                    rewind : true,
                    perPage: 3,
                    pagination: false
                },
                fotos: null,
                total_search: 0
            }
        },

        async mounted() {
            this.fotos = this.dataFotos
            this.total_search = this.totalSearch
        },

        async updated() {
            this.fotos = this.dataFotos
            this.total_search = this.totalSearch
        },
    }
</script>

<style>
    .splide__slide .box-image {
        margin: auto;
        width: 90%;
    }

    #splide01 .splide__arrow--next {
        right: -1em !important;
    }

    #splide01 .splide__arrow--prev {
        left: -1em !important;
    }
</style>