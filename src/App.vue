<template>
    <section>
        <section class=" fixed-top">
            <TopNav />
            <MainNav />
        </section>
        <section id="content-box">
            <router-view />
        </section>
    </section>
</template>

<script>
    import TopNav from './components/headers/TopNav.vue'
    import MainNav from './components/headers/MainNav.vue'
    export default {
        name: 'App',
        components: {
            TopNav, MainNav
        },
    }
</script>

<style>
    @import '/assets/css/main.css';
</style>
