<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center mb-3">
                    <h2 class="tag">SEKILAS INFO</h2>
                    <h2 class="headtitle py-2">
                        {{ Agenda ? Agenda.title_section : '' }}
                    </h2>
                </div>
                <div class="col-12">
                    <ul
                        class="nav nav-tabs komp-tabs center"
                        id="myTab3"
                        role="tablist"
                    >
                        <li 
                            v-for="(AgendaData, i) in Agenda.data" :key="i"
                            class="nav-item" role="presentation"
                        >
                            <div
                                :class="i === 0 ? 'nav-link active' : 'nav-link'"
                                :id="`info-Tabs0${ i + 1 }`"
                                data-bs-toggle="tab"
                                :href="`#infoTabs0${ i + 1 }`"
                                :aria-controls="`infoTabs0${ i + 1 }`"
                                :aria-selected="i == 0 ? 'true' : 'false'"
                            >
                                {{ AgendaData.type_tab }}
                            </div>
                        </li>
                    </ul>
                    <div class="tab-content komp-tab-content">
                        <div
                            v-for="(AgendaData, i) in Agenda.data" :key="i"
                            :class="i === 0 ? 'tab-pane fade show active' : 'tab-pane fade'"
                            :id="`infoTabs0${ i + 1 }`"
                            role="tabpanel"
                            :aria-labelledby="`info-Tabs0${ i + 1 }`"
                        >
                            <div class="row my-3" v-if="AgendaData.type_tab === 'Agenda'">
                                <div
                                    v-for="(Data, i) in AgendaData.data" :key="i"
                                    class="col-12 col-md-4 my-3 text-center"
                                >
                                    <div :href="Data.id" class="content borderless info-ctn">
                                        <!-- <div class="card"> -->
                                            <div class="img-box">
                                                <div class="images" :style="`background-image: url('${ Data.image_source }')`"></div>
                                            </div>
                                            <!-- <img :src="Data.image_source" alt="" class="ctn-img mb-3"/> -->
                                            <h2 class="subtitle">{{ Data.title }}</h2>
                                            <p class="periode">
                                                <span class="date-time"><i class="fas fa-clock"></i> {{ Data.date }}</span>
                                            </p>
                                        <!-- </div> -->
                                    </div>
                                </div>
                            </div>

                            <div class="row my-3" v-if="AgendaData.type_tab === 'Ulang Tahun'">
                                <div
                                    v-for="(Data, i) in AgendaData.data" :key="i"
                                    class="col-12 col-md-4 my-3 text-center"
                                >
                                    <div href="#" class="content borderless info-ctn">
                                        <!-- <img :src="Data.image_source" alt="" class="ctn-img"/> -->
                                        <div class="img-box">
                                            <div class="images" :style="`background-image: url('${ Data.image_source }')`"></div>
                                        </div>
                                        <h2 class="subtitle name">{{ Data.title }}</h2>
                                        <h2 class="subtitle title">{{ Data.excerpt }}</h2>
                                        <p class="periode">
                                            <span class="date-time"><i class="fas fa-clock"></i> {{ Data.date }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="tgl-penting" class="row my-3" v-if="AgendaData.type_tab === 'Tanggal Penting'">
                                <div class="col-12 wrapper-tgl-p">
                                    <div v-for="(DataMonth, i) in AgendaData.data" :key="i" class="row">
                                        <div class="col-12 col-lg-12 title-month">
                                            <h4>{{ DataMonth.month }}</h4>
                                        </div>
                                        <div
                                            v-for="(DataDay, j) in DataMonth.data_tanggal" :key="j"
                                            class="col-12 col-md-4 col-lg-3 card-date"
                                        >
                                            <div class="wrapper-date card w-100 p-2">
                                                <label>{{ DataDay.title }}</label>
                                                <p>{{ DataDay.detail }}</p>
                                            </div>
                                        </div>
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
    export default {
        props: [ 'dataSet' ],

        data() {
            return {
                Agenda: null
            }
        },

        beforeMount() {
            this.Agenda = this.dataSet  
        },

        mounted() {
            this.Agenda = this.dataSet
        },

        updated() {
            this.Agenda = this.dataSet
        },
    };
</script>

<style>
    .info-ctn {
        height: 100%;
        position: relative;
    }

    .info-ctn .ctn-img {
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25) !important;
    }
    
    .img-box {
        width: 100%;
        height: 175px;
        /* background-color: #555; */
        background-color: #f8f8f8;
        margin-bottom: 10px;
    }

    .img-box .images {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
    }

    .periode {
        /* text-align: right; */
        /* position: absolute; */
        right: 0;
        bottom: 0;
    }

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