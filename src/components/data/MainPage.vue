<template>
    <section class="sec-artikel">

        <div class="container">
            <div class="row d-flex justify-content-center">

                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="data-Tabs01" data-bs-toggle="tab" href="#dataTabs01" aria-controls="dataTabs01" aria-selected="true"><i class="fas fa-search"></i> Semua</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="data-Tabs02" data-bs-toggle="tab" href="#dataTabs02" aria-controls="dataTabs02" aria-selected="false">Polling</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="data-Tabs03" data-bs-toggle="tab" href="#dataTabs03" aria-controls="dataTabs03" aria-selected="false">Survey</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="data-Tabs04" data-bs-toggle="tab" href="#dataTabs04" aria-controls="dataTabs04" aria-selected="false">Statistik</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="data-Tabs05" data-bs-toggle="tab" href="#dataTabs05" aria-controls="dataTabs05" aria-selected="false">Pencarian Lanjut</a>
                        </li>
                    </ul>
                </div>

                <div class="row py-3">
                    <div class="col-md-9">
                        <div class="tab-content komp-tab-content">
                            <div class="tab-pane fade show active" id="dataTabs01" role="tabpanel" aria-labelledby="data-Tabs01">
                                <Semua />
                            </div>
                            <div class="tab-pane fade" id="dataTabs02" role="tabpanel" aria-labelledby="data-Tabs02">
                                <Polling />
                            </div>
                            <div class="tab-pane fade" id="dataTabs03" role="tabpanel" aria-labelledby="data-Tabs03">
                                <Survey />
                            </div>
                            <div class="tab-pane fade" id="dataTabs04" role="tabpanel" aria-labelledby="data-Tabs04">
                                <Statistik />
                            </div>
                            <div class="tab-pane fade" id="dataTabs05" role="tabpanel" aria-labelledby="data-Tabs05">
                                <Pencarian />
                            </div>
                        </div>
                    </div>
                    <div class="  col-md-3">
                        <div class="banner my-3">
                            <img src="/assets/images/ads2.png" class="w-100 rounding" alt="">
                        </div>
                        <div class="content borderless mb-2 line-bot2">
                            <p>Suggestion</p>
                            <img src="/assets/images/hasil3.png" class="rounding w-100" alt="">
                            <h3 class="subtitle my-2"> <a href="#">Banjarmasin Berhias Teratai</a></h3>
                            <p>Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.</p>
                            <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 13 April 2003</span>
                        </div>
                        <div class="content borderless mb-2 line-bot2">
                            <h3 class="subtitle"> <a href="#">Pesisir yang Terendam dan Prediksi Dunia Tahun 2040</a></h3>
                            <p>Kenaikan suhu hingga 1,5 derajat celsius diprediksi tak terhindarkan.</p>
                            <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 13 April 2003</span>
                        </div>
                        <div class="content borderless mb-2 line-bot2">
                            <h3 class="subtitle"> <a href="#">Pengembangan Wastra Butuh Partisipasi Publik</a></h3>
                            <p>Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.</p>
                            <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 13 April 2003</span>
                        </div>
                        <div class="content borderless mb-2">
                            <h3 class="subtitle"> <a href="#">Pengembangan Wastra Butuh Partisipasi Publik</a></h3>
                            <p>Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.</p>
                            <span class="date-time"> <i class="fas fa-clock"></i> Kompas, 13 April 2003</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Semua from './Semua.vue'
import Polling from './Polling.vue'
import Survey from './Survey.vue'
import Statistik from './Statistik.vue'
import Pencarian from './Pencarian.vue'

export default {
    name: 'MainPage',
    components: {
        Semua,
        Polling,
        Survey,
        Statistik,
        Pencarian,
    }
}
</script>