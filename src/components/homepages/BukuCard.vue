<template>
    <div class="bc-inner">
        <img :src="image" alt="" class="bc-img">
        <h3 class="subtitle short-text three" v-html="`${ title }`"></h3>
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
                idBuku: `/buku-detail/${ null }`,
                image: null,
                title: null,
                desc: null,
            }
        },

        mounted() {
            this.idBuku = `/buku-detail/${ this.dataId }`,
            this.image = this.dataImage
            this.title = this.dataTitle
            this.desc = this.dataDesc
        },

        updated() {
            this.idBuku = `/buku-detail/${ this.dataId }`,
            this.image = this.dataImage
            this.title = this.dataTitle
            this.desc = this.dataDesc
        },
    }
</script>