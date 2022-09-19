<template>
    <div class="row pt-3 line-bot full">
        <Splide :options="SliderConfig">
            <SplideSlide
                v-for="(foto, i) in fotos" :key="i"
            >
                <div class="box-image col-12 col-md-9 text-center">
                    <a :href="`/foto-detail/${ foto.document_id }${ linkBack }`" class="content borderless info-ctn">
                        <img :src="`${ this.$store.state.Tools.GetUrlFiles + foto.preview }`" class="img-square32 rounding" alt="">
                    </a>
                </div>
            </SplideSlide>
        </Splide>
        <div v-if="currentTabs === 'all'" class="mt-3 d-flex justify-content-center">
            <a v-on:click="changeScreen" class="btn btn-second">Foto lainnya</a>
        </div>
        <p class="f14 mt-4">
            Menemukan : <span class="f14">{{ total_search }} data</span>
            <span class="notif-total" v-if="total_search >= 10000"> ( *maks. menampilkan  {{ total_search }} data )</span>
        </p>
    </div>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import '@splidejs/splide/dist/css/themes/splide-default.min.css'

    export default {
        name: 'Foto',
        components: {
            Splide,
            SplideSlide,
        },
        props: [
            'dataFotos', 'totalSearch', 'tabs'
        ],
        data() {
            return {
                linkBack: null,
                SliderConfig: {
                    updateOnMove: true,
                    type: 'loop',
                    // focus: 'center',
                    rewind : true,
                    perPage: 3,
                    pagination: false
                },
                fotos: null,
                total_search: 0,
                currentTabs: null,
            }
        },

        async mounted() {
            this.linkBack = window.location.search
            this.fotos = this.dataFotos
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        async updated() {
            this.fotos = this.dataFotos
            this.total_search = this.totalSearch
            this.currentTabs = this.tabs
        },

        methods: {
            changeScreen() {
                let tabsName = "Tabs03"
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
            }
        }
    }
</script>

<style>
    .splide__slide .box-image {
        margin: auto;
        width: 90%;
    }

    #splide01 .splide__arrow--next {
        right: -1em !important;
    }

    #splide01 .splide__arrow--prev {
        left: -1em !important;
    }
</style>