<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">SEKILAS INFO</h2>
                    <h2 class="headtitle py-2">
                        Informasi seputar tanggal penting, ulang tahun dan agenda Kompas
                    </h2>
                </div>
                <div class="col-12">
                    <ul class="nav nav-tabs komp-tabs center" id="myTab3" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="info-Tabs01" data-bs-toggle="tab" href="#infoTabs01" aria-controls="infoTabs01" aria-selected="true">Agenda</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="info-Tabs02" data-bs-toggle="tab" href="#infoTabs02" aria-controls="infoTabs02" aria-selected="false">Ulang Tahun</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="info-Tabs03" data-bs-toggle="tab" href="#infoTabs03" aria-controls="infoTabs03" aria-selected="false">Tanggal Penting</a>
                        </li>
                    </ul>
                    <div class="tab-content komp-tab-content">
                        <div class="tab-pane fade show active" id="infoTabs01" role="tabpanel" aria-labelledby="info-Tabs01">
                            <div class="row my-3">
                                <div class="col-12 col-md-4 my-3 text-center">
                                    <a href="#" class="content borderless info-ctn">
                                        <img src="/assets/static/sekilasinfo/info1.png" alt="" class="ctn-img"/>
                                    </a>
                                </div>
                                <div class="col-12 col-md-4 my-3 text-center">
                                    <a href="#" class="content borderless info-ctn">
                                        <img src="/assets/static/sekilasinfo/info2.png" alt="" class="ctn-img"/>
                                    </a>
                                </div>
                                <div class="col-12 col-md-4 my-3 text-center">
                                    <a href="#" class="content borderless info-ctn">
                                        <img src="/assets/static/sekilasinfo/info2.png" alt="" class="ctn-img"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="infoTabs02" role="tabpanel" aria-labelledby="info-Tabs02">
                            <div class="row my-3">
                                <div class="col-12 col-md-4 my-3 text-center">
                                    <a href="#" class="content borderless info-ctn">
                                        <img src="/assets/static/sekilasinfo/info1.png" alt="" class="ctn-img"/>
                                        <h2 class="subtitle name">JOKO WIDODO</h2>
                                        <h2 class="subtitle title">PRESIDEN INDONESIA</h2>
                                        <p class="periode">Jakarta, 21 Juni 1961</p>
                                    </a>
                                </div>
                                <div class="col-12 col-md-4 my-3 text-center">
                                    <a href="#" class="content borderless info-ctn">
                                        <img src="/assets/static/sekilasinfo/info2.png" alt="" class="ctn-img"/>
                                        <h2 class="subtitle name">BJ HABIBIE</h2>
                                        <h2 class="subtitle title">PRESIDEN INDONESIA KETIGA</h2>
                                        <p class="periode">Bandung, 25 Juni 1936</p>
                                    </a>
                                </div>
                                <div class="col-12 col-md-4 my-3 text-center">
                                    <a href="#" class="content borderless info-ctn">
                                        <img src="/assets/static/sekilasinfo/info2.png" alt="" class="ctn-img"/>
                                        <h2 class="subtitle name">BJ HABIBIE</h2>
                                        <h2 class="subtitle title">PRESIDEN INDONESIA KETIGA</h2>
                                        <p class="periode">Semarang, 25 Juni 1936</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="infoTabs03" role="tabpanel" aria-labelledby="info-Tabs03">
                            <div class="row my-3" id="tgl-penting">
                                <div class="col-12 col-lg-12 title-month">
                                    <h4>Januari</h4>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>3 Januari</label>
                                        <p>Hari Departemen Agama Republik Indonesia[1]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>5 Januari</label>
                                        <p>Hari Korps Wanita Angkatan Laut[1]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>10 Januari</label>
                                        <p>Hari Gerakan Satu Juta Pohon[1]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>10 Januari</label>
                                        <p>Hari Tritura[1]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>10 Januari</label>
                                        <p>Hari Lingkungan Hidup Indonesia</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>15 Januari</label>
                                        <p>Hari Peristiwa Laut dan Samudera atau Hari Dharma Samudera[2]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>25 Januari</label>
                                        <p>Hari Gizi Nasional[3]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>25 Januari</label>
                                        <p>Hari Kusta Internasional[4][5]</p>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4 col-lg-3 card-date">
                                    <div class="wrapper-date card w-100 p-2">
                                        <label>26 Januari</label>
                                        <p>Hari Kepabeanan Internasional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {};
</script>

<style>
    #tgl-penting {
        height: 300px;
        overflow-x: hidden;
        overflow-y: auto;
    }

    #tgl-penting .card-date {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 15px;
    }

    #tgl-penting h4 {
        color: #605656;
    }

    #tgl-penting .card-date label {
        color: #605656;
        font-weight: 700;
    }

    #tgl-penting .wrapper-date {
        /* background-color: #f8f8f8; */
        background-color: #f4f4f4;
    }

    #tgl-penting .card-date p {
        margin: 0;
    }

    #tgl-penting .card-date .wrapper-date {
        height: 100%;
    }

    #tgl-penting::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    #tgl-penting::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    #tgl-penting::-webkit-scrollbar-thumb {
        background: #888; 
    }

    /* Handle on hover */
    #tgl-penting::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
</style>