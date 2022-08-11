<template>
    <section class="sec-artikel my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">

                <div class="col-12 ">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li><i class="fas fa-chevron-left"></i>&nbsp;</li>
                            <li class="breadcrumb-item"><a :href="linkBack != '' ? `/pencarian${ linkBack }` : '/'">Hasil Pencarian</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Buku</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img :src="`${ this.$store.state.Tools.GetUrlFile + bukuDetail.cover }`" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="subtitle txt-main">{{ bukuDetail.judul }}</h3>
                                <!-- <div class="db-price rounded">
                                    <a href="pesan-buku.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Buku</a>
                                </div> -->
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
                                        <p>{{ bukuDetail.sinopsis }}</p>
                                        <table class="table db-table table-bordered">
                                            <tbody>
                                                <!-- <tr>
                                                    <th scope="row">No. Id </th>
                                                    <td>w 929:321.15(=581)(594) AZI b</td>
                                                </tr> -->
                                                <tr>
                                                    <th scope="row">Judul</th>
                                                    <td>{{ bukuDetail.judul }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Penulis </th>
                                                    <td>
                                                        <text v-for="(author, i) in bukuDetail.authors" :key="i">
                                                            <text v-if="i+1 < bukuDetail.authors.length">
                                                                {{ author.author }} {{ author.authorroledescription }}
                                                                <br>
                                                            </text>
                                                            <text v-else>
                                                                {{ author.author }} {{ author.authorroledescription }}
                                                            </text>
                                                        </text>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Terbit </th>
                                                    <td>{{ bukuDetail.penerbittempat }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Penerbit </th>
                                                    <td>{{ bukuDetail.penerbit }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Tahun Terbit</th>
                                                    <td>{{ bukuDetail.penerbittahun }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Edisi</th>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Kolasi </th>
                                                    <td>{{ bukuDetail.kolasi }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">ISBN </th>
                                                    <td>{{ bukuDetail.isbn }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Bahasa </th>
                                                    <td>
                                                        <text v-for="(language, i) in bukuDetail.languages" :key="i">
                                                            <text v-if="i+1 < bukuDetail.languages.length">
                                                                {{ language.language }}, 
                                                            </text>
                                                            <text v-else>
                                                                {{ language.language }}
                                                            </text>
                                                        </text>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Subjek </th>
                                                    <td>
                                                        <text v-for="(topic, i) in bukuDetail.topics" :key="i">
                                                            <text v-if="i+1 < bukuDetail.topics.length">
                                                                {{ topic.topic }}, 
                                                            </text>
                                                            <text v-else>
                                                                {{ topic.topic }}<br>
                                                            </text>
                                                        </text>
                                                        <text>
                                                            {{ bukuDetail.subjekregional }}
                                                        </text>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade " id="dbTabs02" role="tabpanel" aria-labelledby="db-Tabs02">
                                        <ol>
                                            <li>Layanan di Perpustakaan Pusat Data dan Informasi Kompas bersifat Close Accesss. 
                                                Artinya hanya karyawan tetap Harian Kompas, dan Karyawan tetap Kompas Gramedia (KG) 
                                                yang sudah terdaftar menjadi anggota, dapat meminjam atau membawa pulang koleksi buku.</li>
                                            <li>Koleksi Perpustakaan Pusat Data dan Informasi Kompas hanya bisa dibaca di area perpustakaan, tidak bisa dipinjam/ dibawa pulang.</li>
                                            <li>Akses koleksi e-book hanya bisa dilakukan oleh karyawan Harian Kompas.</li>
                                            <li>Semua koleksi referensi hanya bisa dibaca di area perpustakaan.</li>
                                            <li>Cek status ketersediaan buku di katalog perpustakaan sebelum melakukan kunjungan.</li>
                                            <li>Operasional Pusat Data Informasi setiap hari Senin-Jumat pukul 10:00-14:00 WIB.</li>
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
                    <Banner />
                    
                    <!-- Suggestion -->
                    <Suggestion v-bind:dataSuggestions="suggestions" />                  
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    import Banner from '../banner/Main.vue'
    import Suggestion from '../suggestion/Main.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'BukuDetail',
        components: {
            Banner,
            Suggestion
        },
        data () {
            return {
                linkBack: null,
                suggestions: dataSuggestions,
                bukuDetail: [],
                ConfigApi: {
                    headers: {
                        Authorization: `Bearer ` + this.$store.state.Login.UserData.token,
                    },
                    url: `https://dev-be.kompasdata.id/api/books/` + this.$route.params.id,
                }
            }
        },
        async beforeMount() {
            this.linkBack = window.location.search

            try {
                let dataBuku = await Axios(this.ConfigApi)
                this.bukuDetail = dataBuku.data

                console.log(this.bukuDetail);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
</script>
