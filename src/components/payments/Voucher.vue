<template>
    <div id="sec-payment" class="container mainp-content">
        <LoadingScreen />
        <div class="row box-content">
            <div class="col-12 content">
                <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="buku-Tabs02" data-bs-toggle="tab" href="#bukuTabs02" aria-controls="bukuTabs02" aria-selected="true">
                            Kode Akses Kompas Data
                        </a>
                    </li>
                </ul>
                <div class="row py-2 tab-content komp-tab-content" id="komp-tab-content">
                    <div class="col-12 tab-pane fade show active" id="bukuTabs02" role="tabpanel" aria-labelledby="buku-Tabs02">
                        <div class="wrapper-payment-voucher">
                            <span>Masukkan Kode Akses KompasData</span>
                            <input type="text" class="form-control mb-2" id="voucher_code" v-on:keyup.enter="insertKupon">
                            <button class="form-control btn-success" v-on:click="insertKupon(this.$store.state.Login.UserData)">Isi Ulang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoadingScreen from '../addons/LoadingScreen.vue'
    import Axios from 'axios'

    export default {
        name: 'Voucher',
        components: { LoadingScreen, },
        data() { return {
            UserData: null,
        }},

        mounted() {
            this.getUserData()
        },

        methods: {
            async insertKupon(userdata) {
                var voucherCode = document.querySelector("#voucher_code").value
                this.$store.commit('setLoadingScreen', true)
                await Axios({
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/Vouchers/${ voucherCode }/use?userid=${ userdata.id }`,
                    method: 'GET', headers: { 'Authorization': `Bearer ${ userdata.token }`, 'Content-Type': 'application/json' },
                }).then(response => {
                    if ( response.data === 'sukses' ) {
                        this.$store.commit('setLoadingImage', 'success')
                        this.$store.commit('setLoadingText', 'Sukses melakukan topup voucher')
                        this.$store.commit('setReloadSaldo', true)
                        this.setNormalLoadingScreen()
                    } else {
                        this.$store.commit('setLoadingImage', 'success')
                        this.$store.commit('setLoadingText', response.data.message)
                        this.$store.commit('setReloadSaldo', true)
                        this.setNormalLoadingScreen()
                    }
                }).catch(err => {
                    if ( voucherCode === '' ) this.setFailedLoadingScreen('Kode akses tidak terdeteksi')
                    else this.setFailedLoadingScreen(err.response.data.message)
                })
            },

            async setFailedLoadingScreen(textScreen) {
                this.$store.commit('setLoadingImage', 'failed')
                this.$store.commit('setLoadingText', textScreen)
                this.$store.commit('setCloseStatus', true)
                this.setNormalLoadingScreen()
            },

            async setNormalLoadingScreen() {
                setTimeout(() => {
                    this.$store.commit('setLoadingScreen', false)
                    this.$store.commit('setLoadingImage', 'loading')
                    this.$store.commit('setLoadingText', 'loading...')
                    this.$store.commit('setCloseStatus', false)
                }, 2000)
            },

            async getUserData() {
                try {
                    let data = await Axios({ headers: { Authorization: `Bearer ` + this.$store.state.Login.UserData.token, },url: `${ this.$store.state.Headers.BaseUrlApi }/api/Users/${ this.$store.state.Login.UserData.id }`, })                    
                    this.UserData = data.data
                } catch(err) {
                    console.log(err)
                }
            }
        }
    }
</script>