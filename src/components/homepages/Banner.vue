<template>
    <section class="sec-slide" id="slide">
        <div class="banner-slide">
            <Splide :options="SliderConfig">
                <SplideSlide v-for="banner in BannersData" :key="banner.id">
                    <div class="panel" :style="`background-image: url('${ banner.image_source }')`">
                        <div class="wrapper">
                            <div class="caption py-5 text-center">
                                <div class="badge">
                                    {{ banner.type_banner }}
                                </div>
                                <div class="  my-3">
                                    {{ this.$store.state.Tools.ChangeDateString(banner.date.substring(0, 10)) }}
                                </div>
                                <h1 class="heading">
                                    <a :href="banner.url">
                                    <!-- <a :href="'/artikel-detail/' + banner.id"> -->
                                        {{ banner.title }}
                                    </a>
                                </h1>
                            </div>
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
        name: 'Banner',
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
                    perPage: 1,
                    autoplay: true,
                    interval: 5000,
                    // updateOnMove: true,
                    focus: 'center'
                },
                BannersData: null,
            }
        },

        mounted() {
            this.BannersData = this.dataSet
        },

        updated() {
            this.BannersData = this.dataSet
        },
    }
</script>

<style>
    #slide {
        position: relative;
        margin-bottom: 2.5%;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
    }

    #slide .banner-slide {
        position: relative;
    }

    #slide .banner-slide .panel {
        width: 100%;
        height: 500px;
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    #slide .banner-slide .panel .wrapper {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
    }

    #slide .banner-slide .panel .caption {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        transform: translate(-50%, -50%);
    }

    #slide .banner-slide .panel .caption .badge {
        background-color: #ef7721;
        padding: 10px 15px;
    }

    #slide .banner-slide .panel .caption .my-3 {
        color: #fff;
    }

    #slide .banner-slide .panel .caption .heading {
        color: #fff !important;
    }

    #slide .banner-slide .panel .caption .heading a {
        color: inherit;
    }

    /* .button-slider {
        position: relative;
    } */

    .button-slider .btn-slider {
        width: 35px;
        height: 35px;
        background-color: rgba(255, 255, 255, 0.75);
        position: absolute;
        top: 50%;
        z-index: 99;
        border-radius: 50%;
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }

    .button-slider .btn-slider.left {
        left: 7.5%;
        background-image: url('/assets/images/chevron-left.svg')
    }

    .button-slider .btn-slider.right {
        right: 7.5%;
        background-image: url('/assets/images/chevron-right.svg')
    }
</style>