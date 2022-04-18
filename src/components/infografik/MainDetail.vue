<template>
    <section class="sec-artikel my-5">
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
                                <div class="db-price rounded mt-3">
                                    <span class="price-tag">mulai dari Rp. 300.000</span>
                                    <a href="pesan-infografik.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Infografik</a>
                                </div>
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

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Infografik',
        components: {
            Suggestion
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
            try {
                let dataInfografik = await Axios(this.ConfigApi)
                this.infografikDetail = dataInfografik.data

                console.log(this.infografikDetail);
            } catch (error) {
                console.log(error.message)
            }
        }
    }
</script>