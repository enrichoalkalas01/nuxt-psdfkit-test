<template>
    <section id="shopping-cart" class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 list-cart card">
            <div class="row">
                <div class="col-12 content">
                    <ul class="nav nav-tabs komp-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="buku-Tabs01" data-bs-toggle="tab" href="#bukuTabs01" aria-controls="bukuTabs01" aria-selected="true">
                                Konfirmasi Pemesanan
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs02" data-bs-toggle="tab" href="#bukuTabs02" aria-controls="bukuTabs02" aria-selected="true">
                                Pembayaran Pemesanan
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="buku-Tabs03" data-bs-toggle="tab" href="#bukuTabs03" aria-controls="bukuTabs03" aria-selected="true">
                                Status Pemesanan
                            </a>
                        </li>
                    </ul>
                    <div class="row py-2 tab-content komp-tab-content" id="komp-tab-content">
                        <div class="col-12 tab-pane fade show active" id="bukuTabs01" role="tabpanel" aria-labelledby="buku-Tabs01">
                            <TabOne />
                        </div>
                        <div class="col-12 tab-pane fade" id="bukuTabs02" role="tabpanel" aria-labelledby="buku-Tabs02">
                            <TabTwo />
                        </div>
                        <div class="col-12 tab-pane fade" id="bukuTabs03" role="tabpanel" aria-labelledby="buku-Tabs03">
                            <TabThree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TabOne from './KonfirmasiTab.vue'
    import TabTwo from './PembayaranTab.vue'
    import TabThree from './StatusTab.vue'
    export default {
        name: 'ShoppingCart',
        components: {
            TabTwo,
            TabOne,
            TabThree
        },

        data() {
            return {
                
            }
        }
    }
</script>

<style>

</style>