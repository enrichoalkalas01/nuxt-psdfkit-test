<template>
    <div class="row line-bot full mt-3 pb-4">
        <div class="col-12" v-if="infografiksData ? infografiksData.length <= 0 : null">
            <span>Data pencarian sudah melebihi batas maksimal page. Silahkan cari data dengan kata kunci yang lebih spesifik...</span>
        </div>
        <div class="col-12" v-if="infografiksData ? infografiksData.length > 0 : null">
            <p class="f14 mt-4">
                Menemukan : <span class="f14">{{ total_search }} data</span>
                <span class="notif-total" v-if="total_search >= 10000"> ( *maks. menampilkan  {{ total_search }} data )</span>
            </p>
            <div v-for="(infografik, i) in infografiks" :key="i" class="content borderless">
                <div class="row">
                    <div class="col-sm-4 my-3">
                        <a :href="`/infografik-detail/${ infografik.document_id }${ linkBack }`">
                            <div
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
                        </a>
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
            <div v-if="currentTabs === 'all'" class="mt-3 d-flex justify-content-center">
                <a v-on:click="changeScreen" class="btn btn-second">Infografik lainnya</a>
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
        props: [ 'dataInfografiks', 'totalSearch', 'tabs' ],
        data (){
            return{
                linkBack: null,
                infografiks: this.dataInfografiks,
                infografiksData: [],
                total_search: 0,
                currentTabs: null,
            }
        },

        async beforeMount() {
            this.linkBack = window.location.search
            this.infografiks = this.dataInfografiks
            this.infografiksData = this.dataInfografiks
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },
        
        async mounted() {
            this.linkBack = window.location.search
            this.infografiks = this.dataInfografiks
            this.infografiksData = this.dataInfografiks
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        async updated() {
            this.infografiks = this.dataInfografiks
            this.infografiksData = this.dataInfografiks
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        methods: {
            changeScreen() {
                let tabsName = "Tabs04"
                let menu = document.querySelectorAll(".nav-tabs-search")
                let box = document.querySelectorAll(".komp-tab-content .tab-pane")
                let tabsMenu = document.querySelector(`#All-${ tabsName }`)
                let tabsBox = document.querySelector(`#All${ tabsName }`)

                menu.forEach(el => { el.classList.remove('active'); el.classList.remove('show'); })
                box.forEach(el => { el.classList.remove('active'); el.classList.remove('show'); })
                tabsMenu.classList.add('active')
                tabsMenu.classList.add('show')
                tabsBox.classList.add('active')
                tabsBox.classList.add('show')

                setTimeout(() => {
                    this.$store.state.Tools.scrollTo({ element_scroll: `All${ tabsName }`, offsett: 250 })
                }, 50)
            },
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