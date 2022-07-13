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
                configRefreshToken:{ method: 'get', url: `https://data-api-dev.kompas.id/api/Login/kompas-token-refresh`, withCredentials: true },
                configToken: {
                    method: 'get', url: `https://data-api-dev.kompas.id/api/Login/user-info`,
                    headers: { Authorization: `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                },
            }
        },

        async mounted() {
            this.autoLoginSSOFixed()
        },

        methods: {
            async autoLoginSSOFixed() {
                this.checkAndGetRefreshToken()
            },

            async checkAndGetRefreshToken() {
                try {
                    let refreshToken = await Axios(this.configRefreshToken)
                    if ( refreshToken.status === 204 || refreshToken.data === '' ) console.log('refresh token is not detected !')
                    else {
                        console.log(refreshToken.data)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style>
    @import '/assets/css/main.css';
    body { overflow-x: hidden; }
    #content-box { padding-top: 10%; }
</style>
