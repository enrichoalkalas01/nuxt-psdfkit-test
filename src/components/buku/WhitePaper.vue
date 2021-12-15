<template>
    <div>
        <div class="buku-card">
            <CardBuku
                v-for="product in products" :key="product.id"
                v-bind:data="product"
                v-bind:dataImage="product.images"
                v-bind:dataId="product.id"
                v-bind:dataTitle="product.title + product.id"
            />
        </div>
        <div class=" my-3 text-center">
            <ul class="pagination cst-pagin d-flex justify-content-center">
                <li class="page-item disabled"><a class="page-link" href="#">Sebelumnya</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Selanjutnya</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CardBuku from './CardBuku.vue'
    export default {
        name: 'WhitePaper',
        components: { CardBuku },
        props: ['dataProducts'],

        data() {
            return{
                products: this.dataProducts
            }
        },
    }
</script>