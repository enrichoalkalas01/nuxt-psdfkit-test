<template>
    <div>
        <h1>Waiting for login..</h1>
        <button v-on:click="testUserData">Test User Profile</button>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: 'LoginSSO',
        async mounted() {
            console.log(document.cookie.split(';'))
            console.log(this.$store.state.Tools.GetCookies('kompas._token'))
        },

        methods: {
            async testUserData() {
                let config = {
                    method: 'get', url: `https://data-api-dev.kompas.id/api/Login/user-info`,
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Tools.GetCookies('kompas._token') }` }
                }

                try {
                    let dataResponse = await Axios(config)
                    console.log(dataResponse.data)
                } catch(err) {
                    console.log(err)
                }
            }
        }
    }
</script>