<template>
    <section id="loading-screen" v-if="this.$store.state.Tools.LoadingScreenStatus">
        <div class="wrapper-lc">
            <div class="box-data">
                <div class="close-button" v-if="this.$store.state.Tools.CloseButtonStatus" v-on:click="CloseButton">x</div>
                <div class="box-image">
                    <div class="image" v-if="this.$store.state.Tools.LoadingImage" :style="`background-image: url('${ ImageLoading }')`"></div>
                    <div class="image" v-if="this.$store.state.Tools.LoadingFailed" :style="`background-image: url('${ ImageFailed }')`"></div>
                    <div class="image" v-if="this.$store.state.Tools.LoadingSuccess" :style="`background-image: url('${ ImageSuccess }')`"></div>
                </div>
                <div class="box-message">
                    <!-- <span>{{ textMessage }}</span> -->
                    <div v-html="textMessage"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import LoadingImage from '../../assets/images/loading-screen-one.gif'
    import FailedImage from '../../assets/images/failed-icon.png'
    import SuccessImage from '../../assets/images/success-icon.png'

    export default {
        name: "LoadingScreen",
        props: ['status'],
        data() {
            return {
                statusScreen: this.$store.state.Tools.LoadingScreenStatus,
                textMessage: this.$store.state.Tools.LoadingScreenText,
                ImageLoading: LoadingImage,
                ImageFailed: FailedImage,
                ImageSuccess: SuccessImage
            }
        },

        watch: {
            '$store.state.Tools.LoadingScreenText': function(oldValue, newValue) {
                console.log(oldValue, newValue)
                if ( oldValue !== this.$store.state.Tools.LoadingScreenText ) {
                    this.textMessage = oldValue
                } else {
                    this.textMessage = oldValue
                }
            }
        },

        mounted() {
            this.statusScreen = this.$store.state.Tools.LoadingScreenStatus
            this.textMessage = this.$store.state.Tools.LoadingScreenText
            // console.log(`Loading Screen Status : ${ this.$store.state.Tools.LoadingScreenStatus }`)
            let body = document.querySelector("body")
            if ( this.statusScreen ) {
                body.style.overflow = 'hidden !important'
            } else {
                body.style.overflow = 'unset !important'
                body.style.overflow = 'unset !important'
            }
        },

        updated() {
            this.statusScreen = this.$store.state.Tools.LoadingScreenStatus
            this.textMessage = this.$store.state.Tools.LoadingScreenText
            // console.log(`Loading Screen Status : ${ this.$store.state.Tools.LoadingScreenStatus }`)
            let body = document.querySelector("body")
            if ( this.statusScreen ) {
                body.style.overflow = 'hidden !important'
            } else {
                body.style.overflow = 'unset !important'
                body.style.overflow = 'unset !important'
            }
        },

        methods: {
            CloseButton() {
                this.$store.commit('setLoadingScreen', false)
                this.$store.commit('setLoadingImage', 'loading')
                this.$store.commit('setLoadingText', 'Loading...')
                this.$store.commit('setCloseStatus', false)
            }
        }
    }
</script>

<style>
    @import './loadingscreen.css';
</style>