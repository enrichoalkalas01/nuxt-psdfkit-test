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

        watch: {
            '$store.state.Login.RefreshToken': async function(newVal, oldVal) {
                if ( oldVal != newVal ) {
                    console.log(oldVal, newVal)
                    if ( newVal === '' || newVal === null ) {
                        this.checkRefreshToken()
                        setTimeout(() => this.$store.commit('setRefreshToken', null))
                    } else {
                        // if refresh token is detected !
                        this.checkTokenKompas(newVal)
                    }
                }
            },

            '$store.state.Login.TokenData': async function(newVal, oldVal) {
                console.log(oldVal, newVal)
                if ( oldVal != newVal ) {
                    
                    if ( newVal === '' || newVal === null ) {
                        this.$store.commit('setTokenAccess', 'from-token')
                        setTimeout(() => this.$store.commit('setTokenAccess', 'from-token-2'))
                    } else {
                        console.log(oldVal, newVal)
                    }
                }
            },
        },

        async mounted() {
            console.log(this.$store.state)
            setTimeout(() => this.$store.commit('setTokenAccess', 'from-token'))
            this.checkRefreshToken()
        },

        methods: {
            async checkRefreshToken() {
                try {
                    let refreshTokenKompasId = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { withCredentials: true })
                    this.$store.commit('setRefreshToken', refreshTokenKompasId.data)
                    return refreshTokenKompasId
                } catch (error) {
                    this.$store.commit('setRefreshToken', null)
                    console.log(error)
                    return false
                }
            },

            async checkTokenKompas(refreshToken) {
                if ( this.$store.state.Tools.GetCookies("kompas._token") ) {
                    this.$store.commit('setTokenAccess', this.$store.state.Tools.GetCookies("kompas._token"))
                    return this.$store.state.Tools.GetCookies("kompas._token")
                } else { this.getNewTokenKompas(refreshToken); return false }
            },

            async getNewTokenKompas(refreshToken) {
                try {
                    let tokenAccessKompas = await Axios({ url: 'https://api.kompas.id/account/api/v1/tokens/refresh', method: 'post', data: JSON.stringify({ refreshToken: refreshToken }) })
                    console.log(tokenAccessKompas.data.data)
                } catch (error) {
                    console.log('error')
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
