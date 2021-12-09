<template>
    <section class="sec-slide" id="slide">
        <div class="banner-slide">
            
            <div class="item">
                <a href="artikel-detail.html" class="headline">
                    <img src="/assets/images/slide01.jpg" alt="">
                </a>
                <div class="caption py-5 text-center">
                    <div class="badge">
                        ARSIP ARTIKEL
                    </div>
                    <div class="  my-3">
                        JULI 10, 2021
                    </div>
                    <h1 class="heading">
                        <a href="artikel-detail.html">
                        Situs Pendaftaran CPNS 2021 Sempat Down, Ini Penjelasan BKN</a>
                    </h1>

                </div>
            </div>
            <div class="item">
                <a href="artikel-detail.html" class="headline">
                    <img src="/assets/images/slide02.jpg" alt="">
                </a>
                <div class="caption py-5 text-center">
                    <div class="badge">
                        ARSIP ARTIKEL
                    </div>
                    <div class="  my-3">
                        JULI 10, 2021
                    </div>
                    <h1 class="heading">
                        <a href="artikel-detail.html">
                        Situs Pendaftaran CPNS 2021 Sempat Down, Ini Penjelasan BKN</a>
                    </h1>

                </div>
            </div>
            <div class="item">
                <a href="artikel-detail.html" class="headline">
                    <img src="/assets/images/slide03.jpg" alt="">
                </a>
                <div class="caption py-5 text-center">
                    <div class="badge">
                        ARSIP ARTIKEL
                    </div>
                    <div class="  my-3">
                        JULI 10, 2021
                    </div>
                    <h1 class="heading">
                        <a href="artikel-detail.html">
                        Situs Pendaftaran CPNS 2021 Sempat Down, Ini Penjelasan BKN</a>
                    </h1>
                </div>
            </div>
            <div class="carousel-wrapper">
                <Carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="false">
                    <Slide>
                    Slide 1 Content
                    </Slide>
                    <Slide>
                    Slide 2 Content
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    
    export default {
        name: 'Tester',
        components: { Carousel, Slide },
        data() {
            return {
                Test:true
            }
        }
    }
</script>

<style>

</style>
