<template>
    <a :href="idData" class="bc-inner">
        <img :src="image" :alt="title" class="bc-img">
        <h3 class="subtitle short-text three">
            {{ title }}
        </h3>
    </a>
</template>

<script>
    
    export default {
        name: 'CardBuku',
        props: ['data', 'dataImage', 'dataId', 'dataTitle'],

        mounted() {
            
        },

        data() {
            return {
                image: this.dataImage,
                idData: '/buku-detail/' + this.dataId,
                title: this.dataTitle
            }
        }
    }
</script>
