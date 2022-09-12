<template>
    <section class="sec-artikel   my-5">
        <!-- <LoadingScreen /> -->
        <div class="container">
            <div class="row  g-0 d-flex align-items-center">
                <div class="col-12 col-md-6">

                    <a href="/" class="logo-big">
                        <img src="assets/images/logo-kompasdata-big.png" alt="">
                    </a>
                    <div class="box-title p-3 p-md-4 my-3">
                        <h3 class="subtitle">Fasilitas User Trial </h3>
                        <ol class="list-num my-2">
                            <li>Tidak dikenakan biaya apa pun dalam masa Trial</li>
                            <li>
                                Dapatkan pengalaman baru dalam mencari data</li>
                            <li>
                                Gratis sebanyak 5 judul Artikel terbaru</li>
                            <li>
                                Masa percobaan 14 hari
                            </li>
                        </ol>
                        <p>
                            <em>Pusat Informasi Kompas akan menggunakan informasi yang Anda berikan sesuai dengan"Privacy Policy" kami yang berlaku. Dengan mengklik Daftar, berarti Anda setuju dengan"Term of Use" dan"Privacy Policy" ini, dan menyadari sepenuhnya bahwa pengumpulan, penyimpanan, dan penggunaannya tunduk pada ketentuan dan perundangan yang berlaku di wilayah 
                                publik Indonesia.</em>
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6">


                    <div class="content shadow  my-3">
                        <div class="p-3">
                            <h2 class="title">Daftar</h2>
                            <p>Silahkan isikan data dibawah untuk melakukan daftar akun baru dan User Trial</p>
                            <div class="box-title my-2 p-3 p-md-4">
                                <p>User Trial hanya bisa digunakan <b>selama 14 hari </b> semenjak aktivasi dan proses registrasi user berhasil.</p>
                            </div>

                            <form v-on:submit.prevent="register" class="text-start"
                                oninput='confPassword.setCustomValidity(confPassword.value != password.value ? "Passwords must match" : "")'
                            >
                                <fieldset>
                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Nama Depan</label>
                                        <div class="my-2">
                                            <input id="firstName" type="text" placeholder="Nama Depan Anda" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Nama Belakang</label>
                                        <div class="my-2">
                                            <input id="lastName" type="text" placeholder="Nama Belakang Anda" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Email</label>
                                        <div class="my-2">
                                            <input id="email" type="email" placeholder="Email Anda" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Username</label>
                                        <div class="my-2">
                                            <input id="username" type="text" placeholder="Username Anda" class="form-control" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Password (min. 6 karakter)</label>
                                        <div class="my-2">
                                            <input id="password" type="password" name="password" placeholder="Password" class="form-control" minlength="6" required>
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Ulangi Password</label>
                                        <div class="my-2">
                                            <input id="confPassword" type="password" name="confPassword" placeholder="Confirm Password" class="form-control" minlength="6" data-bv-identical="true" data-bv-identical-field="password" data-bv-identical-message="The password and its confirm are not the same">
                                        </div>
                                    </div>


                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Jenis Kelamin</label>
                                        <div class="my-2" id="gender">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" value="m" required>
                                                <label class="form-check-label" for="gender">
                                                    Laki-laki
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" value="f">
                                                <label class="form-check-label" for="gender">
                                                    Perempuan
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group py-2">
                                        <div class="g-recaptcha" data-sitekey="6LfYC-EUAAAAALIiQ05h0h4jm7P5OCe2DcJ728gs"></div>
                                    </div>

                                    <div class="form-group row py-1">
                                        <div class="my-2">
                                            <!-- <a v-on:click="register" class="btn btn-main">Daftar Sekarang</a> -->
                                            <button class="btn btn-main" type="submit">Daftar Sekarang</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    // import LoadingScreen from '../addons/LoadingScreen.vue'

    export default {
        name: 'Register',
        // components: { LoadingScreen },
        mounted() {
            if (this.$store.state.Login.LoginStatus) {
                window.location.href = '/'
            }
        },

        methods: {
            async register(){
                this.$store.commit('setLoadingScreen', true)
                
                var firstName = document.querySelector("#firstName").value
                var lastName = document.querySelector("#lastName").value
                var username = document.querySelector("#username").value
                var password = document.querySelector("#password").value
                var email = document.querySelector("#email").value
                var gender = document.querySelector("#gender").value

                let getData = await Axios({
                    method: 'POST',
                    url: 'https://data-api-dev.kompas.id/api/Users?needvalidation=true',
                    data: JSON.stringify({
                        'firstName' : firstName,
                        'lastName' : lastName,
                        'username' : username,
                        'password' : password,
                        'email' : email,
                        'gender' : gender,
                    }),
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                }).then( Response => Response ).catch( Error => Error );

                if (getData.data) {
                    window.location.href = '/notification-activation'
                } else if (getData.response.data.message === "Username or Email exist"){
                    // alert(getData.response.data.message)
                    setTimeout(() => { 
                        this.$store.commit('setLoadingImage', 'failed');
                        this.$store.commit('setLoadingText', getData.response.data.message);
                        this.$store.commit('setCloseStatus', true);
                    }, 500)
                } else {
                    // alert("Something went wrong!")
                    setTimeout(() => { 
                        this.$store.commit('setLoadingImage', 'failed');
                        this.$store.commit('setLoadingText', 'Something went wrong!');
                        this.$store.commit('setCloseStatus', true);
                    }, 500)
                }
            }
        }
    }
</script>