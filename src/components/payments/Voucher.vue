<template>
    <div id="sec-payment" class="container mainp-content">
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
    import Axios from 'axios'
    export default {
        name: 'Voucher',
        methods: {
            insertKupon: async (userdata) => {
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
                    alert(getData.data)
                    window.location.href = '/dashboard/voucher'
                } else if (getData.response.data.message === "Voucher number is already used."){
                    alert("Kode voucher sudah digunakan")
                } else {
                    alert("Something went wrong!")
                }

            },
        }
    }
</script>