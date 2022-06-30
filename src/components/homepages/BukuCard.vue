<template>
    <div class="bc-inner">
        <img :src="image" alt="" class="bc-img">
        <h3 class="subtitle short-text three" v-html="`${ title }`"></h3>
        <div class="text-start">
            <p class="short-text four">{{ desc }}</p>
            <a v-if="url != null" target="__blank" :href="url" class="more">Selengkapnya</a>
            <a v-else :href="idBuku" class="more">Selengkapnya</a>
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
            'dataUrl',
        ],
        data () {
            return {
                idBuku: `/buku-detail/${ null }`,
                image: null,
                title: null,
                desc: null,
                url: null,
            }
        },

        mounted() {
            this.idBuku = `/buku-detail/${ this.dataId }`,
            this.image = this.dataImage
            this.title = this.dataTitle
            this.desc = this.dataDesc
            this.url = this.dataUrl
        },

        updated() {
            this.idBuku = `/buku-detail/${ this.dataId }`,
            this.image = this.dataImage
            this.title = this.dataTitle
            this.desc = this.dataDesc
            this.url = this.dataUrl
        },
    }
</script>