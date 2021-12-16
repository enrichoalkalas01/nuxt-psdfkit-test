<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="tag">INFOGRAFIK</h2>
                    <h2 class="headtitle py-2"> Koleksi data Kompas dalam bentuk visual grafis. </h2>
                </div>

            </div>
        </div>
        
        <div class="infografik-slide">
            <Flicking 
                ref="flicking"
                :options="{ circular: true }"
                @move-end="onMoveEnd"
            >
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail.html">
                            <img src="/assets/images/ig-slide01.jpg" alt="">
                            <div class="caption">

                                <h3 class="subtitle">100 Tahun Bung Karno</h3>
                                <p>Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai
                                    dan mengisi kemerdekaan.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail.html">
                            <img src="/assets/images/ig-slide02.jpg" alt="">
                            <div class="caption">

                                <h3 class="subtitle">100 Tahun Bung Karno</h3>
                                <p>Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai
                                    dan mengisi kemerdekaan.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail.html">
                            <img src="/assets/images/ig-slide03.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">100 Tahun Bung Karno</h3>
                                <p>Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai
                                    dan mengisi kemerdekaan.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail.html">
                            <img src="/assets/images/slide01.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">100 Tahun Bung Karno</h3>
                                <p>Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai
                                    dan mengisi kemerdekaan.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail.html">
                            <img src="/assets/images/slide02.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">100 Tahun Bung Karno</h3>
                                <p>Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai
                                    dan mengisi kemerdekaan.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="item">
                    <div class="item-inner">
                        <a href="infografik-detail.html">
                            <img src="/assets/images/slide03.jpg" alt="">
                            <div class="caption">
                                <h3 class="subtitle">100 Tahun Bung Karno</h3>
                                <p>Perjalanan hidup Bung Karno (6 Juni 1901-21 Juni 1970) adalah perjalanan hidup negarabangsa-rakyat Indonesia. Melihat Soekarno berarti melihat Indonesia. Soekarno adalah fenomena sejarah perjalanan bangsa dan rakyat ini mencapai
                                    dan mengisi kemerdekaan.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </Flicking>
        </div>
    </section>
</template>

<script>
    import Flicking from "@egjs/vue3-flicking";
    import "@egjs/vue3-flicking/dist/flicking.css";
    import "@egjs/vue3-flicking/dist/flicking-inline.css";
    export default {
        name: 'Infographics',
        components: { Flicking },
        data() {
            return {
                data: 0
            }
        },
        
    }
</script>