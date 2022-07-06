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
            this.checkingCookies()
        },
        mounted() {
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
                if ( !this.getRefreshTokenData() ) {
                    console.log('refresh token not detected!')
                    this.$store.commit('LogOut')
                } else {
                    console.log('refresh token is detected!')
                    if ( !this.$store.state.Tools.GetCookies('kompas._token') ) {
                        console.log('token kompas is not found..', 'trying to get token again...')
                        this.$store.commit('LogOut')
                        this.getTokenKompas(this.getRefreshTokenData())
                    } else {
                        console.log('success to get token kompas')
                        this.getUserData()
                    }
                }
            },
            
            async getUserData() {
                try {
                    // Get data user profile after get token
                    let getDataUser = await Axios(this.configToken)
                    let configData = getDataUser.data
                    
                    // set encryption for data
                    configData.token = this.$store.state.Tools.GetCookies('kompas._token')
                    console.log({ NewToken: configData })
                    this.setCookiesLoginUser(configData)

                    if ( !this.$store.state.Tools.GetCookies('_km_dtl_s') ) window.location.href = '/'
                } catch(err) {
                    console.log(err)
                }  
            },

            async setCookiesLoginUser(newUserData) {
                this.$store.commit('setEncrypt', JSON.stringify(newUserData))
                const data = this.$store.state.Login.LoginData
                this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_d', 'data': data, 'minutes' : 5 })
                this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_s', 'data': true, 'minutes' : 5 })
            },

            async getRefreshTokenData() {
                try {
                    let getRefreshTokenFromCookie = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { withCredentials: true })
                    console.log(getRefreshTokenFromCookie)
                    if ( getRefreshTokenFromCookie.data != '' || getRefreshTokenFromCookie.data != null || getRefreshTokenFromCookie.data != undefined ) return getRefreshTokenFromCookie.data
                    else return false
                } catch(err) {
                    console.log(err)
                    return false
                }
            },

            async getTokenKompas(refreshTokenValue) {
                try {
                    let getAccessToken = await Axios({
                        method: 'post', url: 'https://api.kompas.id/account/api/v1/tokens/refresh',
                        data: JSON.stringify({ refreshToken: refreshTokenValue })
                    })

                    this.configToken.headers.Authorization = getAccessToken.data.data.accessToken
                    let getDataUser = await Axios(this.configToken)

                    let configData = getDataUser.data
                    configData.token = getAccessToken.data.data.accessToken
                    
                    this.$store.state.Tools.createCookieMinute('kompas._token', getAccessToken.data.data.accessToken, 10)
                    this.setCookiesLoginUser(configData)

                    console.log(refreshTokenValue)
                    console.log(getAccessToken)
                    console.log(getDataUser)

                    window.location.href = '/'
                } catch(err) {
                    console.log(err)
                }

                // fetch('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { credentials: 'include'})
                // .then(response => response.text())
                // .then(result => console.log(result))
                // .catch(err => console.log(err))
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
