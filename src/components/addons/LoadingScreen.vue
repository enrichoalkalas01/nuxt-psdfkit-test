<template>
    <section id="loading-screen" v-if="statusScreen">
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
        props: ['screenStatus'],
        data() {
            return {
                statusScreen: false,
                textMessage: 'Loading....',
            }
        },
        mounted() {
            this.statusScreen = this.screenStatus
            
            let body = document.querySelector("body")
            if ( this.statusScreen ) body.style.overflow = 'hidden'
            else body.style.overflow = 'unset'
        }
    }
</script>

<style>
    @import './loadingscreen.css'
</style>