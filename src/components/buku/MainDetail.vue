<template>
    <section class="sec-artikel">
        <div class="container">
            <div class="row d-flex justify-content-center">

                <div class="col-12 ">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="buku.html">List buku</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Buku</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img src="/assets/images/buku/image 24.png" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="subtitle txt-main">Bapak Tionghoa Nusantara: Gus Dur, politik minoritas, dan strategi kebudayaan</h3>
                                <div class="db-price rounded">
                                    <span class="price-tag">mulai dari Rp. 300.000</span>
                                    <a href="pesan-buku.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Buku</a>
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
                                        <p>Berisi studi tentang bagaimana Gus Dur membela kelompok minoritas, khususnya Tionghoa di Indonesia. Selain itu, buku ini juga menganalisis konteks dan dinamika sosial politik komunitas Tionghoa dalam pasang surut
                                            politik kebangsaan-keindonesiaan. Selain itu, buku ini menghadirkan gagasan, tindakan, dan kebijakan Gus Dur sebagai jiwa untuk pergerakan serta perjuangan kemanusiaan pada masa kini dan mendatang.
                                        </p>
                                        <table class="table db-table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">No. Id </th>
                                                    <td>w 929:321.15(=581)(594) AZI b</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Judul</th>
                                                    <td>Bapak Tionghoa Nusantara : Gus Dur, Politik minoritas, dan strategi kebudayaan</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Penulis </th>
                                                    <td>Aziz, Munawir Nugroho, RBE Agung (ed.)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Terbit </th>
                                                    <td>Jakarta</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Penerbit </th>
                                                    <td>Penerbit Buku Kompas</td>
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
                                                    <td>Biografi, Politik, Minoritas etnis, Keturunan Tionghoa, Tolerasi Indonesia, Wahid, Abdurrahman, Gus Dur</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade " id="dbTabs02" role="tabpanel" aria-labelledby="db-Tabs02">
                                        <ol>
                                            <li>Buku hanya dapat dibaca di Pusat Informasi Kompas (PIK).</li>
                                            <li>Operasional PIK setiap hari Senin-Jumat pukul 09:00-16:00.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-block my-3">
                    </div>
                </div>
                <div class="col-12 col-md-3">
                    <!-- Banner -->
                    <div class="banner my-3">
                        <a href="#">
                            <img src="/assets/images/ads2.png" class="w-100 rounding" alt="">
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
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'BukuDetail',
        components: {
            Suggestion
        },
        data () {
            return {
                suggestions: dataSuggestions
            }
        }
    }
</script>
