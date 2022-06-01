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
        data() {
            return {
                statusScreen: false,
                textMessage: 'Loading....',
            }
        }
    }
</script>

<style>
    @import './loadingscreen.css'
</style>