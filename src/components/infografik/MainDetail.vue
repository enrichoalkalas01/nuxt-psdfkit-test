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
                                <table class="table db-table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Id</th>
                                            <td>{{ infografikDetail ? infografikDetail.reference_id : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Author</th>
                                            <td>{{ infografikDetail ? infografikDetail.author : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Publication</th>
                                            <td>{{ infografikDetail ? infografikDetail.publication : '' }}, {{ infografikDetail ? this.$store.state.Tools.ChangeDateString(infografikDetail.published_date) : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Credit</th>
                                            <td>{{ infografikDetail ? infografikDetail.credit : '' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="d-block my-3">
                        <h2 class="tag"><em>CARA PENGGUNAAN INFOGRAFIK</em></h2>
                        <ol>
                            <li>Penggunaan infografik berita wajib mencantumkan kredit atas nama desainer grafis dengan format: ‘Kompas/Desainer Grafis’.</li>
                            <li>Penggunaan infografik berita wajib mencantumkan sumber edisi dengan format: ‘Kompas, tanggal-bulan-tahun’.</li>
                            <li>Infografik Berita tidak boleh digunakan sebagai sarana/materi kegiatan atau tindakan yang melanggar norma hukum, sosial, SARA, dan mengandung unsur pelecehan/ pornografi/ pornoaksi/ diskriminasi.</li>
                            <li>Data/informasi yang tertera pada infografik berita valid pada waktu dipublikasikan pertama kali, jika ada perubahan atau pembaruan data oleh sumber di luar Kompas bukan tanggungjawab Kompas.</li>
                            <li>Pelanggan tidak boleh mengubah, memperbanyak, mengalihwujudkan, memindahtangankan, memperjual-belikan infografik berita tanpa persetujuan dari Kompas.</li>
                        </ol>
                    </div>
                    <div class="db-price rounded">
                        <button
                            v-on:click="downloadInfografik"
                            class="btn btn-main"
                            :disabled="this.$store.state.Login.UserData.memberType === 0 || !this.$store.state.Login.LoginStatus ? true : false"
                        >
                            Baca Selengkapnya {{ Number(HargaBaca) != 0 ? `Rp. ${ this.$store.state.Tools.PriceFormat(HargaBaca, 2, ',', '.') }` : '0' }}
                        </button>
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
                linkBack: null,
                suggestions: dataSuggestions,
                infografikDetail: [],
                HargaBaca: 0,
                ConfigApi: {
                    headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token },
                    url: `https://dev-be.kompasdata.id/api/graphics/` + this.$route.params.id,
                }
            }
        },
        async beforeMount() {
            this.linkBack = window.location.search
            this.getData()
        },

        methods: {
            async downloadInfografik() {
                this.$store.commit('setLoadingScreen', true)
                this.$store.commit('setLoadingImage', 'loading')
                this.$store.commit('setLoadingText', 'loading...')
                let config = {
                    url: `https://dev-be.kompasdata.id/api/Downloads/graphics/${ this.infografikDetail.reference_id }`,
                    headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }` }, responseType: 'blob'
                }

                try {
                    let ResultData = await Axios(config)
                    FileSaver.saveAs(ResultData.data, `${ this.infografikDetail.title + ResultData.data.type.replace('image/', '.') }`)
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
                    let dataInfografik = await Axios(this.ConfigApi)
                    this.infografikDetail = dataInfografik.data
                    let tanggal = this.infografikDetail.creation_date.substring(0, 10)
                    let configPayment = {
                        url: `https://dev-be.kompasdata.id/api/Prices/Product?productid=${ 9 }&opt1=0&opt2=0&opt3=0&docdate=${ tanggal }&size=0&quantity=1`,
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
        }
    }
</script>