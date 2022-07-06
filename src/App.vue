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
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                },
            }
        },

        beforeMount() {
            this.checkingCookies()
        },
        mounted() {
            // this.getDataUser()
            console.log(this.$store.state.Login)
        },
        methods: {
            async checkingCookies() {
                if ( !this.$store.state.Tools.GetCookies('_km_dtl_d') ) {
                    console.log('cookies data is not detected !')
                    console.log(this.$store.state.Tools.GetCookies('_km_dtl_s'))
                    console.log(this.$store.state.Tools.GetCookies('_km_dtl_d'))

                    this.checkTokenKompas()
                } else {
                    console.log('success to get cookies data !')
                    console.log(this.$store.state.Tools.GetCookies('_km_dtl_s'))
                    console.log(this.$store.state.Tools.GetCookies('_km_dtl_d'))

                    this.checkTokenKompas()
                }
            },

            async checkTokenKompas() {
                if ( !this.$store.state.Tools.GetCookies('kompas._token') ) {
                    console.log('token kompas is not found..', 'trying to get token again...')
                } else {
                    console.log('success to get token kompas')
                    this.getUserData()
                }
            },
            
            async getUserData() {
                try {
                    // Get data user profile after get token
                    let getData = await Axios(this.configToken)
                    let configData = getData.data
                    
                    // set encryption for data
                    configData.token = this.$store.state.Tools.GetCookies('kompas._token')
                    console.log({ NewToken: configData })
                    this.$store.commit('setEncrypt', JSON.stringify(configData))
                    const data = this.$store.state.Login.LoginData
                    this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_d', 'data': data, 'days' : 1 })
                    this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_s', 'data': true, 'days' : 1 })
                    window.location.href = '/'
                } catch(err) {
                    console.log(err)
                }  
            },

            async getTokenKompas() {
                try {
                    let getRefreshTokenFromCookie = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh')
                    console.log(getRefreshTokenFromCookie)
                } catch(err) {
                    console.log(err)
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
