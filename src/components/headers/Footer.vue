<template>
    <section class="footer py-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <a href="/"><img src="/assets/images/logo-kompasdata.png" alt=""></a>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-xl-6 my-3">
                            <ul class="foot-list">
                                <li>
                                    <h3 class="subtitle">Alamat :</h3>
                                </li>
                                <li>
                                    <i class="fas fa-map-marker-alt icon-foot"></i>
                                    <p>Pusat Informasi Kompas Gedung Kompas Gramedia Jalan Palmerah Selatan 26-28 Jakarta 10270 Indonesia </p>
                                </li>
                                <li>
                                    <h3 class="subtitle">Ikuti Kami :</h3>
                                </li>
                                <li>
                                    <div class="foot-sosmed pt-2">
                                        <a href="#">
                                            <i class="fab fa-facebook-f icon"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-twitter icon"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-youtube icon"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-instagram icon"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-xl-6 my-3">

                            <ul class="foot-list">
                                <li>
                                    <h3 class="subtitle">Kontak :</h3>
                                </li>
                                <li>
                                    <i class="fas fa-phone icon-foot"></i>
                                    <p>(021)5347710</p>
                                </li>
                                <li><i class="fas fa-envelope icon-foot"></i>
                                    <a href="mailto:kompasdata@kompas.id" class="">kompasdata@kompas.id</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-none d-md-block">
                    <div class="line-divider">

                    </div>
                </div>
                <div class="col-12 col-md-5 my-3">

                    <div class="form-subs">
                        <h3 class="subtitle">Daftar Untuk Berlangganan</h3>
                        <form>
                            <fieldset>
                                <div class="form-group mb-3">
                                    <!-- <label for="iptEmail" class="form-label">Email</label> -->
                                    <div class="col">
                                        <input type="email" class="form-control" id="iptEmail" placeholder="Email">
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <!-- <label for="iptPwd" class="form-label">Password</label> -->
                                    <div class="col">
                                        <input type="email" class="form-control" id="iptPwd" placeholder="Password">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-main w-100">Daftar Sekarang</button>
                                    <p class="text-center my-2">Atau</p>
                                    <button type="submit" class="btn btn-line w-100">
                                         <i class="fab fa-facebook-f"></i> Daftar Dengan facebook</button>
                                </div>

                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>