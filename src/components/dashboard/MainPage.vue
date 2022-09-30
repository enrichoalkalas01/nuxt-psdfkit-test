<template>
    <section id="dashboard" class="container-fluid">
        <LoadingScreen />
        <div class="row box-dashboard" style="poisition: relative;">
            <SideBarNew />
            <!-- <div class="col-9 py-3 box-cd" id="box-cd">
                <router-view></router-view>
            </div> -->
            <section id="content-dashboard">
                <router-view></router-view>
            </section>
        </div> 
    </section>
</template>

<script>
    // import SideBar from './SideBar.vue'
    import SideBarNew from './SideBarNew.vue'
    import LoadingScreen from '../addons/LoadingScreen.vue'
    export default {
        name: "MainPage",
        components: { SideBarNew, 
            LoadingScreen 
        },
        beforeMount() {
            if ( !this.$store.state.Login.LoginStatus ) {
                this.$store.commit('setLoadingScreen', true)
                this.$store.commit('setLoadingImage', 'warning');
                this.$store.commit('setLoadingText', 'ups, anda belum login...');
                setTimeout(() => { window.location.href = '/' }, 1000)
            }
        }
    }
</script>

<style>
    @import './css/dashboard.css';
    @import './Chat/chat.css';
    @import './css/responsive.css';
    @import './css/sidebar_new.css';
</style>
