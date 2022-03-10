<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="tag">INFOGRAFIK</h2>
                    <h2 class="headtitle py-2"> Koleksi data Kompas dalam bentuk visual grafis</h2>
                </div>

            </div>
        </div>
        
        <div class="infografik-slide">
            <!-- <Flicking 
                ref="flicking"
                :options="{ circular: true }"
                @move-end="onMoveEnd"
            >
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail/1">
                            <img src="/assets/static/infografik/info1.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">Prestasi Indonesia Di Ajang Olimpiade</h3>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 10 Juli 2021</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail/2">
                            <img src="/assets/static/infografik/info2.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">Pemain Terbaik Liga Indonesia</h3>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 4 November 2021</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail/3">
                            <img src="/assets/static/infografik/info3.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">Suaka Margasatwa Terkecil Berada di Jakarta</h3>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 16 November 2021</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail/4">
                            <img src="/assets/static/infografik/info4.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">Cakupan Vaksin Covid-19 Dosis 1 dan 2 di Indonesia</h3>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas Epaper, 18 November 2021</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail/5">
                            <img src="/assets/static/infografik/info5.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">Jumlah Kebutuhan Pejabat Kepada Daerah Tahun 2022-2023</h3>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas Epaper, 18 November 2021</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail/6">
                            <img src="/assets/static/infografik/info6.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">Komposisi Konsumsi BBM di Indonesia</h3>
                                <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 26 November 2021</span>
                            </div>
                        </a>
                    </div>
                </div>
            </Flicking>
            <div class="button-slider">
                <div v-on:click="prevClick" class="btn-slider left"></div>
                <div v-on:click="nextClick" class="btn-slider right"></div>
            </div> -->
            
            <carousel
                @next="next"
                @prev="prev"
            >
                <slide
                    :visibleSlide="visibleSlide"
                    :direction="direction"
                >
                    <div class="item">
                        <div class="item-inner">
                            <a href="infografik-detail/1">
                                <img src="/assets/static/infografik/info1.jpg" alt="">
                                <div class="caption">
                                    <h3 class="subtitle">Prestasi Indonesia Di Ajang Olimpiade</h3>
                                    <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 10 Juli 2021</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </section>
</template>

<script>
    // import Flicking from "@egjs/vue3-flicking";
    // import "@egjs/vue3-flicking/dist/flicking.css";
    // import "@egjs/vue3-flicking/dist/flicking-inline.css";
    import Carousel from '../carousel/Carousel.vue'
    import Slide from '../carousel/Slide.vue'

    export default {
        name: 'Infographics',
        components: { 
            // Flicking,
            Carousel,
            Slide,
        },
        data() {
            return {
                data: 0
            }
        },
        // methods: {
        //     prevClick() {
        //         this.$refs.flicking.prev()
        //     },

        //     nextClick() {
        //         this.$refs.flicking.next()
        //     }
        // }
        
    }
</script>