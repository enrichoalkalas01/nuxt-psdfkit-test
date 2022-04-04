<template>
    <section class="sec-artikel">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="arsip.html#AllTabs03">List Foto</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Foto</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + fotoDetail.preview }`" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="subtitle txt-main">{{ fotoDetail.title }}</h3>
                                <div class="db-price rounded mt-3">
                                    <span class="price-tag">mulai dari Rp. 300.000</span>
                                    <a href="pesan-foto.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Foto</a>
                                </div>
                                <ul class="nav nav-tabs komp-tabs my-3" id="myTabDetails" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link active" id="db-Tabs01" data-bs-toggle="tab" href="#dbTabs01" aria-controls="dbTabs01" aria-selected="true"> Caption</a>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <a class="nav-link" id="db-Tabs02" data-bs-toggle="tab" href="#dbTabs02" aria-controls="dbTabs02" aria-selected="false">Ketentuan Penggunaan</a>
                                    </li>
                                </ul>
                                <div class="tab-content komp-tab-content">
                                    <div class="tab-pane fade show active" id="dbTabs01" role="tabpanel" aria-labelledby="db-Tabs01">
                                        <p>{{ fotoDetail.published_caption }}</p>
                                        <p><b>{{ fotoDetail.writer }}</b></p>
                                        <table class="table db-table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">No. Id </th>
                                                    <td>w 929:321.15(=581)(594) AZI b</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Judul</th>
                                                    <td>{{ fotoDetail.title }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Fotografer </th>
                                                    <td>{{ fotoDetail.author }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Terbit </th>
                                                    <td>Jakarta</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Penerbit </th>
                                                    <td>{{ fotoDetail.source }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Tahun Terbit</th>
                                                    <td>2021</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Edisi</th>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Kolasi </th>
                                                    <td>xxiv, 280 p:21 (2copies).</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">ISBN </th>
                                                    <td>978-623-241-494-5</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Bahasa </th>
                                                    <td>Ind</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Subjek </th>
                                                    <td>{{ fotoDetail.keywords }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade " id="dbTabs02" role="tabpanel" aria-labelledby="db-Tabs02">
                                        <div class="d-block my-3">
                                            <!-- <h2 class="tag"><em> CARA PENGGUNAAN FOTO</em></h2> -->
                                            <ol>
                                                <li>Penggunaan foto harus mengajukan izin kepada Kompas.</li>
                                                <li>Penggunaan foto wajib mencantumkan kredit atas nama fotografer dengan format: ‘Kompas/Fotografer’.</li>
                                                <li>Foto tidak boleh digunakan sebagai sarana/materi kegiatan atau tindakan yang melanggar norma hukum, sosial, SARA, dan mengandung unsur pelecehan/ pornografi/ pornoaksi/ diskriminasi.</li>
                                                <li>Penggunaan foto untuk kepentingan komersial silahkan hubungi kami</li>
                                                <li>Penggunaan foto tokoh/sosok/properti untuk kepentingan komersial wajib mendapat persetujuan secara tertulis dari yang bersangkutan.</li>
                                                <li>Pelanggan tidak boleh mengubah, memperbanyak, mengalihwujudkan, memindahtangankan, memperjualbelikan foto tanpa persetujuan dari Kompas.</li>
                                                <li>Untuk pembelian foto tokoh, mohon untuk konfirmasi terlebih dahulu sebelum melakukan transaksi ke alamat e-mail <a href="mailto:kompasdata@kompas.id">kompasdata@kompas.id</a></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
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
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Foto',
        components: {
            Suggestion
        },
        data () {
            return {
                suggestions: dataSuggestions,
                fotoDetail: [],
                ConfigApi: {
                    headers: {
                        Authorization: `Bearer ` + this.$store.state.Login.UserData.token,
                    },
                    url: `https://dev-be.kompasdata.id/api/Search/photos/` + this.$route.params.id,
                }
            }
        },
        async beforeMount() {
            try {
                let dataFoto = await Axios(this.ConfigApi)
                this.fotoDetail = dataFoto.data

                console.log(this.fotoDetail);
            } catch (error) {
                console.log(error.message)
            }
        }
    }
</script>