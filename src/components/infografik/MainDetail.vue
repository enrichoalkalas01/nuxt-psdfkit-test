<template>
    <section class="sec-artikel my-5">
        <LoadingScreen />
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="arsip.html#AllTabs04">List Infografik</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Infografik</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + infografikDetail.thumbnail }`" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="subtitle txt-main">{{ infografikDetail.title }}</h3>
                                <p>{{ infografikDetail.published_caption }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-block my-3">
                        <h2 class="tag"><em>CARA PENGGUNAAN POSTER INFOGRAFIK</em></h2>
                        <ol>
                            <li>Poster Infografik hanya tersedia dalam bentuk CETAK</li>
                            <li>pornoaksi/ diskriminasi.</li>
                            <li> Poster Infografik tidak boleh digunakan sebagai sarana/materi kegiatan atau tindakan yang melanggar norma hukum, sosial, SARA, dan mengandung unsur pelecehan/ pornografi/ Pelanggan tidak boleh mengubah, memperbanyak, mengalihwujudkan,
                                memindahtangankan, memperjual-belikan Poster Infografik tanpa persetujuan dari Kompas.</li>
                        </ol>
                    </div>
                    <div class="db-price rounded">
                        <a v-on:click="downloadInfografik" class="btn btn-main">Baca Selengkapnya Rp. 35.000</a>
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <!-- Banner -->
                    <div class="banner my-3">
                        <a href="#">
                            <img src="resources/images/ads2.png" class="w-100 rounding" alt="">
                        </a>
                    </div>

                    <!-- Suggestion -->
                    <Suggestion v-bind:dataSuggestions="suggestions" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import Suggestion from '../suggestion/Main.vue'
    import FileSaver from 'file-saver'
    import LoadingScreen from '../addons/LoadingScreen.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Infografik',
        components: {
            Suggestion, LoadingScreen
        },
        data () {
            return {
                suggestions: dataSuggestions,
                infografikDetail: [],
                ConfigApi: {
                    headers: {
                        Authorization: `Bearer ` + this.$store.state.Login.UserData.token,
                    },
                    url: `https://dev-be.kompasdata.id/api/graphics/` + this.$route.params.id,
                }
            }
        },
        async beforeMount() {
            let dataInfografik = await Axios(this.ConfigApi).then( Response => Response).catch( Error => Error)

            if (dataInfografik.data) {
                this.infografikDetail = dataInfografik.data
            } else if (dataInfografik.response.status == '401') {
                window.location.href = '/pencarian?query=&datefrom=&dateto=&author=&publication=&typesearch=3&size=10&currentpage=1&orderdirection=desc'
            }
        },

        methods: {
            async downloadInfografik() {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Downloads/graphics/${ this.infografikDetail.hires.split("/").join("%252F") }`,
                    headers: {
                        Authorization: `Bearer ${ this.$store.state.Login.UserData.token }`,
                    },
                    responseType: 'blob'
                }

                this.$store.commit('setLoadingScreen', true)
                await Axios(config).then(response => {
                    FileSaver.saveAs(response.data, `${ this.infografikDetail.title }.png`)
                    this.$store.commit('setLoadingScreen', false)
                }).catch(err => {
                    console.log(err)
                    this.$store.commit('setLoadingScreen', false)
                })
            },
        }
    }
</script>