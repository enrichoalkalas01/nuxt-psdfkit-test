<template>
    <section class="sec-artikel   my-5">

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

                            <form class="text-start">
                                <fieldset>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Username/Email</label>
                                        <div class="my-2">
                                            <input id="username" type="text" v-model="username" placeholder="Username/Email" class="form-control">
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Password </label>
                                        <div class="my-2">
                                            <input id="password" type="text" v-model="password" placeholder="Password" class="form-control">
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
                                            <a v-on:click="login" class="btn btn-main">Masuk</a>
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
    import Axios from 'axios'
    import 'vue-router'

    export default {
        name: 'Login',
        
        data(){
            return {
                username: '',
                password: '',
            }
        },

        mounted() {
            // this.$store.commit('setLoginStatus', true)
            // console.log(this.$store.commit('LoginState', true))
            // this.$store.commit('setLoginCookies', { name: '_km_dtl_s', data: 'ini data', days: 7 })
            console.log(this.$store.state.Login)

            if (this.$store.state.Login.LoginStatus) {
                window.location.href = '/'
            }
        },

        methods: {
            async login(){
                var username = document.querySelector("#username").value
                var password = document.querySelector("#password").value

                let getData = await Axios({
                    method: 'post',
                    url: 'https://dev-be.kompasdata.id/api/Login',
                    data: JSON.stringify({
                        'username' : username,
                        'password' : password
                    }),
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                }).then( Response => Response ).catch( Error => Error );

                console.log(getData)

                if (!getData.data) {
                    alert("Something wrong")
                } else {
                    this.$store.commit('setLoginCookies', {
                        'name' : '_km_dtl_d',
                        'data': JSON.stringify(getData.data),
                        'days' : 1
                    });
                    
                    this.$store.commit('setLoginCookies', {
                        'name' : '_km_dtl_s',
                        'data': true,
                        'days' : 1
                    });

                    window.location.href = '/'
                }
            }
        }
    }

</script>