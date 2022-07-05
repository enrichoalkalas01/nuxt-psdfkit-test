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
        beforeMount() {
            this.getDataUser()
        },
        mounted() {
            console.log(this.$store.state)
        },
        methods: {
            async getDataUser() {
                if ( !this.$store.state.Tools.GetCookies('kompas._token') ) {
                    // if token kompas is not found
                    console.log('token kompas is not found..', 'trying to get token again...')
                    // let dataToken
                    try {
                        let getRefreshTokenFromCookie = await Axios('https://data-api-dev.kompas.id/api/Login/kompas-token-refresh')
                        console.log(getRefreshTokenFromCookie)
                    } catch(err) {
                        console.log(err)
                    }
                    // let configRefresh = {
                    //     method: 'post', url: `https://api.kompas.id/account/api/v1/tokens/refresh`
                    //     data: JSON.stringify({
                    //         refreshToken: 
                    //     })
                    // }
                } else {
                    let config = {
                        method: 'get', url: `https://data-api-dev.kompas.id/api/Login/user-info`,
                        headers: { 'Authorization': `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                    }

                    try {
                        // Get data user profile after get token
                        let getData = await Axios(config).data
                        console.log(getData)
                        // set encryption for data
                        getData.token = this.$store.state.Tools.GetCookies('kompas._token')
                        this.$store.commit('setEncrypt', JSON.stringify(getData))
                        const data = this.$store.state.Login.LoginData
                        console.log(data)
                        this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_d', 'data': data, 'days' : 1 });                    
                        this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_s', 'data': true, 'days' : 1 });
                    } catch(err) {
                        console.log(err)
                    }   

                    /*
                        const GetCookies = (name) => {
                            var nameEQ = name + "=";
                            var ca = document.cookie.split(';');
                            for(var i=0;i < ca.length;i++) {
                                var c = ca[i];
                                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                            }
                            return null;
                        }
                        
                        try {
                            let getData = await fetch(`https://data-api-dev.kompas.id/api/Login/user-info`, {
                                method: 'get', headers: { 'Authorization': `Bearer ${ GetCookies('kompas._token') }` }
                            }).then(response => response.json())

                            getData.token = GetCookies('kompas._token')
                            console.log(Buffer.from(JSON.stringify(getData)).toString('base64'))
                            
                        } catch(err) {
                            console.log(err)
                        }
                    
                    */
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
