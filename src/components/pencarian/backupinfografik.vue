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
                    <div class="col-sm-4 my-3 img-magnifier-container">
                        <!-- <a :href="`/infografik-detail/${ infografik.document_id }${ linkBack }`"> -->
                            <div
                                class="images-div-infografik-search d-flex justify-center align-center"
                                :style="`background-image: url('${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }')`"
                                :id="`images-div-infografik-search-id-${ infografik.document_id }`"
                                :data-images="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`"
                                @mouseover="imagesOnMouseOver"
                                @mouseleave="imagesOnMouseLeave"
                            >
                                <img
                                    style="width: auto; heigth: auto; max-width: 100%; max-height: 100%; margin: auto;"
                                    :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`"
                                />
                            </div>
                            <!-- <img :src="`${ this.$store.state.Tools.GetUrlFiles + infografik.thumbnail }`" alt="" class="infografik-image w-100"> -->
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
            imagesOnMouseOver(el) {
                let width = el.target.offsetWidth
                let height = el.target.offsetHeight
                this.magnify(el.target.getAttribute('id'), width, height, 2)
            },

            imagesOnMouseLeave() {
                let glass = document.querySelector(".img-magnifier-container .img-magnifier-glass") 
                glass.remove()
            },

            async magnify(imgID, widthImages, heightImages, zoom) {
                var glass, w, h, bw
                var img = document.getElementById(imgID)
                /* create magnifier glass: */
                glass = document.createElement("div")
                glass.setAttribute("class", "img-magnifier-glass")
                /* insert magnifier glass: */
                img.parentElement.insertBefore(glass, img)
                /* set background properties for the magnifier glass: */
                glass.style.backgroundImage = "url('" + img.getAttribute('data-images') + "')"
                glass.style.backgroundRepeat = "no-repeat"
                glass.style.backgroundSize = (widthImages * zoom) + "px " + (heightImages * zoom) + "px"

                bw = 3
                w = widthImages / 2
                h = heightImages / 2

                console.log(imgID, widthImages, heightImages, zoom, w, h, bw)

                console.log(img.getBoundingClientRect())

                /* execute a function when someone moves the magnifier glass over the image: */
                glass.addEventListener("mousemove", moveMagnifier)
                img.addEventListener("mousemove", moveMagnifier)
                // /* and also for touch screens: */
                // glass.addEventListener("touchmove", moveMagnifier)
                // img.addEventListener("touchmove", moveMagnifier)

                async function moveMagnifier(e) {
                    var pos, x, y
                    /* prevent any other actions that may occur when moving over the image */
                    e.preventDefault()
                    /* get the cursor's x and y positions: */
                    pos = getCursorPos(e)
                    x = pos.x
                    y = pos.y
                    let realX = pos.x
                    let realY = pos.y

                    console.log(`Ini Real-X : ${ realX }`)
                    console.log(`Ini Real-Y : ${ realY }`)
                    /* prevent the magnifier glass from being positioned outside the image: */
                    if (x > widthImages - (w / zoom)) {
                        x = widthImages - (w / zoom)
                    }
                    if (x < w / zoom) {
                        x = w / zoom
                    }
                    if (y > heightImages - (h / zoom)) {
                        y = heightImages - (h / zoom)
                    }
                    if (y < h / zoom) {
                        y = h / zoom
                    }
                    // /* set the position of the magnifier glass: */
                    // // glass.style.left = (x - w) + "px" // default
                    // // glass.style.top = (y - h) + "px" // default
                    // glass.style.left = (realX) + "px" // costume
                    // glass.style.top = (realY) + "px" // costume
                    // /* display what the magnifier glass "sees": */
                    // glass.style.backgroundPosition = "-" + (((x + 50) * zoom) - w + bw) + "px -" + (((y + 50)* zoom) - h + bw) + "px"
                    // glass.style.backgroundPosition = "-" + ((realX * zoom) - w + bw) + "px -" + ((realY * zoom) - h + bw) + "px"
                }

                function getCursorPos(e) {
                    var a, x = 0, y = 0
                    e = e || window.event
                    /* get the x and y positions of the image: */
                    a = img.getBoundingClientRect()
                    /* calculate the cursor's x and y coordinates, relative to the image: */
                    x = e.pageX - a.left
                    y = e.pageY - a.top
                    /* consider any page scrolling: */
                    x = x - window.pageXOffset
                    y = y - window.pageYOffset
                    return {x : x, y : y}
                }  
            },
        }
    }
</script>

<style>
    .images-div-infografik-search {
        width: 100%;
        height: 175px;
        background-color: #dedede;
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 100%;
        border-radius: 5px;
    }

    .img-magnifier-glass {
        position: absolute;
        border: 3px solid #000;
        border-radius: 50%;
        cursor: none;
        /*Set the size of the magnifier glass:*/
        width: 200px;
        height: 200px;
        z-index: 999999;
    }

    .img-magnifier-container {
        position:relative;
    }
</style>