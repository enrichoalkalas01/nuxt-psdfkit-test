<template>
    <section class="sec-slide" id="slide">
        <div class="banner-slide">
            <!-- <Flicking 
                ref="flicking"
                :options="{ align: 'prev', circular: true }"
                @move-end="onMoveEnd"
            > -->
            <Flicking 
                ref="flicking"
                :options="{ align: 'prev', circular: true }"
            >
                <div v-for="banner in Banners" :key="banner.id" class="panel" :style="'background-image: url('+ banner.images +')'">
                    <div class="wrapper">
                        <div class="caption py-5 text-center">
                            <div class="badge">
                                ARSIP ARTIKEL
                            </div>
                            <div class="my-3">
                                {{ banner.date }}
                            </div>
                            <h1 class="heading">
                                <a href="/artikel-detail/1">
                                    {{ banner.title }}
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="panel" style="background-image: url('/assets/static/banner/banner4.jpg')">
                    <div class="wrapper">
                        <div class="caption py-5 text-center">
                            <div class="badge">
                                ARSIP ARTIKEL
                            </div>
                            <div class="  my-3">
                                JANUARI 15, 2022
                            </div>
                            <h1 class="heading">
                                <a href="/artikel-detail/1">
                                    Obat Covid-19 Siap Diproduksi di Dalam Negeri
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="panel" style="background-image: url('/assets/static/banner/banner5.jpg')">
                    <div class="wrapper">
                        <div class="caption py-5 text-center">
                            <div class="badge">
                                ARSIP ARTIKEL
                            </div>
                            <div class="  my-3">
                                JANUARI 17, 2022
                            </div>
                            <h1 class="heading">
                                <a href="/artikel-detail/1">
                                    Sesajen Semeru dan Beda Pemaknaan Manusia
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </Flicking>
            <div class="button-slider">
                <div v-on:click="prevClick" class="btn-slider left"></div>
                <div v-on:click="nextClick" class="btn-slider right"></div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                Kompasdata melayani kunjungan setiap hari Senin-Jumat, pukul 09.00-14.00 WIB, melalui reservasi email
                kompasdata@kompas.id
            </div>
        </div>
    </section>
</template>

<script>
    import Flicking from "@egjs/vue3-flicking";
    import "@egjs/vue3-flicking/dist/flicking.css";
    import "@egjs/vue3-flicking/dist/flicking-inline.css";
    
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
            // {
            //     id: 4,
            //     title: 'Obat Covid-19 Siap Diproduksi di Dalam Negeri',
            //     date: 'JANUARI 15, 2022',
            //     images: '/assets/static/banner/banner4.jpg',
            // },
            // {
            //     id: 5,
            //     title: 'Sesajen Semeru dan Beda Pemaknaan Manusia',
            //     date: 'JANUARI 15, 2022', 
            //     images: '/assets/static/banner/banner5.jpg',
            // },
    ]

    export default {
        name: 'Banner',
        components: { Flicking },
        data() {
            return {
                value: 0,
                Banners: dataBanner
            }
        },

        methods: {
            prevClick() {
                this.$refs.flicking.prev()
            },

            nextClick() {
                this.$refs.flicking.next()
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