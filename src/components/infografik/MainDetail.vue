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
                            <div
                                @mouseover="onMouseOverImages"
                                @mouseleave="onMouseLeaveImages"
                                class="col-sm-4 my-3 images-prevbox"
                                :id="`images-div-id-${ infografikDetail.document_id }`"
                                :dataImages="`${ this.$store.state.Tools.GetUrlFiles + infografikDetail.thumbnail }`"
                                
                            >
                            <!-- :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + infografikDetail.thumbnail }')`" -->
                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + infografikDetail.thumbnail }`" alt="" class="db-img">
                            </div>
                            <div class="col-sm-8 my-3">
                                <h3 class="subtitle txt-main">{{ infografikDetail.title }}</h3>
                                <p>{{ infografikDetail.published_caption }}</p>
                                <table class="table db-table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Author</th>
                                            <td>{{ infografikDetail ? infografikDetail.author != '' ? infografikDetail.author : '-' : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Publication</th>
                                            <td>{{ infografikDetail ? infografikDetail.publication : '' }}, {{ infografikDetail ? this.$store.state.Tools.ChangeDateString(infografikDetail.published_date) : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Credit</th>
                                            <td>{{ infografikDetail ? infografikDetail.credit : '' }}</td>
                                        </tr>
                                        <tr>
                                            <th>Artikel Terkait</th>
                                            <td>
                                                <p v-for="(story,i) in infografikDetail.linked_stories" :key="i">
                                                    <a :href="`/artikel-detail/${ story.id }`">{{ story.title }}</a>
                                                </p>
                                            </td>
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
                            :disabled="
                                this.$store.state.Login.UserData.memberType === 0 ||
                                ( new Date(infografikDetail?.published_date).getFullYear() < 2015 ) ||
                                !infografikDetail?.image_type?.includes('pdf') ||
                                !this.$store.state.Login.LoginStatus ?
                                true : false"
                        >
                            <span>Baca Selengkapnya {{
                                Number(HargaBaca) != 0 || new Date(infografikDetail?.published_date).getFullYear() >= 2015 ? `Rp. ${ this.$store.state.Tools.PriceFormat(HargaBaca, 2, ',', '.') }` : '0'
                            }}</span>
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

    export default {
        name: 'Infografik',
        components: {
            Suggestion, 
            LoadingScreen
        },
        data () {
            return {
                linkBack: null,
                suggestions: [],
                infografikDetail: [],
                HargaBaca: 0,
                ConfigApi: {
                    headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token },
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/graphics/` + this.$route.params.id,
                },
                infografikSuggestions: null,
                ConfigApiSuggestion: { url: `${ this.$store.state.Headers.BaseUrlApi }/api/Configs/mainpage` },
            }
        },
        async beforeMount() {
            this.linkBack = window.location.search
            this.getData()
            this.getSuggestion()
        },

        methods: {
            async downloadInfografik() {
                this.$store.commit('setLoadingScreen', true)
                this.$store.commit('setLoadingImage', 'loading')
                this.$store.commit('setLoadingText', 'loading...')
                let config = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Downloads/graphics/${ this.infografikDetail.reference_id }`,
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
                this.$store.commit('setLoadingScreen', false)
                try {
                    let dataInfografik = await Axios(this.ConfigApi)
                    this.infografikDetail = dataInfografik.data
                    let tanggal = this.infografikDetail.creation_date.substring(0, 10)
                    let configPayment = {
                        url: `${ this.$store.state.Headers.BaseUrlApi }/api/Prices/Product?productid=${ 9 }&opt1=0&opt2=0&opt3=0&docdate=${ tanggal }&size=0&quantity=1`,
                        method: 'GET', headers: { Authorization: `Bearer ${ this.$store.state.Login.UserData.token }` },
                    }

                    console.log(this.infografikDetail)

                    let hargaBaca = await Axios(configPayment)
                    if ( hargaBaca ) this.HargaBaca = hargaBaca.data.value
                    // this.$store.commit('setLoadingScreen', false)
                } catch (error) {
                    console.log(error)
                    // this.$store.commit('setLoadingText', 'terjadi kesalahan')
                }
            },

            async onMouseOverImages(el) {
                el.preventDefault()
                // console.log(el.target.getAttribute('dataImages'))
                // Get Real Elements
                var boxImages = el.target
                // var hiddenImages = document.querySelector(`#${ el.target.getAttribute('id') } img`)
                
                // Create Element Preview
                let createPreview = document.createElement('div')
                createPreview.setAttribute('id', `${ el.target.getAttribute('id') }-preview`)
                createPreview.setAttribute('onmouseover', removeEl())
                createPreview.setAttribute('class', `images-preview-infografik`)
                createPreview.style.width = `350px`
                createPreview.style.height = `350px`
                createPreview.style.backgroundColor = `#000`
                createPreview.style.position = 'absolute'
                createPreview.style.borderRadius = '10px'
                createPreview.style.backgroundColor = '#dedede'
                createPreview.style.left = `${ el.target.clientWidth + 25 }px`
                createPreview.style.top = '0px'
                createPreview.style.backgroundPosition = 'center'
                createPreview.style.backgroundRepeat = 'no-repeat'
                createPreview.style.backgroundSize = '200%'
                createPreview.style.zIndex = '99'
                createPreview.style.backgroundImage = `url('${ el.target.getAttribute('dataImages') }')`

                // Append Preview
                let imagesPreview = document.querySelectorAll(`.images-preview-infografik`)
                if ( imagesPreview.length <= 0 ) boxImages.append(createPreview)
                else console.log('images-preview has created!')

                // Insert Preview Listener
                boxImages.addEventListener('mousemove', (me) => {
                    let pos = getCursorPos(me)
                    let x = pos.x, y = pos.y

                    console.log(x, y)
                    console.log(`Width : ${ el.target.clientWidth }px`)
                    console.log(`Width Percentage : ${ (x / el.target.clientWidth) * 100 }%`)
                    console.log(`Height : ${ el.target.clientHeight }px`)
                    console.log(`Height Percentage : ${ (y / el.target.clientHeight) * 100 }%`)
                    
                    let preview = document.querySelector(`#${ me.target.getAttribute('id') } .images-preview-infografik`)
                    preview.style.backgroundPosition = `${ (x / el.target.clientWidth) * 100 }% ${ (y / el.target.clientHeight) * 100 }%`
                })
                
                // Get Cursor Position
                function getCursorPos(e) {
                    var a, x = 0, y = 0
                    e = e || window.event
                    /* Get the x and y positions of the image: */
                    a = boxImages.getBoundingClientRect()
                    /* Calculate the cursor's x and y coordinates, relative to the image: */
                    x = e.pageX - a.left
                    y = e.pageY - a.top
                    /* Consider any page scrolling: */
                    x = x - window.pageXOffset
                    y = y - window.pageYOffset
                    return {x : x, y : y}
                }

                function removeEl() {
                    document.querySelectorAll('.images-preview-infografik').forEach(el => el.remove() )
                }
            },

            async onMouseLeaveImages() {
                document.querySelectorAll('.images-preview-infografik').forEach(el => el.remove() )
            },

            async getSuggestion() {
                let dataSuggestions = await Axios(this.ConfigApiSuggestion)
                let suggestionTemp = JSON.parse(dataSuggestions.data.value)


                for (let index = 0; index < suggestionTemp.mainpage.length; index++) {
                    if (suggestionTemp.mainpage[index].name_component === 'infografik') {
                        this.infografikSuggestions = suggestionTemp.mainpage[index].data.data
                        console.log(this.infografikSuggestions);
                    }
                }

                for (let i = 0; i < 3; i++) {
                    let suggestion = {
                        'id': this.infografikSuggestions[i].document_id,
                        'images': this.infografikSuggestions[i].image_source,
                        'title': this.infografikSuggestions[i].title,
                        'source': `${ this.infografikSuggestions[i].created_source }, ${ this.$store.state.Tools.ChangeDateString(this.infografikSuggestions[i].created_date.substring(0, 10)) }`,
                    }
                    this.suggestions.push(suggestion)
                }
            }
        }
    }
</script>

<style>
    .images-prevbox {
        cursor: pointer;
    }
</style>