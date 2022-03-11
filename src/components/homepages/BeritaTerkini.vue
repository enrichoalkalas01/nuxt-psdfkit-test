<template>
    <section class="sec-artikel line-bot py-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-12 text-center  mb-3">
                    <h2 class="tag">BERITA TERKINI</h2>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div v-for="berita in beritas" :key="berita.id" class="col-12 col-md-6 my-3">
                            <div class="content">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="desc pt-3">
                                            <h3 class="subtitle"><a :href="'/artikel-detail/' + berita.id">{{ berita.title }}</a></h3>
                                            <p>Berita Terupdate hari ini</p>
                                            <a :href="'/artikel-detail/' + berita.id" class="more-btn">Baca Sekarang</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <a :href="'/artikel-detail/' + berita.id">
                                            <img :src="berita.images" alt="" class="w-100">
                                        </a>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <p class="short-text three">{{ berita.desc }}</p>
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
            'dataBeritas',
        ],
        data () {
            return {
                beritas: this.dataBeritas
            }
        }
    }
</script>