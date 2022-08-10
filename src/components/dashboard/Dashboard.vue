<template>
    <section id="dashboard-home">
        <div id="sec-payment" class="container main-content">
            <div class="row box-content">
                <div class="col-12 content">
                    <div class="box-images">
                        <div class="images" style="background-image: url('https://www.kompasdata.id/Content/img/icons/man.png')"></div>
                    </div>
                    <div class="box-text">
                        <h4>Hi {{ userFirstName }}, selamat datang di KompasData</h4>
                        <p>Kami merekomendasikan beberapa pilihan tautan yang dapat membantu anda dalam menjelajahi KompasData</p>
                        <a href="/" class="btn btn-primary">Memulai</a>
                    </div>
                </div>
                <div class="col-12">

                </div>
            </div>
            <div class="row mb-2">
                <div class="col-12 content">
                    <h4>Prabayar</h4>
                    <div class="box-saldo">
                        <h6>Saldo Poin Anda</h6>
                        <h3>{{ `${ saldoUser ? this.$store.state.Tools.PriceFormat(saldoUser, 0, '', '.') : '-' }` }}</h3>
                        <h6>Berlaku Hingga, {{ expDate ? this.$store.state.Tools.ChangeDateString(expDate.substring(0, 10)) : '' }}</h6>
                    </div>
                </div>
            </div>
            <div class="row box-lainnya">
                <div class="col-12 content">
                    <div class="row list box-selanjutnya">
                        <h6>Langkah Selanjutnya</h6>
                        <a href="/dashboard/akun">Lengkapi Data Diri</a>
                        <a href="/">Cari Data</a>
                        <a href="/dashboard/daftar-pesanan">Data Transaksi Saya</a>
                    </div>
                    <div class="row list box-lainnya">
                        <h6>Langkah Selanjutnya</h6>
                        <a href="/dashboard/chat">Tanya Jawab</a>
                        <a href="/dashboard/chat">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: 'Dashboard',
        data() {
            return { 
                saldoUser: 0,
                expDate: null,
                userFirstName: null,
            }
        },

        mounted() { 
            this.getUserFirstName()
            this.getSaldo()
        },
        methods: {
            async getUserFirstName() {
                let config = {
                    method: 'GET',
                    url: `https://dev-be.kompasdata.id/api/Users/${ this.$store.state.Login.UserData.id }`,
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                }
                 let user = await Axios(config)
                 this.userFirstName = user.data.firstName
            },
            async getSaldo() {
                let config = {
                    url: `https://data-api-dev.kompas.id/api/Users/${ this.$store.state.Login.UserData.id }/balance`, method: 'get',
                    headers: { 'Authorization': `Bearer ${ this.$store.state.Login.UserData.token }` },
                }
                
                let saldo = await Axios(config)
                this.saldoUser = saldo.data.credit.credit_balance
                this.expDate = saldo.data.credit.expired_date
            }
        }
    }
</script>