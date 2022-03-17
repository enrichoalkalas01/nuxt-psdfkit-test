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
                <SplideSlide v-for="infografik in infografiks.data" :key="infografik.id">
                    <div class="item">
                        <div class="item-inner">
                            <a :href="'infografik-detail/' + infografik.id">
                                <img :src="infografik.image_source" alt="">
                                <div class="caption">
                                    <h3 class="subtitle">{{ infografik.title }}</h3>
                                    <span class="date-time"> <i class="fas fa-clock"></i>{{ infografik.created_source }}, {{ infografik.created_date }}</span>
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
            Splide,
            SplideSlide,
        },
        props: [
            'dataSet'
        ],
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
                infografiks: null,
            }
        },
        beforeMount() {
            this.infografiks = this.dataSet
            console.log(JSON.parse(JSON.stringify(this.dataSet)))
        },
        mounted() {
            this.infografiks = this.dataSet
        },
        updated() {
            this.infografiks = this.dataSet
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
        width: 100%;
    }

    .infografik-slide .splide__slide.is-next .item {
        justify-content: flex-start;
        width: 80%;
        margin-left: 0;
    }

    .infografik-slide .splide__slide.is-prev .item {
        justify-content: flex-end;
        width: 80%;
        margin-right: 0;
    }
</style>