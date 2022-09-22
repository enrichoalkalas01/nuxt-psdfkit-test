<template>
    <div id="sec-payment" class="container mainp-content">
        <div class="row box-content">
            <div class="col-12 content">
                <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="buku-Tabs01" data-bs-toggle="tab" href="#bukuTabs01" aria-controls="bukuTabs01" aria-selected="true">
                            Beli
                        </a>
                    </li>
                </ul>
                <div class="row py-2 tab-content komp-tab-content" id="komp-tab-content">
                    <div class="col-12 tab-pane fade show active" id="bukuTabs01" role="tabpanel" aria-labelledby="buku-Tabs01">
                        <div class="row wrapper-topup">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="row wrapper-info-left">
                                    <div class="col-12 pt-2">
                                        <h6>Nama</h6>
                                        <p>
                                            {{ this.$store.state.Login.UserData?.firstName }}
                                        </p>
                                    </div>
                                    <div class="col-12 pt-2">
                                        <h6>Email</h6>
                                        <p>
                                            {{ this.$store.state.Login.UserData?.username }}
                                        </p>
                                    </div>
                                    <div class="col-12 pt-2">
                                        <h6>Pilih Nominal Poin</h6>
                                        <select class="form-control pik-filterby-transaction-list" id="nominal">
                                            <option data-expiration-days="30" value="50000">50.000 poin (Rp 50.000)</option>
                                            <option data-expiration-days="60" value="100000">100.000 poin (Rp 100.000)</option>
                                            <option data-expiration-days="60" value="200000">200.000 poin (Rp 200.000)</option>
                                            <option data-expiration-days="60" value="500000">500.000 poin (Rp 500.000)</option>
                                            <option data-expiration-days="60" value="1000000">1.000.000 poin (Rp 1.000.000)</option>
                                        </select>
                                    </div>
                                    <div class="col-12 pt-4">
                                        <button class="form-control btn-primary" v-on:click="topup(this.$store.state.Login.UserData)">Bayar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name: 'TopUp',
        methods: {
            async topup(userdata){
                let config = {
                    url: `${ this.$store.state.Headers.BaseUrlApi }/api/CreditTopups?userid=${ userdata.id }`,
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${ userdata.token }`,
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                        "amount": Number(document.querySelector("#nominal").value),
                        "expirationDays": Number(document.querySelector("#nominal").options[ document.querySelector("#nominal").selectedIndex ].getAttribute("data-expiration-days")),
                        "paymentMethod": 0,
                        "note": "",
                    })
                }
                
                try {
                    let Payment = await Axios(config)
                    console.log(Payment)
                    window.open(Payment.data.data.url)
                    window.close()
                } catch (error) {
                    console.log(error)
                    this.$store.commit('setLoadingScreen', true)
                    this.$store.commit('setLoadingImage', 'warning')
                    this.$store.commit('setLoadingText', 'Mohon lengkapi data diri anda pada menu “akun” terlebih dahulu.')
                    this.$store.commit('setCloseStatus', true)
                }
            },
        }
    }

</script>

<style>
    #sec-payment {
        position: relative;
        padding-top: 5%;
    }

    @media screen and ( max-width: 1280px ) {
        #sec-payment {
            padding-top: 7.5%;
        }
    }
</style>