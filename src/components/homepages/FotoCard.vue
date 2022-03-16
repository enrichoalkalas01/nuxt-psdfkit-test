<template>
    <div class="col-12 col-md-3 my-3 text-center">
        <a :href="idFoto" class=" content borderless info-ctn">
            <img :src="image" alt="" class="ctn-img">
            <h2 class="subtitle name pb-2">
                <div v-html="title"></div>
                <!-- {{ title }} -->
            </h2>
            <span class="date-time">
                <i class="fas fa-clock"></i>
                {{ source }}
            </span>
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
            'dataTitle',
            'dataSource',
        ],
        data () {
            return {
                idFoto: null,
                image: null,
                title: null,
                source: null,
            }
        },
        mounted() {
            this.idFoto = '/foto-detail/' + this.dataId
            this.image = this.dataImage
            this.title = this.dataTitle
            this.source = this.dataSource
        },
        updated() {
            this.idFoto = '/foto-detail/' + this.dataId
            this.image = this.dataImage
            this.title = this.dataTitle
            this.source = this.dataSource
        },
    }
</script>

<style>
    /* .name {
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        line-height: 1.2em; 
        -webkit-line-clamp: 2;
        max-height: 2.4em;
    } */
</style>