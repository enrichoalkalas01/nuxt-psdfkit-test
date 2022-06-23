<template>
    <section id="dashboard" class="container-fluid">
        <LoadingScreen />
        <div class="row box-dashboard">
            <SideBar />
            <div class="col-9 py-3 box-cd" id="box-cd">
                <router-view></router-view>
            </div>
        </div> 
    </section>
</template>

<script>
    import SideBar from './SideBar.vue'
    import LoadingScreen from '../addons/LoadingScreen.vue'
    export default {
        name: "MainPage",
        components: { SideBar, LoadingScreen },
        beforeMount() {
            if ( !this.$store.state.Login.LoginStatus ) {
                this.$store.commit('setLoadingScreen', true)
                this.$store.commit('setLoadingImage', 'failed');
                this.$store.commit('setLoadingText', 'ups, anda belum login...');
                setTimeout(() => { window.location.href = '/login' }, 1000)
            }
        }
    }
</script>

<style>
    @import './css/dashboard.css';
    @import './Chat/chat.css';
    @import './css/responsive.css';
</style>
