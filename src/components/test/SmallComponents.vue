<template>
    <a href="`/buku-detail/`" class="bc-inner">
        <p>{{ key }}</p>
        <img :src="image" alt="" class="bc-img">
        <h3 class="subtitle short-text three">Kajian kebijakan alutsista pertahanan dan keamanan Republik Indonesia </h3>
    </a>
</template>

<script>
    export default {
        name: 'SmallComponent',
        props: ['configs', 'data', 'dataImage'],

        mounted() {
            console.log(this.configs)
            console.log(this.dataImage)
            console.log(this.data)
            console.log('data')
        },

        data() {
            return {
                image: this.dataImage
            }
        }
    }
</script>
