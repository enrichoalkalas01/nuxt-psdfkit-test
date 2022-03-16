<template>
    <section class="sec-artikel   my-5">

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
                                Gratis sebanyak 10 judul Artikel terbaru</li>
                            <li>
                                Masa percobaan 30 hari
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
                                <p>User Trial hanya bisa digunakan <b>selama 30 hari </b> semenjak aktivasi dan proses registrasi user berhasil.</p>
                            </div>
                            <form class="text-start">
                                <fieldset>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Nama Lengkap</label>
                                        <div class="my-2">
                                            <input type="text" placeholder="Nama Anda" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Email</label>
                                        <div class="my-2">
                                            <input type="email" placeholder="Email Anda" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Username</label>
                                        <div class="my-2">
                                            <input type="text" placeholder="Username Anda" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Password (min. 6 karakter) </label>
                                        <div class="my-2">
                                            <input type="text" placeholder="Password" class="form-control">
                                        </div>
                                    </div>

                                    <div class="form-group py-1">
                                        <label class="form-label my-2">Ulangi Password  </label>
                                        <div class="my-2">
                                            <input type="text" placeholder="Confirm Password" class="form-control">
                                        </div>
                                    </div>


                                    <div class="form-group py-2">
                                        <div class="g-recaptcha" data-sitekey="6LfYC-EUAAAAALIiQ05h0h4jm7P5OCe2DcJ728gs"></div>

                                    </div>

                                    <div class="form-group row py-1">
                                        <div class="my-2">
                                            <a href="#" class="btn btn-main">Daftar Sekarang</a>
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
    export default {
        name: 'Register',
        mounted() {
            if (this.$store.state.Login.LoginStatus) {
                window.location.href = '/'
            }
        },
    }
</script>