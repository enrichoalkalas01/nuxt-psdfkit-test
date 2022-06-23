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
        components: { LoadingScreen },
        methods: {
            insertKupon: async (userdata) => {
                this.$store.commit('setLoadingScreen', true)
                var voucherCode = document.querySelector("#voucher_code").value
                let getData = await Axios({
                    url: `https://dev-be.kompasdata.id/api/Vouchers/${ voucherCode }/use?userid=${ userdata.id }`,
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${ userdata.token }`,
                        'Content-Type': 'application/json'
                    },
                }).then( Response => Response ).catch( Error => Error );

                if (getData.data) {
                    // alert(getData.data)
                    // window.location.href = '/dashboard/voucher'
                    setTimeout(() => { 
                        this.$store.commit('setLoadingImage', 'success');
                        this.$store.commit('setLoadingText', getData.data);
                        this.$store.commit('setCloseStatus', true);
                        window.location.href = '/dashboard/voucher'
                    }, 500)
                } else if (getData.response.data.message === "Voucher number is already used."){
                    // alert("Kode voucher sudah digunakan")
                    setTimeout(() => { 
                        this.$store.commit('setLoadingImage', 'failed');
                        this.$store.commit('setLoadingText', 'Kode voucher sudah digunakan');
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

            },
        }
    }
</script>