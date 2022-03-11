<template>
    <div class="row py-3 line-bot full">
        <Splide :options="SliderConfig">
            <SplideSlide>
                <div class="col-12 col-md-9 text-center">
                    <div class=" row">
                        <div class="col-12 col-sm-4 my-3">
                            <a href="#">
                                <img src="assets/static/foto/foto1.JPG" class="img-square32 rounding" alt="">
                            </a>
                        </div>
                        <div class="col-12 col-sm-4 my-3">
                            <a href="#">
                                <img src="assets/static/foto/foto2.JPG" class="img-square32 rounding" alt="">
                            </a>
                        </div>
                        <div class="col-12 col-sm-4 my-3">
                            <a href="#">
                                <img src="assets/static/foto/foto3.JPG" class="img-square32 rounding" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
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
            'dataFotos',
        ],
        data() {
            return {
                SliderConfig: {
                    updateOnMove: true,
                    focus: 'center',
                    // perPage    : 3,
                },
                fotos: this.dataFotos,
            }
        }
    }
</script>