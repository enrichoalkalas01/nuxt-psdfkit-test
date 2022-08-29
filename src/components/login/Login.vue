<template>
    <section class="sec-artikel   my-5">
        <LoadingScreen />
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 text-center">

                    <a href="/" class="logo-big">
                        <img src="assets/images/logo-kompasdata-big.png" alt="">
                    </a>
                    <div class="content shadow my-3">
                        <div class="p-3">
                            <h2 class="title">Login</h2>
                            <p>Silahkan isikan data dibawah untuk melakukan Login</p>

                            <form v-on:submit.prevent="login" class="text-start">
                                <fieldset>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Username/Email</label>
                                        <div class="my-2">
                                            <input id="username" v-on:keyup.enter="login" type="text" v-model="username" placeholder="Username/Email" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Password </label>
                                        <div class="my-2">
                                            <input id="password" v-on:keyup.enter="login" type="password" v-model="password" placeholder="Password" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <div class="form-check my-2">
                                            <input class="form-check-input" type="checkbox" value="" id="checkingat">
                                            <label class="form-check-label" for="checkingat">
                                          <em> Ingat saya</em>
                                        </label>
                                        </div>
                                    </div>

                                    <div class="form-group py-2">
                                        <div class="g-recaptcha" data-sitekey="6LfYC-EUAAAAALIiQ05h0h4jm7P5OCe2DcJ728gs"></div>

                                    </div>

                                    <div class="form-group row py-1">
                                        <div class="my-2">
                                            <!-- <a v-on:click="login" class="btn btn-main">Masuk</a> -->
                                            <button class="btn btn-main" type="submit">Masuk</button>
                                        </div>

                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="line-stripe">
                            <div class="px-2">
                                Atau
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="py-2">
                                <a href="#" class="btn btn-main d-block"><i class="fab fa-facebook-f"></i> Masuk dengan Facebook</a>
                            </div>
                            <div class="py-2">
                                <div id="fb-root"></div>
                                <div class="fb-login-button" data-width="" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
                            </div>
                            <div class="py-2">
                                <div id="g_id_onload"
                                    data-client_id="288303587950-t47o0qdkosn1hdom4oikq5gicpei7c63.apps.googleusercontent.com"
                                    data-callback="handleCredentialResponse"
                                >
                                </div>
                                <div class="g_id_signin"
                                    data-type="standard"
                                    data-size="large"
                                    data-theme="outline"
                                    data-text="sign_in_with"
                                    data-shape="rectangular"
                                    data-logo_alignment="left">
                                </div>
                            </div>
                            <div class="py-2">
                                <a href="#" class="btn btn-main d-block">Masuk dengan Kompas.com / Kompasprint</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import LoadingScreen from '../addons/LoadingScreen.vue'
    import Axios from 'axios'

    export default {
        name: 'Login',
        components: { LoadingScreen },
        data() { return { username: '', password: '', }},
        beforeMount() { window.location.href = '/' },
        mounted() {
            if (this.$store.state.Login.LoginStatus) {
                this.$store.commit('setLoadingScreen', true)
                this.$store.commit('setLoadingImage', 'failed');
                this.$store.commit('setLoadingText', 'ups, anda sudah login...');
                setTimeout(() => { window.location.href = '/' }, 1000)
            }


            // let scriptFacebook = document.createElement("script")
            // scriptFacebook.setAttribute("src", "https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v14.0&appId=987638111930027&autoLogAppEvents=1")
            // scriptFacebook.setAttribute("crossorigin", "anonymous")
            // scriptFacebook.defer = true
            // /*
            //     'async defer crossorigin="anonymous" src="https://connect.facebook.net/id_ID/sdk.js#xfbml=1&version=v14.0&appId=987638111930027&autoLogAppEvents=1" nonce="7WioLZI2"'
            // */

            // let scriptGoogle = document.createElement("script")
            // scriptGoogle.setAttribute("src", "https://accounts.google.com/gsi/client")
            // scriptGoogle.defer = true
            // scriptGoogle.async = true

            // let scriptGoogleFunction = document.createElement("script")
            // scriptGoogleFunction.innerHTML = `
            //     function parseJwt (token) {
            //         var base64Url = token.split('.')[1];
            //         var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            //         var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            //             return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            //         }).join(''));

            //         return JSON.parse(jsonPayload);
            //     }

            //     function handleCredentialResponse(response) {
            //         const responsePayload = parseJwt(response.credential);
            //         console.log("ID: " + responsePayload.sub);
            //         console.log('Full Name: ' + responsePayload.name);
            //         console.log('Given Name: ' + responsePayload.given_name);
            //         console.log('Family Name: ' + responsePayload.family_name);
            //         console.log("Image URL: " + responsePayload.picture);
            //         console.log("Email: " + responsePayload.email);
            //     }
            // `

            // document.head.appendChild(scriptGoogle)
            // document.head.appendChild(scriptFacebook)
            // document.head.appendChild(scriptGoogleFunction)
        },

        methods: {
            async login() {
                this.$store.commit('setLoadingScreen', true)
                let config = {
                    method: 'post', url: 'https://data-api-dev.kompas.id/api/Login',
                    headers: { 'Content-Type': 'application/json' },
                    data: JSON.stringify({
                        'username' : document.querySelector("#username").value,
                        'password' : document.querySelector("#password").value
                    }),
                }
                
                try {
                    let getData = await Axios(config)
                    this.$store.commit('setEncrypt', JSON.stringify(getData.data))
                    const data = this.$store.state.Login.LoginData

                    this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_d', 'data': data, 'days' : 1 });                    
                    this.$store.commit('setLoginCookies', { 'name' : '_km_dtl_s', 'data': true, 'days' : 1 });
                    setTimeout(() => {
                        this.$store.commit('setLoadingImage', 'success')
                        this.$store.commit('setLoadingText', 'Successfull to log in')
                        window.location.href = '/'
                    }, 750) 
                } catch (error) {
                    console.log(error)
                    setTimeout(() => { this.$store.commit('setLoadingImage', 'failed'); this.$store.commit('setLoadingText', 'username/password is not match'); this.$store.commit('setCloseStatus', true); }, 500) 
                }
            },

            async loginGoogle() {
                // this.$gAuth.signIn().then(GoogleUser => {
                //     console.log("GoogleUser", GoogleUser);
                //     console.log("getId", GoogleUser.getId());
                //     console.log("getBasicProfile", GoogleUser.getBasicProfile());
                //     console.log("getAuthResponse", GoogleUser.getAuthResponse());
                //     console.log(
                //         "getAuthResponse", this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
                //     );
                //     this.isSignIn = this.$gAuth.isAuthorized;
                // }).catch(error => {
                //     console.log(error)
                // });
            }
        }
    }

</script>