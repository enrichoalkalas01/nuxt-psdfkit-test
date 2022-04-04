<template>
    <div class="row pt-3 line-bot full">
        <Splide :options="SliderConfig">
            <SplideSlide
                v-for="(foto, i) in fotos" :key="i"
            >
                <div class="col-12 col-md-9 text-center">
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
                    focus: 'center',
                    perPage: 2,
                    pagination: false
                },
                fotos: null,
                total_search: 0
            }
        },

        async mounted() {
            console.log(this.dataFotos)
            this.fotos = this.dataFotos
            this.total_search = this.totalSearch
        },

        async updated() {
            console.log(this.dataFotos)
            this.fotos = this.dataFotos
            this.total_search = this.totalSearch
        },
    }
</script>