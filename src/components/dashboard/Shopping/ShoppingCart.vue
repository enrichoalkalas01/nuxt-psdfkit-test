<template>
    <section id="shopping-cart" class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 list-cart card">
            <div class="row">
                <div class="col-12 content">
                    <ul class="nav nav-tabs komp-tabs" id="tabShoppingCart" role="tablist">
                        <li class="nav-item active" role="presentation">
                            <a class="nav-link active" id="pemesanan-Tabs01" data-bs-toggle="tab" href="#pemesananTabs01" aria-controls="pemesananTabs01" aria-selected="true">
                                Semua
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pemesanan-Tabs02" data-bs-toggle="tab" href="#pemesananTabs02" aria-controls="pemesananTabs02" aria-selected="false">
                                Pengajuan
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pemesanan-Tabs03" data-bs-toggle="tab" href="#pemesananTabs03" aria-controls="pemesananTabs03" aria-selected="false">
                                Disetujui
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pemesanan-Tabs04" data-bs-toggle="tab" href="#pemesananTabs04" aria-controls="pemesananTabs04" aria-selected="false">
                                Selesai
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="pemesanan-Tabs05" data-bs-toggle="tab" href="#pemesananTabs05" aria-controls="pemesananTabs05" aria-selected="false">
                                Ditolak
                            </a>
                        </li>
                    </ul>
                    <div class="row py-2 tab-content komp-tab-content" id="komp-tab-content">
                        <div class="col-12 tab-pane fade show active" id="pemesananTabs01" role="tabpanel" aria-labelledby="pemesanan-Tabs01">
                            <TabAll />
                        </div>
                        <div class="col-12 tab-pane fade" id="pemesananTabs02" role="tabpanel" aria-labelledby="pemesanan-Tabs02">
                            <TabOne />
                        </div>
                        <div class="col-12 tab-pane fade" id="pemesananTabs03" role="tabpanel" aria-labelledby="pemesanan-Tabs03">
                            <TabTwo />
                        </div>
                        <div class="col-12 tab-pane fade" id="pemesananTabs04" role="tabpanel" aria-labelledby="pemesanan-Tabs04">
                            <TabThree />
                        </div>
                        <div class="col-12 tab-pane fade" id="pemesananTabs05" role="tabpanel" aria-labelledby="pemesanan-Tabs04">
                            <FailedTab />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import TabAll from './AllTab.vue'
    import TabOne from './KonfirmasiTab.vue'
    import TabTwo from './PembayaranTab.vue'
    import TabThree from './StatusTab.vue'
    import FailedTab from './FailedTab.vue'

    export default {
        name: 'ShoppingCart',
        components: {
            TabTwo,
            TabOne,
            TabThree,
            TabAll,
            FailedTab
        },

        data() {
            return {
                
            }
        },

        methods: {

        }
    }
</script>

<style>

</style>