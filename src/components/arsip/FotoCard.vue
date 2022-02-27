<template>
    <div class="col-12 col-sm-4 my-3">
        <a :href="idFoto">
            <img :src="image" class="img-square32 rounding" alt="">
        </a>
    </div>
</template>

<script>
    export default {
        name: 'FotoCard',
        props: [
            'data',
            'dataId',
            'dataImage',
        ],
        data () {
            return {
                idFoto: '/foto-detail/' + this.dataId,
                image: this.dataImage,
            }
        }
    }
</script>