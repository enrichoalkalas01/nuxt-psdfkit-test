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
                        this.checkRefreshToken()
                    }
                }
            },
        },

        async mounted() {
            this.checkRefreshToken()
        },

        methods: {
            async checkRefreshToken() {
                try {
                    let refreshTokenKompasId = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { withCredentials: true })
                    this.$store.commit('setRefreshToken', refreshTokenKompasId.data)
                    return refreshTokenKompasId
                } catch (error) {
                    console.log(error)
                    return false
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
