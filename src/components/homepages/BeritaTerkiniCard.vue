<template>
    <div class="col-12 col-md-6 my-3">
        <div class="content">
            <div class="row">
                <div class="col-sm-6">
                    <div class="desc pt-3">
                        <h3 class="subtitle"><a :href="idBerita">{{ title }}</a></h3>
                        <p>Berita Terupdate hari ini</p>
                        <a :href="idBerita" class="more-btn">Baca Sekarang</a>
                    </div>
                </div>
                <div class="col-sm-6">
                    <a :href="idBerita">
                        <img :src="image" alt="" class="w-100">
                    </a>
                </div>
                <div class="col-12 mt-3">
                    <p class="short-text three">{{ desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BeritaTerkiniCard',
        props: [
            'data',
            'dataId',
            'dataImage',
            'dataTitle',
            'dataDesc',
        ],
        data () {
            return {
                idBerita: '/artikel-detail/' + this.dataId,
                image: this.dataImage,
                title: this.dataTitle,
                desc: this.dataDesc
            }
        }
    }
</script>