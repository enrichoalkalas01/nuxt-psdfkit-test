<template>
    <section class="sec-slide" id="slide">
        <div class="banner-slide">
            <Carousel>
                <Slide v-for="banner in banners" :key="banner.id">
                    <div class="panel" :style="'background-image: url('+ banner.images +')'">
                        <div class="wrapper">
                            <div class="caption py-5 text-center">
                                <div class="badge">
                                    ARSIP ARTIKEL
                                </div>
                                <div class="  my-3">
                                    {{ banner.date }}
                                </div>
                                <h1 class="heading">
                                    <a :href="'/artikel-detail/' + banner.id">
                                        {{ banner.title }}
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>
    </section>
</template>

<script>
    import Carousel from '../carousel2/Carousel.vue'
    import Slide from '../carousel2/Slide.vue'

    let dataBanner = [
        {
            id: 1,
            title: 'Rimbunnya Anggur di Kota Tangsel',
            date: 'JANUARI 14, 2022',
            images: '/assets/static/banner/banner1.jpg',
        },
        {
            id: 2,
            title: 'Terpikat Raja Ampat',
            date: 'JANUARI 15, 2022',
            images: '/assets/static/banner/banner2.jpg',
        },
        {
            id: 3,
            title: 'Kompetensi, Wajah Kemerdekaan Pers',
            date: 'JANUARI 17, 2022',
            images: '/assets/static/banner/banner3.jpg',
        },
        {
            id: 4,
            title: 'Obat Covid-19 Siap Diproduksi di Dalam Negeri',
            date: 'JANUARI 15, 2022',
            images: '/assets/static/banner/banner4.jpg',
        },
        {
            id: 5,
            title: 'Sesajen Semeru dan Beda Pemaknaan Manusia',
            date: 'JANUARI 15, 2022', 
            images: '/assets/static/banner/banner5.jpg',
        },
    ]

    export default {
        name: 'TestCarousel',
        components: {
            Carousel,
            Slide,
        },
        data() {
            return {
                banners: dataBanner,
            }
        }
    }
</script>

<style>
    #slide {
        position: relative;
        margin-bottom: 2.5%;
        /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); */
    }

    #slide .banner-slide {
        position: relative;
    }

    #slide .banner-slide .panel {
        width: 100%;
        height: 500px;
        position: relative;
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
</style>