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
                            <div
                                @mouseover="onMouseOverImages"
                                @mouseleave="onMouseLeaveImages"
                                class="images-div"
                                :id="`images-div-id-${ infografik.document_id }`"
                                :dataImages="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`"
                                :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }')`"
                            >
                                <img
                                    :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`"
                                    alt="" class="infografik-image"
                                    :id="`images-div-id-${ infografik.document_id }-image`"
                                />
                            </div>
                            <!-- <div
                                @mouseover="onMouseOverImages"
                                @mouseleave="onMouseLeaveImages"
                                class="images-div"
                                :id="`images-div-id-${ infografik.document_id }`"
                            >
                                <img
                                    :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`"
                                    alt="" class="infografik-image"
                                    style="display: none;"
                                />
                            </div> -->
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
        props: [ 'dataInfografiks', 'totalSearch' ],
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
            // async onMoveImages() {
            //     console.log('here images..')
            // },

            async onMouseOverImages(el) {
                el.preventDefault()
                // console.log(el.target.getAttribute('dataImages'))
                // Get Real Elements
                var boxImages = el.target
                // var hiddenImages = document.querySelector(`#${ el.target.getAttribute('id') } img`)
                
                // Create Element Preview
                let createPreview = document.createElement('div')
                createPreview.setAttribute('id', `${ el.target.getAttribute('id') }-preview`)
                createPreview.setAttribute('class', `images-preview-infografik`)
                createPreview.style.width = `${ el.target.clientWidth }px`
                createPreview.style.height = `${ el.target.clientHeight }px`
                createPreview.style.backgroundColor = `#000`
                createPreview.style.position = 'absolute'
                createPreview.style.borderRadius = '10px'
                createPreview.style.backgroundColor = '#dedede'
                createPreview.style.left = `${ el.target.clientWidth + 25 }px`
                createPreview.style.top = '0px'
                createPreview.style.backgroundPosition = 'center'
                createPreview.style.backgroundSize = '125%'
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
            },

            async onMouseLeaveImages() {
                document.querySelectorAll('.images-preview-infografik').forEach(el => el.remove() )
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

    .images-div .images-preview {
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: 300%;
        background-color: #574c4c;
        background-position: left 0 top 0;
        top: 0;
        right: -10px;
        display: none;
    }
</style>