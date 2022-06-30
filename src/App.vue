<template>
    <section>
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

    export default {
        name: 'App',
        components: { TopNav, MainNav, Footer, TopBarReflection },
        mounted() {
            console.log(this.$store.state)
        },
    }
</script>

<style>
    @import '/assets/css/main.css';
    
    body {
        overflow-x: hidden;
    }

    #content-box {
        padding-top: 10%;
    }
</style>
