<template>
    <div class="row line-bot full mt-3">
        <div class="col-12" v-if="infografiksData ? infografiksData.length <= 0 : null">
            <span>Data pencarian sudah melebihi batas maksimal page. Silahkan cari data dengan kata kunci yang lebih spesifik...</span>
        </div>
        <div class="col-12" v-if="infografiksData ? infografiksData.length > 0 : null">
            <p class="f14 mt-4">
                Total Search : <span class="f14">{{ total_search }} data</span>
            </p>
            <div v-for="(infografik, i) in infografiks" :key="i" class="content borderless">
                <div class="row">
                    <div class="col-sm-4 my-3">
                        <!-- <a :href="`/infografik-detail/${ infografik.document_id }${ linkBack }`"> -->
                            <!-- <div v-on:click="onMouseOverImages" class="images-div" :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }')`"></div> -->
                            <div
                                @mouseover="onMouseOverImages"
                                @mouseleave="onMouseLeaveImages"
                                class="images-div"
                                :id="`images-div-id-${ infografik.document_id }`"
                            >
                                <img :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`" alt="" class="infografik-image" />
                            </div>
                            <!-- <div class="images-div">
                                <img v-on:click="onMouseOverImages" :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`" alt="" class="infografik-image w-100">
                            </div> -->
                        <!-- </a> -->
                    </div>
                    <div class="col-sm-8 my-3">
                        <div class="desc">
                            <h3 class="subtitle">
                                <a :href="`/infografik-detail/${ infografik.document_id }${ linkBack }`">
                                    <div v-html="infografik.title"></div>
                                </a>
                            </h3>
                            <!-- <p class="short-text three">{{ infografik.desc }}</p> -->
                            <span class="date-time">
                                <i class="fas fa-clock"></i> {{ infografik.publication }}, {{ infografik.published_date ? this.$store.state.Tools.ChangeDateString(infografik.published_date.substring(0, 10)) : this.$store.state.Tools.ChangeDateString(infografik.published_date.substring(0, 10)) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="col-12 mt-3 text-center">
            <a href="#AllTabs04" class="btn btn-line">Lihat Lainnya</a>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Infografik',
        props: [ 
            'dataInfografiks', 'totalSearch'
        ],

        data (){
            return{
                linkBack: null,
                infografiks: this.dataInfografiks,
                infografiksData: [],
                total_search: 0,
            }
        },

        async beforeMount() {
            this.linkBack = window.location.search
            this.infografiks = this.dataInfografiks
            this.infografiksData = this.dataInfografiks
            this.total_search = this.totalSearch
        },
        
        async mounted() {
            this.linkBack = window.location.search
            this.infografiks = this.dataInfografiks
            this.infografiksData = this.dataInfografiks
            this.total_search = this.totalSearch
        },

        async updated() {
            this.infografiks = this.dataInfografiks
            this.infografiksData = this.dataInfografiks
            this.total_search = this.totalSearch
        },


        methods: {
            async onMouseOverImages(el) {
                this.magnify(
                    el.target.getAttribute('id'),
                    el.target.clientWidth,
                    el.target.clientHeight, 3
                )
            },

            async onMouseLeaveImages() {
                let magnifierGlass = document.querySelectorAll(".img-magnifier-glass")
                if ( magnifierGlass.length > 0 ) magnifierGlass.forEach(el => el.remove())
            },

            magnify(imgID, wBox, hBox, zoom) {
                console.log(imgID, zoom)
                let boxImages = document.getElementById(imgID)
                let widthBox = wBox, heightBox = hBox
                console.log(widthBox, heightBox)

                console.log(boxImages)

                let boxPreview = document.createElement('div')
                boxPreview.style.width = '175px'
                boxPreview.style.height = '175px'
                boxPreview.style.position = 'absolute'
                boxPreview.style.backgroundColor = "#dedede"
                boxPreview.style.left = wBox + 25 + 'px'
                boxPreview.style.top = '0px'
                

                boxImages.insertBefore(boxPreview, document.querySelector(`#${ imgID } img`))
            }
        }
    }
</script>

<style>
    .images-div {
        width: 100%;
        height: 175px;
        background-color: #dedede;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .images-div img {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        width: auto !important;
    }
</style>