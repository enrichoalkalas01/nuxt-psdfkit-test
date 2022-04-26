<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center  mb-3">
                    <h2 class="tag">BERITA TERKINI</h2>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div v-for="berita in beritas.data" :key="berita.id" class="col-12 col-md-6 my-3">
                            <div class="content">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="desc pt-3">
                                            <h3 class="subtitle"><a :href="'/artikel-detail/' + berita.document_id">{{ berita.title }}</a></h3>
                                            <p>{{ berita.text_update }}</p>
                                            <a :href="'/artikel-detail/' + berita.document_id" class="more-btn">Baca Sekarang</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <a :href="'/artikel-detail/' + berita.document_id">
                                            <img :src="berita.image_source" alt="" class="w-100">
                                        </a>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <p class="short-text three">{{ berita.excerpt }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>export default {
        name: 'BeritaTerkini',
        props: [
            'dataSet',
        ],
        data () {
            return {
                beritas: null
            }
        },
        beforeMount() {
            this.beritas = this.dataSet
        },
        mounted() {
            this.beritas = this.dataSet
        },
        updated() {
            this.beritas = this.dataSet
        },
    }
</script>