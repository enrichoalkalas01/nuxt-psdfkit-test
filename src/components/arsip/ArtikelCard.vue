<template>
    <div class="content borderless my-3">
        <div class="row">
            <div class="col-sm-4 my-3">
                <a :href="idArtikel">
                    <img :src="image" alt="" class="artikel-image w-100">
                </a>
            </div>
            <div class="col-sm-8 my-3">
                <div class="desc">
                    <h3 class="title"><a :href="idArtikel" class="txt-main">{{ title }}</a></h3>
                    <p class="short-text three">{{ desc }}</p>
                    <span class="date-time"> <i class="fas fa-clock"></i> {{ source }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArtikelCard',
        props: [
            'data',
            'dataId',
            'dataImage',
            'dataTitle',
            'dataDesc',
            'dataSource'
        ],
        data () {
            return {
                idArtikel: '/artikel-detail/' + this.dataId,
                image: this.dataImage,
                title: this.dataTitle,
                desc: this.dataDesc,
                source: this.dataSource,
            }
        }
    }
</script>

<style>
    .artikel-image{
        object-fit: cover;
        max-height: 150px;
    }
</style>