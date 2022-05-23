<template>
    <section class="sec-artikel my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 text-center">
                    <div class="content shadow my-3">
                        <div class="p-3">
                            <a href="/" class="logo-big mb-3">
                                <img src="assets/images/logo-kompasdata-big.png" alt="">
                            </a>
                            <p>{{ status }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: 'Activation',
        data (){
            return {
                dataActivation: '',
                status: '',
                configAPI: {
                    url: `https://dev-be.kompasdata.id/api/Users/activate?activationguid=` + this.$route.query.code
                }
            }
        },
        async beforeMount(){
            try {
                this.dataActivation = await Axios(this.configAPI)
                this.status = 'Akun anda sudah aktif, silahkan login untuk melanjutkan'

                console.log(this.dataActivation);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
</script>