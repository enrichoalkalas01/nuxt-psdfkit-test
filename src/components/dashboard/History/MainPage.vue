<template>
    <section id="shopping-cart" class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 list-cart card">
            <div class="row">
                <div class="col-12 content">
                    <ul class="nav nav-tabs komp-tabs" id="tabShoppingCart" role="tablist">
                        <li class="nav-item active" role="presentation">
                            <a class="nav-link active" id="pemesanan-Tabs01" data-bs-toggle="tab" href="#pemesananTabs01" aria-controls="pemesananTabs01" aria-selected="true">
                                Daftar Transaksi
                            </a>
                        </li>
                    </ul>
                    <div class="row py-2 tab-content komp-tab-content" id="komp-tab-content">
                        <div class="col-12 tab-pane fade show active" id="pemesananTabs01" role="tabpanel" aria-labelledby="pemesanan-Tabs01">
                            <HistoryList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import HistoryList from './HistoryList.vue'

    export default {
        name: 'HistoryPage',
        components: { HistoryList },

        data() {
            return {
                
            }
        },

        mounted() {
            console.log(this.$store.state)
        },

        methods: {
        }
    }
</script>

<style>

</style>