<template>
    <section id="sekilas-info-mp" class="sec-artikel line-bot py-5">
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
                            <a
                                :class="i === 0 ? 'nav-link active' : 'nav-link'"
                                :id="`info-Tabs0${ i + 1 }`"
                                data-bs-toggle="tab"
                                :href="`#infoTabs0${ i + 1 }`"
                                :aria-controls="`infoTabs0${ i + 1 }`"
                                :aria-selected="i == 0 ? 'true' : 'false'"
                            >
                                {{ AgendaData.type_tab }}
                            </a>
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
                                    <a :href="Data.url" class="content borderless info-ctn">
                                        <div class="img-box">
                                            <div class="images" :style="`background-image: url('${ Data.image_source }')`" :alt="Data.title"></div>
                                        </div>
                                        <h2 class="subtitle">{{ Data.title }}</h2>
                                        <p class="periode">
                                            <span class="date-time"><i class="fas fa-clock"></i> {{ this.$store.state.Tools.ChangeDateString(Data.date.substring(0, 10)) }}</span>
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div class="row my-3" v-if="AgendaData.type_tab === 'Ulang Tahun'">
                                <div v-for="(Data, i) in ulangTahun" :key="i" class="col-12 col-md-4 my-3 text-center">
                                    <div class="content borderless info-ctn">
                                        <div class="img-box">
                                            <a v-if="Data.url" :href="Data.url">
                                                <div class="images" :style="`background-image: url('${ Data.picture }')`" :alt="Data.title"></div>
                                            </a>
                                            <div v-else class="images" :style="`background-image: url('${ Data.picture }')`" :alt="Data.title"></div>
                                        </div>

                                        <a v-if="Data.url" :href="Data.url"><h2 class="subtitle name">{{ Data.name }}</h2></a>
                                        <h2 v-else class="subtitle name">{{ Data.name }}</h2>

                                        <h2 class="subtitle title">{{ Data.notes }}</h2>
                                        <p class="periode">{{ Data.birthplace !== '' ? `${ Data.birthplace },` : '' }} {{ this.$store.state.Tools.ChangeDateString(Data.birthdate.substring(0, 10)) }}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="tgl-penting" class="row my-3" v-if="AgendaData.type_tab === 'Tanggal Penting'">
                                <div class="col-12 wrapper-tgl-p">
                                    <div class="row">
                                        <table class="table">
                                            <tbody>
                                                <tr v-for="(data, i) in tanggalPenting" :key="i">
                                                    <section v-for="(event, j) in data.events" :key="j" >
                                                        <td>
                                                            <a v-if="event.url" :href="event.url">{{ data.day }} {{ IndonesiaMonth[data.month-1] }}</a>
                                                            <p v-else style="margin-bottom: 0px;">{{ data.day }} {{ IndonesiaMonth[data.month-1] }}</p>
                                                        </td>
                                                        <td>&nbsp;</td>
                                                        <td>{{ event.note }}</td>
                                                    </section>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div class="col-12 col-lg-12 title-month d-flex justify-content-center">
                                            <nav aria-label="Page navigation example">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link prev" id="month-prev" v-on:click="prevWeek">Sebelumnya</a>
                                                    </li>
                                                    <li class="page-item next">
                                                        <a class="page-link" id="month-next" v-on:click="nextWeek">Selanjutnya</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            
                                        </div>
                                        <!-- <div
                                            v-for="(DataDay, j) in NewAgendaData" :key="j"
                                            class="col-12 col-md-4 col-lg-3 card-date"
                                        >
                                            <div class="wrapper-date card w-100 p-2">
                                                <label>{{ DataDay.title }}</label>
                                                <p>Tanggal : {{ DataDay.day }} {{ IndonesiaMonth[Month] }} {{ YearData }}</p>
                                            </div>
                                        </div> -->
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
    import Axios from 'axios'

    export default {
        props: [ 'dataSet' ],

        data() {
            return {
                Agenda: null,
                ulangTahun: [],
                tanggalPenting: [],
                Month: 0,
                week: 0,
                IndonesiaMonth: [
                    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
                ],
                YearData: new Date().getFullYear(),
            }
        },

        async beforeMount() {
            try {
                const currentMonth = new Date().getMonth();
                this.Month = currentMonth
                this.Agenda = this.dataSet

                let dataUltah = await Axios(`${ this.$store.state.Headers.BaseUrlApi }/api/BirthDays/GetByMonth/${ this.Month + 1 }`)
                this.ulangTahun = dataUltah.data
                
                let dataTanggalPenting = await Axios(`${ this.$store.state.Headers.BaseUrlApi }/api/ImportantDates/GetByWeek?prevNext=${ this.week }`)
                this.tanggalPenting = dataTanggalPenting.data
            } catch (error) {
                console.log(error)
            }
        },

        mounted() {
            this.Agenda = this.dataSet
        },

        updated() {
            this.Agenda = this.dataSet
        },

        methods: {
            nextMonth() {
                if ( Number(this.Month) < 11 ) {
                    this.Month = Number(this.Month) + 1
                    this.getData()
                } else {
                    this.Month = 0
                    this.getData()
                }
            },

            prevMonth() {
                if ( Number(this.Month) > 0 ) {
                    this.Month = Number(this.Month) - 1
                    this.getData()
                } else {
                    this.Month = 11
                    this.getData()
                }
            },

            async getData(){
                let dataTanggalPenting = await Axios(`${ this.$store.state.Headers.BaseUrlApi }/api/ImportantDates/GetByWeek?prevNext=${ this.week }`)
                this.tanggalPenting = dataTanggalPenting.data
            },

            nextWeek() {
                if ( Number(this.week) < 52 ) this.week = Number(this.week) + 1
                else this.week = 0
                this.getData()
            },

            prevWeek() {
                if ( Number(this.week) > -52 ) this.week = Number(this.week) - 1
                else this.week = 52
                this.getData()
            }
        }
    };
</script>

<style>
    .info-ctn {
        height: 100%;
        position: relative;
    }

    .info-ctn .ctn-img {
        box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.25) !important;
        aspect-ratio: 16/9;
    }
    
    .img-box {
        width: 300px;
        height: 300px;
        /* background-color: #555; */
        background-color: #f8f8f8;
        margin: auto;
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

    #tgl-penting nav {
        font-size: 14px;
    }

    #tgl-penting nav .next,
    #tgl-penting nav .prev {
        cursor: pointer;
    }

    #tgl-penting nav .c-m a {
        color: #4f4f4f;
    }
</style>