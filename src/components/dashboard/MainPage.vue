<template>
    <section id="dashboard" class="container-fluid">
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
    export default {
        name: "MainPage",
        components: {
            SideBar
        },
        
        beforeMount() {
            if ( !this.$store.state.Login.LoginStatus ) window.location.href = '/login'
        }
    }
</script>

<style>
    @import './dashboard.css';
</style>
