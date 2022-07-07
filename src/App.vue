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
        async mounted() {
            this.autoLoginSSO()
        },
        methods: {
            async autoLoginSSO() {
                try {
                    let refreshTokenCookies = await this.checkingRefreshToken()
                    let tokenCookies = await this.checkTokenKompas()
                    if ( !refreshTokenCookies ) console.log('refresh token has not detected!')
                    else {
                        if ( !tokenCookies ) {
                            // if access token is not detected
                            console.log('u dont have an access token !', 'trying to get access token...')
                            let newAccessToken = await this.getTokenKompasId(refreshTokenCookies)
                            if ( !newAccessToken ) setTimeout(() => window.location.href = '/', 1500)
                            else {
                                // set new token cookies & reload the page
                                this.deleteLoginData()
                                this.$store.state.Tools.createCookieMinute('kompas._token', newAccessToken.data.accessToken, 10)
                                window.location.href = "/"
                            }
                        } else {
                            // if access token has detected, try to getting user data
                            console.log('access token has detected', 'trying to get user data')
                            console.log('refresh token : ', refreshTokenCookies)
                            console.log('access token : ', tokenCookies)
                            
                            let userData = await this.getUserData(tokenCookies)
                            userData.token = tokenCookies
                            console.log(userData)
                            this.setCookiesLogin(userData)
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            },

            async checkingRefreshToken() {
                try {
                    let secretRefreshTokenCookies = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh', { withCredentials: true })
                    if ( secretRefreshTokenCookies.status !== 200 ) {
                        // if refresh token has not detected
                        console.log('refresh token has not detected!')
                        this.$store.commit('LogOut')
                        return false
                    } else {
                        // if refresh token has detected
                        console.log('refresh token has detected!')
                        let refreshTokenData = secretRefreshTokenCookies.data
                        return refreshTokenData
                    }
                } catch (error) {
                    console.log(error)
                    console.log('something error from getting a refresh token!')
                    return false
                }
            },

            async checkTokenKompas() {
                if ( !this.$store.state.Tools.GetCookies("kompas._token") ) return false
                else return this.$store.state.Tools.GetCookies("kompas._token")
            },

            async getTokenKompasId(refreshToken) {
                try {
                    let tokenData = await Axios({ url: 'https://api.kompas.id/account/api/v1/tokens/refresh', method: 'post', data: JSON.stringify({ refreshToken: refreshToken }) })
                    console.log('Successfull to getting new access token')
                    return tokenData.data
                } catch (error) {
                    console.log('failed to getting new access token')
                    console.log(error)
                    return false
                }
            },

            async getUserData(tokenCookies) {
                try {
                    let userData = await Axios({ url: 'https://data-api-dev.kompas.id/api/Login/user-info', method: 'get', headers: { 'Authorization': `Bearer ${ tokenCookies }` } })
                    console.log('successfull to get user data!')
                    if ( userData.status !== 200 ) return false
                    else return userData.data
                } catch (error) {
                    console.log('failed to get user data', error)
                    return false
                }
            },

            async setCookiesLogin(userData) {
                if ( !this.$store.state.Tools.GetCookies('_km_dtl_s') || !this.$store.state.Tools.GetCookies('_km_dtl_d') ) {
                    this.deleteLoginData()
                    this.$store.state.Tools.createCookieMinute('_km_dtl_d', Buffer.from(JSON.stringify(userData)).toString('base64'), 10)
                    this.$store.state.Tools.createCookieMinute('_km_dtl_s', true, 10)
                    setTimeout(() => window.location.href = '/', 1500)
                } else {
                    console.log('successfull to login sso')
                }
            },

            async deleteLoginData() {
                this.$store.state.Tools.deleteCookies('kompas._token'); this.$store.state.Tools.deleteCookies('_km_dtl_d')
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
