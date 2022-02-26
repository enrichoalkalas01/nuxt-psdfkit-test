<template>
    <div class="bc-inner">
        <img :src="image" alt="" class="bc-img">
        <h3 class="subtitle short-text three">{{ title }}</h3>
        <div class="text-start">
            <p class="short-text four">{{ desc }}</p>
            <a :href="idBuku" class="more">Selengkapnya</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BukuCard',
        props: [
            'data',
            'dataId',
            'dataImage',
            'dataTitle',
            'dataDesc',
        ],
        data () {
            return {
                idBuku: '/foto-detail/' + this.dataId,
                image: this.dataImage,
                title: this.dataTitle,
                desc: this.dataDesc
            }
        }
    }
</script>