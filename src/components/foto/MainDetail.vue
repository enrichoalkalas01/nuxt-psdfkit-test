<template>
    <section class="sec-artikel my-5">
        <LoadingScreen />
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i class="fas fa-chevron-left"></i>  Hasil Pencarian </a></li>
                            <li class="breadcrumb-item"><a href="/pencarian?query=&datefrom=&dateto=&author=&publication=&typesearch=2&size=10&collection=&currentpage=1&orderdirection=desc">List Foto</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Foto</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-12 col-6 col-md-6 col-lg-4 my-3">
                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + fotoDetail.preview }`" alt="" class="db-img">
                            </div>
                            <div class="col-12 col-6 col-md-6 col-lg-8 my-3">
                                <h3 class="subtitle txt-main">{{ fotoDetail.title }}</h3>
                                <div class="db-price rounded mt-3">
                                    <span class="price-tag">mulai dari Rp. {{ this.$store.state.Tools.PriceFormat(MulaiHarga, 2, ',', '.') }}</span>
                                    <a v-on:click="FormPesan" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Foto</a>
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
                                                    <th scope="row">Id</th>
                                                    <td>{{ fotoDetail.reference_id }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Author</th>
                                                    <td>{{ fotoDetail.author }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Publication</th>
                                                    <td>{{ fotoDetail.credit }}, {{ fotoDetail ? this.$store.state.Tools.ChangeDateString(fotoDetail.published_date.replace('Z', '')) : '' }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Credit</th>
                                                    <td>{{ fotoDetail.credit }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Width</th>
                                                    <td>{{ fotoDetail.width }}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Height</th>
                                                    <td>{{ fotoDetail.height }}</td>
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

                                <!-- Formulir -->
                                <div class="row mt-6 mb-6" v-if="FormPesanClick">
                                    <div class="col-12">
                                        <h4 class="txt-main">Formulir Penggunaan</h4>
                                    </div>
                                    <div class="col-12">
                                        <div>
                                            <h5 class="subtitle">Periode Penggunaan</h5>
                                        </div>
                                        <div class="row">
                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 mb-3">
                                                <label for="dateFrom" class="form-label">Tanggal Mulai :</label>
                                                <input v-on:change="dateFromChange" :value="DateFrom" type="date" class="form-control" id="dateFrom">
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6 mb-3">
                                                <label for="dateTo" class="form-label">Tanggal Selesai :</label>
                                                <input v-on:change="dateToChange" :value="DateTo" type="date" class="form-control" id="dateTo">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div>
                                            <h5 class="subtitle">Deskripsi</h5>
                                        </div>
                                        <div class="mb-3">
                                            <textarea class="form-control" id="description-box" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div>
                                            <h5 class="subtitle">Ukuran Foto</h5>
                                        </div>
                                        <div class="px-4">
                                            <div 
                                                v-for="(ukuran, i) in UkuranFoto" :key="i"
                                            >
                                                <div class="form-check" v-if="SizeProduct > ukuran.sizeMin">
                                                    <input v-on:change="changeSize" :checked="i === 0 ? true : false" :dataIndex="ukuran.apiId" class="form-check-input" type="radio" name="flexRadioDefault-ukuran" :id="ukuran.name">
                                                    <label class="form-check-label" :for="ukuran.name">{{ ukuran.text }} ( {{ (ukuran.id != 3) ? `maksimum ${ ukuran.sizeMax }` : `minimum ${ ukuran.sizeMin }` }} piksel )</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div>
                                            <h4 class="subtitle">Jenis Penggunaan</h4>
                                        </div>
                                        <div class="px-4">
                                            <div class="jenis-box">
                                                <div 
                                                    v-for="(jenis, i) in JenisPenggunaan" :key="i"
                                                    class="form-check"
                                                >   
                                                    <h5 class="subtitle" v-if="jenis.type === 1 && i === 0">Penggunaan Internal</h5>
                                                    <div v-if="jenis.type === 1">
                                                        <div class="option-inside">
                                                            <input :checked="i === 0 ? true : false" v-on:change="BtnRadioJenis($event)" :dataId="jenis.apiId" :dataIndex="i" class="form-check-input" type="radio" name="flexRadioDefault" :id="jenis.name">
                                                            <label class="form-check-label" :for="jenis.name">{{ jenis.text }}</label>
                                                        </div>
                                                    </div>

                                                    <h5 class="subtitle" v-if="jenis.type === 2 && i === 4">Buku</h5>
                                                    <div v-if="jenis.type === 2">
                                                        <div class="option-inside">
                                                            <input :checked="i === 0 ? true : false" v-on:change="BtnRadioJenis($event)" :dataId="jenis.apiId" :dataIndex="i" class="form-check-input" type="radio" name="flexRadioDefault" :id="jenis.name">
                                                            <label class="form-check-label" :for="jenis.name">{{ jenis.text }}</label>
                                                        </div>
                                                    </div>
                                                    
                                                    <h5 class="subtitle" v-if="jenis.type === 3 && i === 6">Editorial</h5>
                                                    <div v-if="jenis.type === 3">
                                                        <div class="option-inside">
                                                            <input :checked="i === 0 ? true : false" v-on:change="BtnRadioJenis($event)" :dataId="jenis.apiId" :dataIndex="i" class="form-check-input" type="radio" name="flexRadioDefault" :id="jenis.name">
                                                            <label class="form-check-label" :for="jenis.name">{{ jenis.text }}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                    <div class="col-12">
                                        <h5 class="subtitle">Informasi Persetujuan</h5>
                                        <div class="mb-2">
                                            <b>
                                                <label for="">Foto lebih dari satu jenis penggunaan, silahkan mengisi form lagi sesuai kebutuhan yang lain.</label>
                                                <label for="">Untuk pengunaan diluar pilihan silahkan hubungi kami.</label>
                                            </b>
                                        </div>
                                        <div class="mb-4">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" v-model="Aggrement" id="aggrement">
                                                <label class="form-check-label" for="aggrement">
                                                    <i>Saya setuju dengan syarat dan ketentuan yang berlaku.</i>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="total-harga" id="total-harga">
                                            <h4>Rp. {{ this.$store.state.Tools.PriceFormat(TotalPayment, 2, ',', '.') }}</h4>
                                        </div>
                                        <div class="button-box">
                                            <button v-on:click="pesanFoto" class="payment btn btn-primary" id="pesan">Pesan</button>
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
    import LoadingScreen from '../addons/LoadingScreen.vue'

    let dataSuggestions = [
        { id: 1, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 2, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
        { id: 3, images: '/assets/images/hasil3.png', title: 'Banjarmasin Berhias Teratai', desc: 'Tidak banyak orang yang tahu kalau flora maskot Kota Banjarmasin adalah bunga teratai.', source: 'Kompas, 13 April 2003'},
    ]

    export default {
        name: 'Foto',
        components: {
            Suggestion, LoadingScreen
        },
        data () {
            return {
                suggestions: dataSuggestions,
                fotoDetail: [],
                SizeProduct: 0,
                DateFrom: this.$store.state.Tools.DateNowString(),
                DateTo: this.$store.state.Tools.DateNowString(),
                ConfigApi: {
                    headers: {
                        Authorization: `Bearer ` + this.$store.state.Login.UserData.token,
                    },
                    url: `https://dev-be.kompasdata.id/api/photos/` + this.$route.params.id + `/kompas`,
                },
                UkuranFoto: [
                    { id: 1, apiId: 201, ukuran: 'low', text: 'Low', sizeMin: 0, sizeMax: 640 },
                    { id: 2, apiId: 202, ukuran: 'medium', text: 'Medium', sizeMin: 641, sizeMax: 1080 },
                    { id: 3, apiId: 203, ukuran: 'high', text: 'High', sizeMin: 1081, sizeMax: 100000000000 },
                ],
                FormPesanClick: false,
                TotalPayment: 0,
                JenisPenggunaan: [
                    { id: 1, type: 1, apiId: 301, name: 'individu', text: 'Individu', price: 300000 },
                    { id: 2, type: 1, apiId: 302, name: 'lembaga-masyarakat', text: 'Lembaga Masyarakat', price: 300000 },
                    { id: 3, type: 1, apiId: 303, name: 'lembaga-nirlaba', text: 'Lembaga Nirlaba', price: 300000 },
                    { id: 4, type: 1, apiId: 304, name: 'instansi-pemerintah-swasta', text: 'Instansi Pemerintah Swasta', price: 300000 },
                    { id: 5, type: 2, apiId: 305, name: 'buku-halaman-dalam', text: 'Buku Halaman Dalam', price: 300000 },
                    { id: 6, type: 2, apiId: 306, name: 'buku-cover', text: 'Buku Cover', price: 1000000 },
                    { id: 7, type: 3, apiId: 307, name: 'media-cetak-lokal', text: 'Media Cetak Lokal', price: 1000000 },
                    { id: 8, type: 3, apiId: 308, name: 'media-catak-asing', text: 'Media Catak Asing', price: 1000000 },
                    { id: 9, type: 3, apiId: 309, name: 'media-siar', text: 'Media Siar', price: 1000000 },
                    { id: 10, type: 3, apiId: 310, name: 'media-online', text: 'Media Online', price: 1000000 },
                ],
                SizeHarga: 0,
                JenisHarga: 0,
                Aggrement: 0,
                MulaiHarga: 0,
            }
        },
        async beforeMount() {
            this.$store.commit('setLoadingScreen', true)
            let dataFoto = await Axios(this.ConfigApi).then( Response => Response).catch( Error => Error)
            if (dataFoto.data) {
                this.fotoDetail = dataFoto.data
                dataFoto.data.width > dataFoto.data.height ? this.SizeProduct = dataFoto.data.width : this.SizeProduct = dataFoto.data.height
                this.SizeHarga = 201
                this.JenisHarga = 301
                this.MulaiHarga = await this.getHarga(this.SizeHarga, this.JenisHarga)
                console.log(dataFoto.data)
                this.$store.commit('setLoadingScreen', false)
            } else if (dataFoto.response.status == '401') {
                this.$store.commit('setLoadingScreen', false)
                window.location.href = '/pencarian?query=&datefrom=&dateto=&author=&publication=&typesearch=2&size=10&currentpage=1&orderdirection=desc'
            }
        },

        methods: {
            changeSize(event) { this.SizeHarga = Number(event.target.getAttribute("dataindex")) },
            FormPesan() { this.FormPesanClick = !this.FormPesanClick },
            aggrementChange(e) { console.log(e.target.value) },
            dateFromChange(e) { this.DateFrom = e.target.value },
            dateToChange(e) { this.DateTo = e.target.value },
            BtnRadioJenis(event) {
                this.JenisHarga = Number(event.target.getAttribute("dataId"))
                this.TotalPayment = this.JenisPenggunaan[event.target.getAttribute('dataIndex')].price
            },

            async getHarga(opt1, opt2) {
                let SizeFoto = this.fotoDetail.file_size
                let DocumentDate = this.fotoDetail.published_date.replace('Z', '')
                let configHarga = {
                    url: `https://dev-be.kompasdata.id/api/Prices/Product?productid=${ 6 }&opt1=${ opt1 }&opt2=${ opt2 }&opt3=0&docdate=${ DocumentDate }&size=${ SizeFoto }&quantity=1`,
                    method: 'GET', headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }` },
                }   

                let newHargaFromApi = await Axios(configHarga)
                if ( newHargaFromApi ) {
                    this.TotalPayment = newHargaFromApi.data.value
                    return newHargaFromApi.data.value
                } else {
                    console.log(newHargaFromApi)
                }
            },

            async pesanFoto() {
                let configPayment = {
                    url: 'https://dev-be.kompasdata.id/api/Orders/photo',
                    method: 'POST',
                    headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }` },
                    data: {
                        "id": this.fotoDetail.reference_id,
                        "title": this.fotoDetail.title,
                        "description": document.querySelector("#description-box").value,
                        "quality": this.SizeHarga,
                        "quality_description": this.UkuranFoto.filter(x => x.apiId === Number(this.SizeHarga))[0].text,
                        "usage": this.JenisHarga,
                        "usage_description": this.JenisPenggunaan.filter(x => x.apiId === Number(this.JenisHarga))[0].text,
                        "price": this.TotalPayment,
                        "date1": this.DateFrom,
                        "date2": this.DateTo,
                        "thumbnail": this.fotoDetail.thumbnail,
                    }
                }

                if ( this.Aggrement ) {
                    this.$store.commit('setLoadingScreen', true)
                    let PesanData = await Axios(configPayment)
                    if ( PesanData ) {
                        this.$store.commit('setLoadingText', 'Pemesanan Success...')
                        setTimeout(() => {
                            window.location.href = "/dashboard/daftar-pesanan"    
                            this.$store.commit('setLoadingScreen', false)
                        }, 1000)
                    } else {
                        console.log(PesanData)
                        this.$store.commit('setLoadingScreen', false)
                    }
                } else {
                    alert('tolong centang syarat & ketentuannya terebih dahulu..')
                }
            }
        },

        computed: { propertyAAndPropertyB() { return `${this.SizeHarga}|${this.JenisHarga}` } },

        watch: {
            Aggrement() {
                
            },
            async propertyAAndPropertyB(newVal, oldVal) {
                const [oldPropertyA, oldPropertyB] = oldVal.split('|');
                const [newPropertyA, newPropertyB] = newVal.split('|');
                if ( newPropertyA != oldPropertyA || newPropertyB != oldPropertyB ) {
                    this.getHarga(newPropertyA, newPropertyB)
                }
            },
        },
    }
</script>

<style>
    .detail-box .db-img {
        max-width: 500px !important;
    }

    #pesan {
        background-color: #007BD2;
    }

    .option-inside {
        padding-left: 10%;
    }

    .jenis-box .form-check {
        padding: 0;
    }
</style>