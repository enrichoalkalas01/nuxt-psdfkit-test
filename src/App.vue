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
            }
        },

        async beforeMount() {
            this.autoLoginSSOFixed()
        },

        methods: {
            async autoLoginSSOFixed() {
                this.runAuth()
            },

            async runAuth() {
                console.log('here')
                this.checkAndGetRefreshToken()
                
                setTimeout(() => {
                    this.runAuth()
                }, 600000)
            },

            async checkAndGetRefreshToken() {
                try {
                    let refreshToken = await Axios(this.configRefreshToken)
                    if ( refreshToken.status === 204 || refreshToken.data === '' ) {
                        // if refresh token is not detected, delete all cookies status & data
                        console.log('refresh token is not detected !')
                        this.deleteCookiesData()
                    } else {
                        console.log('refresh token is detected !')
                        this.getTokenKompas(refreshToken.data)
                    }
                } catch (error) {
                    console.log(error.message)
                    console.log('failed to get refresh token, reload / refresh the page !')
                    this.deleteCookiesData()
                }
            },

            async deleteCookiesData() {
                this.$store.commit('setLoginStatus', false)
                this.$store.state.Tools.deleteCookies('kompas._token') // delete token status if exist
                this.$store.state.Tools.deleteCookies('_km_dtl_s') // delete cookies status
                this.$store.state.Tools.deleteCookies('_km_dtl_d') // delete cookies data
            },

            async getTokenKompas(refreshToken) {
                console.log(refreshToken)
            },
        }
    }
</script>

<style>
    @import '/assets/css/main.css';
    body { overflow-x: hidden; }
    #content-box { padding-top: 10%; }
</style>
