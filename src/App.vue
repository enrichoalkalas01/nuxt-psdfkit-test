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
                } else {
                    let config = {
                        method: 'get', url: `https://data-api-dev.kompas.id/api/Login/user-info`,
                        headers: { 'Authorization': `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                    }

                    try {
                        // Get data user profile after get token
                        let getData = await Axios(config)
                        // set encryption for data
                        console.log(getData)
                        this.$store.commit('setEncrypt', JSON.stringify({ UserData: getData.data, token: this.$store.state.Tools.GetCookies('kompas._token') }))
                        const data = this.$store.state.Login.LoginData
                        console.log(data)
                        this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_d', 'data': data, 'days' : 1 });                    
                        this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_s', 'data': true, 'days' : 1 });
                    } catch(err) {
                        console.log(err)
                    }   
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
