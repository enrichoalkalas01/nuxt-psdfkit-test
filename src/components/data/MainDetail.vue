<template>
    <section class="sec-artikel">
        <div class="container">
            <div class="row d-flex justify-content-center">

                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="data">List Data</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Data</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img src="/assets/images/image 27.png" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="subtitle txt-main">Terdampak Pandemi Angka Kemiskinan Naik Lagi</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                <div class="db-price rounded">
                                    <span class="price-tag">mulai dari Rp. 300.000</span>
                                    <a href="pesan-data.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Data</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="col-12 col-md-3">
                    <Banner />
                    <div class="title-content">
                        <p>Suggestion</p>
                    </div>
                    <Suggestion />
                    <Suggestion />
                    <Suggestion />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Banner from './Banner.vue'
import Suggestion from './Suggestion.vue'

export default {
    name: 'MainDetail',
    components: {
        Banner,
        Suggestion,
    }
}
</script>