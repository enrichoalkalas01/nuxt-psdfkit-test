<template>
    <section>
        <LoadingScreen />
        <section>
            <TopBarReflection />
        </section>
        <section class="fixed-top">
            <TopNav />
            <MainNav />
        </section>
        <section id="content-box">
            <router-view />
        </section>
        <section id="footer-box">
            <Footer />
        </section>
    </section>
</template>

<script>
    import TopBarReflection from './components/dashboard/TopBarReflection.vue'
    import TopNav from './components/headers/TopNav.vue'
    import MainNav from './components/headers/MainNav.vue'
    import Footer from './components/headers/Footer.vue'
    
    // Addons
    import LoadingScreen from './components/addons/LoadingScreen.vue'

    export default {
        name: 'App',
        components: { TopNav, MainNav, Footer, TopBarReflection, LoadingScreen },
    }
</script>

<style>
    @import '/assets/css/main.css';

    #content-box {
        padding-top: 10%;
    }
</style>
