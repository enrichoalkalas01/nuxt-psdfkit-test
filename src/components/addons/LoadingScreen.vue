<template>
    <section id="loading-screen" v-if="this.$store.state.Tools.LoadingScreenStatus">
        <div class="wrapper-lc">
            <div class="box-data">
                <div class="box-image">
                    <div class="image"></div>
                </div>
                <div class="box-message">
                    <span>{{ textMessage }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "LoadingScreen",
        props: ['status'],
        data() {
            return {
                statusScreen: this.$store.state.Tools.LoadingScreenStatus,
                textMessage: this.$store.state.Tools.LoadingScreenText,
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
            console.log(`Loading Screen Status : ${ this.$store.state.Tools.LoadingScreenStatus }`)
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
            console.log(`Loading Screen Status : ${ this.$store.state.Tools.LoadingScreenStatus }`)
            let body = document.querySelector("body")
            if ( this.statusScreen ) {
                body.style.overflow = 'hidden !important'
            } else {
                body.style.overflow = 'unset !important'
                body.style.overflow = 'unset !important'
            }
        }
    }
</script>

<style>
    @import './loadingscreen.css';
</style>