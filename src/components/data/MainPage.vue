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
                    <div class="col-md-3">
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
        </div>
    </section>
</template>

<script>
import Semua from './Semua.vue'
import Polling from './Polling.vue'
import Survey from './Survey.vue'
import Statistik from './Statistik.vue'
import Pencarian from './Pencarian.vue'
import Banner from './Banner.vue'
import Suggestion from './Suggestion.vue'

export default {
    name: 'MainPage',
    components: {
        Semua,
        Polling,
        Survey,
        Statistik,
        Pencarian,
        Banner,
        Suggestion,
    }
}
</script>