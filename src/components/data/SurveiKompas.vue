<template>
    <div class="row">
        <div class="col-12 mb-3">
            <h2 class="subtitle font-robo my-3">Data Survei Kompas</h2>
            <CardData
                v-for="product in products" :key="product.id"
                v-bind:data="product"
                v-bind:dataImage="product.images"
                v-bind:dataId="product.id"
                v-bind:dataTitle="product.title + product.id"
                v-bind:dataMiniDesc="product.miniDesc"
            />
            <div class="my-3 text-center">
                <a href="#" class="btn btn-line">Lihat Lainnya</a>
            </div>
        </div>
    </div>
</template>

<script>
    import CardData from './CardData.vue'

    export default {
        name: 'Survei',
        components: {
            CardData
        },
        props: [
            'dataProducts',
        ],
        data() {
            return{
                products: this.dataProducts
            }
        }
    }
</script>