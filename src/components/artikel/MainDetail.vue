<template>
    <section class="sec-artikel my-5">
        <LoadingScreen />
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li><i class="fas fa-chevron-left"></i>&nbsp;</li>
                            <li class="breadcrumb-item"><a :href="linkBack != '' ? `/pencarian${ linkBack }` : '/'">Hasil Pencarian</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Artikel</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-2 my-3">
                                <img :src="`${  artikelDetail ? this.$store.state.Tools.GetUrlFiles + artikelDetail.published_pages[0].preview : '' }`" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="title txt-main">{{ artikelDetail ? artikelDetail.title : '' }}</h3>
                                <div class="d-block">
                                    <p class="fw-bold">{{ artikelDetail ? artikelDetail.rubrics : '' }}</p>
                                    <p>{{ artikelDetail ? artikelDetail.published_pages[0].publication : '' }} edisi {{ this.$store.state.Tools.ChangeDateString(artikelDetail ? artikelDetail.published_pages[0].date.substring(0, 10) : '2020-12-12') }}</p>
                                    <p>Halaman: {{ artikelDetail ? artikelDetail.published_pages[0].number : '' }}</p>
                                    <p>Penulis: {{ artikelDetail ? artikelDetail.authors : '' }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Photo Slider -->
                    <div v-if="artikelDetail ? artikelDetail.images.length > 0 : false" class="row py-3">
                        <div class="col-9 mx-auto">
                            <div class="row">
                                <Splide :options="SliderConfig">
                                    <SplideSlide
                                        v-for="(foto, i) in artikelDetail.images" :key="i"
                                    >
                                        <div class="col-12 col-md-9 text-center">
                                            <a v-if="`${ foto.kind }` === 'Foto'" :href="`/foto-detail/` + foto.id">
                                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + foto.thumbnail }`" class="img-square32 rounding" alt="">
                                            </a>
                                            <a v-if="`${ foto.kind }` === 'Infografis'" :href="`/infografik-detail/` + foto.id">
                                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + foto.thumbnail }`" class="img-square32 rounding" alt="">
                                            </a>
                                        </div>
                                    </SplideSlide>
                                </Splide>
                            </div>
                        </div>
                    </div>

                    <div class="d-block my-3">
                        <h2 class="title txt-main">{{ artikelDetail ? artikelDetail.title : '' }}</h2>
                        <ul class="nav nav-tabs komp-tabs my-3" id="myTabDetails" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="db-Tabs01" data-bs-toggle="tab" href="#dbTabs01" aria-controls="dbTabs01" aria-selected="true"> Detail</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="db-Tabs02" data-bs-toggle="tab" href="#dbTabs02" aria-controls="dbTabs02" aria-selected="false">Ketentuan Penggunaan</a>
                            </li>
                        </ul>
                        <div class="tab-content komp-tab-content">
                            <div class="tab-pane fade show active" id="dbTabs01" role="tabpanel" aria-labelledby="db-Tabs01">
                                <p>
                                    <text v-html="`${ artikelDetail ? artikelDetail.body : '' }`"></text>
                                </p>
                            </div>
                            <div class="tab-pane fade " id="dbTabs02" role="tabpanel" aria-labelledby="db-Tabs02">
                                <ol>
                                    <li>Penggunaan artikel harus mengajukan izin kepada Kompas.</li>
                                    <li>Penggunaan artikel wajib mencantumkan kredit atas nama Penulis dengan format: ‘Kompas/Penulis.</li>
                                    <li>Artikel tidak boleh digunakan sebagai sarana/materi kegiatan atau tindakan yang melanggar norma hukum, sosial, SARA, dan mengandung unsur pelecehan/ pornografi/ pornoaksi/ diskriminasi.</li>
                                    <li>Penggunaan artikel untuk kepentingan komersial silahkan hubungi kami</li>
                                    <li>Penggunaan artikel tokoh/sosok/properti untuk kepentingan komersial wajib mendapat persetujuan secara tertulis dari yang bersangkutan.</li>
                                    <li>Pelanggan tidak boleh mengubah, memperbanyak, mengalihwujudkan, memindahtangankan, memperjualbelikan foto tanpa persetujuan dari Kompas.</li>
                                    <li>Untuk pembelian artikel tokoh, mohon untuk konfirmasi terlebih dahulu sebelum melakukan transaksi ke alamat e-mail <a href="mailto:kompasdata@kompas.id">kompasdata@kompas.id</a></li>
                                </ol>
                            </div>
                        </div>
                        <div class="db-price rounded" v-if="artikelDetail ? artikelDetail.old_tark_id > 0 : false">
                            <a v-on:click="downloadPDF" class="btn btn-main">Baca Selengkapnya {{ Number(HargaBaca) != 0 ? `Rp. ${ this.$store.state.Tools.PriceFormat(HargaBaca, 2, ',', '.') }` : 'Gratis' }}</a>
                        </div>
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
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import '@splidejs/splide/dist/css/themes/splide-default.min.css'
    import FileSaver from 'file-saver'
    import Suggestion from '../suggestion/Main.vue'
    import LoadingScreen from '../addons/LoadingScreen.vue'

    export default {
        name: 'Artikel',
        components: { Splide, SplideSlide, Suggestion, LoadingScreen },
        data () {
            return {
                linkBack: null,
                suggestions: [
                    { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
                    { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
                    { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
                ],
                SliderConfig: { updateOnMove: true, type: 'loop', focus: 'center', perPage: 2, pagination: false },
                ConfigApi: {
                    headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }`, },
                    url: `https://dev-be.kompasdata.id/api/stories/` + this.$route.params.id,
                },
            }
        },

        async mounted() {
            this.getData()
            this.$store.commit('setReloadSaldo', true)
        },

        methods: {
            async downloadPDF() {
                this.$store.commit('setLoadingScreen', true)
                this.$store.commit('setLoadingImage', 'loading')
                this.$store.commit('setLoadingText', 'loading...')
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Downloads/pdfcrop/${ this.artikelDetail.old_tark_id }`,
                    method: 'GET', headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }` }, responseType: 'blob'
                }

                try {
                    let Result = await Axios(config)
                    FileSaver.saveAs(Result.data, `${ this.artikelDetail.title }.pdf`)
                    this.$store.commit('setLoadingImage', 'success')
                    this.$store.commit('setLoadingText', 'Pemesanan Success...')
                    this.$store.commit('setReloadSaldo', true)
                    setTimeout(() => { this.$store.commit('setLoadingScreen', false) }, 1000)
                } catch (error) {
                    console.log(error)
                    this.$store.commit('setLoadingImage', 'failed')
                    this.$store.commit('setLoadingText', 'gagal memesan data...')
                    setTimeout(() => { this.$store.commit('setLoadingScreen', false) }, 2000)
                }
            },

            async getData() {
                this.$store.commit('setLoadingScreen', true)
                try {
                    let dataArtikel = await Axios(this.ConfigApi)
                    this.artikelDetail = dataArtikel.data.data
                    let tanggal = this.artikelDetail.published_pages[0].date.substring(0, this.artikelDetail.published_pages[0].date.length - 1)
                    let configPayment = {
                        url: `https://dev-be.kompasdata.id/api/Prices/Product?productid=${ /*this.artikelDetail.old_tark_id*/ 2 }&opt1=0&opt2=0&opt3=0&docdate=${ tanggal }&size=0&quantity=1`,
                        method: 'GET', headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }` },
                    }

                    let hargaBaca = await Axios(configPayment)
                    if ( hargaBaca ) this.HargaBaca = hargaBaca.data.value
                    this.$store.commit('setLoadingScreen', false)
                } catch (error) {
                    console.log(error)
                    this.$store.commit('setLoadingText', 'terjadi kesalahan')
                }
            }
        },
    }
</script>