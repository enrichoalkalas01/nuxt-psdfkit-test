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
    import TopBarReflection from "./components/dashboard/TopBarReflection.vue";
    import TopNav from "./components/headers/TopNav.vue";
    import MainNav from "./components/headers/MainNav.vue";
    import Footer from "./components/headers/Footer.vue";
    import Axios from "axios";

    export default {
        name: 'App',
        components: { TopNav, MainNav, Footer, TopBarReflection },
        data() {
            return {
                configRefreshToken:{ method: 'get', url: `${ this.$store.state.Headers.BaseUrlApi }/api/Login/kompas-token-refresh`, withCredentials: true },
            }
        },

        async beforeMount() {
            this.autoLoginSSOFixed();
        },

        methods: {
            async autoLoginSSOFixed() {
            this.runAuth();
        },

        async runAuth() {
            let date_exp = this.$store.state.Tools.GetCookies("_km_dtl_exp");
            console.log(date_exp);
            let expDate = Math.floor(new Date(date_exp).getTime() / 60000);
            let dateNow = Math.floor(new Date().getTime() / 60000);
            let timeOut = expDate - dateNow > 0 ? expDate - dateNow : 1;
            console.log(timeOut + " minute left");

            this.checkAndGetRefreshToken();

            setTimeout(() => {
                this.runAuth();
            }, timeOut * 60000);
        },

        async checkAndGetRefreshToken() {
            try {
                let refreshToken = await Axios(this.configRefreshToken);
                console.log(refreshToken.data)
                if (refreshToken.status === 204 || refreshToken.data === "") {
                    // if refresh token is not detected, delete all cookies status & data
                    console.log("refresh token is not detected !");
                    this.deleteCookiesData();
                } else {
                    console.log("refresh token is detected !");
                    this.getTokenKompas(refreshToken.data);
                }
            } catch (error) {
                console.log(error.message);
                console.log("failed to get refresh token, reload / refresh the page !");
                // this.deleteCookiesData();
            }
        },

        async getTokenKompas(refreshToken) {
            try {
                let newAccessToken = await Axios({ url: 'https://api.kompas.id/account/api/v1/tokens/refresh', method: 'post', data: JSON.stringify({ refreshToken: refreshToken }) })
                console.log(newAccessToken)
                this.getUserData(newAccessToken.data.data.accessToken) // get user data with access token
                this.$store.state.Tools.createCookieMinute('kompas._token', newAccessToken.data.data.accessToken, 10)
                
            } catch (error) {
                console.log(error.message)
                console.log('failed to get new access token, reload / refresh the page !')
                // this.deleteCookiesData()
            }
        },

        async deleteCookiesData() {
            this.$store.commit("setLoginStatus", false);
            this.$store.state.Tools.deleteCookies("kompas._token"); // delete token status if exist
            this.$store.state.Tools.deleteCookies("_km_dtl_s"); // delete cookies status
            this.$store.state.Tools.deleteCookies("_km_dtl_d"); // delete cookies data
        },
        
        async getUserData(accessToken) {
            try {
                let newUserData = await Axios({
                    url: `${this.$store.state.Headers.BaseUrlApi}/api/Login/user-info`,
                    method: "get", headers: { Authorization: `Bearer ${accessToken}` },
                });

                let new_data_pass = {}
                for ( let i in newUserData.data ) {
                    if ( i !== 'token' && i !== 'refreshToken' ) new_data_pass[i] = newUserData.data[i]
                }

                console.log(new_data_pass)
                
                newUserData.data.token = accessToken; // change new access token
                this.$store.commit("setUserData", newUserData.data);
                this.$store.commit("setLoginStatus", true);
                this.$store.state.Tools.createCookieMinute(
                    "_km_dtl_exp", new Date(new Date().getTime() + 10 * 60000), 10
                );

                this.$store.state.Tools.createCookieMinute("_km_dtl_s", true, 10); // set status login true
                this.$store.state.Tools.createCookieMinute(
                    "_km_dtl_d", Buffer.from(JSON.stringify(newUserData.data)).toString("base64"), 8
                ); // set status login data
                console.log(this.$store.state);
            } catch (error) {
                console.log(error.message);
                console.log("failed to get new user data, reload / refresh the page !");
            }
        },
    }
}
</script>

<style>
    @import "/assets/css/main.css";
    body {
        overflow-x: hidden;
    }
    #content-box {
        padding-top: 10%;
    }
</style>
