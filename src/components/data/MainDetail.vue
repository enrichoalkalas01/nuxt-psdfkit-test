<template>
    <section class="sec-artikel my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb komp-breadcrumb">
                            <li><i class="fas fa-chevron-left"></i>&nbsp;</li>
                            <li class="breadcrumb-item"><a :href="linkBack != '' ? `/pencarian${ linkBack }` : '/'">Hasil Pencarian</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Detail Data</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-12 col-sm-12 col-md-9 my-3">
                    <div class="detail-box">
                        <div class="row">
                            <div class="col-sm-4 my-3">
                                <img :src="dataDetail ? dataDetail.thumbnail : ''" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <!-- <h3 class="subtitle txt-main">Penderita Penyakit Demam Berdarah</h3> -->
                                <div class="d-block">
                                    <p class="fw-bold">{{ dataDetail ? dataDetail.dataset_title : '' }}</p>
                                    <!-- <p>KOMPAS edisi Jumat 20 Agustus 2021</p> -->
                                    <!-- <p>Halaman: 1</p>
                                    <p>Penulis: JOL</p>
                                    <div class="db-price rounded">
                                        <span class="price-tag">mulai dari Rp. 300.000</span>
                                        <a href="pesan-data.html" class="btn btn-main"><i class="fas fa-shopping-cart"></i> Pesan Data</a>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-block my-3">
                        <h2 class="title txt-main">{{ dataDetail ? dataDetail.title : '' }}</h2>
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
                                <div class="w-100">
                                    <p v-html="`${ dataDetail ? dataDetail.summary : '' }`"></p>
                                    <div id="tableau_url" style="display: none;" :tableauUrl="dataDetail ? dataDetail.url_infographic : null">{{ dataDetail ? dataDetail.url_infographic : null  }}</div>
                                    <div id="tablue-data" class="mb-2">
                                        <div id="tableauViz"></div>
                                        <!-- <button class="mt-2 btn btn-main active tableau-btn" id="button-open-tableau" onclick="initializeViz()">Tampilkan Infografik Data</button>
                                        <button class="mt-2 btn btn-main tableau-btn" id="button-close-tableau" onclick="closeViz()">Tutup Infografik Data</button> -->
                                    </div>
                                    <div id="chartdiv"></div>
                                    <p>{{ dataDetail ? dataDetail.credit ? `Credit : ${ dataDetail.credit }` : '' : '' }}</p>
                                </div>
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
                    </div>
                </div>
                    
                <div class="col-12 col-sm-12 col-md-3">
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
        name: 'MainDetail',
        components: {
            Banner,
            Suggestion,
        },
        data () {
            return {
                linkBack: null,
                suggestions: dataSuggestions,
                newSummary: null,
                urlTest: 'https://public.tableau.com/views/SPKC2022/SebaranSampelSPKC2022?:language=en-US&:display_count=n&:origin=viz_share_link',
                dataDetail: null,
                ConfigApi: {
                    headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token },
                    url: `https://dev-be.kompasdata.id/api/data/` + this.$route.params.id + `/` + this.$route.params.collection,
                }
            }
        },

        beforeMount() {
            this.linkBack = window.location.search
            this.addScriptTableAu()
            console.log(this.urlTest)
        },

        mounted() {
            this.getData()
        },

        methods: {
            async getData() {
                try {
                    let dataData = await Axios(this.ConfigApi)
                    this.dataDetail = dataData.data

                    console.log(this.dataDetail);

                    this.urlTest = this.dataDetail.url_infographic
                    this.initViz()
                } catch (error) {
                    console.log(error)
                }
            },

            async addScriptTableAu() {
                let scriptTag2 = document.createElement("script")
                scriptTag2.setAttribute("src", "https://public.tableau.com/javascripts/api/tableau-2.0.0.min.js")
                document.head.appendChild(scriptTag2)
            },

            async initViz() {
                if ( !this.dataDetail ) console.log('waiting for data...')
                else {
                    var urlTablue = this.urlTest
                    console.log(this.dataDetail ? this.dataDetail.url_infographic : null)
                    var newScript = document.createElement("script")
                    newScript.setAttribute("type", "text/javascript")
                    newScript.innerHTML = `
                        var newUrlTablue = '${ urlTablue }'
                        function initializeViz() {
                            var placeholderDiv = document.getElementById("tableauViz")
                            var url = newUrlTablue
                            var options = {
                                width: '100%', height: '500px', hideTabs: true,
                                hideToolbar: true, onFirstInteractive: function () {
                                    workbook = viz.getWorkbook(); activeSheet = workbook.getActiveSheet();
                                }
                            }
                            
                            viz = new tableau.Viz(placeholderDiv, url, options)
                            console.log(tableau)
                            console.log(viz)
                        }

                        setTimeout(() => { initializeViz() }, 500)

                        function closeViz() {
                            document.querySelector("#button-close-tableau").classList.remove("active")
                            document.querySelector("#button-open-tableau").classList.add("active")
                            document.querySelector("#tableauViz").innerHTML = ""
                            viz = new tableau.Viz(null, null, null)
                        }
                    `
                    document.body.appendChild(newScript)
                }
            }
        },
    }
</script>

<style>
    .tableau-btn { display: none; }
    .tableau-btn.active { display: block; }
</style>