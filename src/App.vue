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
    import Axios from 'axios'

    export default {
        name: 'App',
        components: { TopNav, MainNav, Footer, TopBarReflection },
        data() {
            return {
                configToken: {
                    method: 'get', url: `https://data-api-dev.kompas.id/api/Login/user-info`,
                    headers: { Authorization: `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                },
            }
        },

        beforeMount() {
            console.log(this.$store.state.Login)
        },
        mounted() {
            console.log(this.$store.state.Login)
            this.checkingRefreshToken()
        },
        methods: {
            async autoLoginSSO() {

            },

            async checkingRefreshToken() {
                try {
                    let secretRefreshTokenCookies = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { withCredentials: true })
                    console.log(secretRefreshTokenCookies)
                } catch (error) {
                    console.log(error)
                }
            }
        }
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
