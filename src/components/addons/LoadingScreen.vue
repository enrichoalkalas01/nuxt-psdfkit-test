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
                textMessage: 'Loading....',
            }
        },
        mounted() {
            this.statusScreen = this.$store.state.Tools.LoadingScreenStatus
            console.log(`Loading Screen Status : ${ this.$store.state.Tools.LoadingScreenStatus }`)
            let body = document.querySelector("body")
            if ( this.statusScreen ) body.style.overflow = 'hidden'
            body.style.overflow = 'unset'
        },
    }
</script>

<style>
    @import './loadingscreen.css';
</style>