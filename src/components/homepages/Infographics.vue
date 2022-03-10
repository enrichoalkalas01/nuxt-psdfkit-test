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
            <Splide :options="SliderConfig">
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
                <SplideSlide>
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
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import '@splidejs/splide/dist/css/themes/splide-default.min.css'

    export default {
        name: 'Infographics',
        components: {
            Splide, SplideSlide
        },
        data() {
            return {
                SliderConfig: {
                    type: 'loop',
                    padding: '20%',
                    updateOnMove: true,
                    focus: 'center',
                    // perPage: 3
                },
                data: 0,
            }
        },
        
    }
</script>

<style>
    .infografik-slide .item {
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
    }

    .infografik-slide .splide__slide.is-active .item .item-inner {
        width: 90%;
    }

    .infografik-slide .splide__slide.is-next .item {
        justify-content: flex-start;
    }

    .infografik-slide .splide__slide.is-prev .item {
        justify-content: flex-end;
    }
</style>