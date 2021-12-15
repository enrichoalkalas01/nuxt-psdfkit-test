<template>
    <div>
        <SmallComponent
            v-for="product in products" :key="product._id"
            v-bind:data="product"
            v-bind:dataImage="product.images"
            v-bind:configs="{ id: 201 }"
        />
    </div>
</template>

<script>
    import SmallComponent from './SmallComponents.vue'
    let dataProducts = [
        { _id: 1, images: '/assets/images/buku/image 22.png' },
        { _id: 2, images: '/assets/images/buku/image 22 (1).png' },
        { _id: 3, images: '/assets/images/buku/image 22 (2).png' },
        { _id: 4, images: '/assets/images/buku/image 22 (3).png' },
        { _id: 5, images: '/assets/images/buku/image 24.png' },
        { _id: 6, images: '/assets/images/buku/image 24 (1).png' },
        { _id: 7, images: '/assets/images/buku/image 24 (2).png' },
        { _id: 8, images: '/assets/images/buku/image 24 (3).png' },
        { _id: 9, images: '/assets/images/buku/image 26.png' },
        { _id: 10, images: '/assets/images/buku/image 26 (1).png' },
        { _id: 11, images: '/assets/images/buku/image 26 (2).png' },
        { _id: 12, images: '/assets/images/buku/image 26 (3).png' },
    ]

    export default {
        name: 'TestMain',
        components: { SmallComponent },

        // Component Did Mount
        mounted() {
            console.log(this.configs)
            console.log(this.dataImage)
            console.log(this.data)
            console.log('data')
        },

        // State Management
        data() {
            return {
                products: dataProducts
            }
        },

        // Methods / Actions
        methods: {
            test() {
                console.log('from test methods')
            }
        }
    }
</script>
