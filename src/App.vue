<template>
    <section>
        <section class="fixed-top">
            <TopNav />
            <MainNav />
        </section>
        <section id="content-box" style="padding-top: 12.5%;">
            <router-view />
        </section>
        <section id="footer-box">
            <Footer />
        </section>
    </section>
</template>

<script>
    import TopNav from './components/headers/TopNav.vue'
    import MainNav from './components/headers/MainNav.vue'
    import Footer from './components/headers/Footer.vue'
    export default {
        name: 'App',
        components: { TopNav, MainNav, Footer },
    }
</script>

<style>
    @import '/assets/css/main.css';
</style>
