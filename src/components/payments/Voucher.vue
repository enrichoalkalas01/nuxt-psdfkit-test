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
    export default {
        name: 'Voucher',
    }
</script>