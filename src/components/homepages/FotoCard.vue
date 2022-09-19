<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3 text-center">
        <a :href="idFoto" class=" content borderless info-ctn">
            <img :src="image" :alt="title" class="ctn-img">
            <h2 class="subtitle name foto w-100">
                <div class="truncate" v-html="title"></div>
            </h2>
            <span class="date-time">
                <i class="fas fa-clock"></i>
                {{ created_source }}, {{ this.$store.state.Tools.ChangeDateString(created_date.substring(0, 10)) }}
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
            'dataDate',
        ],
        data () {
            return {
                idFoto: null,
                image: null,
                title: null,
                created_source: null,
                created_date: null,
            }
        },
        beforeMount() {
            this.idFoto = '/foto-detail/' + this.dataId
            this.image = this.dataImage
            this.title = this.dataTitle
            this.created_source = this.dataSource
            this.created_date = this.dataDate
        },
        mounted() {
            this.idFoto = '/foto-detail/' + this.dataId
            this.image = this.dataImage
            this.title = this.dataTitle
            this.created_source = this.dataSource
            this.created_date = this.dataDate
        },
        updated() {
            this.idFoto = '/foto-detail/' + this.dataId
            this.image = this.dataImage
            this.title = this.dataTitle
            this.created_source = this.dataSource
            this.created_date = this.dataDate
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

    .truncate {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .subtitle.name.foto {
        border-bottom: none;
    }
</style>