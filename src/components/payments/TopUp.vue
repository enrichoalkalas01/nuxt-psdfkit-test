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
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="buku-Tabs02" data-bs-toggle="tab" href="#bukuTabs02" aria-controls="bukuTabs02" aria-selected="true">
                            Kode Akses Kompas Data
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
                                            {{ this.$store.state.Login.UserData.username ? this.$store.state.Login.UserData.username : 'None' }}
                                        </p>
                                    </div>
                                    <div class="col-12 pt-2">
                                        <h6>Email</h6>
                                        <p>
                                            {{ this.$store.state.Login.UserData.email ? this.$store.state.Login.UserData.email : 'None' }}
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
                                        <p>*Pembayaran melalui transfer akan dikonfirmasi admin pada jam kerja (Senin-Sabtu pukul 09:00-16:00)</p>
                                    </div>
                                    <div class="col-12 pt-2">
                                        <h6>Catatan Pembayaran</h6>
                                        <textarea name="catatan-payment" id="catatan-payment" class="form-control" cols="30" rows="10"></textarea>
                                    </div>
                                    <div class="col-12 pt-4">
                                        <button class="form-control btn-primary" v-on:click="topup(this.$store.state.Login.UserData)">Bayar</button>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div class="col-12">
                                    <h6>Pilih Metode Pembayaran</h6>
                                    <select class="form-control pik-filterby-transaction-list" id="pik-payment-list2">
                                        <option data-code="transfer" name="frmPayment" value="2">Transfer</option>
                                        <option data-code="clickpay" name="frmPayment" value="8">Mandiri Clickpay</option>
                                        <option data-code="visamaster" name="frmPayment" value="10">CreditCard (VISA/Master)</option>
                                        <option data-code="ecash" name="frmPayment" value="11">Mandiri E-Cash</option>
                                        <option data-code="atmbca" name="frmPayment" value="12">ATM BCA</option>
                                        <option data-code="bcaklikpay" name="frmPayment" value="14">BCA KlikPay</option>
                                    </select>
                                </div>
                                <div class="col-12">
                                    <div class="row pik-payment-step-detail-title-row pik-dashboard-payment-list" id="transfer" style="display: block;">
                                        <div class="row">
                                            <div class="pik-dashboard-payment-logo-container">
                                                <img class="pik-dashboard-payment-logo-thumbnail" src="/assets/images/payments/bank-transfer.png">
                                                </div>
                                        </div>
                                        <div class="row"><span class="pik-payment-step-detail-title">Transfer ke</span></div>
                                        <div class="row">
                                            <div class="row pik-payment-step-detail-title-row">
                                                <span class="pik-payment-step-detail-description">
                                                    012 300 7104 a/n PT. Kompas Media Nusantara <br>BCA Cab. Gajah Mada Jl. Gajah Mada No.112 Jakarta Pusat
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-12 tab-pane fade" id="bukuTabs02" role="tabpanel" aria-labelledby="buku-Tabs02">
                        <div class="wrapper-payment-voucher">
                            <span>Masukkan Kode Akses KompasData</span>
                            <input type="text" class="form-control mb-2">
                            <button class="form-control btn-success">Isi Ulang</button>
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
            topup: async (userdata) => {
                let config = {
                    url: `https://dev-be.kompasdata.id/api/CreditTopups?userid=${ userdata.id }`,
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${ userdata.token }`,
                        'Content-Type': 'application/json'
                    },
                    data: JSON.stringify({
                        "amount": Number(document.querySelector("#nominal").value),
                        "expirationDays": Number(document.querySelector("#nominal").getAttribute("data-expiration-days")),
                        "paymentMethod": 0,
                        "note": document.querySelector("#catatan-payment").value
                    })
                }

                let Payment = await Axios(config)
                if ( Payment ) {
                    window.open(Payment.data.data.url)
                    window.close()
                }
            },

            // replaceAll: (str, find, replace) => {
            //     return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
            // }
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