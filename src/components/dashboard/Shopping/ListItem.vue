<template>
    <div class="col-12 col-sm-12 card list-item">
        <div class="images-wrapper">
            <div class="images"></div>
        </div>
        <div class="item-wrapper">
            <div class="wc-item">
                <h4 class="title">{{ Title }}</h4>
                <p class="desc">{{ Description }}</p>
                <p class="date">Date : {{ Tanggal }}</p>
            </div>
            <div class="wc-qty-done">
                <span>{{ Quantity }} Qty</span>
            </div>
            <div class="wc-price">
                <span>{{ Price }}</span>
            </div>
            <div class="wc-confirmation" v-if="Confirmation">
                <!-- <span>{{ typeof typeConfirmation }}</span> -->
                <span :class="TypeConfirmation === 0 ? 'new' : TypeConfirmation === 1 ? 'waiting' : TypeConfirmation === 2 ? 'failed' : 'success' ">
                    {{ Number(TypeConfirmation) === 0 ? `Baru` : Number(TypeConfirmation) === 1 ? `Disetujui` : Number(TypeConfirmation) === 2 ? 'Gagal' : 'Selesai' }}
                </span>
            </div>
            <div class="wc-paytab" v-if="BayarStatus">
                <a v-on:click="BayarTab">Bayar</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: [
            'typeItem',
            'typeConfirmation',
            'price',
            'title',
            'tanggal',
            'description',
            'images',
            'qty'
        ],

        data() {
            return {
                BayarStatus: false,
                Confirmation: true,
                TypeConfirmation: 0,
                Thumbnail: null,
                Title: null,
                Description: null,
                Tanggal: null,
                Price: null,
                Quantity: 0,
            }
        },

        mounted() {
            // Static Data
            this.Thumbnail = this.images
            this.Title = this.title
            this.Description = this.description
            this.Tanggal = this.tanggal
            this.Price = 'Rp.' + this.$store.state.Tools.PriceFormat(this.price, 2, ',', '.')
            this.Quantity = 1
            this.TypeConfirmation = this.typeConfirmation

            // Dynamic Data
            if ( this.typeItem === 'konfirmasi' ) {
                this.Confirmation = true
                this.BayarStatus = false
            }

            if ( this.typeItem === 'bayar' ) {
                this.Confirmation = false
                this.BayarStatus = true
            }
        },

        methods: {
            BayarTab() {
                document.querySelector("#tabShoppingCart .nav-link").classList.remove('active')
                document.querySelector("#pemesanan-Tabs03").classList.add('active')
                document.querySelector("#komp-tab-content .tab-pane").classList.remove('show')
                document.querySelector("#komp-tab-content .tab-pane").classList.remove('active')
                document.querySelector("#pemesananTabs03").classList.add('show')
                document.querySelector("#pemesananTabs03").classList.add('active')
            }
        }
    }
</script>

<style>

</style>