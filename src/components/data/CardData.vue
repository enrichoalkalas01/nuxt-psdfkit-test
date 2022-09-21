<template>
    <div class="content my-3">
        <div class="row">
            <div class="col-sm-6 my-3">
                <a :href="idData">
                    <img :src="image" :alt="title" class="w-100">
                </a>
            </div>
            <div class="col-sm-6 my-3">
                <div class="desc">
                    <h3 class="subtitle"><a href="data-detail">{{ title }}</a></h3>
                    <p class="short-text three">
                        {{ miniDesc }}    
                    </p>
                    <a :href="idData" class="more">Selengkapnya</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardBuku',
        props: [
            'data',
            'dataImage',
            'dataId',
            'dataTitle',
            'dataMiniDesc',
        ],

        mounted() {

        },

        data(){
            return {
                image: this.dataImage,
                idData: '/data-detail/' + this.dataId,
                title: this.dataTitle,
                miniDesc: this.dataMiniDesc,
            }
        }
    }
</script>