<template>
    <div style="width: 100%;">
        <!-- <swiper class="swiper" :options="swiperOption">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
            <swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide>
            <swiper-slide>Slide 9</swiper-slide>
            <swiper-slide>Slide 10</swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper> -->
        <!-- <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
        <Flicking 
            ref="flicking"
            :options="{ align: 'prev', circular: true }"
            @move-end="onMoveEnd"
        >
            <div class="panel">
                <img style="width: 100%" src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div class="panel">
                <img style="width: 100%" src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
            <div class="panel">
                <img style="width: 100%" src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80" />
            </div>
        </Flicking>
        <button v-on:click="nextClick">Test Next</button>
    </div>
</template>

<script>
    import Flicking from "@egjs/vue3-flicking";
    import "@egjs/vue3-flicking/dist/flicking.css";
    import "@egjs/vue3-flicking/dist/flicking-inline.css";
    import Axios from 'axios'

    // import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    // import 'swiper/css/swiper.css'

    export default {
        name: 'TestPlugin',
        components: { Flicking },
        // components: {
        //     Swiper,
        //     SwiperSlide
        // },

        data () {
            return {
                value: 0,
                // swiperOption: {
                //     navigation: {
                //         nextEl: '.swiper-button-next',
                //         prevEl: '.swiper-button-prev'
                //     }
                // }
                // swiperOptions: {
                //     pagination: {
                //         el: '.swiper-pagination'
                //     },
                // }
            }
        },

        mounted() {
            this.GetData()
        },

        methods: {
            nextClick() {
                this.$refs.flicking.next()
            },

            GetData() {
                Axios('https://my-json-server.typicode.com/typicode/demo/db').then(response => {
                    console.log(response)
                }).catch(err => {
                    console.log(err.message)
                })
            }
        }
    }
</script>

<style>
    /* @import url("node_modules/@egjs/vue-flicking/dist/flicking.css");
    @import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css"); */
</style>
