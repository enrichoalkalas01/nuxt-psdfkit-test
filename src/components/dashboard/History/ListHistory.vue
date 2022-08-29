<template>
    <div class="col-12 col-sm-12 card list-item">
        <div class="item-wrapper">
            <div class="wc-item">
                <h4 class="title">{{ Title }}</h4>
                <p class="date" v-if="PublicationDate">{{ Publication }} edisi {{ PublicationDate ? this.$store.state.Tools.ChangeDateString(PublicationDate.substring(0, 10)) : '-' }}</p>
            </div>
            <div class="wc-price">
                <span>{{ Price }}</span>
            </div>
            <div class="wc-price">
                <div class="tambahan-box"><h6>{{ Type }}</h6></div>
                <div class="tambahan-box"><p>{{ Tanggal }}</p></div>
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
            'title',
            'publication',
            'publicationDate',
            'price',
            'type',
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
                Publication: null,
                PublicationDate: null,
                Price: null,
                Type: null,
                Description: null,
                Tanggal: null,
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
            this.Publication = this.publication
            this.PublicationDate = this.publicationDate
            this.Price = this.$store.state.Tools.PriceFormat(this.price, 0, '', '.')
            this.Type = this.type
            this.Description = this.description
            this.Tanggal = this.tanggal.replace("T", ' ')
            this.Quantity = 1
            this.TypeConfirmation = this.typeConfirmation
            this.deletButton = this.delete
            this.image_source = this.imageSource
            this.OrderId = this.orderId
        },
    }
</script>

<style scoped>
    .wp-price {
        width: 50%;
    }

    .tambahan-box {
        width: auto;
        margin: auto;
        text-align: center;
    }

    .tambahan-box p {
        font-size: 13px;
    }
</style>