<template>
    <div class="col-12 col-sm-12 card list-item">
        <div class="item-wrapper">
            <div class="wc-item">
                <h4 class="title">{{ Title }}</h4>
                <!-- <p class="description">{{ Description }}</p> -->
                <p class="date">Date : {{ Tanggal }}</p>
            </div>
            <div class="wc-price">
                <span>{{ Price }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListHistory',
        props: [
            'typeItem',
            'typeConfirmation',
            'price',
            'title',
            'tanggal',
            'description',
            'images',
            'qty',
            'delete',
            'imageSource',
            'orderId'
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
                deletButton: null,
                image_source: null,
                OrderId: null,
            }
        },

        mounted() {
            // Static Data
            this.Thumbnail = this.images
            this.Title = this.title
            this.Description = this.description
            this.Tanggal = this.tanggal.replace("T", ' ')
            this.Price = 'Rp.' + this.$store.state.Tools.PriceFormat(this.price, 2, ',', '.')
            this.Quantity = 1
            this.TypeConfirmation = this.typeConfirmation
            this.deletButton = this.delete
            this.image_source = this.imageSource
            this.OrderId = this.orderId
        },

        methods: {
        }
    }
</script>

<style>

</style>